// Todas as informações do negócio ficam aqui.
// Para atualizar telefone, endereço, horários ou equipe, edite só este arquivo.

export const site = {
  nome: 'Espaço Viver Mais Pilates',
  tagline: 'Pilates com fisioterapeutas em Palhoça',
  descricao:
    'Estúdio de Pilates em Aririu, Palhoça/SC. Aulas personalizadas em grupos reduzidos, conduzidas por fisioterapeutas, para alívio de dores, postura, força e prevenção de lesões.',
  url: 'https://www.espacovivermaispilates.com.br',

  telefone: '(48) 98826-8600',
  telefoneLink: 'tel:+5548988268600',
  whatsapp: '5548988268600',
  mensagemWhatsapp:
    'Olá! Vim pelo site e gostaria de saber mais sobre as aulas de Pilates.',

  endereco: {
    rua: 'R. Ialene Schutz Horstmann, 233',
    bairro: 'Aririu',
    cidade: 'Palhoça',
    estado: 'SC',
    cep: '88135-221',
    completo:
      'R. Ialene Schutz Horstmann, 233 - Aririu, Palhoça - SC, 88135-221',
    lat: -27.6726392,
    lng: -48.6845246,
    linkMaps: 'https://maps.app.goo.gl/JZa7bBmpMYNsz6oa9',
    embedMaps:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1196.2809880571015!2d-48.68439242137361!3d-27.674093245004574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274b2db7d5c725%3A0xa99b0e1285e5f9a7!2sEspa%C3%A7o%20Viver%20Mais%20Pilates!5e0!3m2!1spt-BR!2sbr!4v1631139656056!5m2!1spt-BR!2sbr',
  },

  // TODO: confirmar o horário de fechamento. O Google informa abertura às 06:00
  // de segunda-feira e o estúdio aparece fechado aos fins de semana.
  horarios: {
    resumo: 'Segunda a sexta, a partir das 06h',
    detalhe: 'Sábados, domingos e feriados: fechado',
    // Formato schema.org — ajuste o horário de fechamento se necessário.
    schema: ['Mo-Fr 06:00-21:00'],
  },

  avaliacao: { nota: '5,0', fonte: 'Google' },

  redes: {
    instagram: 'https://www.instagram.com/espacovivermaispilates',
    facebook: 'https://www.facebook.com/espacovivermaispilates',
  },
}

export const linkWhatsapp = (texto = site.mensagemWhatsapp) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`

export const navegacao = [
  { nome: 'Início', href: '#inicio' },
  { nome: 'Serviços', href: '#servicos' },
  { nome: 'Estrutura', href: '#estrutura' },
  { nome: 'Equipe', href: '#equipe' },
  { nome: 'Dúvidas', href: '#duvidas' },
  { nome: 'Contato', href: '#contato' },
]

export const diferenciais = [
  {
    titulo: 'Conduzido por fisioterapeutas',
    texto:
      'Cada aula é planejada por profissionais com registro no CREFITO, unindo o método Pilates à prevenção e ao tratamento de patologias.',
    icone: 'certificado',
  },
  {
    titulo: 'Atendimento individualizado',
    texto:
      'Avaliamos seu histórico e montamos um plano exclusivo para o seu objetivo e o seu ritmo — em turmas reduzidas.',
    icone: 'pessoa',
  },
  {
    titulo: 'Estrutura moderna e acolhedora',
    texto:
      'Recepção confortável e um amplo salão equipado para o método Pilates e para o Neopilates.',
    icone: 'casa',
  },
  {
    titulo: 'Estacionamento no local',
    texto:
      'Você chega, estaciona e treina. Sem perder tempo procurando vaga antes da aula.',
    icone: 'carro',
  },
]

export const servicos = [
  {
    nome: 'Pilates',
    destaque: true,
    resumo: 'O método clássico, com o peso do próprio corpo.',
    texto:
      'Método de exercício físico e alongamento que utiliza o peso do próprio corpo. Uma técnica de reeducação do movimento que trabalha o corpo todo e traz equilíbrio muscular e mental, com movimentos suaves e contínuos e ênfase na concentração, no fortalecimento e na estabilização dos músculos centrais.',
    icone: 'movimento',
  },
  {
    nome: 'Neopilates',
    resumo: 'Tecidos, lyra e slackline para desafiar o equilíbrio.',
    texto:
      'A diferença entre o Pilates e o Neopilates está nas variações de movimentos e nos aparelhos. Aqui usamos tecidos, lyra, slackline e outros equipamentos que tiram a base estável, aumentando o grau de dificuldade e o desafio.',
    icone: 'aereo',
  },
  {
    nome: 'Pilates para gestantes',
    resumo: 'Mais conforto e força em cada fase da gestação.',
    texto:
      'Quando a mulher engravida, seu corpo passa por diferentes mudanças. Com a prática do Pilates essas alterações ficam mais suaves e saudáveis, porque o método ajuda no fortalecimento de toda a musculatura.',
    icone: 'gestante',
  },
  {
    nome: 'Pilates Solo',
    resumo: 'No tatame, com bolas, faixas e rolos.',
    texto:
      'Como o próprio nome diz, é praticado no chão sobre um tatame ou colchonete, utilizando o peso do próprio corpo. Pode contar com o auxílio de acessórios como bolas, faixas elásticas, halteres e rolos de espuma.',
    icone: 'tatame',
  },
]

export const equipeIntro =
  'Aqui, você é cuidado por fisioterapeutas que utilizam o Pilates como ferramenta para fortalecer o corpo, aliviar dores e promover bem-estar no dia a dia.'

export const equipe = [
  {
    nome: 'Amanda de Sousa Grah',
    cargo: 'Responsável técnica',
    crefito: 'CREFITO-10 240620-F',
    foto: '/images/fisios/amanda2.jpeg',
    bio: 'Graduada pela Universidade do Sul de Santa Catarina (UNISUL) e pós-graduanda em Gestão da Saúde com ênfase em Administração Estratégica.',
    cursos: [
      'Pilates completo (Edcel Rosa)',
      'Neopilates (Amanda Braz)',
      'Aprimoramento em Pilates (Grupo Voll Pilates)',
      'Pilates para Gestantes e Baby Pilates (Grupo Voll Pilates)',
      'Pilates Kids (Grupo Voll Pilates)',
      'Treinamento Funcional (Equipe Ivana Henn)',
      'Workshop de Flexibilidade e Força (Marcella Contursi)',
      'Avaliação e tratamento das lesões do joelho e quadril (GMK Cursos)',
      'Ventosaterapia (Instituto Cefisa de Ensino em Saúde)',
      'Kinesio Tape (K-Taping International Academy)',
    ],
  },
  {
    nome: 'Denise Coelho',
    cargo: 'Fisioterapeuta',
    crefito: 'CREFITO-10 302537-F',
    foto: '/images/fisios/denise.jpeg',
    bio: 'Graduada pela Universidade do Sul de Santa Catarina (UNISUL).',
    cursos: [
      'Pilates completo',
      'Bandagem Neuromuscular – FisioTaping',
      'Ventosaterapia',
      'Master Class Tornozelo, Pé e Palmilhas',
      'Estabilização Segmentar Lombar',
      'Instabilidade do Joelho',
      'Impacto Femuroacetabular do Quadril',
    ],
  },
  {
    nome: 'Jhulian Covre Rodrigues',
    cargo: 'Fisioterapeuta',
    crefito: 'CREFITO-10 370180-F',
    foto: '/images/fisios/jhulian.jpeg',
    bio: 'Graduada pela Universidade do Sul de Santa Catarina (UNISUL), pós-graduada em Fisioterapia Dermatofuncional e Cosmetologia Avançada, e pós-graduanda em Fisioterapia Gerontológica e Geriátrica e em Fisiologia do Exercício e Treinamento Desportivo.',
    cursos: [
      'Pilates completo',
      'Socorrista APH',
      'Fisioterapia no Pós-Parto',
      'Exercícios rotacionais',
      'Bases do treinamento físico, periodização e prescrição',
    ],
  },
  {
    nome: 'Tamiris Patrícia dos Santos',
    cargo: 'Fisioterapeuta',
    crefito: 'CREFITO-10 448295-F',
    foto: '/images/fisios/tamiris.jpeg',
    bio: 'Graduada pela Universidade do Sul de Santa Catarina (UNISUL).',
    cursos: [
      'Pilates Completo (Edcel Rosa)',
      'Extensão em Comunicação em Saúde (UNISUL)',
      'Projeto de Extensão Motiva Down (UNISUL)',
      'Extensão em Ventosaterapia (UNISUL)',
    ],
  },
]

export const heroImagem = {
  src: '/images/interior/novo/1.jpeg',
  alt: 'Salão de Pilates do Espaço Viver Mais com aparelhos reformer',
}

export const galeria = [
  {
    src: '/images/interior/novo/recepcao.jpeg',
    alt: 'Recepção do Espaço Viver Mais Pilates com o logo iluminado na parede',
  },
  {
    src: '/images/interior/novo/2.jpeg',
    alt: 'Área com aparelhos Chair, espelhos e faixas suspensas para as aulas',
  },
  {
    src: '/images/interior/novo/3.jpeg',
    alt: 'Vista ampla do salão com escada horizontal, barril e recepção ao fundo',
  },
]

export const duvidas = [
  {
    p: 'Preciso ter experiência com Pilates para começar?',
    r: 'Não. Recebemos alunos de todos os níveis, inclusive quem nunca praticou nenhuma atividade física. A primeira aula começa por uma avaliação, e os exercícios são graduados a partir do que o seu corpo já consegue fazer hoje.',
  },
  {
    p: 'Qual a diferença de fazer Pilates com fisioterapeutas?',
    r: 'Toda a nossa equipe tem formação em Fisioterapia e registro no CREFITO. Isso significa que a aula considera o seu histórico de dores, lesões e limitações — o método é usado tanto para condicionamento quanto para prevenção e tratamento de patologias.',
  },
  {
    p: 'Preciso de encaminhamento ou atestado médico?',
    r: 'Não é obrigatório. Mas, se você tem alguma condição de saúde em acompanhamento, faz uso contínuo de medicação ou passou por cirurgia recente, traga os exames e laudos que tiver: eles ajudam a montar um plano mais seguro.',
  },
  {
    p: 'Quantas pessoas fazem aula ao mesmo tempo?',
    r: 'Trabalhamos com turmas reduzidas, para que o profissional consiga acompanhar a execução de cada aluno de perto e ajustar os exercícios individualmente durante a aula.',
  },
  {
    p: 'Posso praticar Pilates durante a gravidez?',
    r: 'Sim. Temos aulas específicas para gestantes, adaptadas a cada fase da gestação, com foco em fortalecimento, respiração e alívio dos desconfortos típicos do período. Recomendamos alinhar com o seu obstetra antes de começar.',
  },
  {
    p: 'O estúdio tem estacionamento?',
    r: 'Sim, temos estacionamento no local, além de recepção e um amplo espaço para as aulas de Pilates e Neopilates.',
  },
]
