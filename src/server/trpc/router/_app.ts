// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { fakerRouter } from "./faker";
import { CredentialRouter } from "./credential";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  faker: fakerRouter,
  credential: CredentialRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
