import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const fakerRouter = router({
  faker: publicProcedure
    .input(z.object({ count:z.number().nullable() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.count ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
