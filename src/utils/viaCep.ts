import axios from "axios";
import { ViaCepDto } from "src/viaCep/dto/viaCep.dto";

export async function get({ address, isPostCodeSearch = false }: ViaCepDto) {
    try {
        const { postCode, state, city, street } = address;
        let url = `https://viacep.com.br/ws/${postCode}/json/`;
        if (isPostCodeSearch) {
            //Can return more than one result
            url = `https://viacep.com.br/ws/${state}/${city}/${street}/json/`; 
        }

        return await axios.get(url);
    } catch (error) {
        console.log(error);
    }
}
