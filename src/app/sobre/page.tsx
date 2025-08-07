export const metadata = {
  title: 'Sobre • Wordle of Dreams',
};

export default function SobrePage() {
  return (
    <div className=" xl:px-12 py-5 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">

        {/* Cabeçalho */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          Sobre o Wordle of Dreams
        </h1>

        {/* Parágrafos */}
        <p className="mb-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
          Bem-vindo ao <span className="font-semibold">Wordle of Dreams</span>, a experiência definitiva para fãs da DreamWorks Animation! Aqui você mergulha em um universo mágico repleto de personagens inesquecíveis de filmes como <i>Shrek</i>, <i>Kung Fu Panda</i>, <i>Como Treinar o Seu Dragão</i> e muitos outros.
        </p>
        <p className="mb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
          Nossa plataforma oferece diversos modos de jogo para desafiar seu conhecimento e criatividade:
        </p>

        {/* Lista de modos */}
        <ul className="list-disc list-inside mb-6 text-sm sm:text-base text-gray-700 space-y-2">
          <li><strong>Clássico:</strong> receba dicas visuais e adivinhe o personagem misterioso.</li>
          <li><strong>Emojis:</strong> decifre sequências divertidas de emojis.</li>
          <li><strong>Descrição:</strong> utilize descrições detalhadas e pistas literais.</li>
          <li><strong>Imagem:</strong> identifique o personagem a partir de uma imagem desfocada.</li>
        </ul>

        {/* Parágrafos finais */}
        <p className="mb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
          E tem mais: todos os dias, um novo personagem é sorteado automaticamente para você jogar! Assim, sempre há um desafio diário diferente para testar seu conhecimento e acompanhar o ranking.
        </p>
        <p className="mb-6 text-sm sm:text-base text-gray-700 leading-relaxed">
          Nosso objetivo é celebrar a criatividade, a emoção e o humor dos filmes da DreamWorks, transformando seu amor por esses personagens em diversão garantida. Convide amigos para competir, compartilhe seus resultados e descubra quem é o maior mestre dos personagens!
        </p>
        <p className="text-center text-base sm:text-lg text-gray-800 font-semibold">
          Pronto para começar? Selecione um modo no menu acima e boa diversão!
        </p>

      </div>
    </div>
  );
}
