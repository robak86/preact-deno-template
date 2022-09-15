import { Application } from "oak";

const app = new Application();

await app.listen({ port: 8642 });
