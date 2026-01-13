import React, { useState } from 'react';

export default function TesteTemperamentosV2() {
  const [fase, setFase] = useState('intro');
  const [respostasParte1, setRespostasParte1] = useState([]);
  const [respostasParte2, setRespostasParte2] = useState([]);
  const [perguntaAtual, setPerguntaAtual] = useState(0);

  const perguntasParte1 = [
    { situacao: "Você entra numa sala cheia de pessoas que não conhece...", opcaoA: "Já vou olhando quem parece interessante, procuro um grupo pra me enturmar", opcaoB: "Observo o ambiente primeiro, preciso entender o clima antes de me posicionar" },
    { situacao: "Alguém te critica de forma inesperada...", opcaoA: "Minha resposta vem na hora, às vezes antes de pensar", opcaoB: "Preciso processar o que aconteceu antes de reagir" },
    { situacao: "Numa reunião, surge um assunto polêmico...", opcaoA: "Minha opinião já está na ponta da língua, difícil segurar", opcaoB: "Prefiro ouvir os outros antes de me expor" },
    { situacao: "Você tem uma ideia nova empolgante...", opcaoA: "Preciso contar pra alguém imediatamente, não aguento guardar", opcaoB: "Deixo a ideia amadurecer internamente antes de compartilhar" },
    { situacao: "Num grupo precisando tomar uma decisão urgente...", opcaoA: "Tomo a frente naturalmente, alguém precisa decidir", opcaoB: "Espero ver o que os outros pensam primeiro" },
    { situacao: "Sua rotina é previsível há meses...", opcaoA: "Isso me sufoca, preciso de novidade e movimento", opcaoB: "Isso me traz segurança e estabilidade" },
    { situacao: "Quando você fala, as pessoas costumam dizer que...", opcaoA: "Falo alto, com energia, às vezes interrompo sem perceber", opcaoB: "Falo de forma mais ponderada, meço as palavras" },
    { situacao: "Depois de um dia intenso de trabalho...", opcaoA: "Ainda tenho energia pra sair, encontrar pessoas, fazer algo", opcaoB: "Preciso de silêncio e tempo sozinho pra recarregar" },
    { situacao: "Quando algo te incomoda numa relação...", opcaoA: "Falo na hora, não consigo engolir e fingir que tá tudo bem", opcaoB: "Processo internamente antes de decidir se vale falar" },
    { situacao: "Se sua vida fosse um filme, seria mais...", opcaoA: "Ação e aventura, com reviravoltas constantes", opcaoB: "Drama intimista, com profundidade e reflexão" }
  ];

  const perguntasParte2 = [
    { situacao: "Uma pessoa querida muda completamente de opinião sobre algo importante...", opcaoA: "Tudo bem, pessoas mudam, a vida é assim mesmo", opcaoB: "Me incomoda, sinto que preciso entender o porquê" },
    { situacao: "Os planos do final de semana mudaram de última hora...", opcaoA: "Tranquilo, me adapto fácil, vamos ver o que rola", opcaoB: "Fico frustrado(a), eu já tinha me organizado mentalmente" },
    { situacao: "Você discute com alguém que ama pela manhã...", opcaoA: "À tarde já esqueci, vida que segue", opcaoB: "Fico remoendo, o peso permanece por dias" },
    { situacao: "Precisa tomar uma decisão importante...", opcaoA: "Penso no que vai fazer bem pra mim e pros outros envolvidos", opcaoB: "Penso no que é certo, independente de como todos vão se sentir" },
    { situacao: "Alguém te pede pra mudar de ideia sobre algo que você acredita...", opcaoA: "Se fizer sentido, mudo sem problema", opcaoB: "Preciso de argumentos muito fortes, não mudo fácil" },
    { situacao: "Numa festa animada com música alta e muita gente...", opcaoA: "Me deixo envolver pela energia do ambiente", opcaoB: "Observo de forma mais distanciada, analiso o que está acontecendo" },
    { situacao: "Quando lembra de algo doloroso do passado...", opcaoA: "É só uma lembrança, não mexe muito comigo hoje", opcaoB: "A emoção volta forte, como se fosse recente" },
    { situacao: "Em relacionamentos, você tende a...", opcaoA: "Priorizar a harmonia, ceder pra manter a paz", opcaoB: "Priorizar a verdade, mesmo que gere atrito" },
    { situacao: "Quando alguém pensa muito diferente de você...", opcaoA: "Acho natural, cada um com sua visão", opcaoB: "Me incomoda internamente, fico querendo mostrar meu ponto" },
    { situacao: "Sua relação com mudanças na vida é...", opcaoA: "Fluida, me adapto e sigo em frente", opcaoB: "Difícil, preciso de tempo pra processar e aceitar" }
  ];

  const temperamentos = {
    sanguineo: { nome: "SANGUÍNEO", emoji: "🌬️", descricao: "Você é como o Ar: expansivo, leve, envolvente. Sua energia preenche os ambientes e contagia quem está por perto.", pontosFortres: ["Comunicação natural e cativante", "Otimismo contagiante", "Facilidade em perdoar e seguir em frente", "Criatividade e entusiasmo"], pontosAtencao: ["Tendência à inconstância e dispersão", "Dificuldade em terminar o que começa", "Pode ser superficial nas análises", "Facilmente influenciado pelo ambiente"], noAmor: "Você ama com intensidade no momento, é demonstrativo e precisa de novidade. Cuidado pra não confundir paixão passageira com amor profundo.", frase: "A vida é uma festa, e eu sou a música que toca." },
    colerico: { nome: "COLÉRICO", emoji: "🔥", descricao: "Você é como o Fogo: intenso, determinado, transformador. Sua presença aquece e ilumina, mas também pode queimar quem se aproxima sem cuidado.", pontosFortres: ["Liderança natural e decisão rápida", "Resiliência e capacidade de se reerguer", "Foco em resultados e execução", "Coragem para enfrentar desafios"], pontosAtencao: ["Pode ser autoritário e impaciente", "Dificuldade em ouvir opiniões contrárias", "Tendência a atropelar sentimentos alheios", "Precisa aprender a delegar e descansar"], noAmor: "Você ama com fogo e intensidade, mas precisa cuidar pra não sufocar o outro. Aprenda que nem tudo é competição.", frase: "Obstáculos são apenas combustível pro meu fogo." },
    melancolico: { nome: "MELANCÓLICO", emoji: "🌍", descricao: "Você é como a Terra: profundo, estável, marcado. Guarda dentro de si camadas de história e significado que poucos conseguem acessar.", pontosFortres: ["Profundidade emocional e intelectual", "Lealdade inabalável", "Capacidade de análise e prevenção", "Sensibilidade artística e criativa"], pontosAtencao: ["Tendência ao pessimismo e autocrítica", "Dificuldade em deixar o passado ir", "Pode ser rígido e perfeccionista demais", "Precisa praticar a gratidão"], noAmor: "Você ama de forma profunda e leal, mas pode cobrar demais do outro. Lembre-se: imperfeição faz parte do humano.", frase: "Nas minhas raízes, guardo todas as histórias que me trouxeram até aqui." },
    fleumatico: { nome: "FLEUMÁTICO", emoji: "🌊", descricao: "Você é como a Água: sereno, adaptável, profundo. Sua presença traz paz, mas no seu interior existe um oceano que poucos têm permissão de explorar.", pontosFortres: ["Diplomacia e capacidade de mediar conflitos", "Paciência e constância emocional", "Adaptabilidade às situações", "Profundidade interior rica"], pontosAtencao: ["Tendência à passividade e procrastinação", "Dificuldade em se posicionar e dizer não", "Pode parecer indiferente ou distante", "Precisa sair da zona de conforto"], noAmor: "Você ama de forma estável e acolhedora, mas precisa expressar mais o que sente. O outro não é vidente.", frase: "Na minha calmaria, existe uma profundidade que só revelo a quem merece." }
  };

  const calcularResultado = () => {
    const countA_P1 = respostasParte1.filter(r => r === 'A').length;
    const countA_P2 = respostasParte2.filter(r => r === 'A').length;
    
    const percentQuente = (countA_P1 / 10) * 100;
    const percentSeco = ((10 - countA_P2) / 10) * 100;

    const ehQuente = percentQuente >= 50;
    const ehSeco = percentSeco >= 50;

    let dominante, secundario;
    
    if (ehQuente && !ehSeco) dominante = 'sanguineo';
    else if (ehQuente && ehSeco) dominante = 'colerico';
    else if (!ehQuente && ehSeco) dominante = 'melancolico';
    else dominante = 'fleumatico';

    const distQuente = Math.abs(percentQuente - 50);
    const distSeco = Math.abs(percentSeco - 50);

    if (distQuente <= distSeco) {
      if (dominante === 'sanguineo') secundario = 'fleumatico';
      else if (dominante === 'colerico') secundario = 'melancolico';
      else if (dominante === 'melancolico') secundario = 'colerico';
      else secundario = 'sanguineo';
    } else {
      if (dominante === 'sanguineo') secundario = 'colerico';
      else if (dominante === 'colerico') secundario = 'sanguineo';
      else if (dominante === 'melancolico') secundario = 'fleumatico';
      else secundario = 'melancolico';
    }

    return { dominante, secundario, percentQuente, percentSeco };
  };

  const handleResposta = (resposta) => {
    if (fase === 'parte1') {
      const novas = [...respostasParte1, resposta];
      setRespostasParte1(novas);
      if (perguntaAtual < 9) setPerguntaAtual(perguntaAtual + 1);
      else setFase('transicao');
    } else if (fase === 'parte2') {
      const novas = [...respostasParte2, resposta];
      setRespostasParte2(novas);
      if (perguntaAtual < 9) setPerguntaAtual(perguntaAtual + 1);
      else setFase('resultado');
    }
  };

  const progresso = () => {
    if (fase === 'parte1') return ((perguntaAtual + 1) / 10) * 50;
    if (fase === 'parte2') return 50 + ((perguntaAtual + 1) / 10) * 50;
    return 0;
  };

  // INTRO
  if (fase === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 text-center border border-white/20">
          <div className="text-4xl mb-3">🔥🌬️🌊🌍</div>
          <h1 className="text-2xl font-bold text-white mb-2">Descubra Seu Temperamento</h1>
          <p className="text-purple-200 mb-4 text-sm">Há mais de 2.400 anos, Hipócrates identificou 4 temperamentos fundamentais.</p>
          <div className="bg-white/5 rounded-xl p-4 mb-4 text-left">
            <p className="text-purple-100 mb-2 text-sm font-semibold">Este teste revela:</p>
            <ul className="text-purple-200 space-y-1 text-xs">
              <li>✦ Seu temperamento dominante e secundário</li>
              <li>✦ Suas tendências nos eixos Quente/Frio e Úmido/Seco</li>
              <li>✦ Seus pontos fortes e de atenção</li>
            </ul>
          </div>
          <p className="text-xs text-purple-300 mb-4">⏱️ 5 minutos • Responda com seu primeiro instinto</p>
          <button onClick={() => setFase('parte1')} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
            Começar o Teste
          </button>
        </div>
      </div>
    );
  }

  // TRANSIÇÃO
  if (fase === 'transicao') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 text-center border border-white/20">
          <div className="text-4xl mb-3">✨</div>
          <h2 className="text-xl font-bold text-white mb-2">Primeira Parte Concluída!</h2>
          <p className="text-purple-200 mb-4 text-sm">Agora vamos explorar como você processa as experiências.</p>
          <div className="w-full bg-white/20 rounded-full h-2 mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-1/2"></div>
          </div>
          <button onClick={() => { setPerguntaAtual(0); setFase('parte2'); }} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full">
            Continuar
          </button>
        </div>
      </div>
    );
  }

  // PERGUNTAS
  if (fase === 'parte1' || fase === 'parte2') {
    const perguntas = fase === 'parte1' ? perguntasParte1 : perguntasParte2;
    const pergunta = perguntas[perguntaAtual];

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-xl w-full">
          <div className="mb-3">
            <div className="flex justify-between text-purple-300 text-xs mb-1">
              <span>Parte {fase === 'parte1' ? 1 : 2} de 2</span>
              <span>Pergunta {perguntaAtual + 1} de 10</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full transition-all" style={{width: `${progresso()}%`}}></div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-5 border border-white/20">
            <p className="text-lg text-white font-medium text-center mb-5">{pergunta.situacao}</p>
            <div className="space-y-3">
              <button onClick={() => handleResposta('A')} className="w-full bg-white/5 hover:bg-white/15 border border-white/20 hover:border-purple-400 rounded-xl p-4 text-left transition-all">
                <div className="flex items-start gap-3">
                  <span className="bg-purple-500/30 text-purple-300 font-bold px-2 py-0.5 rounded text-xs">A</span>
                  <p className="text-purple-100 text-sm">{pergunta.opcaoA}</p>
                </div>
              </button>
              <button onClick={() => handleResposta('B')} className="w-full bg-white/5 hover:bg-white/15 border border-white/20 hover:border-pink-400 rounded-xl p-4 text-left transition-all">
                <div className="flex items-start gap-3">
                  <span className="bg-pink-500/30 text-pink-300 font-bold px-2 py-0.5 rounded text-xs">B</span>
                  <p className="text-purple-100 text-sm">{pergunta.opcaoB}</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // RESULTADO
  if (fase === 'resultado') {
    const { dominante, secundario, percentQuente, percentSeco } = calcularResultado();
    const res = temperamentos[dominante];
    const resSec = temperamentos[secundario];
    const nomeCompleto = `${res.nome}-${resSec.nome}`;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 py-4 px-4 overflow-auto">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-center border border-white/20 mb-3">
            <p className="text-purple-300 text-xs uppercase tracking-widest mb-1">Seu temperamento dominante é</p>
            <div className="text-5xl mb-1">{res.emoji}</div>
            <h1 className="text-2xl font-bold text-white">{res.nome}</h1>
            <p className="text-purple-300 text-sm">com traços de {resSec.nome} {resSec.emoji}</p>
            <span className="inline-block bg-purple-500/20 px-4 py-1 rounded-full text-sm text-purple-200 mt-2 border border-purple-500/30">
              {res.nome.charAt(0) + res.nome.slice(1).toLowerCase()}-{resSec.nome.charAt(0) + resSec.nome.slice(1).toLowerCase()}
            </span>
          </div>

          {/* Eixos */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/20">
              <p className="text-purple-400 text-xs uppercase mb-2">Eixo de Energia</p>
              <div className="relative h-6 bg-white/10 rounded-full overflow-hidden mb-1">
                <div 
                  className={`h-full rounded-full ${percentQuente >= 50 ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'}`}
                  style={{width: `${percentQuente}%`}}
                ></div>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                  {percentQuente >= 50 ? `${Math.round(percentQuente)}% Quente` : `${Math.round(100-percentQuente)}% Frio`}
                </span>
              </div>
              <div className="flex justify-between text-xs text-purple-400">
                <span>🧊 Frio</span>
                <span>Quente 🔥</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/20">
              <p className="text-purple-400 text-xs uppercase mb-2">Eixo de Adaptação</p>
              <div className="relative h-6 bg-white/10 rounded-full overflow-hidden mb-1">
                <div 
                  className={`h-full rounded-full ${percentSeco >= 50 ? 'bg-gradient-to-r from-yellow-500 to-amber-500' : 'bg-gradient-to-r from-green-500 to-teal-500'}`}
                  style={{width: `${percentSeco}%`}}
                ></div>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                  {percentSeco >= 50 ? `${Math.round(percentSeco)}% Seco` : `${Math.round(100-percentSeco)}% Úmido`}
                </span>
              </div>
              <div className="flex justify-between text-xs text-purple-400">
                <span>💧 Úmido</span>
                <span>Seco 🏜️</span>
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 mb-3">
            <p className="text-purple-100 text-center italic text-sm">"{res.descricao}"</p>
          </div>

          {/* Grid Pontos */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-emerald-500/10 rounded-xl p-3 border border-emerald-500/30">
              <h3 className="text-sm font-bold text-emerald-400 mb-2">✦ Pontos Fortes</h3>
              <ul className="space-y-1">
                {res.pontosFortres.map((p, i) => (
                  <li key={i} className="text-emerald-100 text-xs">• {p}</li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/30">
              <h3 className="text-sm font-bold text-amber-400 mb-2">⚡ Atenção</h3>
              <ul className="space-y-1">
                {res.pontosAtencao.map((p, i) => (
                  <li key={i} className="text-amber-100 text-xs">• {p}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* No Amor */}
          <div className="bg-pink-500/10 rounded-xl p-3 border border-pink-500/30 mb-3">
            <h3 className="text-sm font-bold text-pink-400 mb-1">💕 No Amor</h3>
            <p className="text-pink-100 text-xs">{res.noAmor}</p>
          </div>

          {/* Frase */}
          <div className="bg-white/10 rounded-xl p-4 border border-white/20 mb-3 text-center">
            <p className="text-white italic">"{res.frase}"</p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl p-4 border border-purple-500/30 text-center">
            <h3 className="text-base font-bold text-white mb-1">Quer ir mais fundo?</h3>
            <p className="text-purple-200 mb-3 text-xs">Descubra como seu temperamento afeta seus relacionamentos.</p>
            <a 
              href={`https://wa.me/5561992634557?text=${encodeURIComponent(`Olá Jaya! Fiz o teste de temperamentos e meu resultado foi ${nomeCompleto}. Quero entender mais sobre como isso afeta meus relacionamentos.`)}`}
              target="_blank"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-2 px-5 rounded-full text-sm"
            >
              💬 Falar com Jaya no WhatsApp
            </a>
          </div>

          {/* Refazer */}
          <div className="text-center mt-3">
            <button onClick={() => { setFase('intro'); setRespostasParte1([]); setRespostasParte2([]); setPerguntaAtual(0); }} className="text-purple-400 hover:text-white underline text-sm">
              Refazer o teste
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
