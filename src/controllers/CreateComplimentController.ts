import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    
    const { tag_id, user_receiver, message } = request.body;

    const { user_id } = request;

    const createComplimentServices = new CreateComplimentService();

    const complement = await createComplimentServices.execute({
      tag_id,
      user_sender: user_id,
      user_receiver,
      message,
    });

    response.json(complement)
  }
}

export { CreateComplimentController };
