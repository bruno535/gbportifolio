import React from 'react';
import { Link } from 'react-router-dom';
import './Journeys.css'

const JourneyMexico = (country) => {
    const journeyData = [
        {
            id: 1,
            day: 1,
            text: [
                `Ao desembarcar na Cidade do México, meu coração se encheu de uma mistura fascinante de emoções. A grandiosidade dessa metrópole pulsante, com seus arranha-céus que se erguiam majestosamente em meio ao céu, me envolveu em uma atmosfera vibrante de energia e vida. Porém, por trás do brilho moderno dessa cidade, meu espírito inquieto ansiava por desvendar os tesouros ocultos e as lendas antigas que permeiam o México.`,

                `Meu primeiro destino foi Teotihuacán, uma cidade milenar que já testemunhou o auge e a queda de grandes civilizações. Ao caminhar pelos imponentes degraus da Pirâmide do Sol, senti uma conexão profunda com a grandiosidade dos povos que ali viveram e que ergueram essas magníficas estruturas em honra aos deuses do céu e da terra. A energia sagrada que emana desse lugar deixou-me em reverente admiração, e eu me vi envolta por uma aura mística que ecoava os sussurros do passado.`,

                `Segui minha jornada até Chichen Itzá, onde a Pirâmide de Kukulcán se ergue majestosamente, como se guardasse segredos do tempo. O equinócio, quando a luz do sol forma a imagem de uma serpente descendo a pirâmide, é um testemunho impressionante da habilidade dos antigos maias em compreender e honrar os ciclos da natureza. Presenciar esse fenômeno único foi um momento de encanto e reflexão sobre a sabedoria que as antigas civilizações possuíam em harmonia com o cosmos.`,

                `Em Oaxaca, encontrei-me imersa em uma cultura rica e colorida, onde tradições milenares coexistem com a modernidade. A cidade exala uma energia contagiante, e os mercados cheios de cores e aromas revelam a alma do povo mexicano. Experimentar a autenticidade de sua culinária, seus trajes tradicionais e sua música folclórica foi como mergulhar em um conto de fadas cultural, repleto de histórias e lendas transmitidas de geração em geração.`,

                `Ainda sob o encanto de Oaxaca, decidi explorar Monte Albán, uma cidade pré-colombiana situada em uma colina com vista para os vales circundantes. A grandiosidade das praças cerimoniais e das pirâmides me fez refletir sobre a complexidade da sociedade que ali habitava e sobre a harmonia entre a arquitetura e a paisagem natural.`,

                `Enquanto navegava pelas águas cristalinas das águas de Xochimilco, embarcando em uma trajinera, pude vivenciar uma tradição ancestral. A serenidade do ambiente me levou a apreciar a simplicidade e a beleza da vida, e em meio a risos e conversas animadas com os moradores locais, senti-me acolhida e conectada com o coração do México.`,

                `Ao deixar a Cidade do México, carrego comigo as memórias inesquecíveis de cada lugar visitado, cada história ouvida e cada sorriso compartilhado. A grandiosidade dessa metrópole me cativou, mas foram os tesouros escondidos e as lendas antigas do México que verdadeiramente roubaram meu coração. Essa jornada de descobertas ampliou minha compreensão da riqueza da história humana e renovou minha vontade de continuar explorando os mistérios que o mundo tem a oferecer. Essa experiência foi um lembrete de que a busca pela sabedoria e pela beleza da vida é uma jornada infinita e enriquecedora, capaz de transformar nossa visão do mundo e encher nossos corações de gratidão e admiração. E assim, sigo em busca de novos horizontes e aventuras, ansiosa por desvendar mais segredos que a história do mundo guarda.`,
            ],
        },
        {
            id: 2,
            day: 5,
            text: [
                `Minha jornada me conduziu a Teotihuacán, a lendária cidade dos deuses. Ao adentrar esse sítio arqueológico, a magnitude das pirâmides do Sol e da Lua emergindo diante de mim foi como uma saudação majestosa dos séculos passados. Cada degrau de pedra que subi durante essa experiência transcendental reverberou a energia das antigas civilizações que ali habitaram, e uma conexão profunda com seus povos misteriosos se estabeleceu em meu coração.`,

                `Envolta em uma aura mística, caminhar entre as grandiosas estruturas de Teotihuacán despertou em mim um sentimento de admiração reverencial pela sabedoria e engenhosidade dos povos antigos. As pirâmides, testemunhas silenciosas do tempo, pareciam guardar segredos há muito tempo ocultos, e meu espírito aventureiro ansiava por desvendá-los.`,

                `Na Pirâmide do Sol, elevar-me aos céus através das escadarias era como uma jornada espiritual rumo ao infinito. Contemplando a vastidão dos campos ao redor, imaginei o cenário da vida cotidiana dos antigos teotihuacanos, que ali residiram e ergueram essas maravilhas arquitetônicas para honrar os deuses celestiais.`,

                `A imponência da Pirâmide da Lua era igualmente avassaladora, e subir seus degraus foi uma oportunidade de vislumbrar o universo de forma singular. Com cada passo dado, eu me conectava com a alma daqueles que ali buscavam a harmonia entre a terra e o céu, encontrando significado nos ciclos da natureza.`,

                `O sopro da história que permeava esse local sagrado envolvia-me, e eu sentia como se os ecos das vozes dos antigos sacerdotes e das celebrações rituais ainda pudessem ser ouvidos pelos visitantes de hoje. Essa sensação de continuidade da história humana emocionou-me profundamente, pois eu estava prestes a se tornar mais um elo dessa corrente eterna.`,

                `Enquanto o sol descia no horizonte, iluminando as pirâmides com tons dourados, eu senti a energia dos deuses ancestrais envolvendo-me. Em meio a essa atmosfera carregada de mistério, uma reverência silenciosa tomou conta de mim, pois eu sabia que estava testemunhando um legado transcendente da humanidade.`,

                `Partir de Teotihuacán foi um ato de despedida cheio de gratidão, mas também de esperança, pois eu sabia que, apesar de deixar para trás essa cidade sagrada, as lições aprendidas e as experiências vividas ali jamais seriam esquecidas. A jornada em Teotihuacán reforçou minha paixão por viajar e mergulhar na riqueza da história humana, lembrando-me de que cada destino visitado é uma oportunidade de ampliar meu entendimento sobre a vida e a essência da humanidade.`,

                `Assim, com o coração preenchido de encantamento e curiosidade, sigo em busca de novos enigmas que o mundo reserva, sabendo que cada lugar visitado é uma porta para o conhecimento e para o enriquecimento da alma. Essa é a essência de minha jornada, e a cidade dos deuses me proporcionou um vislumbre eterno desse infinito universo de sabedoria e beleza que a humanidade construiu ao longo dos tempos.`,
            ],
        },
        {
            id: 3,
            day: 10,
            text: [
                `Peguei a estrada em direção a Oaxaca, uma cidade que me recebeu de braços abertos com sua aura vibrante, repleta de cores e tradições que cativam os sentidos. Cada esquina revelava uma nova surpresa, e me entreguei com entusiasmo a dias de exploração pelos seus encantos.`,

                `Nos mercados locais, mergulhei em um mundo de riqueza cultural, onde artesanatos cuidadosamente confeccionados pelas mãos talentosas de artesãos locais eram verdadeiras obras de arte. Cada peça contava histórias antigas, transmitindo a sabedoria e a herança ancestral do povo oaxaquenho. Deixe-me levar pelas cores vibrantes dos tecidos e das cerâmicas, e me perdi em aromas tentadores que emanavam das bancas de gastronomia típica.`,

                `A cultura zapoteca e mixteca me envolveu como uma dança fascinante, onde cada passo revelava um mistério a ser desvendado. Conhecer suas histórias ancestrais foi como folhear as páginas de um livro enriquecido por tradições que transcendem gerações. Em cada conversa com os moradores locais, aprendi a valorizar ainda mais a essência dessa cultura tão rica e diversificada, repleta de lendas e rituais que ecoam a sabedoria do passado.`,

                `Envolvida pela atmosfera autêntica e acolhedora de Oaxaca, encontrei uma comunidade cujo espírito de união é evidente em cada celebração. Fui abraçada por danças folclóricas cheias de significado e presenciei cerimônias tradicionais que honravam as divindades ancestrais. Essa experiência de imersão cultural tocou minha alma, pois me fez sentir parte de algo maior, uma teia interconectada de pessoas e tradições que atravessam o tempo.`,

                `Cada caminhada pelas ruas históricas de Oaxaca era como mergulhar em um conto de fadas, onde casarões coloniais ostentavam fachadas adornadas com arte que contavam a história da cidade. As praças eram pontos de encontro, e o calor humano dos oaxaquenhos criava uma atmosfera de calorosa hospitalidade.`,

                `Deixar Oaxaca foi uma despedida agridoce, pois, embora eu partisse, carregava comigo a beleza de suas tradições e a força de seu povo em meu coração. A experiência vivida nessa cidade encantadora ampliou minha compreensão sobre a riqueza da cultura mexicana, revelando-me que cada destino visitado é uma porta para a compreensão mais profunda da humanidade.`,

                `Assim, sigo minha jornada com gratidão e entusiasmo, ansiosa por desvendar novos enigmas e me conectar com a essência de cada lugar que visito. Oaxaca deixou um legado eterno em minha alma, lembrando-me de que a busca pela autenticidade e pela beleza da vida é uma jornada contínua, capaz de nos transformar e nos inspirar a cada passo do caminho. Que a cultura e a sabedoria ancestrais continuem a guiar-me em minha jornada por terras desconhecidas, onde estou certa de que serei recebida de braços abertos, assim como fui em Oaxaca, uma cidade que agora faz parte das minhas memórias mais preciosas.`,
            ],
        },
        {
            id: 4,
            day: 15,
            text: [
                `Em Palenque, fui transportada para um cenário exuberante e enigmático nas profundezas das selvas maias. Ouvir os sussurros das árvores antigas enquanto me maravilhava com as ruínas majestosas foi como mergulhar em uma aventura arqueológica de proporções épicas. Cada passo dado em meio às estruturas imponentes era como caminhar pela trilha do tempo, conectando-me diretamente com uma civilização há muito esquecida.`,

                `As ruínas de Palenque guardam o legado magnífico de uma cultura que prosperou em meio à exuberância da natureza. A cada escadaria escalada e cada pirâmide explorada, minha imaginação ganhava asas, e eu me vi traçando cenários da vida cotidiana dos maias. A grandiosidade da arquitetura, meticulosamente esculpida em pedra, era uma prova tangível do conhecimento e da engenhosidade desses povos que construíram uma cidade tão impressionante no coração da selva.`,

                `Enquanto observava as inscrições nas pedras, senti-me como uma arqueóloga decifrando enigmas ancestrais. Os hieróglifos e os relevos que adornavam as estruturas pareciam guardar segredos profundos sobre a vida, os rituais e a espiritualidade dessa antiga civilização. Cada inscrição tinha o poder de despertar a curiosidade dentro de mim, e eu me deleitava com a sensação de estar diante de um quebra-cabeça histórico.`,

                `A harmonia entre as construções e a natureza exuberante era uma lição sobre a simbiose entre o ser humano e seu ambiente. As árvores ancestrais que cercavam as ruínas pareciam ser guardiãs dos mistérios do passado, e eu me senti humilde diante da magnitude dessa conexão entre homem e natureza. A cada esquina, a selva se revelava como um verdadeiro tesouro, repleto de vida e espiritualidade.`,

                `Palenque me ensinou que a história é um fio inquebrável que nos conecta com nossas raízes e nos revela a trajetória da humanidade. Aprofundar-me nas ruínas maias foi como abrir um livro sagrado, cujas páginas contêm a sabedoria de uma cultura poderosa e enigmática. Essa experiência arqueológica me despertou para a importância de preservar e valorizar nossa herança histórica, para que as gerações futuras também possam se maravilhar com os mistérios que essa civilização nos deixou como legado.`,

                `Deixar Palenque foi como despedir-me de um universo paralelo, onde o passado se mistura com o presente, e os ecos da história ecoam eternamente. Mas, à medida que segui minha jornada, levei comigo o conhecimento e a admiração por uma civilização que me tocou profundamente. E assim, sigo em busca de novas aventuras, ansiosa por desvendar mais segredos e aprender com a riqueza cultural que o mundo tem a oferecer. Que cada passo me aproxime cada vez mais da essência da humanidade, assim como Palenque fez em minha jornada de descobertas e fascinação.`,
            ],
        },
        {
            id: 5,
            day: 20,
            text: [
                `Na península de Yucatán, embarquei em uma fascinante jornada para explorar as cidades maias de Uxmal e Chichén Itzá. Cada passo dado nessa terra carregada de história foi como um mergulho profundo em um universo misterioso, onde o passado e o presente se entrelaçam em harmonia.`,

                `Em Uxmal, as ruínas revelavam a grandiosidade da engenhosidade maia em sua arquitetura. Cada pirâmide e cada edifício eram um testemunho vivo da sabedoria dessa civilização, que dominava técnicas avançadas de construção e design. A perfeição das formas e a precisão das medidas eram um testemunho do conhecimento avançado em matemática e geometria que os maias possuíam.`,

                `Ao contemplar a Pirâmide do Adivinho, fui tomada por um sentimento de admiração pela habilidade dos maias em criar estruturas tão magníficas e imponentes. A cada pedra, senti a presença de um povo que buscava conectar-se com o cosmos através de sua arquitetura e rituais sagrados.`,

                `Em Chichén Itzá, o cenário foi ainda mais impressionante. A grandiosidade de El Castillo, a pirâmide que marca o equinócio e solstício, é uma prova da profunda compreensão dos ciclos astronômicos que os maias possuíam. Presenciar o fenômeno da descida da serpente de Kukulcán durante o equinócio foi uma experiência verdadeiramente transcendental, e me fez refletir sobre o profundo respeito que os maias tinham pela natureza e suas forças.`,

                `Nessas cidades sagradas, percebi como a astronomia e a arquitetura estavam intrinsecamente entrelaçadas na cultura maia, guiando sua vida cotidiana, seus rituais e suas crenças espirituais. A riqueza do conhecimento que eles possuíam sobre o cosmos é uma lição para a humanidade sobre a importância de estarmos em sintonia com a natureza e o universo ao nosso redor.`,

                `Ao deixar Uxmal e Chichén Itzá, levei comigo a reverência pela sabedoria e a espiritualidade dos maias. Essas cidades antigas me presentearam com um profundo senso de conexão com a história da humanidade e o universo que nos cerca. Que a herança dessas civilizações continue a ser preservada, para que as futuras gerações também possam apreciar e aprender com o legado deixado por esses povos extraordinários. E assim, sigo em minha jornada, ansiosa por desvendar mais segredos e tesouros que o mundo antigo tem a compartilhar, com a certeza de que cada destino visitado é uma porta para a sabedoria e a beleza da humanidade.`,
            ],
        },
        {
            id: 6,
            day: 25,
            text: [
                `Segui para a Riviera Maya, onde me entreguei a um paraíso de águas cristalinas e praias de areia branca. Cada momento nesse refúgio tropical foi como uma dança suave com a natureza, onde as ondas acariciavam meus pés e o sol beijava delicadamente minha pele.`,

                `Mergulhar nos cenotes foi uma experiência transformadora, como entrar em um portal mágico que nos leva às entranhas da Terra. Essas misteriosas cavernas submersas são verdadeiros tesouros naturais, e mergulhar em suas águas cristalinas foi como flutuar em um mundo à parte, repleto de lendas e histórias que ecoam nas profundezas.`,

                `Cada cenote tinha sua própria essência, uma história guardada em suas águas transparentes. Em cada mergulho, senti-me conectada com a natureza primordial, com a força da terra e a pureza das águas. Em um instante, a agitação do mundo desapareceu, e me vi envolvida em um silêncio profundo, como se estivesse em comunhão com a alma do planeta.`,

                `A Riviera Maya é um lugar de encantamento e mistério, onde a natureza e a cultura se entrelaçam em uma harmonia única. Passear por suas ruínas maias, com vista para o mar azul-turquesa, foi uma viagem no tempo, uma oportunidade de caminhar nos passos dos antigos habitantes dessa região deslumbrante.`,

                `O encontro com a fauna marinha durante um mergulho com snorkel foi como conhecer um mundo paralelo, habitado por criaturas coloridas e exóticas. A riqueza da vida marinha da Riviera Maya é um lembrete da importância de preservar e proteger os tesouros naturais do nosso planeta.`,

                `Deixar a Riviera Maya foi como dizer adeus a um sonho, mas levei comigo memórias e sensações que permanecerão comigo para sempre. Cada experiência nesse paraíso tropical me ensinou sobre a beleza da natureza, a riqueza cultural e a importância de preservar os tesouros naturais que a Terra nos oferece generosamente.`,

                `E assim, sigo minha jornada com o coração grato e ansioso por descobrir mais maravilhas ao redor do mundo. Que cada destino visitado continue a me encantar e inspirar, pois sei que a beleza e a sabedoria da natureza são inesgotáveis. Que eu possa sempre me conectar com a essência da Terra, assim como fiz na Riviera Maya, um lugar onde a magia da natureza e a história antiga dançam juntas em uma sinfonia encantadora.`,
            ],
        },
        {
            id: 7,
            day: 28,
            text: [
                `Minha jornada de 28 dias no México chegou ao fim, mas a lembrança desse país encantador deixou uma marca indelével em minha alma. Cada cidade visitada, cada sítio arqueológico explorado e cada encontro com as pessoas locais me ensinaram lições valiosas sobre a riqueza cultural e histórica dessa nação.`,

                `Iniciar essa aventura na Cidade do México, com sua mistura de tradição e modernidade, foi como abrir as portas para um universo repleto de cores, sabores e vivacidade. Explorar a grandiosidade da Cidade Proibida e mergulhar no passado milenar dos antigos palácios e jardins foi uma viagem no tempo que despertou minha imaginação para a vida da realeza mexicana.`,

                `Em Teotihuacán, percorrer as pirâmides do Sol e da Lua foi uma experiência transcendental, como se cada degrau me aproximasse mais dos deuses que um dia habitaram essas majestosas estruturas. A conexão espiritual com a civilização que deixou um legado tão impressionante em suas construções foi algo que levarei comigo para sempre.`,

                `Em Uxmal e Chichén Itzá, meu coração se encheu de admiração pela engenhosidade maia, que dominava a arquitetura com tamanha maestria. Essas cidades antigas são testemunhas silenciosas de um conhecimento avançado em astronomia e geometria, que se entrelaçava com a espiritualidade dos povos antigos.`,

                `Nas selvas de Palenque, mergulhei em um universo misterioso, onde as ruínas revelaram a grandiosidade da civilização maia. Cada inscrição nas pedras parecia guardar segredos profundos, despertando minha curiosidade sobre a vida e os rituais dessa cultura tão enigmática.`,

                `A beleza das praias da Riviera Maya e os cenotes submersos me levaram a um mundo paradisíaco, onde a natureza e a história se fundem em uma harmonia perfeita. A conexão com a fauna marinha durante os mergulhos foi um lembrete da importância de proteger os tesouros naturais do nosso planeta.`,

                `Ao final da jornada, o México me presenteou com um entendimento mais profundo sobre a diversidade e a riqueza desse país tão fascinante. As lembranças das cidades coloniais, das ruínas maias, das paisagens deslumbrantes e, acima de tudo, das pessoas acolhedoras permanecerão comigo, inspirando-me a continuar desbravando novos horizontes.`,

                `E assim, sigo minha caminhada com o coração grato, sabendo que cada destino visitado é uma porta para a compreensão da humanidade e da beleza do mundo que nos cerca. Que minha sede de conhecimento e meu amor pelas culturas e histórias antigas continuem me guiando em busca de novas aventuras, levando sempre comigo a herança preciosa que o México deixou em minha alma.`,
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
                className="linkLeft link"
                onClick={handleClick}
            >
                Egito
            </Link>

            <h2>Diario de Viagem - Mexico</h2>
            <h2>México Místico e Exuberante</h2>

            {journeyData.map((journeyItem) => (
                <>
                    <div key={journeyItem.id}>
                        <div className={`parallaxMexico${journeyItem.id} parallax`}>
                            <h2>Dia {journeyItem.day}</h2>
                        </div>
                        <div className="textContent">
                            <p>
                                {journeyItem.text.map((txt) => (
                                    <p>{txt}</p>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div style={{ height: '2vh' }} />
                </>
            ))}
            <div className="textContent">
                <h2>Conclusão</h2>
                <p>
                    Minha jornada de 28 dias no México chegou ao fim, mas o país deixou
                    uma marca indelével em minha alma. Cada cidade, cada sítio
                    arqueológico, cada encontro com as pessoas locais me ensinou sobre a
                    riqueza cultural e histórica dessa nação.
                </p>
                <p>
                    Aprendi que o México é muito mais do que apenas paisagens
                    deslumbrantes e praias paradisíacas. É uma terra de enigmas, tradições
                    e espiritualidade profunda que ressoam desde os tempos antigos até os
                    dias atuais.
                </p>
                <p>
                    A partir de agora, levo comigo a riqueza desse país em meu coração,
                    pronta para compartilhar as histórias e belezas que vivenciei com o
                    mundo. E assim, parto para novas aventuras, com a certeza de que meu
                    amor pelas culturas antigas e pelos mistérios do mundo me levará a
                    desvendar novos enigmas em outras terras fascinantes.
                </p>
            </div>
        </div>
    );
};

export default JourneyMexico;
