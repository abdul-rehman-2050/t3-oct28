import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { hash } from "argon2";
import { faker } from "@faker-js/faker";
import { ICredential } from "../../../types/global";

export const zodCredential = z.object({
  id: z.number().optional(),
  username: z.string().nullable().optional(),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 character long" })
    .optional(),
  role: z.string().optional(),
  createdAt: z.date().nullable().optional(),
});

export type CredentialType = z.infer<typeof zodCredential>;

export const CredentialRouter = router({
  findById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.id ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.credential.findMany();
  }),
  removeById: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const record = await ctx.prisma.credential.delete({
        where: {
          id: input.id,
        },
      });
      return {
        status: "success",
        data: {
          record,
        },
      };
    }),
  updateById: publicProcedure
    .input(
      z.object({
        id: z.number(),
        username: z.string(),
        email: z.string().email(),
        password: z.string(),
        role: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const hashedPassword = await hash(input.password);

      const updatedCred = await ctx.prisma.credential.update({
        where: {
          id: input.id,
        },
        data: {
          id: input.id,
          username: input.username,
          email: input.email,
          password: hashedPassword,
          role: input.role,
        },
      });

      return {
        status: "success",
        data: {
          updatedCred,
        },
      };
    }),
  createFake: publicProcedure.mutation(async ({ ctx }) => {
    const hashedPassword = await hash("password");
    const credentials = {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role: "User".toUpperCase(),
    };

    const record = await ctx.prisma.credential.create({ data: credentials });
    console.log(record);

    return {
      status: "success",
      data: {
        record,
      },
    };
  }),
  createNew: publicProcedure
    .input(
      z
        .object({
          username: z.string(),
          email: z.string(),
          password: z.string(),
          role: z.string().optional(),
        })
        .required()
    )
    .mutation(async ({ ctx, input }) => {
      const { username, email, password, role } = input;
      const exists = await ctx.prisma.credential.findFirst({
        where: { email },
      });
      if (exists) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User already exists.",
        });
      }
      const hashedPassword = await hash(password);

      const credentials = {
        username: username,
        email: email,
        password: hashedPassword,
        role: role.toUpperCase(),
      };

      const result = await ctx.prisma.credential.create({ data: credentials });
      return {
        status: 201,
        message: "Account created successfully",
        result: result.email,
      };
    }),
});
