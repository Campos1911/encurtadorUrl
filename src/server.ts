import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import encurtadorRoutes from "./routes/encurtadorRoutes";

const app = fastify({ logger: true });

app.register(fastifyCors, { origin: "*" });
app.register(encurtadorRoutes);

try {
  app.listen({ port: 3333, host: "0.0.0.0" });
  console.log("Server is running!");
} catch (error) {
  console.log(error);
  process.exit(1);
}
