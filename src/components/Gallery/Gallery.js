import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css'

const Gallery = () => {
    const images = [
        'https://i0.wp.com/followthecolours.com.br/wp-content/uploads/2022/12/capa-ftcmag-pontos-turisticos-do-egito.png?fit=1300%2C700&ssl=1',
        'https://www.passagenspromo.com.br/blog/wp-content/uploads/2021/11/Egito-mapa-740x415.jpg',
        'https://www.gaz.com.br/uploads/2022/03/egito-1-scaled.jpg',
        'https://viagemeturismo.abril.com.br/wp-content/uploads/2019/09/abu-simbel-1.jpg?quality=90&strip=info&w=1280&h=700&crop=1',
        'https://segredosdomundo.r7.com/wp-content/uploads/2023/03/10-faraos-mais-importantes-do-antigo-egito-biografias-e-realizacoes-fascinantes-scaled.jpg',
        'https://rabiscodahistoria.com/wp-content/uploads/2023/05/Fotos-plano-de-aula-historia-egito-antigo-6-ano.webp',
        'https://ciatrip.com/wp-content/uploads/2021/05/EGITO-2-1-scaled.jpg',
        'https://blog.jovempan.com.br/turismojp/wp-content/uploads/sites/31/2021/11/EGITO-Rio-Nilo-1-Divulgac%CC%A7a%CC%83o-Egypt-Nile-CruiseRobert-Manner--850x480.jpg',
        'https://www.melhoresdestinos.com.br/wp-content/uploads/2018/07/capa-cairo-egito-capa2019-1-820x430.jpg',
        'https://www.escolhaviajar.com/wp-content/uploads/2017/04/dicas-do-egito.jpg',
        'https://www.travelclass.tur.br/uploads/2018/07/china-antiga.jpg',
        'https://images.travelclass.tur.br/uploads/2018/07/china-antiga-muralha.jpg',
        'https://blog.archtrends.com/wp-content/uploads/2021/02/Arquitetura-chinesa.jpg',
        'https://www.guiadasemana.com.br/contentFiles/image/2019/02/FEA/principal/58744_w840h0_1549386075shutterstock-231430126-xian.jpg',
        'https://www.melhoresdestinos.com.br/wp-content/uploads/2018/01/rua-qianmen-pequim-china-e1515286964915-820x572.jpg',
        'https://www.segurospromo.com.br/blog/wp-content/uploads/2019/11/Viagem-para-China-Clima.jpg',
        'https://www.jafezasmalas.com/wp-content/uploads/2015/12/pontos-turisticos-da-china.jpg',
        'https://www.intermundial.pt/var/ezdemo_site/storage/images/seguros-de-viaje/os-10-locais-mais-espetaculares-da-china-que-merecem-uma-visita/imagen_descripcion_list-consejos-de-viaje-a-estados-unidos/magen_descripcion_item7/762215-70-por-PT/magen_descripcion_item-3.jpg',
        'https://www.melhoresdestinos.com.br/wp-content/uploads/2018/01/templo-do-ceu-pequim-820x546.jpg',
        'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/02/vista-dos-cassinos-de-macau-na-china-istock-611324992.jpg?quality=70&strip=info',
        'https://www.voltologo.net/wp-content/uploads/2018/07/lugares-para-conhecer-no-mexico-dicas.jpg',
        'https://www.escolhaviajar.com/wp-content/uploads/2017/08/O-que-fazer-no-M%C3%A9xico.jpg',
        'https://r4t2s9v3.stackpathcdn.com/wp-content/uploads/2020/06/mexico-belezas-naturais.jpg',
        'https://img.nsctotal.com.br/wp-content/uploads/2022/10/ruinas-1.jpg',
        'https://www.voltologo.net/wp-content/uploads/2018/07/cachoeira-no-mexico.jpg',
        'https://catracalivre.com.br/wp-content/uploads/2018/11/tulum-mexico-destinos-ano-novo-910x454.jpg',
        'https://viagensdepassagem.files.wordpress.com/2014/02/cancun.jpeg',
        'https://d2yfnz5to9nvdi.cloudfront.net/wp-content/uploads/2021/03/177-Pyramids-of-Teotihuacan-1200x750.jpg',
        'https://a.cdn-hotels.com/gdcs/production183/d1127/f0139bd5-05b0-4cd3-8818-8b76432b8878.jpg',
        'https://d2yfnz5to9nvdi.cloudfront.net/wp-content/uploads/2021/03/161166866-1200x750.jpg',
    ];

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const imagePromises = images.map((src) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve();
                img.src = src;
            });
        });

        Promise.all(imagePromises).then(() => {
            setIsLoading(false);
        });
    }, [images]);

    const openImage = (index) => {
        setSelectedImageIndex(index);
    };

    const closeImage = () => {
        setSelectedImageIndex(null);
    };

    const navigateToNext = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const navigateToPrev = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="image-gallery imgClose">
            {isLoading && (
                <div className="loading-div" style={{ height: '100vh' }}>
                    <span>Carregando...</span>
                </div>
            )}
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    onClick={() => openImage(index)}
                    style={{ display: isLoading ? 'none' : 'block' }}
                />
            ))}
            {selectedImageIndex !== null && (
                <div className="modal">
                    <span className="close-button imgOpen" onClick={closeImage}>
                        &times;
                    </span>
                    <img
                        src={images[selectedImageIndex]}
                        alt={`Image ${selectedImageIndex}`}
                    />
                    <div className="modal-nav">
                        <FaChevronLeft onClick={navigateToPrev} />
                        <FaChevronRight onClick={navigateToNext} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
