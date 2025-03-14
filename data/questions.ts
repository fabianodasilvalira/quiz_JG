import type { Question } from "./questions-structure"

// Todas as perguntas em um único arquivo
export const allQuestions: Question[] = [
  // BRASILEIRÃO (50 perguntas)
  {
    id: 1,
    question: "Qual time é o maior campeão do Campeonato Brasileiro?",
    options: ["Palmeiras", "Flamengo", "Santos"],
    correctAnswer: "Palmeiras",
    explanation: "O Palmeiras é o maior campeão brasileiro com 11 títulos conquistados.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 2,
    question: "Qual jogador é o maior artilheiro da história do Campeonato Brasileiro?",
    options: ["Roberto Dinamite", "Romário", "Fred"],
    correctAnswer: "Roberto Dinamite",
    explanation: "Roberto Dinamite é o maior artilheiro da história do Brasileirão com 190 gols.",
    category: "brasileirao",
    difficulty: "medio"
  },
  {
    id: 3,
    question: "Em que ano foi disputado o primeiro Campeonato Brasileiro?",
    options: ["1959", "1971", "1967"],
    correctAnswer: "1971",
    explanation: "O primeiro Campeonato Brasileiro foi disputado em 1971, com o Atlético-MG como campeão.",
    category: "brasileirao",
    difficulty: "medio"
  },
  {
    id: 4,
    question: "Qual time foi campeão brasileiro de 2023?",
    options: ["Palmeiras", "Botafogo", "Flamengo"],
    correctAnswer: "Palmeiras",
    explanation: "O Palmeiras conquistou o Brasileirão de 2023 sob o comando de Abel Ferreira.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 5,
    question: "Qual foi o primeiro time nordestino a conquistar o Campeonato Brasileiro?",
    options: ["Bahia", "Sport", "Fortaleza"],
    correctAnswer: "Bahia",
    explanation: "O Bahia foi o primeiro time nordestino campeão brasileiro, em 1959 (considerando a Taça Brasil).",
    category: "brasileirao",
    difficulty: "medio"
  },
  {
    id: 6,
    question: "Qual time é conhecido como 'Imortal Tricolor'?",
    options: ["Fluminense", "Grêmio", "Bahia"],
    correctAnswer: "Grêmio",
    explanation: "O Grêmio é conhecido como 'Imortal Tricolor' devido à sua história e às cores de seu uniforme.",
    category: "brasileirao",
    difficulty: "medio"
  },
  {
    id: 7,
    question: "Qual time é conhecido como 'Verdão'?",
    options: ["Palmeiras", "Coritiba", "Goiás"],
    correctAnswer: "Palmeiras",
    explanation: "O Palmeiras é conhecido como 'Verdão' devido à cor verde de seu uniforme.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 8,
    question: "Qual clube possui a maior sequência invicta na história do Campeonato Brasileiro?",
    options: ["Flamengo", "São Paulo", "Fluminense"],
    correctAnswer: "São Paulo",
    explanation: "O São Paulo ficou 47 jogos invicto entre 1974 e 1977, a maior sequência invicta do Brasileirão.",
    category: "brasileirao",
    difficulty: "dificil"
  },
  {
    id: 9,
    question: "Qual foi o primeiro clube a conquistar o Campeonato Brasileiro na era dos pontos corridos (desde 2003)?",
    options: ["Santos", "Cruzeiro", "São Paulo"],
    correctAnswer: "Cruzeiro",
    explanation: "O Cruzeiro foi o primeiro campeão brasileiro na era dos pontos corridos, em 2003.",
    category: "brasileirao",
    difficulty: "medio"
  },
  {
    id: 10,
    question: "Qual jogador marcou mais gols em uma única edição do Campeonato Brasileiro?",
    options: ["Washington", "Fred", "Gabigol"],
    correctAnswer: "Washington",
    explanation: "Washington, o 'Coração Valente', marcou 34 gols pelo Athletico-PR no Brasileirão de 2004.",
    category: "brasileirao",
    difficulty: "medio"
  },
  {
    id: 11,
    question: "Qual time foi rebaixado mais vezes na história do Campeonato Brasileiro?",
    options: ["Fluminense", "Vasco da Gama", "América-MG"],
    correctAnswer: "América-MG",
    explanation: "O América-MG foi rebaixado 7 vezes na história do Campeonato Brasileiro.",
    category: "brasileirao",
    difficulty: "dificil"
  },
  {
    id: 12,
    question: "Qual foi o primeiro time a conquistar o Campeonato Brasileiro de forma invicta?",
    options: ["Internacional", "Santos", "Flamengo"],
    correctAnswer: "Internacional",
    explanation: "O Internacional foi campeão brasileiro de forma invicta em 1979.",
    category: "brasileirao",
    difficulty: "dificil"
  },
  {
    id: 13,
    question: "Qual time possui o recorde de pontos conquistados em uma única edição do Brasileirão por pontos corridos?",
    options: ["Flamengo", "Corinthians", "Cruzeiro"],
    correctAnswer: "Flamengo",
    explanation: "O Flamengo conquistou 90 pontos no Brasileirão de 2019, recorde na era dos pontos corridos.",
    category: "brasileirao",
    difficulty: "medio"
  },
  {
    id: 14,
    question: "Qual foi o primeiro time a conquistar três títulos brasileiros consecutivos?",
    options: ["São Paulo", "Santos", "Flamengo"],
    correctAnswer: "São Paulo",
    explanation: "O São Paulo foi tricampeão brasileiro consecutivo em 2006, 2007 e 2008.",
    category: "brasileirao",
    difficulty: "medio"
  },
  {
    id: 15,
    question: "Qual jogador tem mais títulos do Campeonato Brasileiro como jogador?",
    options: ["Rogério Ceni", "Pelé", "Zinho"],
    correctAnswer: "Zinho",
    explanation: "Zinho conquistou 7 títulos brasileiros como jogador, por Flamengo, Palmeiras e Cruzeiro.",
    category: "brasileirao",
    difficulty: "dificil"
  },
  {
    id: 16,
    question: "Qual time foi campeão brasileiro com a menor pontuação na era dos pontos corridos?",
    options: ["Fluminense", "Corinthians", "São Paulo"],
    correctAnswer: "Fluminense",
    explanation: "O Fluminense foi campeão em 2012 com 77 pontos, a menor pontuação para um campeão na era dos pontos corridos.",
    category: "brasileirao",
    difficulty: "dificil"
  },
  {
    id: 17,
    question: "Qual time é conhecido como 'Fogão'?",
    options: ["Botafogo", "Internacional", "Atlético-GO"],
    correctAnswer: "Botafogo",
    explanation: "O Botafogo é conhecido como 'Fogão' pelos seus torcedores.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 18,
    question: "Qual time é conhecido como 'Leão do Pici'?",
    options: ["Fortaleza", "Sport", "Vitória"],
    correctAnswer: "Fortaleza",
    explanation: "O Fortaleza é conhecido como 'Leão do Pici', referência ao bairro onde fica seu estádio.",
    category: "brasileirao",
    difficulty: "medio"
  },
  {
    id: 19,
    question: "Qual time é conhecido como 'Peixe'?",
    options: ["Santos", "Bahia", "Avaí"],
    correctAnswer: "Santos",
    explanation: "O Santos é conhecido como 'Peixe' devido à proximidade com o mar.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 20,
    question: "Qual time é conhecido como 'Timão'?",
    options: ["Corinthians", "Atlético-MG", "Vasco da Gama"],
    correctAnswer: "Corinthians",
    explanation: "O Corinthians é popularmente chamado de 'Timão' por seus torcedores.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 21,
    question: "Qual time é conhecido como 'Galo'?",
    options: ["Atlético-MG", "Atlético-GO", "Atlético-PR"],
    correctAnswer: "Atlético-MG",
    explanation: "O Atlético Mineiro é conhecido como 'Galo' devido ao seu mascote.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 22,
    question: "Qual time é conhecido como 'Tricolor Paulista'?",
    options: ["São Paulo", "Palmeiras", "Santos"],
    correctAnswer: "São Paulo",
    explanation: "O São Paulo é conhecido como 'Tricolor Paulista' devido às três cores de seu uniforme.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 23,
    question: "Qual time é conhecido como 'Tricolor Carioca'?",
    options: ["Fluminense", "Flamengo", "Vasco da Gama"],
    correctAnswer: "Fluminense",
    explanation: "O Fluminense é conhecido como 'Tricolor Carioca' devido às três cores de seu uniforme.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 24,
    question: "Qual time é conhecido como 'Rubro-Negro'?",
    options: ["Flamengo", "Athletico-PR", "Vitória"],
    correctAnswer: "Flamengo",
    explanation: "O Flamengo é conhecido como 'Rubro-Negro' devido às cores vermelha e preta de seu uniforme.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 25,
    question: "Qual time é conhecido como 'Raposa'?",
    options: ["Cruzeiro", "Bahia", "Goiás"],
    correctAnswer: "Cruzeiro",
    explanation: "O Cruzeiro é conhecido como 'Raposa' devido ao seu mascote.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 26,
    question: "Qual time é conhecido como 'Leão da Ilha'?",
    options: ["Avaí", "Vitória", "Sport"],
    correctAnswer: "Avaí",
    explanation: "O Avaí é conhecido como 'Leão da Ilha' devido ao seu mascote e localização em Florianópolis.",
    category: "brasileirao",
    difficulty: "medio"
  },
  {
    id: 27,
    question: "Qual time é conhecido como 'Vozão'?",
    options: ["Ceará", "Fortaleza", "Bahia"],
    correctAnswer: "Ceará",
    explanation: "O Ceará é carinhosamente chamado de 'Vozão' por seus torcedores.",
    category: "brasileirao",
    difficulty: "medio"
  },
  {
    id: 28,
    question: "Qual time é conhecido como 'Coelho'?",
    options: ["América-MG", "Criciúma", "Juventude"],
    correctAnswer: "América-MG",
    explanation: "O América Mineiro é conhecido como 'Coelho' devido ao seu mascote.",
    category: "brasileirao",
    difficulty: "medio"
  },
  {
    id: 29,
    question: "Qual time é conhecido como 'Furacão'?",
    options: ["Athletico-PR", "Bahia", "Grêmio"],
    correctAnswer: "Athletico-PR",
    explanation: "O Athletico Paranaense é conhecido como 'Furacão'.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 30,
    question: "Qual time é conhecido como 'Papagaio'?",
    options: ["Goiás", "Cuiabá", "Juventude"],
    correctAnswer: "Goiás",
    explanation: "O Goiás é conhecido como 'Papagaio' devido ao seu mascote e à cor verde.",
    category: "brasileirao",
    difficulty: "medio"
  },
  {
    id: 31,
    question: "Qual jogador detém o recorde de mais jogos disputados no Campeonato Brasileiro?",
    options: ["Rogério Ceni", "Fábio", "Zé Roberto"],
    correctAnswer: "Fábio",
    explanation: "O goleiro Fábio detém o recorde de mais jogos disputados no Campeonato Brasileiro.",
    category: "brasileirao",
    difficulty: "dificil"
  },
  {
    id: 32,
    question: "Qual foi o primeiro time a ser rebaixado no Campeonato Brasileiro?",
    options: ["América-RJ", "Corinthians", "Fluminense"],
    correctAnswer: "América-RJ",
    explanation: "O América-RJ foi o primeiro time a ser rebaixado no Campeonato Brasileiro, em 1971.",
    category: "brasileirao",
    difficulty: "dificil"
  },
  {
    id: 33,
    question: "Qual time conquistou o Campeonato Brasileiro de 1987, na polêmica entre Clube dos 13 e CBF?",
    options: ["Sport", "Flamengo", "Internacional"],
    correctAnswer: "Sport",
    explanation: "O Sport é reconhecido oficialmente como campeão brasileiro de 1987, após decisão judicial.",
    category: "brasileirao",
    difficulty: "medio"
  },
  {
    id: 34,
    question: "Qual time foi campeão da primeira edição do Campeonato Brasileiro no formato atual?",
    options: ["Flamengo", "Atlético-MG", "Corinthians"],
    correctAnswer: "Flamengo",
    explanation: "O Flamengo foi campeão da primeira edição do Campeonato Brasileiro no formato atual, em 1971.",
    category: "brasileirao",
    difficulty: "medio"
  },
  {
    id: 35,
    question: "Qual time possui a maior goleada da história do Campeonato Brasileiro?",
    options: ["Santos", "Corinthians", "Botafogo"],
    correctAnswer: "Santos",
    explanation: "O Santos aplicou a maior goleada da história do Brasileirão: 10 a 0 contra o Botafogo-SP em 1983.",
    category: "brasileirao",
    difficulty: "dificil"
  },
  {
    id: 36,
    question: "Qual time foi campeão brasileiro de 2022?",
    options: ["Palmeiras", "Flamengo", "Internacional"],
    correctAnswer: "Palmeiras",
    explanation: "O Palmeiras foi campeão brasileiro em 2022, sob o comando de Abel Ferreira.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 37,
    question: "Qual time foi campeão brasileiro de 2021?",
    options: ["Atlético-MG", "Flamengo", "Palmeiras"],
    correctAnswer: "Atlético-MG",
    explanation: "O Atlético-MG foi campeão brasileiro em 2021, sob o comando de Cuca.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 38,
    question: "Qual time foi campeão brasileiro de 2020?",
    options: ["Flamengo", "Internacional", "São Paulo"],
    correctAnswer: "Flamengo",
    explanation: "O Flamengo foi campeão brasileiro em 2020, sob o comando de Rogério Ceni.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 39,
    question: "Qual time foi campeão brasileiro de 2019?",
    options: ["Flamengo", "Santos", "Palmeiras"],
    correctAnswer: "Flamengo",
    explanation: "O Flamengo foi campeão brasileiro em 2019, sob o comando de Jorge Jesus.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 40,
    question: "Qual time foi campeão brasileiro de 2018?",
    options: ["Palmeiras", "Flamengo", "São Paulo"],
    correctAnswer: "Palmeiras",
    explanation: "O Palmeiras foi campeão brasileiro em 2018, sob o comando de Luiz Felipe Scolari.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 41,
    question: "Qual time foi campeão brasileiro de 2017?",
    options: ["Corinthians", "Palmeiras", "Santos"],
    correctAnswer: "Corinthians",
    explanation: "O Corinthians foi campeão brasileiro em 2017, sob o comando de Fábio Carille.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 42,
    question: "Qual time foi campeão brasileiro de 2016?",
    options: ["Palmeiras", "Santos", "Flamengo"],
    correctAnswer: "Palmeiras",
    explanation: "O Palmeiras foi campeão brasileiro em 2016, sob o comando de Cuca.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 43,
    question: "Qual time foi campeão brasileiro de 2015?",
    options: ["Corinthians", "Atlético-MG", "Grêmio"],
    correctAnswer: "Corinthians",
    explanation: "O Corinthians foi campeão brasileiro em 2015, sob o comando de Tite.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 44,
    question: "Qual time foi campeão brasileiro de 2014?",
    options: ["Cruzeiro", "São Paulo", "Internacional"],
    correctAnswer: "Cruzeiro",
    explanation: "O Cruzeiro foi campeão brasileiro em 2014, sob o comando de Marcelo Oliveira.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 45,
    question: "Qual time foi campeão brasileiro de 2013?",
    options: ["Cruzeiro", "Grêmio", "Atlético-MG"],
    correctAnswer: "Cruzeiro",
    explanation: "O Cruzeiro foi campeão brasileiro em 2013, sob o comando de Marcelo Oliveira.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 46,
    question: "Qual time foi campeão brasileiro de 2012?",
    options: ["Fluminense", "Atlético-MG", "São Paulo"],
    correctAnswer: "Fluminense",
    explanation: "O Fluminense foi campeão brasileiro em 2012, sob o comando de Abel Braga.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 47,
    question: "Qual time foi campeão brasileiro de 2011?",
    options: ["Corinthians", "Vasco da Gama", "São Paulo"],
    correctAnswer: "Corinthians",
    explanation: "O Corinthians foi campeão brasileiro em 2011, sob o comando de Tite.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 48,
    question: "Qual time foi campeão brasileiro de 2010?",
    options: ["Fluminense", "Cruzeiro", "Corinthians"],
    correctAnswer: "Fluminense",
    explanation: "O Fluminense foi campeão brasileiro em 2010, sob o comando de Muricy Ramalho.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 49,
    question: "Qual time foi campeão brasileiro de 2009?",
    options: ["Flamengo", "Internacional", "São Paulo"],
    correctAnswer: "Flamengo",
    explanation: "O Flamengo foi campeão brasileiro em 2009, sob o comando de Andrade.",
    category: "brasileirao",
    difficulty: "facil"
  },
  {
    id: 50,
    question: "Qual time foi campeão brasileiro de 2008?",
    options: ["São Paulo", "Grêmio", "Cruzeiro"],
    correctAnswer: "São Paulo",
    explanation: "O São Paulo foi campeão brasileiro em 2008, sob o comando de Muricy Ramalho.",
    category: "brasileirao",
    difficulty: "facil"
  },
  
  // COPA DO BRASIL (30 perguntas)
  {
    id: 51,
    question: "Qual clube tem mais títulos da Copa do Brasil?",
    options: ["Cruzeiro", "Grêmio", "Flamengo"],
    correctAnswer: "Cruzeiro",
    explanation: "O Cruzeiro é o maior campeão da Copa do Brasil com 6 títulos.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 52,
    question: "Em que ano foi disputada a primeira edição da Copa do Brasil?",
    options: ["1989", "1985", "1992"],
    correctAnswer: "1989",
    explanation: "A primeira edição da Copa do Brasil foi disputada em 1989, com o Grêmio como campeão.",
    category: "copa_do_brasil",
    difficulty: "medio"
  },
  {
    id: 53,
    question: "Qual foi o primeiro clube a conquistar a Copa do Brasil?",
    options: ["Grêmio", "Flamengo", "Vasco da Gama"],
    correctAnswer: "Grêmio",
    explanation: "O Grêmio foi o primeiro campeão da Copa do Brasil, em 1989.",
    category: "copa_do_brasil",
    difficulty: "medio"
  },
  {
    id: 54,
    question: "Qual clube foi campeão da Copa do Brasil de 2023?",
    options: ["São Paulo", "Flamengo", "Atlético-MG"],
    correctAnswer: "São Paulo",
    explanation: "O São Paulo conquistou a Copa do Brasil de 2023, vencendo o Flamengo na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 55,
    question: "Qual clube foi campeão da Copa do Brasil de 2022?",
    options: ["Flamengo", "Corinthians", "Palmeiras"],
    correctAnswer: "Flamengo",
    explanation: "O Flamengo conquistou a Copa do Brasil de 2022, vencendo o Corinthians na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 56,
    question: "Qual clube foi campeão da Copa do Brasil de 2021?",
    options: ["Atlético-MG", "Flamengo", "Palmeiras"],
    correctAnswer: "Atlético-MG",
    explanation: "O Atlético-MG conquistou a Copa do Brasil de 2021, vencendo o Athletico-PR na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 57,
    question: "Qual clube foi campeão da Copa do Brasil de 2020?",
    options: ["Palmeiras", "Grêmio", "São Paulo"],
    correctAnswer: "Palmeiras",
    explanation: "O Palmeiras conquistou a Copa do Brasil de 2020, vencendo o Grêmio na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 58,
    question: "Qual clube foi campeão da Copa do Brasil de 2019?",
    options: ["Athletico-PR", "Internacional", "Cruzeiro"],
    correctAnswer: "Athletico-PR",
    explanation: "O Athletico-PR conquistou a Copa do Brasil de 2019, vencendo o Internacional na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 59,
    question: "Qual clube foi campeão da Copa do Brasil de 2018?",
    options: ["Cruzeiro", "Corinthians", "Flamengo"],
    correctAnswer: "Cruzeiro",
    explanation: "O Cruzeiro conquistou a Copa do Brasil de 2018, vencendo o Corinthians na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 60,
    question: "Qual clube foi campeão da Copa do Brasil de 2017?",
    options: ["Cruzeiro", "Flamengo", "Grêmio"],
    correctAnswer: "Cruzeiro",
    explanation: "O Cruzeiro conquistou a Copa do Brasil de 2017, vencendo o Flamengo na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 61,
    question: "Qual clube foi campeão da Copa do Brasil de 2016?",
    options: ["Grêmio", "Atlético-MG", "Palmeiras"],
    correctAnswer: "Grêmio",
    explanation: "O Grêmio conquistou a Copa do Brasil de 2016, vencendo o Atlético-MG na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 62,
    question: "Qual clube foi campeão da Copa do Brasil de 2015?",
    options: ["Palmeiras", "Santos", "Flamengo"],
    correctAnswer: "Palmeiras",
    explanation: "O Palmeiras conquistou a Copa do Brasil de 2015, vencendo o Santos na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 63,
    question: "Qual clube foi campeão da Copa do Brasil de 2014?",
    options: ["Atlético-MG", "Cruzeiro", "Flamengo"],
    correctAnswer: "Atlético-MG",
    explanation: "O Atlético-MG conquistou a Copa do Brasil de 2014, vencendo o Cruzeiro na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 64,
    question: "Qual clube foi campeão da Copa do Brasil de 2013?",
    options: ["Flamengo", "Atlético-PR", "Corinthians"],
    correctAnswer: "Flamengo",
    explanation: "O Flamengo conquistou a Copa do Brasil de 2013, vencendo o Athletico-PR na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 65,
    question: "Qual clube foi campeão da Copa do Brasil de 2012?",
    options: ["Palmeiras", "Coritiba", "Grêmio"],
    correctAnswer: "Palmeiras",
    explanation: "O Palmeiras conquistou a Copa do Brasil de 2012, vencendo o Coritiba na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 66,
    question: "Qual clube foi campeão da Copa do Brasil de 2011?",
    options: ["Vasco da Gama", "Coritiba", "Avaí"],
    correctAnswer: "Vasco da Gama",
    explanation: "O Vasco da Gama conquistou a Copa do Brasil de 2011, vencendo o Coritiba na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 67,
    question: "Qual clube foi campeão da Copa do Brasil de 2010?",
    options: ["Santos", "Vitória", "Flamengo"],
    correctAnswer: "Santos",
    explanation: "O Santos conquistou a Copa do Brasil de 2010, vencendo o Vitória na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 68,
    question: "Qual clube foi campeão da Copa do Brasil de 2009?",
    options: ["Corinthians", "Internacional", "Vasco da Gama"],
    correctAnswer: "Corinthians",
    explanation: "O Corinthians conquistou a Copa do Brasil de 2009, vencendo o Internacional na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 69,
    question: "Qual clube foi campeão da Copa do Brasil de 2008?",
    options: ["Sport", "Corinthians", "Flamengo"],
    correctAnswer: "Sport",
    explanation: "O Sport conquistou a Copa do Brasil de 2008, vencendo o Corinthians na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 70,
    question: "Qual clube foi campeão da Copa do Brasil de 2007?",
    options: ["Fluminense", "Figueirense", "São Paulo"],
    correctAnswer: "Fluminense",
    explanation: "O Fluminense conquistou a Copa do Brasil de 2007, vencendo o Figueirense na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 71,
    question: "Qual clube foi campeão da Copa do Brasil de 2006?",
    options: ["Flamengo", "Vasco da Gama", "Fluminense"],
    correctAnswer: "Flamengo",
    explanation: "O Flamengo conquistou a Copa do Brasil de 2006, vencendo o Vasco da Gama na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 72,
    question: "Qual clube foi campeão da Copa do Brasil de 2005?",
    options: ["Paulista", "Fluminense", "Santo André"],
    correctAnswer: "Paulista",
    explanation: "O Paulista de Jundiaí conquistou a Copa do Brasil de 2005, vencendo o Fluminense na final.",
    category: "copa_do_brasil",
    difficulty: "medio"
  },
  {
    id: 73,
    question: "Qual clube foi campeão da Copa do Brasil de 2004?",
    options: ["Santo André", "Flamengo", "Botafogo"],
    correctAnswer: "Santo André",
    explanation: "O Santo André conquistou a Copa do Brasil de 2004, vencendo o Flamengo na final.",
    category: "copa_do_brasil",
    difficulty: "medio"
  },
  {
    id: 74,
    question: "Qual clube foi campeão da Copa do Brasil de 2003?",
    options: ["Cruzeiro", "Flamengo", "Santos"],
    correctAnswer: "Cruzeiro",
    explanation: "O Cruzeiro conquistou a Copa do Brasil de 2003, vencendo o Flamengo na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 75,
    question: "Qual clube foi campeão da Copa do Brasil de 2002?",
    options: ["Corinthians", "Brasiliense", "Santos"],
    correctAnswer: "Corinthians",
    explanation: "O Corinthians conquistou a Copa do Brasil de 2002, vencendo o Brasiliense na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 76,
    question: "Qual clube foi campeão da Copa do Brasil de 2001?",
    options: ["Grêmio", "Corinthians", "São Paulo"],
    correctAnswer: "Grêmio",
    explanation: "O Grêmio conquistou a Copa do Brasil de 2001, vencendo o Corinthians na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 77,
    question: "Qual clube foi campeão da Copa do Brasil de 2000?",
    options: ["Cruzeiro", "São Paulo", "Vasco da Gama"],
    correctAnswer: "Cruzeiro",
    explanation: "O Cruzeiro conquistou a Copa do Brasil de 2000, vencendo o São Paulo na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 78,
    question: "Qual clube foi campeão da Copa do Brasil de 1999?",
    options: ["Juventude", "Botafogo", "Internacional"],
    correctAnswer: "Juventude",
    explanation: "O Juventude conquistou a Copa do Brasil de 1999, vencendo o Botafogo na final.",
    category: "copa_do_brasil",
    difficulty: "medio"
  },
  {
    id: 79,
    question: "Qual clube foi campeão da Copa do Brasil de 1998?",
    options: ["Palmeiras", "Cruzeiro", "Corinthians"],
    correctAnswer: "Palmeiras",
    explanation: "O Palmeiras conquistou a Copa do Brasil de 1998, vencendo o Cruzeiro na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  {
    id: 80,
    question: "Qual clube foi campeão da Copa do Brasil de 1997?",
    options: ["Grêmio", "Flamengo", "São Paulo"],
    correctAnswer: "Grêmio",
    explanation: "O Grêmio conquistou a Copa do Brasil de 1997, vencendo o Flamengo na final.",
    category: "copa_do_brasil",
    difficulty: "facil"
  },
  
  // LIBERTADORES (30 perguntas)
  {
    id: 81,
    question: "Qual clube venceu a Libertadores em 2023?",
    options: ["Fluminense", "Boca Juniors", "Palmeiras"],
    correctAnswer: "Fluminense",
    explanation: "O Fluminense conquistou a Libertadores de 2023 ao vencer o Boca Juniors na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 82,
    question: "Qual clube brasileiro tem mais títulos da Libertadores?",
    options: ["Palmeiras", "Santos", "Flamengo"],
    correctAnswer: "Palmeiras",
    explanation: "O Palmeiras é o clube brasileiro com mais títulos da Libertadores, com 3 conquistas.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 83,
    question: "Qual clube tem mais títulos da Copa Libertadores da América?",
    options: ["Independiente", "Boca Juniors", "River Plate"],
    correctAnswer: "Independiente",
    explanation: "O Independiente da Argentina é o maior campeão da Libertadores com 7 títulos.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 84,
    question: "Em que ano foi disputada a primeira edição da Copa Libertadores?",
    options: ["1960", "1955", "1965"],
    correctAnswer: "1960",
    explanation: "A primeira edição da Copa Libertadores foi disputada em 1960, com o Peñarol como campeão.",
    category: "libertadores",
    difficulty: "medio"
  },
  {
    id: 85,
    question: "Qual foi o primeiro clube brasileiro a conquistar a Libertadores?",
    options: ["Santos", "São Paulo", "Cruzeiro"],
    correctAnswer: "Santos",
    explanation: "O Santos foi o primeiro clube brasileiro a conquistar a Libertadores, em 1962.",
    category: "libertadores",
    difficulty: "medio"
  },
  {
    id: 86,
    question: "Qual clube venceu a Libertadores em 2022?",
    options: ["Flamengo", "Athletico-PR", "Palmeiras"],
    correctAnswer: "Flamengo",
    explanation: "O Flamengo conquistou a Libertadores de 2022 ao vencer o Athletico-PR na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 87,
    question: "Qual clube venceu a Libertadores em 2021?",
    options: ["Palmeiras", "Flamengo", "Santos"],
    correctAnswer: "Palmeiras",
    explanation: "O Palmeiras conquistou a Libertadores de 2021 ao vencer o Flamengo na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 88,
    question: "Qual clube venceu a Libertadores em 2020?",
    options: ["Palmeiras", "Santos", "River Plate"],
    correctAnswer: "Palmeiras",
    explanation: "O Palmeiras conquistou a Libertadores de 2020 ao vencer o Santos na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 89,
    question: "Qual clube venceu a Libertadores em 2019?",
    options: ["Flamengo", "River Plate", "Boca Juniors"],
    correctAnswer: "Flamengo",
    explanation: "O Flamengo conquistou a Libertadores de 2019 ao vencer o River Plate na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 90,
    question: "Qual clube venceu a Libertadores em 2018?",
    options: ["River Plate", "Boca Juniors", "Grêmio"],
    correctAnswer: "River Plate",
    explanation: "O River Plate conquistou a Libertadores de 2018 ao vencer o Boca Juniors na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 91,
    question: "Qual clube venceu a Libertadores em 2017?",
    options: ["Grêmio", "Lanús", "Atlético Nacional"],
    correctAnswer: "Grêmio",
    explanation: "O Grêmio conquistou a Libertadores de 2017 ao vencer o Lanús na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 92,
    question: "Qual clube venceu a Libertadores em 2016?",
    options: ["Atlético Nacional", "Independiente del Valle", "Boca Juniors"],
    correctAnswer: "Atlético Nacional",
    explanation: "O Atlético Nacional da Colômbia conquistou a Libertadores de 2016 ao vencer o Independiente del Valle na final.",
    category: "libertadores",
    difficulty: "medio"
  },
  {
    id: 93,
    question: "Qual clube venceu a Libertadores em 2015?",
    options: ["River Plate", "Tigres", "Boca Juniors"],
    correctAnswer: "River Plate",
    explanation: "O River Plate conquistou a Libertadores de 2015 ao vencer o Tigres na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 94,
    question: "Qual clube venceu a Libertadores em 2014?",
    options: ["San Lorenzo", "Nacional", "Atlético-MG"],
    correctAnswer: "San Lorenzo",
    explanation: "O San Lorenzo da Argentina conquistou a Libertadores de 2014 ao vencer o Nacional do Paraguai na final.",
    category: "libertadores",
    difficulty: "medio"
  },
  {
    id: 95,
    question: "Qual clube venceu a Libertadores em 2013?",
    options: ["Atlético-MG", "Olimpia", "Newell's Old Boys"],
    correctAnswer: "Atlético-MG",
    explanation: "O Atlético-MG conquistou a Libertadores de 2013 ao vencer o Olimpia na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 96,
    question: "Qual clube venceu a Libertadores em 2012?",
    options: ["Corinthians", "Boca Juniors", "Santos"],
    correctAnswer: "Corinthians",
    explanation: "O Corinthians conquistou a Libertadores de 2012 ao vencer o Boca Juniors na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 97,
    question: "Qual clube venceu a Libertadores em 2011?",
    options: ["Santos", "Peñarol", "Internacional"],
    correctAnswer: "Santos",
    explanation: "O Santos conquistou a Libertadores de 2011 ao vencer o Peñarol na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 98,
    question: "Qual clube venceu a Libertadores em 2010?",
    options: ["Internacional", "Chivas Guadalajara", "São Paulo"],
    correctAnswer: "Internacional",
    explanation: "O Internacional conquistou a Libertadores de 2010 ao vencer o Chivas Guadalajara na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 99,
    question: "Qual clube venceu a Libertadores em 2009?",
    options: ["Estudiantes", "Cruzeiro", "Nacional"],
    correctAnswer: "Estudiantes",
    explanation: "O Estudiantes da Argentina conquistou a Libertadores de 2009 ao vencer o Cruzeiro na final.",
    category: "libertadores",
    difficulty: "medio"
  },
  {
    id: 100,
    question: "Qual clube venceu a Libertadores em 2008?",
    options: ["LDU Quito", "Fluminense", "São Paulo"],
    correctAnswer: "LDU Quito",
    explanation: "A LDU Quito do Equador conquistou a Libertadores de 2008 ao vencer o Fluminense na final.",
    category: "libertadores",
    difficulty: "medio"
  },
  {
    id: 101,
    question: "Qual clube venceu a Libertadores em 2007?",
    options: ["Boca Juniors", "Grêmio", "Santos"],
    correctAnswer: "Boca Juniors",
    explanation: "O Boca Juniors conquistou a Libertadores de 2007 ao vencer o Grêmio na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 102,
    question: "Qual clube venceu a Libertadores em 2006?",
    options: ["Internacional", "São Paulo", "River Plate"],
    correctAnswer: "Internacional",
    explanation: "O Internacional conquistou a Libertadores de 2006 ao vencer o São Paulo na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 103,
    question: "Qual clube venceu a Libertadores em 2005?",
    options: ["São Paulo", "Athletico-PR", "River Plate"],
    correctAnswer: "São Paulo",
    explanation: "O São Paulo conquistou a Libertadores de 2005 ao vencer o Athletico-PR na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 104,
    question: "Qual clube venceu a Libertadores em 2004?",
    options: ["Once Caldas", "Boca Juniors", "São Paulo"],
    correctAnswer: "Once Caldas",
    explanation: "O Once Caldas da Colômbia conquistou a Libertadores de 2004 ao vencer o Boca Juniors na final.",
    category: "libertadores",
    difficulty: "dificil"
  },
  {
    id: 105,
    question: "Qual clube venceu a Libertadores em 2003?",
    options: ["Boca Juniors", "Santos", "River Plate"],
    correctAnswer: "Boca Juniors",
    explanation: "O Boca Juniors conquistou a Libertadores de 2003 ao vencer o Santos na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 106,
    question: "Qual clube venceu a Libertadores em 2002?",
    options: ["Olimpia", "São Caetano", "Grêmio"],
    correctAnswer: "Olimpia",
    explanation: "O Olimpia do Paraguai conquistou a Libertadores de 2002 ao vencer o São Caetano na final.",
    category: "libertadores",
    difficulty: "medio"
  },
  {
    id: 107,
    question: "Qual clube venceu a Libertadores em 2001?",
    options: ["Boca Juniors", "Cruz Azul", "Palmeiras"],
    correctAnswer: "Boca Juniors",
    explanation: "O Boca Juniors conquistou a Libertadores de 2001 ao vencer o Cruz Azul na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 108,
    question: "Qual clube venceu a Libertadores em 2000?",
    options: ["Boca Juniors", "Palmeiras", "River Plate"],
    correctAnswer: "Boca Juniors",
    explanation: "O Boca Juniors conquistou a Libertadores de 2000 ao vencer o Palmeiras na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 109,
    question: "Qual clube venceu a Libertadores em 1999?",
    options: ["Palmeiras", "Deportivo Cali", "River Plate"],
    correctAnswer: "Palmeiras",
    explanation: "O Palmeiras conquistou a Libertadores de 1999 ao vencer o Deportivo Cali na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  {
    id: 110,
    question: "Qual clube venceu a Libertadores em 1998?",
    options: ["Vasco da Gama", "Barcelona-EQU", "River Plate"],
    correctAnswer: "Vasco da Gama",
    explanation: "O Vasco da Gama conquistou a Libertadores de 1998 ao vencer o Barcelona do Equador na final.",
    category: "libertadores",
    difficulty: "facil"
  },
  
  // SELEÇÃO BRASILEIRA (30 perguntas)
  {
    id: 111,
    question: "Quem é o maior artilheiro da história da Seleção Brasileira?",
    options: ["Pelé", "Neymar", "Ronaldo"],
    correctAnswer: "Neymar",
    explanation: "Neymar ultrapassou Pelé e se tornou o maior artilheiro da história da Seleção Brasileira.",
    category: "selecao_brasileira",
    difficulty: "facil"
  },
  {
    id: 112,
    question: "Quantas Copas do Mundo o Brasil já venceu?",
    options: ["4", "5", "6"],
    correctAnswer: "5",
    explanation: "O Brasil venceu 5 Copas do Mundo: 1958, 1962, 1970, 1994 e 2002.",
    category: "selecao_brasileira",
    difficulty: "facil"
  },
  {
    id: 113,
    question: "Em que ano o Brasil conquistou sua primeira Copa do Mundo?",
    options: ["1950", "1958", "1962"],
    correctAnswer: "1958",
    explanation: "O Brasil conquistou sua primeira Copa do Mundo em 1958, na Suécia.",
    category: "selecao_brasileira",
    difficulty: "facil"
  },
  {
    id: 114,
    question: "Quem foi o técnico da Seleção Brasileira na conquista da Copa do Mundo de 2002?",
    options: ["Luiz Felipe Scolari", "Carlos Alberto Parreira", "Mário Zagallo"],
    correctAnswer: "Luiz Felipe Scolari",
    explanation: "Luiz Felipe Scolari, o 'Felipão', foi o técnico da Seleção Brasileira na conquista da Copa do Mundo de 2002.",
    category: "selecao_brasileira",
    difficulty: "facil"
  },
  {
    id: 115,
    question: "Quem foi o técnico da Seleção Brasileira na conquista da Copa do Mundo de 1994?",
    options: ["Carlos Alberto Parreira", "Mário Zagallo", "Telê Santana"],
    correctAnswer: "Carlos Alberto Parreira",
    explanation: "Carlos Alberto Parreira foi o técnico da Seleção Brasileira na conquista da Copa do Mundo de 1994.",
    category: "selecao_brasileira",
    difficulty: "facil"
  },
  {
    id: 116,
    question: "Quem foi o técnico da Seleção Brasileira na conquista da Copa do Mundo de 1970?",
    options: ["Mário Zagallo", "João Saldanha", "Vicente Feola"],
    correctAnswer: "Mário Zagallo",
    explanation: "Mário Zagallo foi o técnico da Seleção Brasileira na conquista da Copa do Mundo de 1970.",
    category: "selecao_brasileira",
    difficulty: "facil"
  },
  {
    id: 117,
    question: "Quem foi o técnico da Seleção Brasileira na conquista da Copa do Mundo de 1962?",
    options: ["Aymoré Moreira", "Vicente Feola", "Paulo Machado de Carvalho"],
    correctAnswer: "Aymoré Moreira",
    explanation: "Aymoré Moreira foi o técnico da Seleção Brasileira na conquista da Copa do Mundo de 1962.",
    category: "selecao_brasileira",
    difficulty: "medio"
  },
  {
    id: 118,
    question: "Quem foi o técnico da Seleção Brasileira na conquista da Copa do Mundo de 1958?",
    options: ["Vicente Feola", "Flávio Costa", "Aymoré Moreira"],
    correctAnswer: "Vicente Feola",
    explanation: "Vicente Feola foi o técnico da Seleção Brasileira na conquista da Copa do Mundo de 1958.",
    category: "selecao_brasileira",
    difficulty: "medio"
  },
  {
    id: 119,
    question: "Qual jogador brasileiro marcou mais gols em Copas do Mundo?",
    options: ["Pelé", "Ronaldo", "Romário"],
    correctAnswer: "Ronaldo",
    explanation: "Ronaldo Fenômeno marcou 15 gols em Copas do Mundo, recorde brasileiro.",
    category: "selecao_brasileira",
    difficulty: "facil"
  },
  {
    id: 120,
    question: "Quantos gols Pelé marcou em Copas do Mundo?",
    options: ["12", "14", "10"],
    correctAnswer: "12",
    explanation: "Pelé marcou 12 gols em Copas do Mundo pela Seleção Brasileira.",
    category: "selecao_brasileira",
    difficulty: "medio"
  },
  {
    id: 121,
    question: "Qual jogador brasileiro disputou mais Copas do Mundo?",
    options: ["Cafu", "Pelé", "Ronaldo"],
    correctAnswer: "Cafu",
    explanation: "Cafu disputou 4 Copas do Mundo (1994, 1998, 2002 e 2006).",
    category: "selecao_brasileira",
    difficulty: "medio"
  },
  {
    id: 122,
    question: "Qual jogador brasileiro foi artilheiro da Copa do Mundo de 2002?",
    options: ["Ronaldo", "Rivaldo", "Ronaldinho Gaúcho"],
    correctAnswer: "Ronaldo",
    explanation: "Ronaldo Fenômeno foi o artilheiro da Copa do Mundo de 2002 com 8 gols.",
    category: "selecao_brasileira",
    difficulty: "facil"
  },
  {
    id: 123,
    question: "Qual jogador brasileiro foi artilheiro da Copa do Mundo de 1994?",
    options: ["Romário", "Bebeto", "Ronaldo"],
    correctAnswer: "Romário",
    explanation: "Romário foi o artilheiro da Copa do Mundo de 1994 com 5 gols.",
    category: "selecao_brasileira",
    difficulty: "medio"
  },
  {
    id: 124,
    question: "Qual jogador brasileiro foi artilheiro da Copa do Mundo de 1962?",
    options: ["Garrincha", "Pelé", "Vavá"],
    correctAnswer: "Garrincha",
    explanation: "Garrincha foi o artilheiro da Copa do Mundo de 1962 com 4 gols, junto com outros jogadores.",
    category: "selecao_brasileira",
    difficulty: "dificil"
  },
  {
    id: 125,
    question: "Qual jogador brasileiro foi artilheiro da Copa do Mundo de 1958?",
    options: ["Pelé", "Vavá", "Didi"],
    correctAnswer: "Vavá",
    explanation: "Vavá foi o artilheiro da Copa do Mundo de 1958 com 5 gols, junto com outros jogadores.",
    category: "selecao_brasileira",
    difficulty: "dificil"
  },
  {
    id: 126,
    question: "Qual foi o placar da final da Copa do Mundo de 2002, vencida pelo Brasil?",
    options: ["2x0", "3x0", "2x1"],
    correctAnswer: "2x0",
    explanation: "Brasil 2x0 Alemanha, com dois gols de Ronaldo Fenômeno.",
    category: "selecao_brasileira",
    difficulty: "facil"
  },
  {
    id: 127,
    question: "Qual foi o placar da final da Copa do Mundo de 1994, vencida pelo Brasil?",
    options: ["0x0 (3x2 nos pênaltis)", "1x0", "2x1"],
    correctAnswer: "0x0 (3x2 nos pênaltis)",
    explanation: "Brasil 0x0 Itália, com vitória brasileira por 3x2 nos pênaltis.",
    category: "selecao_brasileira",
    difficulty: "facil"
  },
  {
    id: 128,
    question: "Qual foi o placar da final da Copa do Mundo de 1970, vencida pelo Brasil?",
    options: ["4x1", "3x1", "2x1"],
    correctAnswer: "4x1",
    explanation: "Brasil 4x1 Itália, com gols de Pelé, Gérson, Jairzinho e Carlos Alberto Torres.",
    category: "selecao_brasileira",
    difficulty: "facil"
  },
  {
    id: 129,
    question: "Qual foi o placar da final da Copa do Mundo de 1962, vencida pelo Brasil?",
    options: ["3x1", "2x0", "4x2"],
    correctAnswer: "3x1",
    explanation: "Brasil 3x1 Tchecoslováquia, com gols de Amarildo, Zito e Vavá.",
    category: "selecao_brasileira",
    difficulty: "medio"
  },
  {
    id: 130,
    question: "Qual foi o placar da final da Copa do Mundo de 1958, vencida pelo Brasil?",
    options: ["5x2", "3x1", "2x0"],
    correctAnswer: "5x2",
    explanation: "Brasil 5x2 Suécia, com gols de Vavá (2), Pelé (2) e Zagallo.",
    category: "selecao_brasileira",
    difficulty: "medio"
  },
  {
    id: 131,
    question: "Quantas Copas América o Brasil já venceu?",
    options: ["9", "5", "7"],
    correctAnswer: "9",
    explanation: "O Brasil venceu 9 edições da Copa América, a última em 2019.",
    category: "selecao_brasileira",
    difficulty: "medio"
  },
  {
    id: 132,
    question: "Qual jogador brasileiro tem mais partidas pela Seleção?",
    options: ["Cafu", "Roberto Carlos", "Daniel Alves"],
    correctAnswer: "Daniel Alves",
    explanation: "Daniel Alves é o jogador com mais partidas pela Seleção Brasileira.",
    category: "selecao_brasileira",
    difficulty: "medio"
  },
  {
    id: 133,
    question: "Qual foi o primeiro título oficial da Seleção Brasileira?",
    options: ["Copa América de 1919", "Copa do Mundo de 1958", "Copa Roca de 1914"],
    correctAnswer: "Copa América de 1919",
    explanation: "O Brasil conquistou seu primeiro título oficial na Copa América de 1919, na época chamada de Campeonato Sul-Americano.",
    category: "selecao_brasileira",
    difficulty: "dificil"
  },
  {
    id: 134,
    question: "Qual jogador brasileiro marcou o milésimo gol da Seleção Brasileira?",
    options: ["Pelé", "Zico", "Romário"],
    correctAnswer: "Zico",
    explanation: "Zico marcou o milésimo gol da Seleção Brasileira, em 1981, contra a Tchecoslováquia.",
    category: "selecao_brasileira",
    difficulty: "dificil"
  },
  {
    id: 135,
    question: "Qual foi o maior placar da Seleção Brasileira em jogos oficiais?",
    options: ["10x1 contra a Bolívia", "8x0 contra a China", "7x1 contra o Haiti"],
    correctAnswer: "10x1 contra a Bolívia",
    explanation: "Brasil 10x1 Bolívia, em 1949, pela Copa América.",
    category: "selecao_brasileira",
    difficulty: "dificil"
  },
  {
    id: 136,
    question: "Qual jogador marcou o gol do título da Copa do Mundo de 1994?",
    options: ["Romário", "Bebeto", "Dunga"],
    correctAnswer: "Não houve gol decisivo",
    explanation: "A final terminou 0x0 e o Brasil venceu nos pênaltis. O pênalti decisivo foi cobrado por Dunga.",
    category: "selecao_brasileira",
    difficulty: "medio"
  },
  {
    id: 137,
    question: "Qual jogador marcou o gol do título da Copa do Mundo de 2002?",
    options: ["Ronaldo", "Rivaldo", "Ronaldinho Gaúcho"],
    correctAnswer: "Ronaldo",
    explanation: "Ronaldo marcou os dois gols da vitória por 2x0 sobre a Alemanha na final da Copa de 2002.",
    category: "selecao_brasileira",
    difficulty: "facil"
  },
  {
    id: 138,
    question: "Qual foi a maior goleada sofrida pela Seleção Brasileira em Copas do Mundo?",
    options: ["Alemanha 7x1 Brasil (2014)", "Hungria 4x2 Brasil (1954)", "França 3x0 Brasil (1998)"],
    correctAnswer: "Alemanha 7x1 Brasil (2014)",
    explanation: "Brasil 1x7 Alemanha, na semifinal da Copa do Mundo de 2014, no Brasil.",
    category: "selecao_brasileira",
    difficulty: "facil"
  },
  {
    id: 139,
    question: "Qual foi o primeiro adversário do Brasil em Copas do Mundo?",
    options: ["Iugoslávia", "México", "Espanha"],
    correctAnswer: "Iugoslávia",
    explanation: "O Brasil enfrentou a Iugoslávia na sua estreia em Copas do Mundo, em 1930, perdendo por 2x1.",
    category: "selecao_brasileira",
    difficulty: "dificil"
  },
  {
    id: 140,
    question: "Qual é o atual técnico da Seleção Brasileira (2023)?",
    options: ["Dorival Júnior", "Fernando Diniz", "Tite"],
    correctAnswer: "Dorival Júnior",
    explanation: "Dorival Júnior é o técnico da Seleção Brasileira desde janeiro de 2024.",
    category: "selecao_brasileira",
    difficulty: "facil"
  },
  
  // PREMIER LEAGUE (30 perguntas)
  {
    id: 141,
    question: "Qual clube venceu a Premier League na temporada 2022/23?",
    options: ["Arsenal", "Manchester City", "Liverpool"],
    correctAnswer: "Manchester City",
    explanation: "O Manchester City conquistou a Premier League 2022/23, seu terceiro título consecutivo sob o comando de Pep Guardiola.",
    category: "premier_league",
    difficulty: "facil"
  },
  {
    id: 142,
    question: "Qual jogador detém o recorde de mais gols em uma única temporada da Premier League (38 jogos)?",
    options: ["Mohamed Salah", "Alan Shearer", "Erling Haaland"],
    correctAnswer: "Erling Haaland",
    explanation: "Erling Haaland marcou 36 gols na temporada 2022/23, quebrando o recorde anterior.",
    category: "premier_league",
    difficulty: "facil"
  },
  {
    id: 143,
    question: "Qual clube inglês é conhecido como 'The Red Devils'?",
    options: ["Liverpool", "Manchester United", "Arsenal"],
    correctAnswer: "Manchester United",
    explanation: "Manchester United é conhecido como 'The Red Devils' (Os Diabos Vermelhos).",
    category: "premier_league",
    difficulty: "facil"
  },
  {
    id: 144,
    question: "Qual time foi o primeiro campeão da Premier League em sua era moderna (a partir de 1992)?",
    options: ["Manchester United", "Arsenal", "Blackburn Rovers"],
    correctAnswer: "Manchester United",
    explanation: "Manchester United foi o primeiro campeão da Premier League em 1992/93, sob o comando de Sir Alex Ferguson.",
    category: "premier_league",
    difficulty: "medio"
  },
  {
    id: 145,
    question: "Qual jogador tem mais assistências na história da Premier League?",
    options: ["Ryan Giggs", "Cesc Fàbregas", "Kevin De Bruyne"],
    correctAnswer: "Ryan Giggs",
    explanation: "Ryan Giggs detém o recorde de mais assistências na história da Premier League, com 162.",
    category: "premier_league",
    difficulty: "medio"
  },
  {
    id: 146,
    question: "Qual jogador marcou o gol mais rápido da história da Premier League?",
    options: ["Shane Long", "Alan Shearer", "Ledley King"],
    correctAnswer: "Shane Long",
    explanation: "Shane Long marcou após 7,69 segundos pelo Southampton contra o Watford em 2019.",
    category: "premier_league",
    difficulty: "dificil"
  },
  {
    id: 147,
    question: "Qual clube inglês é conhecido como 'The Gunners'?",
    options: ["Chelsea", "Arsenal", "Tottenham"],
    correctAnswer: "Arsenal",
    explanation: "O Arsenal é conhecido como 'The Gunners' (Os Artilheiros) devido ao seu símbolo com canhões.",
    category: "premier_league",
    difficulty: "facil"
  },
  {
    id: 148,
    question: "Qual jogador detém o recorde de mais gols na história da Premier League?",
    options: ["Wayne Rooney", "Alan Shearer", "Thierry Henry"],
    correctAnswer: "Alan Shearer",
    explanation: "Alan Shearer é o maior artilheiro da história da Premier League com 260 gols.",
    category: "premier_league",
    difficulty: "facil"
  },
  {
    id: 149,
    question: "Qual clube tem mais títulos da Premier League desde sua criação em 1992?",
    options: ["Manchester United", "Manchester City", "Chelsea"],
    correctAnswer: "Manchester United",
    explanation: "O Manchester United conquistou 13 títulos da Premier League desde 1992.",
    category: "premier_league",
    difficulty: "facil"
  },
  {
    id: 150,
    question: "Qual clube inglês é conhecido como 'The Blues'?",
    options: ["Chelsea", "Everton", "Manchester City"],
    correctAnswer: "Chelsea",
    explanation: "O Chelsea é conhecido como 'The Blues' devido à cor azul de seu uniforme.",
    category: "premier_league",
    difficulty: "facil"
  },
  {
    id: 151,
    question: "Qual clube inglês é conhecido como 'The Spurs'?",
    options: ["Tottenham Hotspur", "West Ham", "Crystal Palace"],
    correctAnswer: "Tottenham Hotspur",
    explanation: "O Tottenham Hotspur é conhecido como 'The Spurs'.",
    category: "premier_league",
    difficulty: "facil"
  },
  {
    id: 152,
    question: "Qual clube inglês é conhecido como 'The Toffees'?",
    options: ["Everton", "Leicester City", "Aston Villa"],
    correctAnswer: "Everton",
    explanation: "O Everton é conhecido como 'The Toffees'.",
    category: "premier_league",
    difficulty: "medio"
  },
  {
    id: 153,
    question: "Qual clube inglês é conhecido como 'The Hammers'?",
    options: ["West Ham", "Newcastle", "Southampton"],
    correctAnswer: "West Ham",
    explanation: "O West Ham United é conhecido como 'The Hammers' (Os Martelos).",
    category: "premier_league",
    difficulty: "medio"
  },
  {
    id: 154,
    question: "Qual clube inglês é conhecido como 'The Magpies'?",
    options: ["Newcastle United", "Brighton", "Fulham"],
    correctAnswer: "Newcastle United",
    explanation: "O Newcastle United é conhecido como 'The Magpies' (As Pegas).",
    category: "premier_league",
    difficulty: "medio"
  },
  {
    id: 155,
    question: "Qual clube inglês é conhecido como 'The Foxes'?",
    options: ["Leicester City", "Wolverhampton", "Nottingham Forest"],
    correctAnswer: "Leicester City",
    explanation: "O Leicester City é conhecido como 'The Foxes' (As Raposas).",
    category: "premier_league",
    difficulty: "medio"
  },
  {
    id: 156,
    question: "Qual clube inglês é conhecido como 'The Clarets'?",
    options: ["Burnley", "Aston Villa", "Brentford"],
    correctAnswer: "Burnley",
    explanation: "O Burnley é conhecido como 'The Clarets' devido à cor vinho de seu uniforme.",
    category: "premier_league",
    difficulty: "dificil"
  },
  {
    id: 157,
    question: "Qual clube inglês é conhecido como 'The Saints'?",
    options: ["Southampton", "Brighton", "Bournemouth"],
    correctAnswer: "Southampton",
    explanation: "O Southampton é conhecido como 'The Saints' (Os Santos).",
    category: "premier_league",
    difficulty: "medio"
  },
  {
    id: 158,
    question: "Qual clube inglês é conhecido como 'The Seagulls'?",
    options: ["Brighton & Hove Albion", "Crystal Palace", "Bournemouth"],
    correctAnswer: "Brighton & Hove Albion",
    explanation: "O Brighton & Hove Albion é conhecido como 'The Seagulls' (As Gaivotas).",
    category: "premier_league",
    difficulty: "medio"
  },
  {
    id: 159,
    question: "Qual clube inglês é conhecido como 'The Eagles'?",
    options: ["Crystal Palace", "West Bromwich", "Watford"],
    correctAnswer: "Crystal Palace",
    explanation: "O Crystal Palace é conhecido como 'The Eagles' (As Águias).",
    category: "premier_league",
    difficulty: "medio"
  },
  {
    id: 160,
    question: "Qual clube inglês é conhecido como 'The Wolves'?",
    options: ["Wolverhampton Wanderers", "Sheffield United", "Leeds United"],
    correctAnswer: "Wolverhampton Wanderers",
    explanation: "O Wolverhampton Wanderers é conhecido como 'The Wolves' (Os Lobos).",
    category: "premier_league",
    difficulty: "medio"
  },
  {
    id: 161,
    question: "Qual clube venceu a Premier League de forma invicta?",
    options: ["Arsenal", "Manchester United", "Chelsea"],
    correctAnswer: "Arsenal",
    explanation: "O Arsenal foi campeão da Premier League de forma invicta na temporada 2003/04, ficando conhecido como 'The Invincibles'.",
    category: "premier_league",
    difficulty: "facil"
  },
  {
    id: 162,
    question: "Qual jogador tem mais títulos da Premier League?",
    options: ["Ryan Giggs", "Paul Scholes", "Gary Neville"],
    correctAnswer: "Ryan Giggs",
    explanation: "Ryan Giggs conquistou 13 títulos da Premier League pelo Manchester United.",
    category: "premier_league",
    difficulty: "medio"
  },
  {
    id: 163,
    question: "Qual técnico tem mais títulos da Premier League?",
    options: ["Sir Alex Ferguson", "Pep Guardiola", "José Mourinho"],
    correctAnswer: "Sir Alex Ferguson",
    explanation: "Sir Alex Ferguson conquistou 13 títulos da Premier League pelo Manchester United.",
    category: "premier_league",
    difficulty: "facil"
  },
  {
    id: 164,
    question: "Qual clube conquistou a Premier League na temporada 2015/16, surpreendendo o mundo do futebol?",
    options: ["Leicester City", "Tottenham", "West Ham"],
    correctAnswer: "Leicester City",
    explanation: "O Leicester City conquistou a Premier League 2015/16 contra todas as expectativas, sendo considerada uma das maiores surpresas da história do futebol.",
    category: "premier_league",
    difficulty: "facil"
  },
  {
    id: 165,
    question: "Qual jogador marcou mais hat-tricks na história da Premier League?",
    options: ["Sergio Agüero", "Alan Shearer", "Harry Kane"],
    correctAnswer: "Sergio Agüero",
    explanation: "Sergio Agüero detém o recorde de mais hat-tricks na Premier League, com 12.",
    category: "premier_league",
    difficulty: "medio"
  },
  {
    id: 166,
    question: "Qual jogador marcou o gol mais importante da história do Manchester City na Premier League?",
    options: ["Sergio Agüero", "Vincent Kompany", "Yaya Touré"],
    correctAnswer: "Sergio Agüero",
    explanation: "Sergio Agüero marcou o gol do título do Manchester City nos últimos segundos da temporada 2011/12, conhecido como 'Agüerooooo'.",
    category: "premier_league",
    difficulty: "facil"
  },
  {
    id: 167,
    question: "Qual clube tem a maior goleada da história da Premier League?",
    options: ["Manchester United", "Liverpool", "Leicester City"],
    correctAnswer: "Manchester United",
    explanation: "Manchester United 9x0 Ipswich Town em 1995, igualado posteriormente por Leicester 9x0 Southampton em 2019 e Manchester United 9x0 Southampton em 2021.",
    category: "premier_league",
    difficulty: "medio"
  },
  {
    id: 168,
    question: "Qual jogador marcou mais gols em uma única partida da Premier League?",
    options: ["Andy Cole", "Alan Shearer", "Sergio Agüero"],
    correctAnswer: "Andy Cole",
    explanation: "Andy Cole marcou 5 gols em uma única partida da Premier League pelo Manchester United contra o Ipswich Town em 1995.",
    category: "premier_league",
    difficulty: "dificil"
  },
  {
    id: 169,
    question: "Qual clube foi rebaixado da Premier League com a maior pontuação?",
    options: ["West Ham", "Sheffield United", "Sunderland"],
    correctAnswer: "West Ham",
    explanation: "O West Ham foi rebaixado com 42 pontos na temporada 2002/03, a maior pontuação para um clube rebaixado na Premier League.",
    category: "premier_league",
    difficulty: "dificil"
  },
  {
    id: 170,
    question: "Qual jogador tem mais partidas na história da Premier League?",
    options: ["Gareth Barry", "Ryan Giggs", "Frank Lampard"],
    correctAnswer: "Gareth Barry",
    explanation: "Gareth Barry detém o recorde de mais partidas na Premier League, com 653 jogos.",
    category: "premier_league",
    difficulty: "medio"
  },
  
  // LA LIGA (30 perguntas)
  {
    id: 171,
    question: "Qual clube espanhol tem mais títulos da La Liga?",
    options: ["Barcelona", "Real Madrid", "Atlético de Madrid"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid é o maior campeão da La Liga com 35 títulos.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 172,
    question: "Qual jogador é o maior artilheiro da história da La Liga?",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Telmo Zarra"],
    correctAnswer: "Lionel Messi",
    explanation: "Lionel Messi é o maior artilheiro da história da La Liga com 474 gols.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 173,
    question: "Qual clube espanhol é conhecido como 'Los Blancos'?",
    options: ["Real Madrid", "Valencia", "Sevilla"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid é conhecido como 'Los Blancos' devido ao uniforme branco.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 174,
    question: "Qual clube espanhol é conhecido como 'Blaugrana'?",
    options: ["Barcelona", "Atlético de Madrid", "Athletic Bilbao"],
    correctAnswer: "Barcelona",
    explanation: "O Barcelona é conhecido como 'Blaugrana' devido às cores azul e grená de seu uniforme.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 175,
    question: "Qual clube espanhol é conhecido como 'Los Colchoneros'?",
    options: ["Atlético de Madrid", "Sevilla", "Valencia"],
    correctAnswer: "Atlético de Madrid",
    explanation: "O Atlético de Madrid é conhecido como 'Los Colchoneros' (Os Colchoneiros).",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 176,
    question: "Qual clube espanhol é conhecido como 'Los Che'?",
    options: ["Valencia", "Villarreal", "Real Sociedad"],
    correctAnswer: "Valencia",
    explanation: "O Valencia é conhecido como 'Los Che'.",
    category: "la_liga",
    difficulty: "medio"
  },
  {
    id: 177,
    question: "Qual clube espanhol é conhecido como 'Los Leones'?",
    options: ["Athletic Bilbao", "Sporting Gijón", "Espanyol"],
    correctAnswer: "Athletic Bilbao",
    explanation: "O Athletic Bilbao é conhecido como 'Los Leones' (Os Leões).",
    category: "la_liga",
    difficulty: "medio"
  },
  {
    id: 178,
    question: "Qual clube espanhol é conhecido como 'Los Nervionenses'?",
    options: ["Sevilla", "Real Betis", "Cádiz"],
    correctAnswer: "Sevilla",
    explanation: "O Sevilla é conhecido como 'Los Nervionenses' devido à localização do estádio no bairro de Nervión.",
    category: "la_liga",
    difficulty: "dificil"
  },
  {
    id: 179,
    question: "Qual clube espanhol é conhecido como 'Los Verdiblancos'?",
    options: ["Real Betis", "Elche", "Racing Santander"],
    correctAnswer: "Real Betis",
    explanation: "O Real Betis é conhecido como 'Los Verdiblancos' devido às cores verde e branca de seu uniforme.",
    category: "la_liga",
    difficulty: "medio"
  },
  {
    id: 180,
    question: "Qual clube espanhol é conhecido como 'El Submarino Amarillo'?",
    options: ["Villarreal", "Las Palmas", "Cádiz"],
    correctAnswer: "Villarreal",
    explanation: "O Villarreal é conhecido como 'El Submarino Amarillo' (O Submarino Amarelo) devido à cor de seu uniforme.",
    category: "la_liga",
    difficulty: "medio"
  },
  {
    id: 181,
    question: "Qual jogador tem mais partidas na história da La Liga?",
    options: ["Andoni Zubizarreta", "Joaquín", "Raúl González"],
    correctAnswer: "Andoni Zubizarreta",
    explanation: "Andoni Zubizarreta detém o recorde de mais partidas na La Liga, com 622 jogos.",
    category: "la_liga",
    difficulty: "dificil"
  },
  {
    id: 182,
    question: "Qual jogador marcou mais hat-tricks na história da La Liga?",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Telmo Zarra"],
    correctAnswer: "Lionel Messi",
    explanation: "Lionel Messi detém o recorde de mais hat-tricks na La Liga, com 36.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 183,
    question: "Qual clube foi campeão da La Liga na temporada 2022/23?",
    options: ["Barcelona", "Real Madrid", "Atlético de Madrid"],
    correctAnswer: "Barcelona",
    explanation: "O Barcelona foi campeão da La Liga na temporada 2022/23, sob o comando de Xavi Hernández.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 184,
    question: "Qual clube foi campeão da La Liga na temporada 2021/22?",
    options: ["Real Madrid", "Barcelona", "Sevilla"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid foi campeão da La Liga na temporada 2021/22, sob o comando de Carlo Ancelotti.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 185,
    question: "Qual clube foi campeão da La Liga na temporada 2020/21?",
    options: ["Atlético de Madrid", "Real Madrid", "Barcelona"],
    correctAnswer: "Atlético de Madrid",
    explanation: "O Atlético de Madrid foi campeão da La Liga na temporada 2020/21, sob o comando de Diego Simeone.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 186,
    question: "Qual clube foi campeão da La Liga na temporada 2019/20?",
    options: ["Real Madrid", "Barcelona", "Atlético de Madrid"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid foi campeão da La Liga na temporada 2019/20, sob o comando de Zinedine Zidane.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 187,
    question: "Qual clube foi campeão da La Liga na temporada 2018/19?",
    options: ["Barcelona", "Real Madrid", "Valencia"],
    correctAnswer: "Barcelona",
    explanation: "O Barcelona foi campeão da La Liga na temporada 2018/19, sob o comando de Ernesto Valverde.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 188,
    question: "Qual clube foi campeão da La Liga na temporada 2017/18?",
    options: ["Barcelona", "Atlético de Madrid", "Real Madrid"],
    correctAnswer: "Barcelona",
    explanation: "O Barcelona foi campeão da La Liga na temporada 2017/18, sob o comando de Ernesto Valverde.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 189,
    question: "Qual clube foi campeão da La Liga na temporada 2016/17?",
    options: ["Real Madrid", "Barcelona", "Sevilla"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid foi campeão da La Liga na temporada 2016/17, sob o comando de Zinedine Zidane.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 190,
    question: "Qual clube foi campeão da La Liga na temporada 2015/16?",
    options: ["Barcelona", "Real Madrid", "Atlético de Madrid"],
    correctAnswer: "Barcelona",
    explanation: "O Barcelona foi campeão da La Liga na temporada 2015/16, sob o comando de Luis Enrique.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 191,
    question: "Qual clube foi campeão da La Liga na temporada 2014/15?",
    options: ["Barcelona", "Real Madrid", "Valencia"],
    correctAnswer: "Barcelona",
    explanation: "O Barcelona foi campeão da La Liga na temporada 2014/15, sob o comando de Luis Enrique.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 192,
    question: "Qual clube foi campeão da La Liga na temporada 2013/14?",
    options: ["Atlético de Madrid", "Barcelona", "Real Madrid"],
    correctAnswer: "Atlético de Madrid",
    explanation: "O Atlético de Madrid foi campeão da La Liga na temporada 2013/14, sob o comando de Diego Simeone.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 193,
    question: "Qual clube foi campeão da La Liga na temporada 2012/13?",
    options: ["Barcelona", "Real Madrid", "Atlético de Madrid"],
    correctAnswer: "Barcelona",
    explanation: "O Barcelona foi campeão da La Liga na temporada 2012/13, sob o comando de Tito Vilanova.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 194,
    question: "Qual clube foi campeão da La Liga na temporada 2011/12?",
    options: ["Real Madrid", "Barcelona", "Valencia"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid foi campeão da La Liga na temporada 2011/12, sob o comando de José Mourinho.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 195,
    question: "Qual clube foi campeão da La Liga na temporada 2010/11?",
    options: ["Barcelona", "Real Madrid", "Villarreal"],
    correctAnswer: "Barcelona",
    explanation: "O Barcelona foi campeão da La Liga na temporada 2010/11, sob o comando de Pep Guardiola.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 196,
    question: "Qual clube foi campeão da La Liga na temporada 2009/10?",
    options: ["Barcelona", "Real Madrid", "Sevilla"],
    correctAnswer: "Barcelona",
    explanation: "O Barcelona foi campeão da La Liga na temporada 2009/10, sob o comando de Pep Guardiola.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 197,
    question: "Qual clube foi campeão da La Liga na temporada 2008/09?",
    options: ["Barcelona", "Real Madrid", "Atlético de Madrid"],
    correctAnswer: "Barcelona",
    explanation: "O Barcelona foi campeão da La Liga na temporada 2008/09, sob o comando de Pep Guardiola.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 198,
    question: "Qual clube foi campeão da La Liga na temporada 2007/08?",
    options: ["Real Madrid", "Barcelona", "Villarreal"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid foi campeão da La Liga na temporada 2007/08, sob o comando de Bernd Schuster.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 199,
    question: "Qual clube foi campeão da La Liga na temporada 2006/07?",
    options: ["Real Madrid", "Barcelona", "Sevilla"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid foi campeão da La Liga na temporada 2006/07, sob o comando de Fabio Capello.",
    category: "la_liga",
    difficulty: "facil"
  },
  {
    id: 200,
    question: "Qual clube foi campeão da La Liga na temporada 2005/06?",
    options: ["Barcelona", "Real Madrid", "Valencia"],
    correctAnswer: "Barcelona",
    explanation: "O Barcelona foi campeão da La Liga na temporada 2005/06, sob o comando de Frank Rijkaard.",
    category: "la_liga",
    difficulty: "facil"
  },
  
  // SERIE A ITALIANA (30 perguntas)
  {
    id: 201,
    question: "Qual clube italiano tem mais títulos da Serie A?",
    options: ["Milan", "Inter de Milão", "Juventus"],
    correctAnswer: "Juventus",
    explanation: "A Juventus é o clube com mais títulos da Serie A italiana, com 36 conquistas.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 202,
    question: "Qual jogador é o maior artilheiro da história da Serie A italiana?",
    options: ["Francesco Totti", "Silvio Piola", "Alessandro Del Piero"],
    correctAnswer: "Silvio Piola",
    explanation: "Silvio Piola é o maior artilheiro da história da Serie A italiana com 274 gols.",
    category: "serie_a",
    difficulty: "medio"
  },
  {
    id: 203,
    question: "Qual clube italiano é conhecido como 'La Vecchia Signora'?",
    options: ["Juventus", "Milan", "Inter de Milão"],
    correctAnswer: "Juventus",
    explanation: "A Juventus é conhecida como 'La Vecchia Signora' (A Velha Senhora).",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 204,
    question: "Qual clube italiano é conhecido como 'I Rossoneri'?",
    options: ["Milan", "Torino", "Bologna"],
    correctAnswer: "Milan",
    explanation: "O Milan é conhecido como 'I Rossoneri' (Os Vermelhos e Pretos) devido às cores de seu uniforme.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 205,
    question: "Qual clube italiano é conhecido como 'I Nerazzurri'?",
    options: ["Inter de Milão", "Atalanta", "Udinese"],
    correctAnswer: "Inter de Milão",
    explanation: "A Inter de Milão é conhecida como 'I Nerazzurri' (Os Azuis e Pretos) devido às cores de seu uniforme.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 206,
    question: "Qual clube italiano é conhecido como 'La Lupa'?",
    options: ["Roma", "Lazio", "Fiorentina"],
    correctAnswer: "Roma",
    explanation: "A Roma é conhecida como 'La Lupa' (A Loba) devido ao símbolo da cidade de Roma.",
    category: "serie_a",
    difficulty: "medio"
  },
  {
    id: 207,
    question: "Qual clube italiano é conhecido como 'I Biancocelesti'?",
    options: ["Lazio", "Napoli", "Sampdoria"],
    correctAnswer: "Lazio",
    explanation: "A Lazio é conhecida como 'I Biancocelesti' (Os Brancos e Celestes) devido às cores de seu uniforme.",
    category: "serie_a",
    difficulty: "medio"
  },
  {
    id: 208,
    question: "Qual clube italiano é conhecido como 'I Viola'?",
    options: ["Fiorentina", "Cagliari", "Parma"],
    correctAnswer: "Fiorentina",
    explanation: "A Fiorentina é conhecida como 'I Viola' (Os Violetas) devido à cor de seu uniforme.",
    category: "serie_a",
    difficulty: "medio"
  },
  {
    id: 209,
    question: "Qual clube italiano é conhecido como 'I Partenopei'?",
    options: ["Napoli", "Genoa", "Palermo"],
    correctAnswer: "Napoli",
    explanation: "O Napoli é conhecido como 'I Partenopei' em referência à antiga cidade grega de Partênope, que deu origem a Nápoles.",
    category: "serie_a",
    difficulty: "medio"
  },
  {
    id: 210,
    question: "Qual clube italiano é conhecido como 'La Dea'?",
    options: ["Atalanta", "Verona", "Empoli"],
    correctAnswer: "Atalanta",
    explanation: "A Atalanta é conhecida como 'La Dea' (A Deusa) em referência à deusa grega Atalanta.",
    category: "serie_a",
    difficulty: "medio"
  },
  {
    id: 211,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2022/23?",
    options: ["Napoli", "Inter de Milão", "Milan"],
    correctAnswer: "Napoli",
    explanation: "O Napoli foi campeão da Serie A na temporada 2022/23, sob o comando de Luciano Spalletti.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 212,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2021/22?",
    options: ["Milan", "Inter de Milão", "Juventus"],
    correctAnswer: "Milan",
    explanation: "O Milan foi campeão da Serie A na temporada 2021/22, sob o comando de Stefano Pioli.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 213,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2020/21?",
    options: ["Inter de Milão", "Milan", "Juventus"],
    correctAnswer: "Inter de Milão",
    explanation: "A Inter de Milão foi campeã da Serie A na temporada 2020/21, sob o comando de Antonio Conte.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 214,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2019/20?",
    options: ["Juventus", "Inter de Milão", "Lazio"],
    correctAnswer: "Juventus",
    explanation: "A Juventus foi campeã da Serie A na temporada 2019/20, sob o comando de Maurizio Sarri.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 215,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2018/19?",
    options: ["Juventus", "Napoli", "Inter de Milão"],
    correctAnswer: "Juventus",
    explanation: "A Juventus foi campeã da Serie A na temporada 2018/19, sob o comando de Massimiliano Allegri.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 216,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2017/18?",
    options: ["Juventus", "Napoli", "Roma"],
    correctAnswer: "Juventus",
    explanation: "A Juventus foi campeã da Serie A na temporada 2017/18, sob o comando de Massimiliano Allegri.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 217,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2016/17?",
    options: ["Juventus", "Roma", "Napoli"],
    correctAnswer: "Juventus",
    explanation: "A Juventus foi campeã da Serie A na temporada 2016/17, sob o comando de Massimiliano Allegri.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 218,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2015/16?",
    options: ["Juventus", "Napoli", "Roma"],
    correctAnswer: "Juventus",
    explanation: "A Juventus foi campeã da Serie A na temporada 2015/16, sob o comando de Massimiliano Allegri.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 219,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2014/15?",
    options: ["Juventus", "Roma", "Lazio"],
    correctAnswer: "Juventus",
    explanation: "A Juventus foi campeã da Serie A na temporada 2014/15, sob o comando de Massimiliano Allegri.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 220,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2013/14?",
    options: ["Juventus", "Roma", "Napoli"],
    correctAnswer: "Juventus",
    explanation: "A Juventus foi campeã da Serie A na temporada 2013/14, sob o comando de Antonio Conte.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 221,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2012/13?",
    options: ["Juventus", "Napoli", "Milan"],
    correctAnswer: "Juventus",
    explanation: "A Juventus foi campeã da Serie A na temporada 2012/13, sob o comando de Antonio Conte.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 222,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2011/12?",
    options: ["Juventus", "Milan", "Udinese"],
    correctAnswer: "Juventus",
    explanation: "A Juventus foi campeã da Serie A na temporada 2011/12, sob o comando de Antonio Conte.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 223,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2010/11?",
    options: ["Milan", "Inter de Milão", "Napoli"],
    correctAnswer: "Milan",
    explanation: "O Milan foi campeão da Serie A na temporada 2010/11, sob o comando de Massimiliano Allegri.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 224,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2009/10?",
    options: ["Inter de Milão", "Roma", "Milan"],
    correctAnswer: "Inter de Milão",
    explanation: "A Inter de Milão foi campeã da Serie A na temporada 2009/10, sob o comando de José Mourinho.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 225,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2008/09?",
    options: ["Inter de Milão", "Juventus", "Milan"],
    correctAnswer: "Inter de Milão",
    explanation: "A Inter de Milão foi campeã da Serie A na temporada 2008/09, sob o comando de José Mourinho.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 226,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2007/08?",
    options: ["Inter de Milão", "Roma", "Juventus"],
    correctAnswer: "Inter de Milão",
    explanation: "A Inter de Milão foi campeã da Serie A na temporada 2007/08, sob o comando de Roberto Mancini.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 227,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2006/07?",
    options: ["Inter de Milão", "Roma", "Milan"],
    correctAnswer: "Inter de Milão",
    explanation: "A Inter de Milão foi campeã da Serie A na temporada 2006/07, sob o comando de Roberto Mancini.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 228,
    question: "Qual clube foi campeão da Serie A italiana na temporada 2005/06?",
    options: ["Inter de Milão", "Roma", "Milan"],
    correctAnswer: "Inter de Milão",
    explanation: "A Inter de Milão foi declarada campeã da Serie A na temporada 2005/06 após o escândalo do Calciopoli.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 229,
    question: "Qual clube italiano conquistou a 'tríplice coroa' (Serie A, Copa da Itália e Champions League) na temporada 2009/10?",
    options: ["Inter de Milão", "Juventus", "Milan"],
    correctAnswer: "Inter de Milão",
    explanation: "A Inter de Milão conquistou a tríplice coroa na temporada 2009/10, sob o comando de José Mourinho.",
    category: "serie_a",
    difficulty: "facil"
  },
  {
    id: 230,
    question: "Qual jogador tem mais títulos da Serie A italiana?",
    options: ["Gianluigi Buffon", "Paolo Maldini", "Alessandro Del Piero"],
    correctAnswer: "Gianluigi Buffon",
    explanation: "Gianluigi Buffon conquistou 10 títulos da Serie A italiana (9 com a Juventus e 1 com o Parma).",
    category: "serie_a",
    difficulty: "medio"
  },
  
  // BUNDESLIGA (30 perguntas)
  {
    id: 231,
    question: "Qual clube alemão tem mais títulos da Bundesliga?",
    options: ["Borussia Dortmund", "Bayern de Munique", "Bayer Leverkusen"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique é o maior campeão da Bundesliga com 32 títulos.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 232,
    question: "Qual jogador é o maior artilheiro da história da Bundesliga?",
    options: ["Gerd Müller", "Robert Lewandowski", "Klaus Fischer"],
    correctAnswer: "Gerd Müller",
    explanation: "Gerd Müller é o maior artilheiro da história da Bundesliga com 365 gols.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 233,
    question: "Em que ano foi disputada a primeira edição da Bundesliga?",
    options: ["1963", "1953", "1973"],
    correctAnswer: "1963",
    explanation: "A primeira edição da Bundesliga foi disputada na temporada 1963/64.",
    category: "bundesliga",
    difficulty: "medio"
  },
  {
    id: 234,
    question: "Qual foi o primeiro clube campeão da Bundesliga?",
    options: ["1. FC Köln", "Bayern de Munique", "Borussia Dortmund"],
    correctAnswer: "1. FC Köln",
    explanation: "O 1. FC Köln (Colônia) foi o primeiro campeão da Bundesliga na temporada 1963/64.",
    category: "bundesliga",
    difficulty: "dificil"
  },
  {
    id: 235,
    question: "Qual clube alemão é conhecido como 'Die Roten'?",
    options: ["Bayern de Munique", "Stuttgart", "Union Berlin"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique é conhecido como 'Die Roten' (Os Vermelhos) devido à cor de seu uniforme.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 236,
    question: "Qual clube alemão é conhecido como 'Die Schwarzgelben'?",
    options: ["Borussia Dortmund", "Eintracht Frankfurt", "Werder Bremen"],
    correctAnswer: "Borussia Dortmund",
    explanation: "O Borussia Dortmund é conhecido como 'Die Schwarzgelben' (Os Amarelos e Pretos) devido às cores de seu uniforme.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 237,
    question: "Qual clube alemão é conhecido como 'Die Fohlen'?",
    options: ["Borussia Mönchengladbach", "Wolfsburg", "Hoffenheim"],
    correctAnswer: "Borussia Mönchengladbach",
    explanation: "O Borussia Mönchengladbach é conhecido como 'Die Fohlen' (Os Potros) devido ao estilo de jogo jovem e enérgico nos anos 1970.",
    category: "bundesliga",
    difficulty: "medio"
  },
  {
    id: 238,
    question: "Qual clube alemão é conhecido como 'Die Werkself'?",
    options: ["Bayer Leverkusen", "RB Leipzig", "Schalke 04"],
    correctAnswer: "Bayer Leverkusen",
    explanation: "O Bayer Leverkusen é conhecido como 'Die Werkself' (O Time da Fábrica) devido à sua origem como clube da empresa Bayer.",
    category: "bundesliga",
    difficulty: "medio"
  },
  {
    id: 239,
    question: "Qual clube alemão é conhecido como 'Die Königsblauen'?",
    options: ["Schalke 04", "Hertha Berlin", "Hamburger SV"],
    correctAnswer: "Schalke 04",
    explanation: "O Schalke 04 é conhecido como 'Die Königsblauen' (Os Azuis Reais) devido à cor de seu uniforme.",
    category: "bundesliga",
    difficulty: "medio"
  },
  {
    id: 240,
    question: "Qual clube alemão é conhecido como 'Die Roten Bullen'?",
    options: ["RB Leipzig", "Mainz 05", "Freiburg"],
    correctAnswer: "RB Leipzig",
    explanation: "O RB Leipzig é conhecido como 'Die Roten Bullen' (Os Touros Vermelhos) devido ao seu patrocinador Red Bull.",
    category: "bundesliga",
    difficulty: "medio"
  },
  {
    id: 241,
    question: "Qual clube foi campeão da Bundesliga na temporada 2022/23?",
    options: ["Bayern de Munique", "Borussia Dortmund", "Bayer Leverkusen"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique foi campeão da Bundesliga na temporada 2022/23.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 242,
    question: "Qual clube foi campeão da Bundesliga na temporada 2021/22?",
    options: ["Bayern de Munique", "Borussia Dortmund", "RB Leipzig"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique foi campeão da Bundesliga na temporada 2021/22.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 243,
    question: "Qual clube foi campeão da Bundesliga na temporada 2020/21?",
    options: ["Bayern de Munique", "RB Leipzig", "Wolfsburg"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique foi campeão da Bundesliga na temporada 2020/21.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 244,
    question: "Qual clube foi campeão da Bundesliga na temporada 2019/20?",
    options: ["Bayern de Munique", "Borussia Dortmund", "Borussia Mönchengladbach"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique foi campeão da Bundesliga na temporada 2019/20.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 245,
    question: "Qual clube foi campeão da Bundesliga na temporada 2018/19?",
    options: ["Bayern de Munique", "Borussia Dortmund", "RB Leipzig"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique foi campeão da Bundesliga na temporada 2018/19.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 246,
    question: "Qual clube foi campeão da Bundesliga na temporada 2017/18?",
    options: ["Bayern de Munique", "Schalke 04", "Hoffenheim"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique foi campeão da Bundesliga na temporada 2017/18.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 247,
    question: "Qual clube foi campeão da Bundesliga na temporada 2016/17?",
    options: ["Bayern de Munique", "RB Leipzig", "Borussia Dortmund"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique foi campeão da Bundesliga na temporada 2016/17.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 248,
    question: "Qual clube foi campeão da Bundesliga na temporada 2015/16?",
    options: ["Bayern de Munique", "Borussia Dortmund", "Bayer Leverkusen"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique foi campeão da Bundesliga na temporada 2015/16.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 249,
    question: "Qual clube foi campeão da Bundesliga na temporada 2014/15?",
    options: ["Bayern de Munique", "Wolfsburg", "Borussia Mönchengladbach"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique foi campeão da Bundesliga na temporada 2014/15.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 250,
    question: "Qual clube foi campeão da Bundesliga na temporada 2013/14?",
    options: ["Bayern de Munique", "Borussia Dortmund", "Schalke 04"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique foi campeão da Bundesliga na temporada 2013/14.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 251,
    question: "Qual clube foi campeão da Bundesliga na temporada 2012/13?",
    options: ["Bayern de Munique", "Borussia Dortmund", "Bayer Leverkusen"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique foi campeão da Bundesliga na temporada 2012/13.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 252,
    question: "Qual clube foi campeão da Bundesliga na temporada 2011/12?",
    options: ["Borussia Dortmund", "Bayern de Munique", "Schalke 04"],
    correctAnswer: "Borussia Dortmund",
    explanation: "O Borussia Dortmund foi campeão da Bundesliga na temporada 2011/12, sob o comando de Jürgen Klopp.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 253,
    question: "Qual clube foi campeão da Bundesliga na temporada 2010/11?",
    options: ["Borussia Dortmund", "Bayern de Munique", "Bayer Leverkusen"],
    correctAnswer: "Borussia Dortmund",
    explanation: "O Borussia Dortmund foi campeão da Bundesliga na temporada 2010/11, sob o comando de Jürgen Klopp.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 254,
    question: "Qual clube foi campeão da Bundesliga na temporada 2009/10?",
    options: ["Bayern de Munique", "Schalke 04", "Werder Bremen"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique foi campeão da Bundesliga na temporada 2009/10, sob o comando de Louis van Gaal.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 255,
    question: "Qual clube foi campeão da Bundesliga na temporada 2008/09?",
    options: ["Wolfsburg", "Bayern de Munique", "Stuttgart"],
    correctAnswer: "Wolfsburg",
    explanation: "O Wolfsburg foi campeão da Bundesliga na temporada 2008/09, sob o comando de Felix Magath.",
    category: "bundesliga",
    difficulty: "medio"
  },
  {
    id: 256,
    question: "Qual clube foi campeão da Bundesliga na temporada 2007/08?",
    options: ["Bayern de Munique", "Werder Bremen", "Schalke 04"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique foi campeão da Bundesliga na temporada 2007/08, sob o comando de Ottmar Hitzfeld.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 257,
    question: "Qual clube foi campeão da Bundesliga na temporada 2006/07?",
    options: ["Stuttgart", "Schalke 04", "Werder Bremen"],
    correctAnswer: "Stuttgart",
    explanation: "O Stuttgart foi campeão da Bundesliga na temporada 2006/07, sob o comando de Armin Veh.",
    category: "bundesliga",
    difficulty: "medio"
  },
  {
    id: 258,
    question: "Qual clube foi campeão da Bundesliga na temporada 2005/06?",
    options: ["Bayern de Munique", "Werder Bremen", "Hamburger SV"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique foi campeão da Bundesliga na temporada 2005/06, sob o comando de Felix Magath.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 259,
    question: "Qual clube foi campeão da Bundesliga na temporada 2004/05?",
    options: ["Bayern de Munique", "Schalke 04", "Werder Bremen"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique foi campeão da Bundesliga na temporada 2004/05, sob o comando de Felix Magath.",
    category: "bundesliga",
    difficulty: "facil"
  },
  {
    id: 260,
    question: "Qual clube foi campeão da Bundesliga na temporada 2003/04?",
    options: ["Werder Bremen", "Bayern de Munique", "Bayer Leverkusen"],
    correctAnswer: "Werder Bremen",
    explanation: "O Werder Bremen foi campeão da Bundesliga na temporada 2003/04, sob o comando de Thomas Schaaf.",
    category: "bundesliga",
    difficulty: "medio"
  },
  
  // LIGUE 1 (30 perguntas)
  {
    id: 261,
    question: "Qual clube francês tem mais títulos da Ligue 1?",
    options: ["Paris Saint-Germain", "Olympique de Marseille", "Saint-Étienne"],
    correctAnswer: "Saint-Étienne",
    explanation: "O Saint-Étienne é o clube com mais títulos da Ligue 1, com 10 conquistas, embora o PSG esteja se aproximando.",
    category: "ligue_1",
    difficulty: "medio"
  },
  {
    id: 262,
    question: "Qual jogador é o maior artilheiro da história da Ligue 1?",
    options: ["Delio Onnis", "Kylian Mbappé", "Edinson Cavani"],
    correctAnswer: "Delio Onnis",
    explanation: "Delio Onnis é o maior artilheiro da história da Ligue 1 com 299 gols.",
    category: "ligue_1",
    difficulty: "dificil"
  },
  {
    id: 263,
    question: "Em que ano foi disputada a primeira edição da Ligue 1?",
    options: ["1932", "1946", "1929"],
    correctAnswer: "1932",
    explanation: "A primeira edição da Ligue 1 foi disputada na temporada 1932/33.",
    category: "ligue_1",
    difficulty: "dificil"
  },
  {
    id: 264,
    question: "Qual foi o primeiro clube campeão da Ligue 1?",
    options: ["Olympique Lillois", "Olympique de Marseille", "Racing Club de France"],
    correctAnswer: "Olympique Lillois",
    explanation: "O Olympique Lillois (antecessor do Lille) foi o primeiro campeão da Ligue 1 na temporada 1932/33.",
    category: "ligue_1",
    difficulty: "dificil"
  },
  {
    id: 265,
    question: "Qual clube francês é conhecido como 'Les Parisiens'?",
    options: ["Paris Saint-Germain", "Paris FC", "Red Star"],
    correctAnswer: "Paris Saint-Germain",
    explanation: "O Paris Saint-Germain é conhecido como 'Les Parisiens' (Os Parisienses).",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 266,
    question: "Qual clube francês é conhecido como 'Les Olympiens'?",
    options: ["Olympique de Marseille", "Olympique Lyonnais", "Lille"],
    correctAnswer: "Olympique de Marseille",
    explanation: "O Olympique de Marseille é conhecido como 'Les Olympiens' (Os Olímpicos).",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 267,
    question: "Qual clube francês é conhecido como 'Les Gones'?",
    options: ["Olympique Lyonnais", "Monaco", "Nice"],
    correctAnswer: "Olympique Lyonnais",
    explanation: "O Olympique Lyonnais é conhecido como 'Les Gones', termo que significa 'os meninos' no dialeto de Lyon.",
    category: "ligue_1",
    difficulty: "medio"
  },
  {
    id: 268,
    question: "Qual clube francês é conhecido como 'Les Dogues'?",
    options: ["Lille", "Rennes", "Strasbourg"],
    correctAnswer: "Lille",
    explanation: "O Lille é conhecido como 'Les Dogues' (Os Dogues, uma raça de cão).",
    category: "ligue_1",
    difficulty: "medio"
  },
  {
    id: 269,
    question: "Qual clube francês é conhecido como 'Les Monégasques'?",
    options: ["Monaco", "Montpellier", "Metz"],
    correctAnswer: "Monaco",
    explanation: "O Monaco é conhecido como 'Les Monégasques' (Os Monegascos).",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 270,
    question: "Qual clube francês é conhecido como 'Les Verts'?",
    options: ["Saint-Étienne", "Nantes", "Bordeaux"],
    correctAnswer: "Saint-Étienne",
    explanation: "O Saint-Étienne é conhecido como 'Les Verts' (Os Verdes) devido à cor de seu uniforme.",
    category: "ligue_1",
    difficulty: "medio"
  },
  {
    id: 271,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2022/23?",
    options: ["Paris Saint-Germain", "Lens", "Marseille"],
    correctAnswer: "Paris Saint-Germain",
    explanation: "O Paris Saint-Germain foi campeão da Ligue 1 na temporada 2022/23.",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 272,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2021/22?",
    options: ["Paris Saint-Germain", "Marseille", "Monaco"],
    correctAnswer: "Paris Saint-Germain",
    explanation: "O Paris Saint-Germain foi campeão da Ligue 1 na temporada 2021/22.",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 273,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2020/21?",
    options: ["Lille", "Paris Saint-Germain", "Lyon"],
    correctAnswer: "Lille",
    explanation: "O Lille foi campeão da Ligue 1 na temporada 2020/21, quebrando a sequência de títulos do PSG.",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 274,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2019/20?",
    options: ["Paris Saint-Germain", "Marseille", "Rennes"],
    correctAnswer: "Paris Saint-Germain",
    explanation: "O Paris Saint-Germain foi campeão da Ligue 1 na temporada 2019/20, que foi encerrada prematuramente devido à pandemia de COVID-19.",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 275,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2018/19?",
    options: ["Paris Saint-Germain", "Lille", "Lyon"],
    correctAnswer: "Paris Saint-Germain",
    explanation: "O Paris Saint-Germain foi campeão da Ligue 1 na temporada 2018/19.",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 276,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2017/18?",
    options: ["Paris Saint-Germain", "Monaco", "Marseille"],
    correctAnswer: "Paris Saint-Germain",
    explanation: "O Paris Saint-Germain foi campeão da Ligue 1 na temporada 2017/18.",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 277,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2016/17?",
    options: ["Monaco", "Paris Saint-Germain", "Nice"],
    correctAnswer: "Monaco",
    explanation: "O Monaco foi campeão da Ligue 1 na temporada 2016/17, sob o comando de Leonardo Jardim.",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 278,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2015/16?",
    options: ["Paris Saint-Germain", "Lyon", "Monaco"],
    correctAnswer: "Paris Saint-Germain",
    explanation: "O Paris Saint-Germain foi campeão da Ligue 1 na temporada 2015/16.",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 279,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2014/15?",
    options: ["Paris Saint-Germain", "Lyon", "Marseille"],
    correctAnswer: "Paris Saint-Germain",
    explanation: "O Paris Saint-Germain foi campeão da Ligue 1 na temporada 2014/15.",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 280,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2013/14?",
    options: ["Paris Saint-Germain", "Monaco", "Lille"],
    correctAnswer: "Paris Saint-Germain",
    explanation: "O Paris Saint-Germain foi campeão da Ligue 1 na temporada 2013/14.",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 281,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2012/13?",
    options: ["Paris Saint-Germain", "Marseille", "Lyon"],
    correctAnswer: "Paris Saint-Germain",
    explanation: "O Paris Saint-Germain foi campeão da Ligue 1 na temporada 2012/13.",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 282,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2011/12?",
    options: ["Montpellier", "Paris Saint-Germain", "Lille"],
    correctAnswer: "Montpellier",
    explanation: "O Montpellier foi campeão da Ligue 1 na temporada 2011/12, sob o comando de René Girard.",
    category: "ligue_1",
    difficulty: "medio"
  },
  {
    id: 283,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2010/11?",
    options: ["Lille", "Marseille", "Lyon"],
    correctAnswer: "Lille",
    explanation: "O Lille foi campeão da Ligue 1 na temporada 2010/11, sob o comando de Rudi Garcia.",
    category: "ligue_1",
    difficulty: "medio"
  },
  {
    id: 284,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2009/10?",
    options: ["Marseille", "Lyon", "Bordeaux"],
    correctAnswer: "Marseille",
    explanation: "O Marseille foi campeão da Ligue 1 na temporada 2009/10, sob o comando de Didier Deschamps.",
    category: "ligue_1",
    difficulty: "medio"
  },
  {
    id: 285,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2008/09?",
    options: ["Bordeaux", "Marseille", "Lyon"],
    correctAnswer: "Bordeaux",
    explanation: "O Bordeaux foi campeão da Ligue 1 na temporada 2008/09, sob o comando de Laurent Blanc.",
    category: "ligue_1",
    difficulty: "medio"
  },
  {
    id: 286,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2007/08?",
    options: ["Lyon", "Bordeaux", "Marseille"],
    correctAnswer: "Lyon",
    explanation: "O Lyon foi campeão da Ligue 1 na temporada 2007/08, seu sétimo título consecutivo.",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 287,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2006/07?",
    options: ["Lyon", "Marseille", "Bordeaux"],
    correctAnswer: "Lyon",
    explanation: "O Lyon foi campeão da Ligue 1 na temporada 2006/07, seu sexto título consecutivo.",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 288,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2005/06?",
    options: ["Lyon", "Bordeaux", "Lille"],
    correctAnswer: "Lyon",
    explanation: "O Lyon foi campeão da Ligue 1 na temporada 2005/06, seu quinto título consecutivo.",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 289,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2004/05?",
    options: ["Lyon", "Lille", "Monaco"],
    correctAnswer: "Lyon",
    explanation: "O Lyon foi campeão da Ligue 1 na temporada 2004/05, seu quarto título consecutivo.",
    category: "ligue_1",
    difficulty: "facil"
  },
  {
    id: 290,
    question: "Qual clube foi campeão da Ligue 1 na temporada 2003/04?",
    options: ["Lyon", "Paris Saint-Germain", "Monaco"],
    correctAnswer: "Lyon",
    explanation: "O Lyon foi campeão da Ligue 1 na temporada 2003/04, seu terceiro título consecutivo.",
    category: "ligue_1",
    difficulty: "facil"
  },
  
  // CHAMPIONS LEAGUE (30 perguntas)
  {
    id: 291,
    question: "Qual clube tem mais títulos da Champions League/Copa dos Campeões da Europa?",
    options: ["Barcelona", "Real Madrid", "Milan"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid é o maior campeão da Champions League com 14 títulos.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 292,
    question: "Qual jogador marcou o gol do título da Champions League 2022/23 para o Manchester City?",
    options: ["Erling Haaland", "Kevin De Bruyne", "Rodri"],
    correctAnswer: "Rodri",
    explanation: "Rodri marcou o único gol da final contra a Inter de Milão, garantindo o primeiro título da Champions para o City.",
    category: "champions_league",
    difficulty: "medio"
  },
  {
    id: 293,
    question: "Qual clube venceu a primeira edição da Liga dos Campeões no formato atual (1992/93)?",
    options: ["Barcelona", "Milan", "Olympique de Marseille"],
    correctAnswer: "Olympique de Marseille",
    explanation: "O Olympique de Marseille venceu a primeira edição da Liga dos Campeões no formato atual, em 1993.",
    category: "champions_league",
    difficulty: "medio"
  },
  {
    id: 294,
    question: "Qual jogador tem mais títulos da Champions League?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Francisco Gento"],
    correctAnswer: "Francisco Gento",
    explanation: "Francisco Gento ganhou 6 Copas dos Campeões da Europa com o Real Madrid entre 1956 e 1966.",
    category: "champions_league",
    difficulty: "dificil"
  },
  {
    id: 295,
    question: "Qual jogador é o maior artilheiro da história da Champions League?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski"],
    correctAnswer: "Cristiano Ronaldo",
    explanation: "Cristiano Ronaldo é o maior artilheiro da história da Champions League com mais de 140 gols.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 296,
    question: "Qual clube venceu a Champions League na temporada 2022/23?",
    options: ["Manchester City", "Inter de Milão", "Real Madrid"],
    correctAnswer: "Manchester City",
    explanation: "O Manchester City venceu a Champions League na temporada 2022/23, seu primeiro título na competição.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 297,
    question: "Qual clube venceu a Champions League na temporada 2021/22?",
    options: ["Real Madrid", "Liverpool", "Bayern de Munique"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid venceu a Champions League na temporada 2021/22, derrotando o Liverpool na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 298,
    question: "Qual clube venceu a Champions League na temporada 2020/21?",
    options: ["Chelsea", "Manchester City", "Paris Saint-Germain"],
    correctAnswer: "Chelsea",
    explanation: "O Chelsea venceu a Champions League na temporada 2020/21, derrotando o Manchester City na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 299,
    question: "Qual clube venceu a Champions League na temporada 2019/20?",
    options: ["Bayern de Munique", "Paris Saint-Germain", "Barcelona"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique venceu a Champions League na temporada 2019/20, derrotando o Paris Saint-Germain na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 300,
    question: "Qual clube venceu a Champions League na temporada 2018/19?",
    options: ["Liverpool", "Tottenham", "Barcelona"],
    correctAnswer: "Liverpool",
    explanation: "O Liverpool venceu a Champions League na temporada 2018/19, derrotando o Tottenham na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 301,
    question: "Qual clube venceu a Champions League na temporada 2017/18?",
    options: ["Real Madrid", "Liverpool", "Roma"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid venceu a Champions League na temporada 2017/18, derrotando o Liverpool na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 302,
    question: "Qual clube venceu a Champions League na temporada 2016/17?",
    options: ["Real Madrid", "Juventus", "Atlético de Madrid"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid venceu a Champions League na temporada 2016/17, derrotando a Juventus na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 303,
    question: "Qual clube venceu a Champions League na temporada 2015/16?",
    options: ["Real Madrid", "Atlético de Madrid", "Bayern de Munique"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid venceu a Champions League na temporada 2015/16, derrotando o Atlético de Madrid na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 304,
    question: "Qual clube venceu a Champions League na temporada 2014/15?",
    options: ["Barcelona", "Juventus", "Real Madrid"],
    correctAnswer: "Barcelona",
    explanation: "O Barcelona venceu a Champions League na temporada 2014/15, derrotando a Juventus na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 305,
    question: "Qual clube venceu a Champions League na temporada 2013/14?",
    options: ["Real Madrid", "Atlético de Madrid", "Bayern de Munique"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid venceu a Champions League na temporada 2013/14, derrotando o Atlético de Madrid na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 306,
    question: "Qual clube venceu a Champions League na temporada 2012/13?",
    options: ["Bayern de Munique", "Borussia Dortmund", "Barcelona"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique venceu a Champions League na temporada 2012/13, derrotando o Borussia Dortmund na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 307,
    question: "Qual clube venceu a Champions League na temporada 2011/12?",
    options: ["Chelsea", "Bayern de Munique", "Barcelona"],
    correctAnswer: "Chelsea",
    explanation: "O Chelsea venceu a Champions League na temporada 2011/12, derrotando o Bayern de Munique na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 308,
    question: "Qual clube venceu a Champions League na temporada 2010/11?",
    options: ["Barcelona", "Manchester United", "Real Madrid"],
    correctAnswer: "Barcelona",
    explanation: "O Barcelona venceu a Champions League na temporada 2010/11, derrotando o Manchester United na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 309,
    question: "Qual clube venceu a Champions League na temporada 2009/10?",
    options: ["Inter de Milão", "Bayern de Munique", "Barcelona"],
    correctAnswer: "Inter de Milão",
    explanation: "A Inter de Milão venceu a Champions League na temporada 2009/10, derrotando o Bayern de Munique na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 310,
    question: "Qual clube venceu a Champions League na temporada 2008/09?",
    options: ["Barcelona", "Manchester United", "Chelsea"],
    correctAnswer: "Barcelona",
    explanation: "O Barcelona venceu a Champions League na temporada 2008/09, derrotando o Manchester United na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 311,
    question: "Qual clube venceu a Champions League na temporada 2007/08?",
    options: ["Manchester United", "Chelsea", "Barcelona"],
    correctAnswer: "Manchester United",
    explanation: "O Manchester United venceu a Champions League na temporada 2007/08, derrotando o Chelsea na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 312,
    question: "Qual clube venceu a Champions League na temporada 2006/07?",
    options: ["Milan", "Liverpool", "Manchester United"],
    correctAnswer: "Milan",
    explanation: "O Milan venceu a Champions League na temporada 2006/07, derrotando o Liverpool na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 313,
    question: "Qual clube venceu a Champions League na temporada 2005/06?",
    options: ["Barcelona", "Arsenal", "Milan"],
    correctAnswer: "Barcelona",
    explanation: "O Barcelona venceu a Champions League na temporada 2005/06, derrotando o Arsenal na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 314,
    question: "Qual clube venceu a Champions League na temporada 2004/05?",
    options: ["Liverpool", "Milan", "Barcelona"],
    correctAnswer: "Liverpool",
    explanation: "O Liverpool venceu a Champions League na temporada 2004/05, derrotando o Milan na final, na famosa 'Virada de Istambul'.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 315,
    question: "Qual clube venceu a Champions League na temporada 2003/04?",
    options: ["Porto", "Monaco", "Real Madrid"],
    correctAnswer: "Porto",
    explanation: "O Porto venceu a Champions League na temporada 2003/04, derrotando o Monaco na final, sob o comando de José Mourinho.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 316,
    question: "Qual clube venceu a Champions League na temporada 2002/03?",
    options: ["Milan", "Juventus", "Real Madrid"],
    correctAnswer: "Milan",
    explanation: "O Milan venceu a Champions League na temporada 2002/03, derrotando a Juventus na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 317,
    question: "Qual clube venceu a Champions League na temporada 2001/02?",
    options: ["Real Madrid", "Bayer Leverkusen", "Bayern de Munique"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid venceu a Champions League na temporada 2001/02, derrotando o Bayer Leverkusen na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 318,
    question: "Qual clube venceu a Champions League na temporada 2000/01?",
    options: ["Bayern de Munique", "Valencia", "Real Madrid"],
    correctAnswer: "Bayern de Munique",
    explanation: "O Bayern de Munique venceu a Champions League na temporada 2000/01, derrotando o Valencia na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 319,
    question: "Qual clube venceu a Champions League na temporada 1999/00?",
    options: ["Real Madrid", "Valencia", "Bayern de Munique"],
    correctAnswer: "Real Madrid",
    explanation: "O Real Madrid venceu a Champions League na temporada 1999/00, derrotando o Valencia na final.",
    category: "champions_league",
    difficulty: "facil"
  },
  {
    id: 320,
    question: "Qual clube venceu a Champions League na temporada 1998/99?",
    options: ["Manchester United", "Bayern de Munique", "Barcelona"],
    correctAnswer: "Manchester United",
    explanation: "O Manchester United venceu a Champions League na temporada 1998/99, derrotando o Bayern de Munique na final com uma virada histórica nos minutos finais.",
    category: "champions_league",
    difficulty: "facil"
  },
  
  // COPA DO MUNDO (30 perguntas)
  {
    id: 321,
    question: "Qual seleção venceu a Copa do Mundo de 2022?",
    options: ["França", "Argentina", "Brasil"],
    correctAnswer: "Argentina",
    explanation: "A Argentina venceu a Copa do Mundo de 2022 no Qatar, derrotando a França nos pênaltis após empate por 3-3.",
    category: "copa_do_mundo",
    difficulty: "facil"
  },
  {
    id: 322,
    question: "Quem foi o artilheiro da Copa do Mundo de 2022?",
    options: ["Kylian Mbappé", "Lionel Messi", "Olivier Giroud"],
    correctAnswer: "Kylian Mbappé",
    explanation: "Mbappé foi o artilheiro da Copa do Mundo de 2022 com 8 gols, incluindo um hat-trick na final.",
    category: "copa_do_mundo",
    difficulty: "facil"
  },
  {
    id: 323,
    question: "Qual país sediou a primeira Copa do Mundo em 1930?",
    options: ["Brasil", "Uruguai", "Itália"],
    correctAnswer: "Uruguai",
    explanation: "O Uruguai sediou a primeira Copa do Mundo em 1930 e também foi o campeão.",
    category: "copa_do_mundo",
    difficulty: "medio"
  },
  {
    id: 324,
    question: "Qual seleção é a maior campeã da Copa do Mundo?",
    options: ["Brasil", "Alemanha", "Itália"],
    correctAnswer: "Brasil",
    explanation: "O Brasil é o maior campeão com 5 títulos (1958, 1962, 1970, 1994 e 2002).",
    category: "copa_do_mundo",
    difficulty: "facil"
  },
  {
    id: 325,
    question: "Qual jogador marcou mais gols em Copas do Mundo somando todas as edições?",
    options: ["Miroslav Klose", "Ronaldo Fenômeno", "Pelé"],
    correctAnswer: "Miroslav Klose",
    explanation: "Miroslav Klose marcou 16 gols em Copas do Mundo, sendo o maior artilheiro da história do torneio.",
    category: "copa_do_mundo",
    difficulty: "medio"
  },
  {
    id: 326,
    question: "Qual país sediará a Copa do Mundo de 2026?",
    options: ["Estados Unidos", "Canadá, México e Estados Unidos", "Brasil"],
    correctAnswer: "Canadá, México e Estados Unidos",
    explanation: "A Copa do Mundo de 2026 será sediada conjuntamente por Canadá, México e Estados Unidos.",
    category: "copa_do_mundo",
    difficulty: "facil"
  },
  {
    id: 327,
    question: "Qual foi o placar da final da Copa do Mundo de 2014?",
    options: ["Alemanha 1-0 Argentina", "Alemanha 7-1 Brasil", "Alemanha 2-0 Argentina"],
    correctAnswer: "Alemanha 1-0 Argentina",
    explanation: "A Alemanha venceu a Argentina por 1-0 na final da Copa do Mundo de 2014, com gol de Mario Götze na prorrogação.",
    category: "copa_do_mundo",
    difficulty: "medio"
  },
  {
    id: 328,
    question: "Qual seleção venceu a Copa do Mundo de 2018?",
    options: ["França", "Croácia", "Bélgica"],
    correctAnswer: "França",
    explanation: "A França venceu a Copa do Mundo de 2018 na Rússia, derrotando a Croácia por 4-2 na final.",
    category: "copa_do_mundo",
    difficulty: "facil"
  },
  {
    id: 329,
    question: "Qual seleção venceu a Copa do Mundo de 2014?",
    options: ["Alemanha", "Argentina", "Brasil"],
    correctAnswer: "Alemanha",
    explanation: "A Alemanha venceu a Copa do Mundo de 2014 no Brasil, derrotando a Argentina por 1-0 na final.",
    category: "copa_do_mundo",
    difficulty: "facil"
  },
  {
    id: 330,
    question: "Qual seleção venceu a Copa do Mundo de 2010?",
    options: ["Espanha", "Holanda", "Alemanha"],
    correctAnswer: "Espanha",
    explanation: "A Espanha venceu a Copa do Mundo de 2010 na África do Sul, derrotando a Holanda por 1-0 na final.",
    category: "copa_do_mundo",
    difficulty: "facil"
  },
  {
    id: 331,
    question: "Qual seleção venceu a Copa do Mundo de 2006?",
    options: ["Itália", "França", "Alemanha"],
    correctAnswer: "Itália",
    explanation: "A Itália venceu a Copa do Mundo de 2006 na Alemanha, derrotando a França nos pênaltis após empate por 1-1.",
    category: "copa_do_mundo",
    difficulty: "facil"
  },
  {
    id: 332,
    question: "Qual seleção venceu a Copa do Mundo de 2002?",
    options: ["Brasil", "Alemanha", "Itália"],
    correctAnswer: "Brasil",
    explanation: "O Brasil venceu a Copa do Mundo de 2002 na Coreia do Sul e Japão, derrotando a Alemanha por 2-0 na final.",
    category: "copa_do_mundo",
    difficulty: "facil"
  },
  {
    id: 333,
    question: "Qual seleção venceu a Copa do Mundo de 1998?",
    options: ["França", "Brasil", "Croácia"],
    correctAnswer: "França",
    explanation: "A França venceu a Copa do Mundo de 1998 em casa, derrotando o Brasil por 3-0 na final.",
    category: "copa_do_mundo",
    difficulty: "facil"
  },
  {
    id: 334,
    question: "Qual seleção venceu a Copa do Mundo de 1994?",
    options: ["Brasil", "Itália", "Alemanha"],
    correctAnswer: "Brasil",
    explanation: "O Brasil venceu a Copa do Mundo de 1994 nos Estados Unidos, derrotando a Itália nos pênaltis após empate por 0-0.",
    category: "copa_do_mundo",
    difficulty: "facil"
  },
  {
    id: 335,
    question: "Qual seleção venceu a Copa do Mundo de 1990?",
    options: ["Alemanha", "Argentina", "Itália"],
    correctAnswer: "Alemanha",
    explanation: "A Alemanha venceu a Copa do Mundo de 1990 na Itália, derrotando a Argentina por 1-0 na final.",
    category: "copa_do_mundo",
    difficulty: "facil"
  },
  {
    id: 336,
    question: "Qual seleção venceu a Copa do Mundo de 1986?",
    options: ["Argentina", "Alemanha", "França"],
    correctAnswer: "Argentina",
    explanation: "A Argentina venceu a Copa do Mundo de 1986 no México, derrotando a Alemanha por 3-2 na final.",
    category: "copa_do_mundo",
    difficulty: "facil"
  },
  {
    id: 337,
    question: "Qual seleção venceu a Copa do Mundo de 1982?",
    options: ["Itália", "Alemanha", "Brasil"],
    correctAnswer: "Itália",
    explanation: "A Itália venceu a Copa do Mundo de 1982 na Espanha, derrotando a Alemanha por 3-1 na final.",
    category: "copa_do_mundo",
    difficulty: "facil"
  },
  {
    id: 338,
    question: "Qual seleção venceu a Copa do Mundo de 1978?",
    options: ["Argentina", "Holanda", "Brasil"],
    correctAnswer: "Argentina",
    explanation: "A Argentina venceu a Copa do Mundo de 1978 em casa, derrotando a Holanda por 3-1 na final.",
    category: "copa_do_mundo",
    difficulty: "facil"
  },
  {
    id: 339,
    question: "Qual seleção venceu a Copa do Mundo de 1974?",
    options: ["Alemanha", "Holanda", "Brasil"],
    correctAnswer: "Alemanha",\

