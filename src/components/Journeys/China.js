import React from 'react';
import { Link } from 'react-router-dom';
import './Journeys.css';

const JourneyChina = () => {
    const journeyData = [
        {
            id: 1,
            day: 1,
            text: [
                `Assim que pus os pés na China, senti a grandiosidade desta terra milenar. Comecei minha jornada em Pequim, a capital, onde fui agraciada com a grandiosidade da Cidade Proibida. Andar pelos antigos palácios e jardins me fez imaginar a vida da realeza chinesa. Cada passo que eu dava, era como se mergulhasse em um conto de fadas histórico. As cores vivas e a arquitetura detalhada me transportaram para uma era de esplendor e intriga.`,

                `Diante do majestoso portão de Tiananmen, senti a imponência dessa cidade repleta de mistérios. Lembrei-me dos registros históricos sobre os imperadores que governaram o país com mão de ferro, enquanto uma multidão de súditos se curvava perante a sua majestade.`,

                `Adentrei a Cidade Proibida, que levou meu fôlego embora. Palácios e pavilhões adornados com detalhes intrincados contavam a história de uma civilização rica em cultura e tradições. Cada cômodo parecia conter segredos, e eu me perguntava quais histórias misteriosas aqueles corredores silenciosos poderiam revelar.`,
                `Em meio aos jardins exuberantes, vi um cenário de paz e serenidade, uma representação da crença chinesa na harmonia entre o homem e a natureza. A atmosfera era tão fascinante que perdi a noção do tempo enquanto contemplava a beleza da arquitetura imperial.`,

                `Diante do trono de ouro, onde os imperadores costumavam governar, senti uma mistura de admiração e reverência. Imaginar o poder concentrado ali, os segredos compartilhados com os conselheiros e a vida luxuosa da realeza, despertou minha curiosidade sobre a história intrigante da China.`,

                `Ao sair da Cidade Proibida, senti como se tivesse sido transportada para um mundo de encantamento e sabedoria. Cada detalhe arquitetônico e artefato preservado era uma janela para o passado, uma oportunidade de conhecer a alma da China milenar.`,

                `Meu primeiro dia na China já havia sido repleto de descobertas e maravilhas. Mal podia esperar para desvendar mais segredos e tesouros escondidos nessa terra de histórias inesquecíveis. E assim, parto para novas aventuras, com a certeza de que minha paixão por desvendar mistérios e aprender sobre culturas antigas me guiará nessa jornada extraordinária.',`,
            ],
        },
        {
            id: 2,
            day: 5,
            text: [
                `Minha jornada me levou a Xi'an, uma cidade repleta de história e tesouros arqueológicos. Lá, deparei-me com um dos maiores mistérios e maravilhas do mundo: o Exército de Terracota. As histórias que ouvi sobre essas impressionantes estátuas ganharam vida diante dos meus olhos.`,

                `Ao adentrar o sítio arqueológico, fui imediatamente envolvida por uma sensação de grandiosidade e mistério. Diante de mim, estavam milhares de guerreiros de terracota, todos meticulosamente esculpidos e posicionados como se estivessem prontos para proteger seu imperador, Qin Shi Huang, mesmo após milênios de sua morte.`,

                `Cada guerreiro tinha características únicas, desde a expressão no rosto até as armas que empunhavam. Era como se eles estivessem congelados no tempo, esperando por uma ordem que nunca chegou. A grandiosidade do mausoléu e a magnitude desse projeto arquitetônico me deixaram sem palavras.`,

                `Enquanto caminhava pelas fileiras intermináveis de guerreiros, senti uma conexão com a história da China e a grandiosidade de sua antiga civilização. Perguntas sobre como essas impressionantes estátuas foram criadas e a misteriosa finalidade desse exército não deixavam minha mente.`,

                `A visita ao Exército de Terracota foi como uma viagem no tempo, um encontro com o passado distante da China. As histórias e lendas que cercam esse sítio arqueológico somaram-se ao meu fascínio pelos mistérios dessa terra milenar.`,

                `Em meio aos guerreiros de terracota, senti uma profunda reverência pelo imperador Qin Shi Huang e pela habilidade e engenhosidade de sua civilização. A experiência de testemunhar essa maravilha arqueológica me ensinou que o passado é uma fonte inesgotável de conhecimento e que a busca por desvendar mistérios históricos continuará a me guiar em minhas futuras aventuras. E assim, ansiosa para desvendar mais segredos dessa terra misteriosa, sigo em frente em minha jornada na China.`,
            ],
        },
        {
            id: 3,
            day: 9,
            text: [
                `Meu fascínio pelas maravilhas naturais da China me levou a Zhangjiajie, uma terra de paisagens surreais e deslumbrantes. Ao adentrar o Parque Nacional de Zhangjiajie, me senti imersa em um cenário de filme, como se tivesse entrado em um mundo mágico e distante.`,

                `As montanhas flutuantes, cobertas por vegetação exuberante, pareciam sair diretamente de um sonho. A névoa que envolvia as formações rochosas conferia um ar de mistério e encanto a esse lugar único. Cada passo que eu dava me aproximava cada vez mais de um cenário de conto de fadas.`,

                `Descobri que Zhangjiajie inspirou a criação do cenário de Pandora, o mundo fictício do filme "Avatar". Não é à toa que esse parque é considerado uma das paisagens mais inspiradoras e deslumbrantes do mundo.`,

                `Em um momento especial, peguei o elevador Bailong, uma das estruturas mais impressionantes de Zhangjiajie, que me levou a uma vista panorâmica de tirar o fôlego. Lá do alto, pude apreciar a magnitude das montanhas e das formações rochosas que se estendiam por quilômetros ao redor.`,

                `Durante minha caminhada pelas trilhas sinuosas, passei por pontes suspensas e desfiladeiros vertiginosos, desfrutando de uma experiência que misturava aventura e encantamento. A natureza tinha esculpido esse lugar com uma maestria incomparável, e eu me sentia privilegiada por testemunhar tamanha beleza natural.`,

                `Zhangjiajie despertou minha imaginação e alimentou meu amor pela natureza. Cada cena, cada paisagem, era como uma pintura viva, repleta de cores, texturas e formas fascinantes.`,

                `Ao final do dia, enquanto contemplava o pôr do sol sobre as montanhas, senti uma profunda conexão com a natureza e a sensação de que, de alguma forma, eu havia encontrado um pedaço de mim nesse cenário de sonhos.`,

                `Deixar Zhangjiajie foi como dizer adeus a um mundo encantado, mas as memórias desse lugar espetacular permanecerão comigo para sempre. E assim, ansiosa por mais aventuras e belezas que o mundo tem a oferecer, continuo minha jornada na China, certa de que cada destino reservará novas surpresas e encantamentos.`,
            ],
        },
        {
            id: 4,
            day: 13,
            text: [
                `Em Chengdu, tive a oportunidade de vivenciar um encontro com a ternura dos pandas gigantes. Esses adoráveis e vulneráveis animais roubaram meu coração desde o primeiro momento em que os vi. Ao adentrar o centro de pesquisa e conservação, a expectativa tomou conta de mim.`,

                `Observar os pandas gigantes em seu habitat natural foi uma experiência única e emocionante. Com seus movimentos calmos e seu jeito brincalhão, esses adoráveis ursos cativaram a todos ao redor. Cada passo desajeitado e cada mastigação de bambu pareciam uma verdadeira obra de arte da natureza.`,

                `Percebi a importância da preservação desses animais encantadores para o equilíbrio do ecossistema chinês. Como uma espécie em risco de extinção, os pandas gigantes são símbolos da necessidade de proteção e conservação da biodiversidade do nosso planeta.`,

                `Os esforços realizados para preservar esses tesouros da natureza me encheram de esperança. Cientistas, pesquisadores e voluntários trabalham incansavelmente para garantir a sobrevivência dessa espécie ameaçada, e estar diante deles foi um lembrete poderoso do quão valiosa é a diversidade da vida na Terra.`,

                `Participar de um programa de voluntariado no centro de conservação me permitiu contribuir, mesmo que de forma pequena, para essa causa nobre. Pude auxiliar na preparação dos alimentos dos pandas e aprender mais sobre seus hábitos e comportamentos. Cada interação com esses animais delicados foi uma lição de humildade e compaixão.`,

                `Ao me despedir dos pandas gigantes, levei comigo um sentimento de gratidão e a certeza de que preservar nossa rica biodiversidade é uma responsabilidade que todos compartilhamos. O encontro com esses animais extraordinários me ensinou a apreciar ainda mais a beleza e a importância da natureza em sua forma mais pura.`,

                `Chengdu e seus pandas gigantes ocuparão um lugar especial em meu coração, e sua preservação continuará sendo uma causa que defenderei com fervor. E assim, com o coração quentinho por essa experiência, sigo em frente em minha jornada pela China, ansiosa por novas descobertas e pelo poder transformador da natureza em nossas vidas.`,
            ],
        },
        {
            id: 5,
            day: 17,
            text: [
                `Chegou o momento tão esperado de visitar a Grande Muralha da China. Essa maravilha arquitetônica, com seus milhares de quilômetros de extensão, é um ícone da história e da engenhosidade humana. Ao me aproximar dela, senti uma mistura de empolgação e reverência, pois estava prestes a caminhar sobre uma estrutura que atravessou séculos de história.`,

                `Os degraus centenários que se estendiam diante de mim convidavam à aventura. Com cada passo que eu dava, sentia uma conexão com todos aqueles que percorreram esses caminhos antes de mim. Era como se o eco das vozes do passado ressoasse ao meu redor, contando histórias de batalhas, comércio e cultura que moldaram o destino da China.`,

                `Subir a Grande Muralha foi uma experiência gratificante e desafiadora. Cada degrau vencido era uma conquista, e o esforço físico se misturava à sensação de estar tocando a história com minhas próprias mãos. As paisagens deslumbrantes que se descortinavam ao longo do percurso me lembravam da grandiosidade e diversidade do território chinês.`,

                `Enquanto caminhava, meu olhar se perdia na imensidão da muralha, que serpenteava pelas montanhas e se estendia até onde a vista alcançava. A magnitude dessa construção milenar era tão impressionante que era impossível não se sentir pequeno diante dela. Mas, ao mesmo tempo, esse sentimento de pequenez era acompanhado por um senso de humildade e respeito pela capacidade humana de criar algo tão monumental.`,

                `Ao alcançar um dos pontos mais altos, parei para contemplar o horizonte vasto e me deixei envolver pela grandiosidade do momento. Estar na Grande Muralha era como viajar através do tempo, sentindo a herança histórica da China em cada pedra e em cada torre de vigia.`,

                `Aquele momento ficará marcado em minha memória como uma das experiências mais emocionantes da minha vida. Deixar a Grande Muralha foi como me despedir de um amigo antigo, sabendo que aquele encontro deixou uma marca indelével em meu coração.`,

                `Enquanto continuo minha jornada pela China, levo comigo a lembrança dessa experiência enriquecedora. A Grande Muralha me ensinou que a história é viva e que cada um de nós é parte dela, conectando-nos com o passado e moldando o futuro. E assim, com os pés firmes no presente, sigo em busca de novas descobertas e de aventuras que perpetuarão minha paixão pelos tesouros da humanidade.`,
            ],
        },
        {
            id: 6,
            day: 21,
            text: [
                `Em Guilin, encontrei-me cercada por uma das paisagens mais deslumbrantes da China: montanhas cársticas e rios cristalinos que pareciam sair de um sonho. A natureza exuberante dessa região tornou esse dia uma jornada inesquecível pela beleza do mundo natural.`,

                `Passei um dia navegando pelas águas tranquilas do Rio Li, onde cada curva revelava uma paisagem de tirar o fôlego. As montanhas que emergiam das águas, como esculturas esculpidas pela natureza ao longo dos milênios, eram uma verdadeira pintura viva. O reflexo das formações rochosas nas águas calmas do rio criava um cenário etéreo e mágico.`,

                `As cores vivas da vegetação que adornava as margens do rio criavam um contraste encantador com a imensidão das montanhas. Pássaros voavam graciosamente no céu azul, e a serenidade do ambiente convidava à reflexão e à conexão com a natureza.`,

                `Em um momento especial, parei em uma pequena vila às margens do rio, onde tive a oportunidade de interagir com as pessoas locais. A hospitalidade e o sorriso caloroso dos moradores trouxeram uma sensação de acolhimento que fez com que eu me sentisse em casa, mesmo estando a milhares de quilômetros de distância.`,

                `Ao continuar minha jornada pelo Rio Li, passei por formações rochosas icônicas, como a Colina do Elefante, que se assemelhava a um majestoso paquiderme bebericando água. Essas imagens surreais e a harmonia da natureza me lembraram da importância de preservar esses tesouros naturais para as gerações futuras.`,

                `Enquanto o sol começava a se pôr, as cores douradas da tarde se refletiam nas águas do rio, criando um cenário ainda mais impressionante. Agradeci em silêncio por ter a oportunidade de testemunhar tamanha beleza e por estar imersa em uma experiência tão enriquecedora.`,

                `Guilin e o Rio Li ocuparão um lugar especial em meu coração, como um lembrete constante da capacidade que a natureza tem de nos maravilhar e inspirar. A jornada pelas águas tranquilas desse rio me ensinou que a beleza do mundo natural é um presente precioso, e nossa responsabilidade é protegê-la e preservá-la para as gerações vindouras.`,

                `E assim, com a alma renovada e o coração cheio de gratidão, sigo em frente em minha jornada pela China, ansiosa por mais momentos de encantamento e conexão com a grandiosidade da natureza. Cada destino me reserva novas descobertas, e cada paisagem é uma oportunidade de me encantar novamente com as maravilhas do nosso planeta.`,
            ],
        },
        {
            id: 7,
            day: 25,
            text: [
                `Não poderia deixar de visitar Hong Kong, uma cidade vibrante que combina tradição e modernidade de maneira fascinante. Ao desembarcar, fui envolvida pelo agito das ruas e a energia contagiante dessa metrópole cosmopolita.`,

                `Caminhar pelas movimentadas ruas de Hong Kong foi uma experiência sensorial única. As cores vivas dos letreiros e as luzes brilhantes que adornam os edifícios à noite criam um cenário eletrizante e cheio de vida. Era como se a cidade pulsasse com uma energia própria, convidando todos os que a visitam a se deixarem levar por sua atmosfera envolvente.`,

                `A cultura local e a tradição se entrelaçam harmoniosamente com a modernidade da arquitetura dos arranha-céus. A harmonia desses contrastes é fascinante e torna Hong Kong um lugar verdadeiramente especial.`,

                `Durante minha estadia, não pude deixar de experimentar a culinária diversificada da cidade. Os mercados de rua estavam repletos de sabores e aromas tentadores, e cada refeição era uma jornada gastronômica deliciosa. As iguarias locais refletem a diversidade cultural de Hong Kong e tornam a cidade um paraíso para os amantes da boa comida.`,

                `A sofisticação dos arranha-céus é uma prova do espírito inovador de Hong Kong. Visitar o skyline da cidade do Victoria Peak foi uma experiência de tirar o fôlego. A vista panorâmica das luzes da cidade e do porto iluminado me fez sentir como se estivesse no topo do mundo.`,

                `Ao longo do dia, explorei templos tradicionais e mercados locais, o que me permitiu conhecer um lado mais autêntico e histórico de Hong Kong. A riqueza cultural da cidade me cativou e me fez sentir parte de algo maior.`,

                `À noite, enquanto me despedi de Hong Kong, senti uma gratidão profunda por ter tido a oportunidade de vivenciar essa cidade incrível. Seu dinamismo e diversidade tornam-na um destino inesquecível, capaz de surpreender e encantar seus visitantes.`,

                `Hong Kong é uma cidade que deixa uma marca indelével na alma de quem a visita. Sua fusão única de tradição e modernidade é um lembrete poderoso de como a cultura e a inovação podem coexistir em harmonia. E assim, com a mente e o coração repletos de lembranças memoráveis, sigo em frente em minha jornada pela China, ansiosa por novas aventuras e por descobrir as maravilhas que o mundo tem a oferecer.`,
            ],
        },
        {
            id: 8,
            day: 28,
            text: [
                `Minha jornada na China estava chegando ao fim, e o destino final foi Lhasa, no Tibet. Essa região de beleza transcendental me aguardava com seus horizontes vastos e sua espiritualidade única. Ao desembarcar em Lhasa, fui envolvida por uma atmosfera de serenidade e conexão com algo maior.`,

                `Visitar o Palácio de Potala foi um momento que ficará marcado para sempre em minha memória. Essa majestosa estrutura, que se ergue imponente sobre a cidade, é um verdadeiro santuário budista. Ao subir os degraus centenários, senti uma mistura de reverência e gratidão por estar diante de um lugar tão sagrado e cheio de história.`,

                `O Palácio de Potala é um emblema da espiritualidade que permeia cada centímetro desta região. A paz e a serenidade que encontrei ali me tocaram profundamente, e senti como se estivesse em sintonia com algo maior do que eu mesma. A fé e a devoção que encontrei nos olhares dos peregrinos que ali visitavam reforçaram a importância desse lugar como um centro de espiritualidade e devoção.`,

                `A arquitetura e os detalhes minuciosos do palácio são um testemunho da rica história do budismo tibetano. Cada sala e corredor parecem contar histórias de mestres iluminados e de uma busca contínua pela sabedoria e compaixão.`,

                `Ao percorrer os aposentos e os pátios do Palácio de Potala, senti-me envolvida por uma atmosfera de tranquilidade e paz interior. Ouvir as preces e cânticos dos monges, misturados ao aroma suave do incenso, trouxe uma sensação de conexão espiritual profunda.`,

                `Lhasa e o Palácio de Potala me ensinaram que a espiritualidade é uma jornada individual e única para cada pessoa. Cada passo que dei naquele lugar sagrado foi uma oportunidade de reflexão e autodescoberta.`,

                `Ao deixar Lhasa e me despedir da China, levei comigo a certeza de que essa viagem foi muito mais do que uma aventura turística. Foi uma jornada de crescimento pessoal, de conexão com culturas milenares e de apreciação pelas maravilhas da natureza e da espiritualidade.`,

                `Com o coração repleto de gratidão, parto para novas aventuras com a certeza de que essas experiências viverão em mim para sempre. E assim, com o espírito renovado e a mente aberta para o que o futuro reserva, sigo em frente em busca de novos encontros espirituais e de uma compreensão mais profunda do nosso vasto e diverso mundo.`,
            ],
        },
        {
            id: 9,
            day: 31,
            text: [
                `Ao partir da China, levei comigo o tesouro de uma nação rica em história e cultura. Cada lugar que visitei, cada pessoa que conheci, deixou uma marca indelével em meu coração. Essa jornada extraordinária me ensinou que o mundo é vasto, misterioso e maravilhoso, repleto de tesouros naturais e culturais esperando para serem descobertos.`,

                `A China, com sua imensidão geográfica e diversidade cultural, me presenteou com uma infinidade de experiências enriquecedoras. Das majestosas pirâmides do Egito à grandiosidade da Grande Muralha, cada destino me presenteou com uma lição única sobre a humanidade e sua capacidade de criar e preservar a história.`,

                `Conhecer Gabriela Araujo, a mulher fascinada pelas histórias das antigas civilizações e seus mistérios, foi uma inspiração para mim. Sua paixão pela exploração e sua curiosidade incansável me ensinaram a abraçar cada nova jornada como uma oportunidade de crescimento pessoal e aprendizado.`,

                `Essa jornada me ensinou que a busca por conhecimento e beleza é uma jornada sem fim, e que a verdadeira riqueza está nas experiências compartilhadas e nas conexões que criamos ao longo do caminho. Cada cultura, cada tradição e cada encontro humano se tornaram preciosidades que levarei comigo para sempre.`,

                `Partir para novas aventuras é abraçar o desconhecido com entusiasmo e coragem. Levo comigo a certeza de que, onde quer que eu vá, encontrarei maravilhas e desafios que enriquecerão minha jornada como ser humano.`,

                `Enquanto me despeço da China, sinto um misto de gratidão e saudade. Aprendi que viajar é muito mais do que visitar lugares famosos; é imergir em novas culturas, abrir o coração para o diferente e permitir que cada experiência me transforme.`,

                `Com o coração pleno de gratidão e a alma ansiosa por novas descobertas, parto para novas aventuras, com a certeza de que minha busca por conhecimento e beleza continuará guiando meus passos, seja onde for. E assim, com a mente aberta e o espírito livre, sigo em frente, ansiosa pelo que o futuro reserva. Pois, como Gabriela Araujo, exploradora incansável, sei que o mundo é vasto e que há um universo de experiências e maravilhas esperando para serem desvendados. E é com essa paixão no coração que abraço o mundo e todos os seus mistérios.`,
            ],
        },
    ];

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="journeyPage">
            <div className="back">
                <Link to="/journeys">Voltar</Link>
            </div>

            <Link
                to="/journeys/egito"
                className="linkRight link"
                onClick={handleClick}
            >
                Egito
            </Link>

            <h2>Diario de Viagem - China</h2>
            <h2>Aventuras Misteriosas na China Antiga</h2>

            {journeyData.map((journeyItem) => (
                <>
                    <div key={journeyItem.id}>
                        <div className={`parallaxChina${journeyItem.id} parallax`}>
                            <h2>Dia {journeyItem.day}</h2>
                        </div>
                        <div className="textContent">
                            {journeyItem.text.map((txt) => (
                                <p>{txt}</p>
                            ))}
                        </div>
                    </div>
                    <div style={{ height: '2vh' }} />
                </>
            ))}
            <div className="textContent">
                <h2>Conclusão</h2>
                <p>
                    Ao partir da China, levei comigo o peso de uma nação rica em história
                    e cultura. Cada lugar que visitei, cada pessoa que conheci, deixou uma
                    marca em meu coração. Essa jornada me ensinou que o mundo é vasto,
                    misterioso e maravilhoso. E assim, parto para novas aventuras, com a
                    certeza de que minha busca por conhecimento e beleza continuará
                    guiando meus passos, seja onde for.
                </p>
            </div>
        </div>
    );
};

export default JourneyChina;
