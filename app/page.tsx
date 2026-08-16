import Menu from "@/components/menu";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className='overflow-hidden h-screen w-screen'>
        <Image
          src={"/assets/bg1.png"}
          className='-z-1 rotate-y-180'
          alt=''
          fill
        />
        <Menu />
        <Image
          src={"/assets/me-hq-1.png"}
          className='absolute bottom-0 right-0 rotate-y-180'
          alt=''
          width={800}
          height={800}
        />
      </main>
    </div>
  );
}
