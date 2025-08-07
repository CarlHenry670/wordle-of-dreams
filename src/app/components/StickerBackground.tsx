import Image from 'next/image'

const stickers = [
  // Primeira fila (top)
  {
    src: "/gato_sticker.png",
    alt: "Gato de Botas",
    className: "absolute top-[15%] left-[20%] w-28 opacity-40 animate-float-bigger pointer-events-none",
  },
  {
    src: "/tigresa_sticker.png",
    alt: "Tigresa",
    className: "absolute top-[20%] right-[10%] w-28 opacity-40 animate-float-bigger pointer-events-none",
  },

  // Segunda fila (meio)
  {
    src: "/shrek_sticker.png",
    alt: "Shrek",
    className: "absolute bottom-[5%] right-[0%] w-36 opacity-40 animate-float-bigger pointer-events-none",
  },
  {
    src: "/po_sticker.png",
    alt: "Po",
    className: "absolute top-[40%] right-[20%] w-36 opacity-40 animate-float-bigger pointer-events-none",
  },
  {
    src: "/recruta_sticker.png",
    alt: "Recruta",
    className: "absolute top-[40%] left-[25%] w-24 opacity-40 animate-float-bigger pointer-events-none",
  },

  // Terceira fila (bottom)
  {
    src: "/burro_sticker.png",
    alt: "Burro",
    className: "absolute bottom-[-18%] right-[8%] w-36 opacity-40 animate-float-bigger pointer-events-none",
  },
  {
    src: "/JekFrost.jpg",
    alt: "JekFrost",
    className: "absolute bottom-[-20%] left-[5%] w-28 opacity-40 animate-float-bigger pointer-events-none",
  },
  {
    src: "/alex_sticker.png",
    alt: "Alex",
    className: "absolute bottom-[10%] right-[20%] w-34 opacity-40 animate-float-bigger pointer-events-none",
  },
  {
    src: "/bee_sticker.png",
    alt: "Abelha",
    className: "absolute bottom-[10%] left-[22%] w-34 opacity-40 animate-float-bigger pointer-events-none",
  },
  {
    src: "/julien_sticker.png",
    alt: "Rei Julien",
    className: "absolute bottom-[30%] right-[5%] w-30 opacity-40 animate-float-bigger pointer-events-none",
  },

  {
    src: "/gloria_sticker.png",
    alt: "gloria",
    className: "absolute bottom-[-60%] left-[10%] w-34 opacity-40 animate-float-bigger pointer-events-none",
  },

  {
    src: "/baixados.jpg",
    alt: "Megamente",
     className: "absolute top-[20%] left-[0%] w-30 opacity-40 animate-float-bigger pointer-events-none",
  },

  {
    src: "/turbo.jpg",
    alt: "Turbo",
    className: "absolute bottom-[15%] left-[5%] w-34 opacity-40 animate-float-bigger pointer-events-none",
  },

  {
    src: "/coelho.jpg",
    alt: "coelho",
    className: "absolute top-[40%] left-[5%] w-26 opacity-40 animate-float-bigger pointer-events-none",
   
  },

  {
    src: "/banguela.jpg",
    alt: "Banguela",
    className: "absolute top-[20%] left-[60%] w-30 opacity-40 animate-float-bigger pointer-events-none",
  },

  {
    src: "/irmaosvk.jpg",
    alt: "Irmãos V.K.",
    className: "absolute bottom-[-55%] left-[85%] w-32 opacity-40 animate-float-bigger pointer-events-none",
  },

];

export default function StickerBackground() {
  return (
    <>
      {stickers.map((sticker, idx) => (
        <Image
          key={idx}
          src={sticker.src}
          alt={sticker.alt}
          className={sticker.className}
          width={144}
          height={144}
        />
      ))}
    </>
  );
}