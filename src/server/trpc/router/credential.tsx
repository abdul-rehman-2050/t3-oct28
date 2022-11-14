import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { hash } from "argon2";
import { faker } from "@faker-js/faker";

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
  createFake: publicProcedure.mutation(async ({ ctx }) => {
    const hashedPassword = await hash("password");
    const credentials = {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role: "Admin".toUpperCase(),
    };

    const record = await ctx.prisma.credential.create({ data: credentials });
    console.log(record)

    return {
      status: 'success',
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
        })
        .required()
    )
    .mutation(async ({ ctx, input }) => {
      const { username, email, password } = input;
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
      };

      const result = await ctx.prisma.credential.create({ data: credentials });
      return {
        status: 201,
        message: "Account created successfully",
        result: result.email,
      };
    }),
});
