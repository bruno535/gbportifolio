import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const introduction = `Olá, sou Gabriela Araujo, uma aventureira apaixonada por viagens e fascinada pelos mistérios do mundo. Com meus 28 anos de idade, já tive o privilégio de percorrer diversos países ao redor do globo, buscando desvendar os enigmas que envolvem antigas civilizações e locais cheios de história e magia. Desde a infância, fui cativada pelas pirâmides, monumentos enigmáticos e tudo aquilo que desafia as explicações convencionais.`;

    const destinations = [
        {
            title: 'Egito',
            description:
                'Fui recebida pelo calor acolhedor do sol egípcio e a brisa suave do Rio Nilo, enquanto iniciava minha jornada por esse país que sempre me encantou com sua história milenar. Através das pirâmides de Gizé, tive meu primeiro encontro com os vestígios do Egito Antigo, sentindo a grandiosidade e o mistério que envolvem essa civilização.',
            className: 'textLeft',
            link: '/journeys/egito',
        },
        {
            title: 'China',
            description:
                "Pude explorar a grandiosidade da Cidade Proibida em Pequim, caminhando pelos antigos palácios e jardins, imaginando a vida da realeza chinesa. Em Xi'an, fui maravilhada pelo Exército de Terracota, uma das maiores descobertas arqueológicas do mundo, que guarda o mausoléu do imperador Qin Shi Huang.",
            className: 'textRight',
            link: '/journeys/china',
        },
        {
            title: 'México',
            description:
                'A jornada me levou a Teotihuacán, a cidade dos deuses, onde andar entre as pirâmides do Sol e da Lua foi uma experiência transcendental, conectando-me com a civilização que habitou essa cidade misteriosa. Na Riviera Maya, me entreguei às águas cristalinas e praias de areia branca, mergulhando nos cenotes, cavernas submersas repletas de lendas e histórias que ecoam nas profundezas da Terra.',
            className: 'textLeft',
            link: '/journeys/mexico#',
        },
    ];

    const handleVerMaisClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="homePage">
            <div className="parallax parallaxHome" />
            <h1>Bem-vindo ao Mundo de Gabriela Araujo</h1>
            <div className="textContent">
                <p>{introduction}</p>
                <h2>Destinos em destaque:</h2>
                <div>
                    {destinations.map((destination, index) => (
                        <div key={index} className={destination.className}>
                            <h3>{destination.title}</h3>
                            <div>
                                <p>{destination.description}</p>
                                <Link
                                    to={destination.link}
                                    onClick={handleVerMaisClick}
                                    className="more"
                                >
                                    Ver Mais
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <p>
                    Se você é como eu, um amante dos mistérios e da aventura, embarque
                    comigo nesta jornada através do tempo e do espaço. Venha desvendar os
                    enigmas do mundo, um destino exótico de cada vez. Espero que minhas
                    histórias inspirem você a explorar, descobrir e se apaixonar por esse
                    vasto e enigmático planeta que chamamos de lar.
                </p>
            </div>
            <div className="gallery">
                <Link to="/gallery">Explorar a Galeria</Link>
            </div>
        </div>
    );
};

export default Home;
