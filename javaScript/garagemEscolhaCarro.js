const carros = [
    {
        marca: "Viper",
        modelo: "GTS",
        ano: "2013",
        classe: "SUPER CARS",
        logo: "../imagens/viper/viper-logo.png",
        imagem: "../imagens/viper/viper-gts.png",
        nivel: "../imagens/classe-tracao/niveis/r3-800.png",
        tracao: {
            tipo: "RWD",
            imagem: "../imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 9.0,
            controle: 9.6,
            aceleracao: 8.4,
            arrancada: 7.5,
            frenagem: 9.5
        },
        preco: "110.000",
        linkConfig: "../screens/login.html"
    },
    {
        marca: "Ferrari",
        modelo: "F40",
        ano: "1987",
        classe: "SUPER CARS",
        logo: "../imagens/ferrari/logo-ferrari.png",
        imagem: "../imagens/ferrari/f40/f40.png",
        nivel: "../imagens/classe-tracao/niveis/s-632.png",
        tracao: {
            tipo: "RWD",
            imagem: "../imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 8.0,
            controle: 9.4,
            aceleracao: 8.3,
            arrancada: 7.8,
            frenagem: 9.2
        },
        preco: "8000.000",
        linkConfig: "../screens/dashboard.html"
    },
    {
        marca: "Ferrari",
        modelo: "458 Italia",
        ano: "2009",
        classe: "SUPER CARS",
        logo: "../imagens/ferrari/logo-ferrari.png",
        imagem: "../imagens/ferrari/458/458.png",
        nivel: "../imagens/classe-tracao/niveis/s-672.png",
        tracao: {
            tipo: "RWD",
            imagem: "../imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 8.0,
            controle: 7.4,
            aceleracao: 8.9,
            arrancada: 8.6,
            frenagem: 9.0
        },
        preco: "240.000",
        linkConfig: "../screens/login.html"
    },
    {
        marca: "Bugatti",
        modelo: "Veyron Super Sport",
        ano: "2011",
        classe: "SUPER CARS",
        logo: "../imagens/bugatti/logo-bugatti.png",
        imagem: "../imagens/bugatti/bugatti-veyron.png",
        nivel: "../imagens/classe-tracao/niveis/r2-900.png",
        tracao: {
            tipo: "AWD",
            imagem: "../imagens/classe-tracao/4x4.png"
        },
        stats: {
            velocidade: 10.0,
            controle: 9.4,
            aceleracao: 10.0,
            arrancada: 9.8,
            frenagem: 9.4
        },
        preco: "2.200.000",
        linkConfig: "../screens/login.html"
    },
    {
        marca: "Nissan",
        modelo: "Skyline GTR-R",
        ano: "2000",
        classe: "SPORT CARS",
        logo: "../imagens/nissan/logo-gtr.png",
        imagem: "../imagens/nissan/nissan-gtr.png",
        nivel: "../imagens/classe-tracao/niveis/b-461.png",
        tracao: {
            tipo: "AWD",
            imagem: "../imagens/classe-tracao/4x4.png"
        },
        stats: {
            velocidade: 6.1,
            controle: 8.5,
            aceleracao: 6.8,
            arrancada: 7.4,
            frenagem: 8.3
        },
        preco: "52.000",
        linkConfig: "../screens/login.html"
    },
    {
        marca: "Toyota",
        modelo: "Supra RZ",
        ano: "2013",
        classe: "SPORT CARS",
        logo: "../imagens/toyotaSupra/logo-supra.png",
        imagem: "../imagens/toyotaSupra/supra-rz.png",
        nivel: "../imagens/classe-tracao/niveis/b-464.png",
        tracao: {
            tipo: "RWD",
            imagem: "../imagens/classe-tracao/tracao-trazeira.png"
        },
        stats: {
            velocidade: 6.8,
            controle: 8.3,
            aceleracao: 6.8,
            arrancada: 6.6,
            frenagem: 8.0
        },
        preco: "8000.00",
        linkConfig: "../screens/login.html"
    },
    {
        marca: "Lamborghini",
        modelo: "Murciélago",
        ano: "2010",
        classe: "SUPER CARS",
        logo: "../imagens/lamborghini/logo-lamborghini.png",
        imagem: "../imagens/lamborghini/lambo-murcielago.png",
        nivel: "../imagens/classe-tracao/niveis/s-700.png",
        tracao: {
            tipo: "AWD",
            imagem: "../imagens/classe-tracao/4x4.png"
        },
        stats: {
            velocidade: 9.1,
            controle: 9.3,
            aceleracao: 8.6,
            arrancada: 7.9,
            frenagem: 9.3
        },
        preco: "8000.00",
        linkConfig: "../screens/login.html"
    }
];


function exibirCarro(index) {
    const carro = carros[index];

    marcaCarro.innerHTML = `<img src="${carro.logo}" alt="">`;
    valorCR.innerHTML = carro.preco;
    config.onclick = () => window.location = carro.linkConfig;

    nomeMarca.innerHTML = carro.marca;
    nomeModelo.innerHTML = carro.modelo;
    modeloAno.innerHTML = carro.ano;
    classe.innerHTML = carro.classe;

    imgCarro.innerHTML = `<img src="${carro.imagem}" alt="">`;
    nivel.innerHTML = `<img src="${carro.nivel}" alt="">`;

    legendaTracao.innerHTML = carro.tracao.tipo;
    imgTracao.innerHTML = `<img src="${carro.tracao.imagem}" alt="">`;

    velocidade.innerHTML = carro.stats.velocidade;
    nivelPorcentagemVelocidade.style.width = `${carro.stats.velocidade * 15}px`;

    controle.innerHTML = carro.stats.controle;
    nivelPorcentagemControle.style.width = `${carro.stats.controle * 15}px`;

    aceleracao.innerHTML = carro.stats.aceleracao;
    nivelPorcentagemAceleracao.style.width = `${carro.stats.aceleracao * 15}px`;

    arrancada.innerHTML = carro.stats.arrancada;
    nivelPorcentagemArrancagem.style.width = `${carro.stats.arrancada * 15}px`;

    frenagem.innerHTML = carro.stats.frenagem;
    nivelPorcentagemFrenagem.style.width = `${carro.stats.frenagem * 15}px`;
}



marcaCarro.innerHTML = `<img src="../imagens/viper/viper-logo.png" alt="">`
valorCR.innerHTML = "110.000"
config.innerHTML = 'Detalhar Carro'
function configuracao() {
    window.location = "../screens/dashboard.html"
}

nomeMarca.innerHTML = "Viper"
nomeModelo.innerHTML = "GTS"
modeloAno.innerHTML = "2013"
classe.innerHTML = "SUPER CARS"

imgCarro.innerHTML = `<img src="../imagens/viper/viper-gts.png" alt="">`

nivel.innerHTML = `<img src="../imagens/classe-tracao/niveis/r3-800.png" alt="">`

legendaTracao.innerHTML = "RWD"
imgTracao.innerHTML = `<img src="../imagens/classe-tracao/tracao-trazeira.png" alt="">`

velocidade.innerHTML = "9"
nivelPorcentagemVelocidade.style.width = "135px"

controle.innerHTML = "9.6"
nivelPorcentagemControle.style.width = "144px"

aceleracao.innerHTML = "8.4"
nivelPorcentagemAceleracao.style.width = "126px"

arrancada.innerHTML = "7.5"
nivelPorcentagemArrancagem.style.width = "112.5px"

frenagem.innerHTML = "9.5"
nivelPorcentagemFrenagem.style.width = "142.5px"