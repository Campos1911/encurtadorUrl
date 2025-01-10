import { FastifyReply, FastifyRequest } from "fastify";
import { encurtadorService } from "../services/encurtadorService";
import { encurtadorModel } from "../models/encurtadorModel";

export class encurtadorController {
  async encurtarURL(
    req: FastifyRequest<{ Body: encurtadorModel }>,
    reply: FastifyReply
  ) {
    const encurtador = new encurtadorService();
    try {
      const url = await encurtador.encurtarURL(req.body);
      return reply
        .status(200)
        .send({ url: `http://localhost:3333/${url.urlEncurtada}` });
    } catch (error: any) {
      return reply.status(500).send(error.message);
    }
  }
  async redirect(
    req: FastifyRequest<{ Params: { urlEncurtada: string } }>,
    reply: FastifyReply
  ) {
    const verifyUrl = new encurtadorService();
    const { urlEncurtada } = req.params;
    try {
      const url = await verifyUrl.redirect(urlEncurtada);
      if (url) {
        if (new Date() > url.expirationData) {
          return reply.status(401).send({ message: "Url expirada!" });
        }
        return reply.redirect(url.urlAntiga);
      }
    } catch (error: any) {
      return reply.status(500).send(error.message);
    }
  }
}
