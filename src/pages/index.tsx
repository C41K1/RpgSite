"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";
import { setCookie } from 'cookies-next';
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";


const inter = Inter({ subsets: ["latin"] });

async function login(dados: {
  nome: string;
  senha: string;
}, router: AppRouterInstance) {
  const resp = await fetch("/api/login", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "nome": dados.nome,
      "senha": dados.senha
    })
  })
  if(resp.status === 200){
    setCookie("playerNome", dados.nome);
    router.push("/session");
  }
  else if(resp.status === 401){
    alert("Nome ou Senha Incorreta!");
  }
  else {
    alert("Ocorreu um erro ao tentar processar seu login!");
  }
}

export default function Home() {

  const router = useRouter();

  const [dados, setDados] = useState(
    {
      "nome": "",
      "senha": ""
    }
  )

  return (
    <>
      <Head>
        <link href="https://db.onlinewebfonts.com/c/2da952d097bffd198ec0f0aa3fdd6804?family=JejuHallasan" rel="stylesheet"></link>
      </Head>
      <div className={`
        w-full h-[100vh] 
        bg-[url('/LoginBackground.jpg')]
        bg-cover bg-no-repeat bg-center bg-fixed
        grid items-center justify-center
      `}>
        <div className="bg-[#c3a655e6] aspect-square border-2 border-black rounded-3xl shadow-2xl TabletPortrait:w-[90vw] TabletLandscape:h-[50vh] flex flex-col items-center text-center">
          <label className={`text-3xl text-black [font-family: "JejuHallasan"] my-8`}>LOGIN</label>
          <input className="text-center bg-[#D3D0CC] border rounded-xl h-10 border-black text-black my-6" type="text" placeholder="Nome" onChange={(e) => { setDados({ nome: e.target.value, senha: dados.senha }) }} />
          <input className="text-center bg-[#D3D0CC] border rounded-xl h-10 border-black text-black mb-6" type="text" placeholder="Senha" onChange={(e) => { setDados({ nome: dados.nome, senha: e.target.value }) }} />
          <input className="text-center bg-[#D3D0CC] border rounded-xl w-[50%] border-black text-black" type="button" value="Entrar" onClick={() => { login(dados, router) }} />
        </div>
      </div>
    </>
  );
}