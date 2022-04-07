import { Router } from "express";
import { ViaCepController } from "./viaCep.controller";

const viaCepController = new ViaCepController();
const viaCepRouter: Router = Router();

viaCepRouter.get('/', async (request, response) => {
    const { data } = await viaCepController.get(request);
    if (!data) {
        response.status(404).send("Not Found");
    }

    return response.send(data);
});

export { viaCepRouter };