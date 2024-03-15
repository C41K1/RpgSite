// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  player: string;
  tipo: number;
  dado: number
};

export var atual = {
  player: "\0",
  tipo: 0,
  dado: 0
};

export function setAtual(player: string, tipo: number, dado: number) {
  atual.player = player;
  atual.tipo = tipo;
  atual.dado = dado;
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if(req.method === "POST"){
    setAtual(
      req.body.player,
      req.body.tipo,
      Math.floor(Math.random()*(req.body.tipo))+1
    )
    res.status(200).json(atual);
  }
  else if(req.method === "GET"){ res.status(200).json(atual) }
  else res.status(405)
}
