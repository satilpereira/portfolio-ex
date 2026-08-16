import Menu from "@/components/menu";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className='overflow-hidden h-screen w-screen '>
        <Image
          src={"/assets/bg1.png"}
          className='-z-1 rotate-y-180'
          alt=''
          fill
        />
        <Menu />
        <figure className='absolute -bottom-4 right-0 rotate-y-180'>
          <Image
            src={"/assets/me-hq-1.png"}
            className='crt-content'
            alt=''
            width={800}
            height={800}
            loading='eager'
          />
        </figure>
      </main>
    </div>
  );
}
