import { prisma } from "../config/db";
import { encurtadorModel } from "../models/encurtadorModel";
import { gerarId } from "../utils/geraId";
import { DateTime } from "luxon";

export class encurtadorService {
  async encurtarURL(urlData: encurtadorModel) {
    const idAleat = gerarId();
    const idExists = await prisma.url.findUnique({
      where: { urlEncurtada: idAleat },
    });
    const expiresAt = DateTime.now()
      .plus({ hours: urlData.expiresIn })
      .toJSDate();
    if (idExists) {
      const newId = gerarId();
      return await prisma.url.create({
        data: {
          urlEncurtada: newId,
          expirationData: expiresAt,
          urlAntiga: urlData.urlAntiga,
        },
      });
    }
    return await prisma.url.create({
      data: {
        urlEncurtada: idAleat,
        expirationData: expiresAt,
        urlAntiga: urlData.urlAntiga,
      },
    });
  }
  async redirect(urlEncurtada: string) {
    return await prisma.url.findUnique({ where: { urlEncurtada } });
  }
}
