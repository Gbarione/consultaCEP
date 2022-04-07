## consultaCEP

Aplicação desenvolvida em NodeJs/ExpressJs voltada para busca de CEP's

## Instalação

* Clone o reposítório
* Instale consultaCEP com npm
```bash
  npm install consultacep
  cd consultacep
  npm run start:dev
```
    
## Documentação

#### Retorna um ou vários endereços, baseado nos parâmetros

```http
  GET /viaCep
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `address` | `Object` |  |
| `isPostCodeSearch` | `boolean` | `Opcional` |

## Estrutura Payload

```json
{
	"address": {
		"postCode": "0000000",
		"state": "SP",
		"city": "São Paulo",
		"street": "Avenida Paulista"
	},
	"isPostCodeSearch": true
}
```

