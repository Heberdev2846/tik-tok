import Image from "next/image";
import Header from "./Header";
import Navbarizq from "./Navbarizq";

export default function Home() {
  return (
    <div className="flex">
      <Header />
      <Navbarizq />
      <div className="bg-zinc-900 w-4/5">
        <div className="mt-20 justify-center items-center flex">
          <div className="">
            <a className="flex items-start" href="">
              <img className="w-12 rounded-full" src="/img/elforrex.jpg"></img>
              <div className="">
                <span className="" class="hover:underline">
                  El forrex
                </span>
                <span className="text-xs ml-2">Elforrex</span>
                <p>Hola como estan?</p>
                <p className="text-xs">Sonido original - clipsreelss</p>
              </div>
              <button className="ml-52 text-red-600 mt-2 border border-red-600 p-2 px-4">
                Seguir
              </button>
            </a>
            <div className="h-96 w-full border">
              <p>Publicación de TikTok</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
