import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const createComplimentServices = new CreateComplimentService();

    const { tag_id, user_sender, user_receiver, message } = request.body;

    const complement = await createComplimentServices.execute({ tag_id, user_sender, user_receiver, message })

    response.json(complement)
  }
}

export { CreateComplimentController };
