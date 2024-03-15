import { createClient } from "@/prismicio";
import { ImageFieldImage } from "@prismicio/client";
import { NextApiRequest, NextApiResponse } from "next";

type Data = [{
    nome: string;
    img: ImageFieldImage | null
}];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    var playerdata: Data = [{ nome: "", img: null }]
    const client = createClient();
    const players = await client.getAllByType("player");
    const page = await client.getSingle("sessao");

    if (req.method === "GET") {
        page.data.players.map((ps, i) => {
            players.map((p, j) => {
                if (ps?.player?.uid === p?.uid) {
                    playerdata.push({ nome: p?.data?.nome as string, img: p?.data.img });
                }
            })
        })
        res.status(200).json(playerdata)
    }
    else res.status(405)
}