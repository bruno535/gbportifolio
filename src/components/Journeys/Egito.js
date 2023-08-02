import React from 'react';
import { Link } from 'react-router-dom';
import './Journeys.css'

const JourneyEgito = (country) => {
    const journeyData = [
        {
            id: 1,
            day: 1,
            text: [
                `Ao chegar ao Egito, fui recebida pelo calor acolhedor do sol egípcio e a brisa suave do Rio Nilo. Com um coração cheio de expectativa, iniciei minha jornada pelo país que sempre me encantou com sua história milenar.`,

                `Através das pirâmides de Gizé, tive meu primeiro encontro com os vestígios do Egito Antigo. Estar diante dessas imponentes construções me fez sentir a grandiosidade e o mistério que envolvem essa civilização. Cada pedra parece carregar a história de um tempo distante, e a curiosidade sobre as vidas daqueles que as construíram só aumentava a cada passo que dava ao explorar os corredores e câmaras ocultas desses monumentos majestosos.`,

                `Em Luxor, explorei o incrível Templo de Karnak. O esplendor da arquitetura egípcia e a magnitude das colunas hipnotizaram meus olhos e minha alma. Tive a chance de caminhar pelos mesmos corredores onde faraós e sacerdotes caminharam há milênios. Era como se as paredes desse templo antigo sussurrassem segredos do passado, revelando uma história rica e complexa que moldou a trajetória desse antigo império.`,

                `Meu interesse pelos mistérios do Egito levou-me ao Templo de Hatshepsut, um lugar misterioso que revela muito sobre a história de uma das poucas rainhas-faraós. A riqueza da arte e da simbologia presente ali me deixou intrigada e cativada. Cada detalhe esculpido nas paredes contava uma história, e aprender sobre a governante que desafiou as convenções e se tornou uma figura proeminente na história egípcia foi uma lição de força e determinação.`,

                `Fiz uma emocionante visita ao Vale dos Reis, onde as tumbas dos faraós estão escondidas no coração das montanhas. Enquanto percorria os corredores subterrâneos, senti uma conexão com a jornada espiritual dos antigos egípcios em busca da vida após a morte. A arte e os hieróglifos nas paredes das tumbas contavam histórias de crenças e rituais que permearam a sociedade egípcia por séculos. Foi uma experiência profunda e inspiradora que me fez refletir sobre a espiritualidade e a busca humana pela imortalidade.`,

                `Estender minha estadia no Egito foi a melhor decisão que tomei. Em Aswan, testemunhei o majestoso Templo de Philae, que foi movido para uma ilha durante a construção da Represa Alta. A devoção dos egípcios modernos para preservar sua herança cultural é verdadeiramente inspiradora. Caminhar por esse santuário de pedra foi uma jornada de contemplação e admiração, uma chance de apreciar a dedicação e a perseverança da humanidade em preservar sua história e tradições.`,

                `Chegou o momento de explorar o deserto. Em Abu Simbel, enfrentei o desafio de ver o sol nascer atrás dos impressionantes templos de Ramsés II e Nefertari. A atmosfera quase mística me fez sentir uma conexão profunda com as antigas crenças e rituais. Observar os primeiros raios de sol iluminando essas maravilhas arquitetônicas foi um momento de contemplação e gratidão, um lembrete da grandeza da natureza e do esplendor do trabalho humano em harmonia com ela.`,

                `Após quase dois meses de descobertas e fascinação, é hora de partir. Levo comigo um coração cheio de gratidão por tudo o que vivi e aprendi no Egito. Essa viagem reforçou minha paixão por desvendar os mistérios das antigas civilizações e alimentou minha sede de conhecimento. Embora minha jornada pelo Egito tenha terminado, sei que meu fascínio pelos enigmas da humanidade é uma chama que jamais se apagará. E assim, parto para novas aventuras, com a certeza de que meu amor pela história e mistérios do passado sempre me guiará em busca de novas descobertas e aprendizados.`,
            ],
        },
        {
            id: 2,
            day: 7,
            text: [
                `Através das pirâmides de Gizé, tive meu primeiro encontro com os vestígios do Egito Antigo. Estar diante dessas imponentes construções me fez sentir a grandiosidade e o mistério que envolvem essa civilização. Cada pedra parece carregar a história de um tempo distante, um elo poderoso que conecta o presente com um passado esquecido pelos séculos. A imponência dessas maravilhas arquitetônicas deixou-me em um estado de admiração e reflexão, questionando como os antigos egípcios conseguiram erguer tais estruturas monumentais sem o auxílio da tecnologia moderna.`,

                `Ao contemplar essas maravilhas do mundo antigo, fui transportada para uma era de faraós, deuses e mistérios insondáveis. O respeito e a reverência que os egípcios dedicavam a seus governantes divinos ecoaram através do tempo, inspirando um senso profundo de reverência em meu próprio coração. Cada bloco de pedra cuidadosamente talhado parecia sussurrar segredos da história, despertando em mim um desejo inato de desvendar os enigmas dessa antiga civilização.`,

                `Erguendo-se majestosas contra o céu, as pirâmides de Gizé são mais do que apenas estruturas arquitetônicas; elas são testemunhos silenciosos da genialidade e habilidade dos antigos egípcios. Fui tomada por um sentimento de humildade diante dessas construções imortais, que perduram ao longo dos séculos como guardiãs de um passado glorioso e enigmático. Cada detalhe meticulosamente trabalhado nas pirâmides revela uma dedicação inabalável para construir monumentos que resistiriam ao teste implacável do tempo.`,

                `Enquanto caminhava pelos arredores das pirâmides, maravilhada com sua magnitude, tive a sensação de que estava prestes a decifrar um segredo ancestral, como se as próprias pedras guardassem conhecimentos perdidos ao longo dos milênios. Contudo, compreendi que a verdadeira essência dessas construções não reside apenas em suas dimensões físicas, mas sim no espírito e na alma de uma civilização extraordinária que deixou um legado eterno.`,

                `A visita às pirâmides de Gizé não apenas despertou minha curiosidade, mas também me inspirou a contemplar a transitoriedade da vida humana e a durabilidade do conhecimento que transmitimos às gerações futuras. Essas estruturas impressionantes são um lembrete vívido de que, embora nossa existência seja efêmera, nossas conquistas podem ecoar pela eternidade. Ao partir desse sagrado local, levei comigo uma nova apreciação pela riqueza do patrimônio cultural da humanidade e um desejo renovado de explorar ainda mais os segredos das antigas civilizações que povoaram o nosso mundo.`,
            ],
        },
        {
            id: 3,
            day: 13,
            text: [
                `Em Luxor, fui agraciada com a oportunidade de explorar o incrível Templo de Karnak. O esplendor da arquitetura egípcia e a magnitude das colunas majestosas hipnotizaram meus olhos e tocaram minha alma. Ao adentrar seus portões ancestrais, senti-me como uma viajante do tempo, caminhando pelos mesmos corredores onde faraós e sacerdotes pisaram há milênios.`,

                `Cada passo que dava revelava uma grandiosidade que ultrapassava as expectativas. A complexidade dos relevos esculpidos nas paredes contava histórias antigas de glória, conquistas e rituais sagrados, trazendo à vida a jornada de uma civilização poderosa e enigmática.`,

                `As colunas gigantescas, algumas delas esculpidas na forma de seres divinos, pareciam alcançar os céus, como se quisessem tocar o divino. A sombra dessas imponentes estruturas acolhia peregrinos e curiosos, criando uma atmosfera sagrada que permeava cada centímetro do templo.`,

                `Enquanto meus olhos se perdiam nos detalhes artísticos, minha mente viajava no tempo, tentando vislumbrar o esplendor e a fervorosa devoção que enchiam essas majestosas paredes séculos atrás. A riqueza histórica de Karnak era palpável, e a sensação de estar em um local que serviu como centro religioso e político do antigo Egito deixou-me em êxtase.`,

                `Caminhar pelos mesmos corredores que foram palco de cerimônias grandiosas e decisões que moldaram o destino da nação egípcia evocava uma sensação única de conexão com a história humana. A dimensão do templo era impressionante e lembrava-me da grandeza e complexidade da civilização que o ergueu.`,

                `Karnak, com sua beleza atemporal e sua aura mística, proporcionou-me uma experiência inesquecível. A visita a esse santuário histórico expandiu minha compreensão sobre a grandiosidade da humanidade e a capacidade de criar monumentos que resistem à passagem do tempo.`,

                `Ao deixar Karnak, levei comigo a certeza de que a jornada do conhecimento e da exploração jamais termina. Cada novo lugar desvendado no Egito acrescentou uma camada à minha compreensão das antigas civilizações e do legado que deixaram para as gerações futuras. Essa experiência inspiradora reforçou minha paixão por viajar, descobrir e apreciar as maravilhas culturais e históricas que nosso mundo tem a oferecer.`,
            ],
        },
        {
            id: 4,
            day: 21,
            text: [
                `Meu interesse ardente pelos mistérios do Egito levou-me ao Templo de Hatshepsut, um lugar encantador que revela muito sobre a história de uma das poucas rainhas-faraós que desafiaram o curso da história. Ao adentrar esse templo misterioso, fui envolvida pela aura de uma figura poderosa e enigmática que deixou um legado indelével na história egípcia.`,

                `A riqueza da arte e da simbologia presente nas paredes desse santuário arqueológico deixou-me intrigada e cativada desde o primeiro momento. Cada relevo, cada inscrição e cada estátua pareciam contar uma história única sobre a trajetória notável de Hatshepsut, uma governante que ousou desafiar as convenções da época e reinar como faraó, mesmo sendo uma mulher em um mundo dominado pelos homens.`,

                `As imagens esculpidas nas paredes do templo retratavam cenas grandiosas de conquistas militares, rituais religiosos e cerimônias solenes que ilustravam a vida e o reinado dessa monarca corajosa. Contemplei com admiração os registros de sua ousadia e determinação, enxergando nela não apenas uma governante, mas uma visionária que marcou seu nome na história egípcia com sua visão e habilidade de liderança.`,

                `Cada detalhe meticulosamente preservado, desde a arquitetura até os artefatos encontrados no local, transportou-me para uma época remota e repleta de intrigas palacianas. Ao explorar as salas e corredores desse templo, pude imaginar a pompa e o esplendor das cerimônias que ali ocorreram, refletindo a grandeza de uma época em que o Egito alcançou seu apogeu cultural e político.`,

                `Ao sair do Templo de Hatshepsut, carreguei comigo a reverência por essa rainha-faraó e a admiração pela sua força e determinação em moldar o destino de um império. Essa jornada pelo passado egípcio me enriqueceu com a compreensão de que, mesmo diante de adversidades e convenções sociais, é possível romper barreiras e deixar um legado duradouro.`,

                `Essa experiência instigante reforçou meu anseio por mergulhar ainda mais nos enigmas das antigas civilizações e continuar minha jornada de descobertas pelo mundo. Cada nova escavação, cada relíquia histórica e cada vestígio do passado são testemunhas silenciosas da riqueza da história humana, e meu coração anseia por desvendar mais segredos escondidos nas areias do tempo.`,
            ],
        },
        {
            id: 5,
            day: 30,
            text: [
                `Fiz uma emocionante visita ao Vale dos Reis, um lugar sagrado onde as tumbas dos poderosos faraós estão escondidas no coração das montanhas. Enquanto percorria os corredores subterrâneos desse impressionante complexo funerário, senti-me como uma viajante do tempo, imersa na jornada espiritual dos antigos egípcios em busca da vida após a morte.`,

                `A grandiosidade e a engenhosidade das tumbas esculpidas nas rochas deixaram-me maravilhada e em respeitosa reverência diante da devoção e das crenças dessa antiga civilização. Cada passo que dava pelas criptas adornadas com belos hieróglifos e ilustrações coloridas parecia me aproximar dos mistérios que cercam o conceito de vida eterna e a transição para o além-túmulo.`,

                `Emocionou-me pensar que, há milênios atrás, esses corredores eram palcos de rituais funerários, lamentações e homenagens aos faraós que governaram o Egito com poder e sabedoria. Essas tumbas, verdadeiros mausoléus, foram projetadas para abrigar os corpos dos monarcas e seus tesouros, proporcionando-lhes uma passagem digna para o mundo dos deuses e garantindo sua imortalidade através das eras.`,

                `Cada câmara subterrânea que explorei revelou uma narrativa complexa e fascinante sobre as crenças espirituais dos antigos egípcios. A preservação meticulosa dessas sepulturas ao longo dos séculos é um testemunho da reverência e respeito que a civilização moderna tem pela sua própria história.`,

                `No Vale dos Reis, a conexão com o divino e a espiritualidade era palpável, e cada detalhe me transportou para uma dimensão de significado profundo. Contemplei as representações dos deuses do panteão egípcio, símbolos da vida após a morte e cenas da jornada do faraó rumo à eternidade. Essa experiência evocou reflexões sobre a transitoriedade da vida humana e a busca inata do ser humano por sentido e significado além do plano terreno.`,

                `Ao deixar o Vale dos Reis, levei comigo um senso renovado de apreço pela riqueza da espiritualidade humana e uma fascinação redobrada pelas complexidades da jornada da alma após a morte. Essa visita inesquecível foi um lembrete poderoso de que as tradições e as crenças dos antigos egípcios permanecem vivas dentro de mim e de todos aqueles que, como eu, buscam desvendar os segredos e as maravilhas da história milenar dessa enigmática civilização.`,
            ],
        },
        {
            id: 6,
            day: 40,
            text: [
                `Estender minha estadia no Egito foi a melhor decisão que tomei. Em Aswan, fui agraciada com a oportunidade de testemunhar o majestoso Templo de Philae, uma joia arqueológica que transcende o tempo e a história. Esse templo foi movido para uma ilha durante a construção da Represa Alta, um esforço hercúleo que preservou um tesouro cultural inestimável.`,

                `A magnitude do Templo de Philae é impressionante, e ao contemplar sua arquitetura esplêndida e a arte meticulosamente entalhada, senti-me como se estivesse em um santuário dedicado aos deuses egípcios. A devoção dos egípcios modernos para preservar sua herança cultural é verdadeiramente inspiradora e reforça o valor que eles atribuem ao seu passado glorioso.`,

                `Caminhar pelas estruturas centenárias desse templo sagrado foi uma experiência transcendental. Cada pilar, cada inscrição e cada estátua contavam uma história sobre as crenças e os rituais da antiga civilização egípcia. O Templo de Philae é um testemunho eloquente da devoção dos faraós ao culto dos deuses e do papel central da religião na vida cotidiana do povo egípcio.`,

                `Além de sua beleza arquitetônica, o Templo de Philae carrega um simbolismo profundo, pois representa a perseverança da cultura egípcia em face das mudanças impostas pelo avanço da tecnologia. O fato de ter sido realocado para uma ilha para protegê-lo da inundação causada pela represa demonstra a dedicação do povo egípcio em preservar sua história e tradições, honrando os ensinamentos dos antepassados.`,

                `Em cada detalhe meticulosamente esculpido, eu pude sentir a conexão entre o passado e o presente, como se o tempo não tivesse poder sobre a imortalidade das obras-primas da humanidade. Ao visitar o Templo de Philae, senti-me parte de uma corrente eterna de adoração e reverência, em que o legado dos faraós e sua espiritualidade ainda ecoam pelas colunas e paredes desse santuário venerado.`,

                `A visita ao Templo de Philae deixou-me com um profundo respeito pelas raízes culturais do Egito e com a certeza de que preservar nossa herança é honrar nossas origens e perpetuar nossa identidade como seres humanos. Essa jornada de descobertas no Egito ampliou minha compreensão da riqueza da história humana e renovou minha vontade de continuar explorando os tesouros que o mundo tem a oferecer. Essa experiência foi um lembrete de que o conhecimento do passado é uma bússola poderosa para guiar-nos em direção ao futuro, mantendo viva a chama da admiração e do respeito pelas maravilhas culturais que enriquecem a humanidade.`,
            ],
        },
        {
            id: 7,
            day: 51,
            text: [
                `Chegou o momento de explorar o deserto, uma jornada que ansiava desde o início da minha estadia no Egito. Em Abu Simbel, deparei-me com um desafio emocionante: testemunhar o majestoso nascer do sol atrás dos impressionantes templos de Ramsés II e Nefertari. Esse momento singular foi como se o próprio tempo se curvasse diante da grandiosidade dessas construções, e a atmosfera quase mística me envolveu, fazendo-me sentir uma conexão profunda com as antigas crenças e rituais que permearam essa região ao longo dos séculos.`,

                `Enquanto a aurora se aproximava no horizonte, ergui meu olhar para contemplar a silhueta majestosa dos templos emergindo gradualmente da escuridão. As estátuas colossais dos faraós, esculpidas em pedra sólida, pareciam ganhar vida sob os primeiros raios de luz, como se estivessem despertando de um longo sono para saudar o sol.`,

                `A experiência de ver o sol nascer atrás dessas obras-primas arquitetônicas foi transcendental. O espetáculo celestial enalteceu a beleza intrínseca desses templos e sua importância histórica, proporcionando um momento de reflexão profunda sobre a passagem do tempo e a continuidade da espiritualidade humana.`,

                `Enquanto os primeiros raios de luz dançavam nas paredes adornadas dos templos, senti-me envolvida por uma energia ancestral que parecia ecoar dos tempos remotos. Foi como se a própria essência dos faraós e seus súditos reverenciassem o nascer de um novo dia, trazendo a promessa de renovação e esperança, exatamente como faziam há milênios.`,

                `A grandiosidade dessas estruturas é testemunho da devoção e habilidade dos antigos egípcios, que ergueram templos impressionantes em meio ao isolamento do deserto. Essas construções monumentais honravam os faraós como divindades terrenas e simbolizavam a conexão entre o reino dos deuses e o mundo dos mortais.`,

                `Enquanto observava o sol inundar o céu com sua luz dourada, uma sensação de gratidão tomou conta de mim. Grata por ter a oportunidade de presenciar a majestade do passado e compreender que, embora os séculos tenham passado, a admiração pela beleza e a busca por significado são aspectos eternos da condição humana.`,

                `Ao partir de Abu Simbel, carreguei comigo a lembrança indelével desse momento extraordinário. A jornada pelo Egito me ensinou que, mesmo nos lugares mais remotos e silenciosos, é possível ouvir os sussurros do passado e sentir a conexão com os ancestrais que moldaram nossa história. Essa experiência inesquecível reforçou minha paixão por viajar e desvendar os segredos da humanidade, deixando-me ansiosa por novas aventuras que continuarão a enriquecer minha alma com as maravilhas que o mundo tem a oferecer.`,
            ],
        },
        {
            id: 8,
            day: 68,
            text: [
                `Após quase dois meses de descobertas e fascinação, chegou o momento de partir do Egito. Enquanto me despeço dessa terra de mistérios e encantos, levo comigo um coração cheio de gratidão por tudo o que vivi e aprendi durante essa jornada inesquecível. Cada momento vivenciado nessa terra milenar deixou uma marca profunda em minha alma, e sou grata por ter tido a oportunidade de desvendar os segredos das antigas civilizações que aqui floresceram.`,

                `Essa viagem reforçou minha paixão por desbravar o passado, e cada sítio arqueológico, templo e pirâmide visitados alimentaram minha sede insaciável por conhecimento. A história do Egito é como um enigma complexo que me convida a explorar seus mistérios mais profundos. Cada escultura, cada hieróglifo, cada relíquia encontrada conta uma história fascinante e inspiradora sobre a grandiosidade e a sabedoria das antigas civilizações.`,

                `Ao mergulhar na cultura egípcia, testemunhei a resiliência e a determinação do povo egípcio em preservar sua rica herança cultural ao longo dos séculos. A devoção deles à história e às tradições é um exemplo inspirador de como o passado pode viver através das gerações, enriquecendo a identidade de um povo e conectando-o a suas raízes ancestrais.`,

                `Essa jornada também me ensinou a apreciar as maravilhas da vida sob uma nova perspectiva. A grandiosidade das pirâmides e templos ecoa a mensagem de que a busca pela eternidade está presente em cada gesto e criação humana. O legado deixado pelos antigos egípcios nos recorda que, ao deixar nossa marca no mundo, podemos transcender o tempo e permanecer vivos na memória da humanidade.`,

                `Parto do Egito com um sentimento de realização, mas também com o coração ansioso por novas aventuras que me aguardam em outros cantos do mundo. Essa viagem despertou em mim uma curiosidade insaciável e uma fome voraz por desvendar os segredos que outras culturas guardam. Cada destino explorado é como um livro aberto, aguardando para revelar suas páginas repletas de conhecimento e beleza.`,

                `A despedida do Egito é uma mistura de emoções, pois deixo para trás um lugar que me tocou profundamente, mas também trago comigo as lembranças preciosas dessa experiência única. Levo comigo a certeza de que essa jornada é apenas o início de uma busca contínua pelo conhecimento e pelo encanto que o mundo tem a oferecer.`,

                `Enquanto sigo adiante, levarei comigo a essência do Egito em meu coração, lembrando-me sempre de que a busca pela verdade e pela sabedoria é uma jornada eterna. Cada novo destino me convida a desvendar novos enigmas e a maravilhar-me com a diversidade e a beleza da história humana. Com gratidão e entusiasmo, aguardo ansiosamente pelas próximas páginas dessa aventura que é a vida.`,
            ],
        },
    ];

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="journeyPage">
            <div className="back">
                <Link to="/journeys">
                    Voltar
                </Link>
            </div>
            <Link
                to="/journeys/china"
                className="linkLeft link"
                onClick={handleClick}
            >
                China
            </Link>
            <Link
                to="/journeys/mexico"
                className="linkRight link"
                onClick={handleClick}
            >
                Mexico
            </Link>

            <h2>Diario de Viagem - Egito</h2>
            <h2>Desvendando os Enigmas do Egito Antigo</h2>

            {journeyData.map((journeyItem) => (
                <>
                    <div key={journeyItem.id}>
                        <div className={`parallaxEgito${journeyItem.id} parallax`}>
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
                    Após quase dois meses de descobertas e fascinação, é hora de partir.
                    Levo comigo um coração cheio de gratidão por tudo o que vivi e aprendi
                    no Egito. Essa viagem reforçou minha paixão por desvendar os mistérios
                    das antigas civilizações e alimentou minha sede de conhecimento.
                </p>
                <p>
                    Embora minha jornada pelo Egito tenha terminado, sei que meu fascínio
                    pelos enigmas da humanidade é uma chama que jamais se apagará. E
                    assim, parto para novas aventuras, com a certeza de que meu amor pela
                    história e mistérios do passado sempre me guiará em busca de novas
                    descobertas e aprendizados.
                </p>
            </div>
        </div>
    );
};

export default JourneyEgito;
