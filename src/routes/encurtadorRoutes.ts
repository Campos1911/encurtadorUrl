import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { encurtadorController } from "../controllers/encurtadorController";
import { encurtadorModel } from "../models/encurtadorModel";

export default async function encurtadorRoutes(app: FastifyInstance) {
  app.post(
    "/encurtar",
    async (
      req: FastifyRequest<{ Body: encurtadorModel }>,
      reply: FastifyReply
    ) => {
      return new encurtadorController().encurtarURL(req, reply);
    }
  );
  app.get(
    "/:urlEncurtada",
    async (
      req: FastifyRequest<{ Params: { urlEncurtada: string } }>,
      reply: FastifyReply
    ) => {
      return new encurtadorController().redirect(req, reply);
    }
  );
}
