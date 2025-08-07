'use client';

import { Play, Smile, FileText, Image as ImageIcon } from 'lucide-react';
import ModoItem from './components/ModoItem';
import StickerBackground from './components/StickerBackground';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Sticker atrás do conteúdo */}
      <StickerBackground />

      <div className="relative z-10 px-40 sm:px-120 py-1">
        {/* Título */}
        <div className="text-center mt-6 sm:mt-10">
          <h1 className="font-extrabold font-poppins text-2xl sm:text-4xl md:text-5xl text-gray-800">
            <div className="flex items-center justify-center -mt-4 sm:-mt-10">
              <img
                src="/logo_dreams.svg"
                alt="Logo Wordle of Dreams"
                className="w-32 h-32 sm:w-52 sm:h-52"
              />
            </div>
            <span className="block text-orange-500 font-extrabold font-pacifico text-lg sm:text-2xl mt-2">
              Guessing Game
            </span>
          </h1>
          <p className="mt-3 text-gray-500 text-sm sm:text-base md:text-lg max-w-md mx-auto font-raleway">
            Escolha seu modo de jogo favorito e teste seus conhecimentos sobre os personagens mais queridos da DreamWorks!
          </p>
        </div>

        {/* Modos de jogo */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center w-full max-w-md mx-auto gap-4">
          <ModoItem
            title="Clássico"
            description="O jogo tradicional de adivinhação de personagens DreamWorks com dicas visuais"
            icon={<Play className="text-green-500 w-6 h-6 sm:w-8 sm:h-8" />}
            href="/classicMode"
          />
          <ModoItem
            title="Emojis"
            description="Descubra o personagem através de pistas divertidas com emojis"
            icon={<Smile className="text-orange-500 w-6 h-6 sm:w-8 sm:h-8" />}
            href="/emojiMode"
          />
          <ModoItem
            title="Descrição"
            description="Use descrições detalhadas para encontrar o personagem misterioso"
            icon={<FileText className="text-yellow-500 w-6 h-6 sm:w-8 sm:h-8" />}
            href="/descriptionMode"
          />
          <ModoItem
            title="Imagem"
            description="Adivinhe o personagem com base em sua imagem desfocada"
            icon={<ImageIcon className="text-blue-500 w-6 h-6 sm:w-8 sm:h-8" />}
            href="/game?modo=imagem"
          />
        </div>
      </div>
    </div>
  );
}
