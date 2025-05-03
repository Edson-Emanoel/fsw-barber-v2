import Link from "next/link";
import Image from "next/image";
import Header from "./_components/header";
import Search from "./_components/search";
import { Button } from "./_components/ui/button";
import BookingItem from "./_components/bookingItem";
import BarberShopItem from "./_components/barberShopItem";

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
          <Button className="bg-secondary text-secondary-foreground p-2.5 m-0">
            <Link href={"/"} className="w-[100%] px-2 gap-2 flex flex-row items-center justify-center">
              <Image src="/cabelo.svg" alt="" width={16} height={16} />
              <span>Cabelo</span> 
            </Link>
          </Button>

          <Button className="bg-secondary text-secondary-foreground p-2.5 m-0">
            <Link href={"/"} className="w-[100%] px-2 gap-2 flex flex-row items-center justify-center">
              <Image src="/barba.svg" alt="" width={16} height={16} />
              <span>Barba</span> 
            </Link>
          </Button>
          
          <Button className="bg-secondary text-secondary-foreground p-2.5 m-0">
            <Link href={"/"} className="w-[100%] px-2 gap-2 flex flex-row items-center justify-center">
              <Image src="/acabamento.svg" alt="" width={16} height={16} />
              <span>Acabamento</span> 
            </Link>
          </Button>
          
          <Button className="bg-secondary text-secondary-foreground p-2.5 m-0">
            <Link href={"/"} className="w-[100%] px-2 gap-2 flex flex-row items-center justify-center">
              <Image src="/sobrancelha.svg" alt="" width={16} height={16} />
              <span>Sobrancelha</span> 
            </Link>
          </Button>
          
          <Button className="bg-secondary text-secondary-foreground p-2.5 m-0">
            <Link href={"/"} className="w-[100%] px-2 gap-2 flex flex-row items-center justify-center">
              <Image src="/massagem.svg" alt="" width={16} height={16} />
              <span>Massagem</span> 
            </Link>
          </Button>
          
          <Button className="bg-secondary text-secondary-foreground p-2.5 m-0">
            <Link href={"/"} className="w-[100%] px-2 gap-2 flex flex-row items-center justify-center">
              <Image src="/hidratacao.svg" alt="" width={16} height={16} />
              <span>Hidratação</span> 
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

        <h2 className="mt-6 mb-3 ml-1 text-xs font-bold uppercase text-gray-400">
          Meus Agendamentos
        </h2>

        <BookingItem />

        <h2 className="mt-6 mb-3 ml-1 text-xs font-bold uppercase text-gray-400">
          Barbearias Recomendadas
        </h2>

        <BarberShopItem />
      </div>
    </>
  );
}
