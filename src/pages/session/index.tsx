"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { SessaoDocumentDataPlayersItem, Simplify, PlayerDocumentData } from "../../../prismicio-types";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { PrismicNextImage } from "@prismicio/next";
import { ImageField } from "@prismicio/client";
import Dado from "../components/dado";
import Dice from "../components/dice";

const inter = Inter({ subsets: ["latin"] });
type Params = { uid: string };

async function recarregar() {
    const client = createClient();

    const page = await client.getSingle("sessao");

    return page.data.mapa as string
}

export default function Sessao({ dados }: InferGetStaticPropsType<typeof getStaticProps>) {

    
    const [mapa, setMapa] = useState(dados?.page?.data?.mapa as string);
    const [playerdata, setPlayerData] = useState([{nome: "", img: null}])
    




    useEffect(() => {
        async function getPlayers() {
            const players = await fetch("/api/getPlayers", {method: "GET"});
            const players2 = await players.json();
            setPlayerData(players2);
        }
        getPlayers();
        console.log(playerdata)
        

        /*
        setInterval(async () => {
            var funcmapa = await recarregar()
            if (funcmapa !== mapa) {
                setMapa(funcmapa);
            }
        }, 5000)
        */

        
    },[])







    return (
        <>
            <Head>
                <link href="https://db.onlinewebfonts.com/c/2da952d097bffd198ec0f0aa3fdd6804?family=JejuHallasan" rel="stylesheet"></link>
            </Head>

            <div className={`
                w-full aspect-video 
                bg-[url('/Mesabg.png')]
                bg-contain bg-top bg-no-repeat bg-fixed
                relative
            `}>
                <iframe id="frame" className="absolute left-[30%] w-[20%] top-[15%] aspect-video rounded-xl opacity-75" src={mapa}></iframe>
                <Dado/>
                <Dice/>
                <div className="absolute top-[3%] text-center left-[28vw]">
                    <PrismicNextImage className=" w-[7vw] scale-x-[-1]" field={playerdata[1]?.img} />
                    <label>{playerdata[1]?.nome}</label>
                </div>
                <div className="absolute top-[3%] text-center right-[28vw]">
                    <PrismicNextImage className=" w-[7vw]" field={playerdata[2]?.img} />
                    <label>{playerdata[2]?.nome}</label>
                </div>
                <div className="absolute top-[25%] text-center left-[15vw]">
                    <PrismicNextImage className=" w-[7vw] scale-x-[-1]" field={playerdata[3]?.img} />
                    <label>{playerdata[3]?.nome}</label>
                </div>
                <div className="absolute top-[25%] text-center right-[15vw]">
                    <PrismicNextImage className=" w-[7vw]" field={playerdata[4]?.img} />
                    <label>{playerdata[4]?.nome}</label>
                </div>
                <div className="absolute top-[50%] text-center left-[15vw]">
                    <PrismicNextImage className=" w-[7vw] scale-x-[-1]" field={playerdata[5]?.img} />
                    <label>{playerdata[5]?.nome}</label>
                </div>
                <div className="absolute top-[50%] text-center right-[15vw]">
                    <PrismicNextImage className=" w-[7vw]" field={playerdata[6]?.img} />
                    <label>{playerdata[6]?.nome}</label>
                </div>
                <div className="absolute top-[62%] text-center left-[36vw]">
                    <PrismicNextImage className=" w-[7vw] scale-x-[-1]" field={playerdata[7]?.img} />
                    <label>{playerdata[7]?.nome}</label>
                </div>
                <div className="absolute top-[62%] text-center right-[36vw]">
                    <PrismicNextImage className=" w-[7vw]" field={playerdata[8]?.img} />
                    <label>{playerdata[8]?.nome}</label>
                </div>
            </div>

        </>
    );
}

export async function getStaticProps({
    params,
    previewData,
}: GetStaticPropsContext<Params>) {
    // The `previewData` parameter allows your app to preview
    // drafts from the Page Builder.
    const client = createClient({ previewData });

    const page = await client.getSingle("sessao");
    const players = await client.getAllByType("player");

    const dados = { page: page, players: players }



    return {
        props: { dados },
    };
}
