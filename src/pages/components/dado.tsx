import { useEffect, useState } from "react";

export default function Dado() {

    const [dado, setDado] = useState<{
        player: string;
        tipo: number;
        dado: number;
    } | null>(null)

    useEffect(() => {
        setInterval(async () => {
            var testedado = await fetch("/api/dado", { method: "GET" })
            var testedado2 = await testedado.json();
            if (testedado2 !== dado) {
                setDado(testedado2);
            }
            console.log(dado);
        }, 1000)
    }, [])
    if (dado?.tipo !== 0 && dado !== null) {
        return (


            <div className="grid w-full text-center justify-center items-center">
                <label className="block my-5">{dado?.player} girou o d{dado?.tipo}:</label>
                <div className="w-[6vw] aspect-square bg-white text-black text-7xl justify-self-center border-black rounded-lg border-2">{dado?.dado}</div>
            </div>
        )
    }
    else return <></>;
}