import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const manufacturerRouter = router({
  create: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input }) => {
      return {
        greeting: `Hello ${input?.name ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
