import Image from "next/image"
import { useEffect } from "react"
import { getCookie } from 'cookies-next';

async function girar(tamanho: number) {
    fetch("/api/dado", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "player": getCookie("playerNome"),
            "tipo": tamanho
        })
    })
}

export default function Dice() {
    const dado = require("../../../public/dado.webp")

    useEffect(() => {
        const ele = document.getElementById("dadoativ");
        const eled = document.getElementById("dados");
        const edado = document.getElementById("dado");
        setInterval(() => {
            if (ele?.matches(":hover")) {
                eled!.style.display = 'block';
                edado!.style.transform = 'rotate(1deg)';
                console.log("hover")
            }
            else {
                eled!.style.display = 'none';
                console.log("nao hover")
                edado!.style.transform = 'rotate(0deg)';
            }
        }, 200);
    })

    return (
        <div id="dadoativ" className="fixed bottom-5 right-5">
            <div id="dados" className="flex flex-col text-center">
                <input className="text-4xl mb-4 block w-full hover:font-bold active:text-gray-500" type="button" value="2" onClick={() => {girar(2)}} />
                <input className="text-4xl mb-4 block w-full hover:font-bold active:text-gray-500" type="button" value="4" onClick={() => {girar(4)}} />
                <input className="text-4xl mb-4 block w-full hover:font-bold active:text-gray-500" type="button" value="6" onClick={() => {girar(6)}} />
                <input className="text-4xl mb-4 block w-full hover:font-bold active:text-gray-500" type="button" value="8" onClick={() => {girar(8)}} />
                <input className="text-4xl mb-4 block w-full hover:font-bold active:text-gray-500" type="button" value="10" onClick={() => {girar(10)}} />
                <input className="text-4xl mb-4 block w-full hover:font-bold active:text-gray-500" type="button" value="12" onClick={() => {girar(12)}} />
                <input className="text-4xl mb-4 block w-full hover:font-bold active:text-gray-500" type="button" value="20" onClick={() => {girar(20)}} />
                <input className="text-4xl mb-4 block w-full hover:font-bold active:text-gray-500" type="button" value="100" onClick={() => {girar(100)}} />
            </div>
            <Image id="dado" src={dado} alt="dado" className="w-[10vw]" />
        </div>
    )
}