// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const modelLogin = require("./models/login");

type Data = {
    response: string
  };

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    if (req.method === "POST") {
        const dados = await modelLogin.findOne({where:{Nome: req.body.nome, Senha: req.body.senha}})
        console.log(dados);
        if(dados !== null){
            res.status(200).json({response:"Logado com sucesso!"});
        }
        else res.status(401).json({response:"Credenciais Incorretas"});
    }
    else res.status(405).json({response:"Erro"});
}