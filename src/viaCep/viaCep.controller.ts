import { Request } from "express";
import { get } from "../utils/viaCep";

export class ViaCepController {
    async get({ body }: Request): Promise<any> {
        return await get(body);
    }
}