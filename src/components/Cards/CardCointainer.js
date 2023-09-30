import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './CardCointainer.css';
import { Link } from 'react-router-dom';

function Card({ imageSrc, title, text, pageLink }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    // Utilizza GSAP per animare l'entrata delle card quando la pagina si carica
    const cardElement = cardRef.current;
    if (cardElement) {
      gsap.fromTo(
        cardElement,
        { opacity: 0, y: 20 }, // Stato iniziale (trasparenza a 0 e spostamento verso il basso)
        { opacity: 1, y: 0, duration: 1.5, ease: 'power2.inOut' } // Stato finale (trasparenza a 1 e nessun spostamento)
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image-container">
        <img src={imageSrc} alt={title} />
      </div>
      <div className={`hover-container ${isHovered ? 'active' : ''}`}>
        <h2>{title}</h2>
        <p className="mobile-text">{text}</p>
        <Link to={pageLink}>
          <button>Visualizza il grafico</button>
        </Link>
      </div>
    </div>
  );
}

function CardContainer() {
  const cardData = [
    {
      imageSrc: 'https://services.meteored.com/img/article/calor-y-temperatura-no-es-lo-mismo-511-2_768.jpg',
      title: 'Temperature',
      text: 'Scopri l\'impatto del cambiamento climatico nel tempo: clicca qui per esplorare il grafico sull\'innalzamento della temperatura globale!',
      pageLink: '/temperature'
    },
    {
      imageSrc: 'https://www.ehabitat.it/wp-content/uploads/2016/08/scioglimento-dei-ghiacci.jpg',
      title: 'ArcticChart',
      text: 'Scopri il drammatico scioglimento dei ghiacci polari: clicca qui per vedere il grafico sulle calotte polari in scioglimento!',
      pageLink: '/arcticchart'
    },
    {
      imageSrc: 'https://media.istockphoto.com/id/1340519929/it/foto/concetto-che-raffigura-il-problema-delle-emissioni-di-anidride-carbonica-e-il-suo-impatto.jpg?s=612x612&w=0&k=20&c=A9blNhNf6tvMiwZOJpk7BlNhj6e_TzrQDJKNzqLg6d8=',
      title: 'CO2',
      text: 'Analizza l\'impatto del biossido di carbonio sull\'ambiente: clicca qui per esaminare il grafico delle emissioni di CO2 nel corso degli anni',
      pageLink: '/co2chart'
    },
    {
      imageSrc: 'https://media.istockphoto.com/id/906720020/photo/science-concept-methane-or-ammonium-molecules-3d-rendered-illustration.jpg?s=612x612&w=0&k=20&c=f9d0UtqNI96YHxMItbZz4VonfQmjPf922fSLJlX5Ufk=',
      title: 'Methane',
      text: 'Scopri l\'evoluzione delle emissioni di metano nell\'atmosfera: clicca qui per visualizzare il grafico sulle emissioni di metano nel tempo!',
      pageLink: '/methane'
    },
    {
      imageSrc: 'https://asvis.it/public/asvis2/images/Notizie_2019/city-under-a-cloudy-sky-2771744__1_.jpg',
      title: 'NitrousOxide',
      text: 'Esplora l\'effetto dell\'ossido di azoto (NO2) sull\'aria che respiriamo: clicca qui per analizzare il grafico delle emissioni di NO2 nel corso degli anni!',
      pageLink: '/nitrousoxide'
    },
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          text={card.text}
          pageLink={card.pageLink}
        />
      ))}
    </div>
  );
}

export default CardContainer;
