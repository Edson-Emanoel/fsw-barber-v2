import Image from "next/image";
import Header from "./_components/header";
import Search from "./_components/search";
import { Button } from "./_components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <div className="p-5">
        <div>
          <h1 className="font-semibold text-lg">Olá, Edson Emanoel !</h1>
          <h3 className="font-thin text-sm">Sábado, 02 de Maio</h3>
        </div>

        <div className="mt-3 mb-2">
          <Search />
        </div>

        {/* Busca Rápida */}
        <div className="flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="bg-secondary flex flex-row items-center text-secondary-foreground p-5 m-0">
            <Link href={"/"} className="">
              <Image src="/cabelo.svg" alt="" width={16} height={16} />
              Cabelo
            </Link>
          </Button>

          <Button className="bg-secondary flex flex-row items-center text-secondary-foreground">
            <Link href={"/"} className="">
              <Image src="" alt="" width={16} height={16} />
              Barba
            </Link>
          </Button>

          <Button className="bg-secondary flex flex-row items-center text-secondary-foreground">
            <Link href={"/"} className="">
              <Image src="" alt="" width={16} height={16} />
              Acabamento
            </Link>
          </Button>

          <Button className="bg-secondary flex flex-row items-center text-secondary-foreground">
            <Link href={"/"} className="">
              <Image src="" alt="" width={16} height={16} />
              Sobrancelha
            </Link>
          </Button>

          <Button className="bg-secondary flex flex-row items-center text-secondary-foreground">
            <Link href={"/"} className="">
              <Image src="" alt="" width={16} height={16} />
              Massagem
            </Link>
          </Button>

          <Button className="bg-secondary flex flex-row items-center text-secondary-foreground">
            <Link href={"/"} className="">
              <Image src="" alt="" width={16} height={16} />
              Hidratação
            </Link>
          </Button>
        </div>

        {/* Image */}
        <div className="relative mt-8 h-[170px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner.png"
            fill
            className="rounded-xl object-fill"
          />
        </div>
      </div>
    </>
  );
}
