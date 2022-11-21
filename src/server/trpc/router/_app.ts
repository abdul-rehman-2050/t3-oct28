// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { fakerRouter } from "./faker";
import { CredentialRouter } from "./credential";
import { manufacturerRouter } from "./manufacturer";
export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  faker: fakerRouter,
  credential: CredentialRouter,
  manufacturer: manufacturerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
