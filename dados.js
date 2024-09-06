let dados = [
    {
        titulo : "Bahia", 
        descricao : "<strong>Pelourinho:</strong>Centro histórico de Salvador, Patrimônio Mundial da UNESCO, com arquitetura colonial e vida cultural vibrante. ",
        imagem : "images/Pelourinho.png"
    },
    {
        titulo : "Maranhão" , 
        descricao : "<strong>Lençóis Maranhenses:</strong> Paisagem única de dunas e lagoas cristalinas. Um paraíso natural para os amantes da aventura. ",
        imagem : "images/Lencois.jpg"
    },
    {
        titulo : "Rio Grande do Sul", 
        descricao : "<strong>Gramado e Canela:</strong> Cidades charmosas com arquitetura europeia, paisagens montanhosas e clima ameno, perfeitas para um passeio romântico. ",
        imagem : "images/Gramado.jpg"
    },
    {
        titulo : "Paraná" , 
        descricao : "<strong>Cataratas do Iguaçu:</strong> Uma das Sete Maravilhas Naturais do Mundo, as Cataratas do Iguaçu são uma das maiores quedas d'água do planeta. ",
        imagem : "images/Cataratas.jpg"
    },
    {
        titulo : "São Paulo" , 
        descricao : "<strong>Parque Ibirapuera:</strong> Um dos maiores parques urbanos da América Latina, o Ibirapuera oferece diversas opções de lazer,como museus, monumentos, áreas verdes e pistas para caminhada e ciclismo. ",
        imagem: "images/ibira.jpg",
        tags: "poluição"
    },
    {
        titulo : "Amazonas", 
        descricao : "O que você acha de conhecer uma das principais cidades turísticas do Amazonas, Parintins? O destino é famoso mundialmente por sediar uma das maiores festas populares do mundo, o Festival de Parintins! ",
        imagem: "images/Amazonas.png",
        tags: "floresta"
    },
    {
        titulo : "Pará" , 
        descricao : "<strong>Ilha do Amor:</strong> As cabanas oferecem mesas, é voltado para o Lago Verde, que tem águas límpidas e na temperatura certa pra um delicioso banho refrescante em meio ao calor do Pará.  ",
        imagem : "images/para.png"
    },
    {
        titulo : "Acre", 
        descricao : " Rio Branco oferece uma rica cultura e história, além de ser um ponto de partida para expedições na Floresta Amazônica. ",
        imagem : "images/acre.png"
    },
    {
        titulo : "Pernambuco" , 
        descricao : "Recife é uma cidade vibrante com uma rica história e cultura. O estado possui diversas praias, incluindo Porto de Galinhas, um dos destinos mais procurados do Brasil. ",
        imagem : "images/recife.png"
    },
    {
        titulo : "Minas Gerais" , 
        descricao : "<strong>Praça Da Liberdade:</strong> O complexo paisagistico e arquitetônico da Praça da Liberdade é uma síntese dos estilos que marcam a história de Belo Horizonte, e fica na região da Savassi, no encontro de quatro grandes avenidas: Bias Fortes, Brasil, Cristóvão Colombo e João Pinheiro. ",
        imagem : "images/minas.png"
    },
    {
        titulo : "Rio de Janeiro", 
        descricao : "<strong>Pão de açucar </strong> Além da visita tradicional ao Pão de Açúcar e ao bondinho, a empresa que administra o local oferece outras atividades relacionadas ao local, entre elas um Tour Histórico, que foca em dados da história e curiosidades do primero bondinho do Brasil  ",
        imagem : "images/rio.png"
    },
    {
        titulo : "Espírito Santo" , 
        descricao : " Parque Nacional do Caparaó. Além das trilhas, os visitantes podem se deliciar com banhos em cachoeira e piscinas naturais, observar deslumbrantes visuais da Serra do Caparaó e região, com belos espetáculos no alvorecer e no pôr do sol. ",
        imagem : "images/caps.png"
    },
    {
        titulo : "Santa Catarina", 
        descricao : "Gramado e Canela: Cidades charmosas com arquitetura europeia, paisagens montanhosas e clima ameno, perfeitas para um passeio romântico. ",
         imagem : "imagens/"
    },
    {
        titulo : "Mato Grosso Do sul" , 
        descricao : "Cachoeira boca da onça, Área com cachoeiras, incluindo uma cascata de 156 metros, ideal para nado, caminhada e rapel. ",
        imagem : "imagens/"
    },
    {
        titulo : "Mato grosso" , 
        descricao : "O Parque Indígena do Xingu, anteriormente Parque Nacional Indígena do Xingu, é uma terra indígena brasileira, considerada a maior e uma das mais famosas reservas do gênero no mundo. ",
        imagem : "imagens/"
    },
    {
        titulo : "Goiás", 
        descricao : "O Parque Nacional da Chapada dos Veadeiros é um dos principais destinos turísticos do estado, com suas cachoeiras, trilhas e paisagens exuberantes. ",
        imagem : "imagens/"
    },
    {
        titulo : "Piaui" , 
        descricao : "Parque Nacional da Serra da Capivara. Este parque é uma verdadeira viagem no tempo, com milhares de anos de história inscritos em suas rochas. É um dos maiores sítios arqueológicos a céu aberto das Américas, com pinturas rupestres que retratam o cotidiano, crenças e rituais de povos antigos. ",
        imagem : "imagens/"
    },
    {
        titulo : "Ceará", 
        descricao : "As praias de Fortaleza são mundialmente famosas, mas o estado oferece muito mais, como as falésias de Jericoacoara e as lagoas de Cumbuco. ",
        imagem : "imagens/"
    },
    {
        titulo : "Roraima" , 
        descricao : "As famosas tepuís, montanhas de topo plano, são um dos principais atrativos do estado. O Monte Roraima é o mais conhecido e oferece paisagens de tirar o fôlego. ",
        imagem : "imagens/"
    },
    {
        titulo : "Rondônia" , 
        descricao : "O Parque Nacional de Pacaás Novos é um paraíso para os amantes da natureza, com cachoeiras, trilhas e uma rica fauna. ",
        imagem : "imagens/"
    },
    {
        titulo : "Sergipe", 
        descricao : "Aracaju é uma cidade moderna com belas praias e uma rica cultura. O estado também possui diversas opções de turismo histórico e cultural. ",
        imagem : "imagens/"
    },
    {
        titulo : "Alagoas" , 
        descricao : "Maceió é conhecida como a Cidade das Alagoas, com suas belas praias e piscinas naturais. O estado também possui diversas opções de turismo histórico e cultural. ",
        imagem : "imagens/"
    },
    {
        titulo : "Paraiba" , 
        descricao : "João Pessoa é uma cidade histórica com belas praias e uma vida noturna agitada. O estado também possui diversas praias paradisíacas e uma rica cultura popular. ",
        imagem : "imagens/"
    },
    {
        titulo : "Rio Grande do norte" , 
        descricao : "Natal é conhecida por suas dunas e o maior cajueiro do mundo. O estado também possui diversas praias paradisíacas e uma rica cultura popular. ",
        imagem : "imagens/"
    },
    {
        titulo : "Tocantins", 
        descricao : "O Jalapão é um dos destinos mais procurados do estado, com suas dunas, cachoeiras e serras. ",
        imagem : "imagens/"
    },
    {
        titulo : "Amapa" , 
        descricao : "O Parque Nacional Montanhas do Tumucumaque é a maior unidade de conservação integral da Amazônia brasileira, abrigando uma rica biodiversidade. ",
        imagem : "imagens/"
    },
];
