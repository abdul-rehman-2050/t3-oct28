import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const manufacturerRouter = router({
  create: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ctx, input }) => {
        const newManufacturere = {
            name: input.name

        }
        
        const record = await ctx.prisma.manufacturer.create({ data: newManufacturere });
        console.log(record);
    
        return {
          status: "success",
          data: {
            record,
          },
        };
    }),
    removeById: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const record = await ctx.prisma.manufacturer.delete({
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
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.manufacturer.findMany();
  }),
  getIDByName: publicProcedure
  .input(z.object({name:z.string()}))
  .query(({ctx,input})=>{
    return ctx.prisma.manufacturer.findFirst()
  })
});
