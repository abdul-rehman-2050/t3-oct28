import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import {getRandomInt} from "../../../utils/randomizer"
import { faker } from "@faker-js/faker";


export interface IFakeUser{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    image?: string;
    
    
}

function randomImagePath(){
    const menOrWomen = getRandomInt(0,2);
    const imgNumb = getRandomInt(0,99);
    let mOrW = 'men';
    if(menOrWomen == 1)mOrW = 'women';
    return `/images/${mOrW}/${imgNumb}.jpg`
    

}

export const fakerRouter = router({
  getFakeUsers: publicProcedure
    .input(z.object({ count:z.number().nullish() }).nullish())
    .query(({ input }) => {
        const usersList = []
       
        if(input?.count){
            for(let i=0;i<input.count;i++){
                const val = randomImagePath()
                
                const newUser = {
                    id: faker.datatype.uuid(),
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    image:val,                    
                }
                usersList.push(newUser)
            }
        }
        
      return {

        usersList: usersList
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
