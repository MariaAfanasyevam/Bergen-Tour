import { Link } from 'react-router-dom';
import { useState } from 'react';
import Tours from '../../components/Tours/Tours';
import travel from '../../assets/icons/travel-explore.svg';
import accessibility from '../../assets/icons/accessibility.svg';
import person from '../../assets/icons/person-add.svg';
import bag from '../../assets/icons/bag.svg';
import umbrella from '../../assets/icons/umbrella.svg';
import check from '../../assets/icons/person-check.svg';
import hand from '../../assets/icons/hand-with-heart.svg';
import sailing from '../../assets/icons/sailing.svg';
import hotel from '../../assets/icons/hotel.svg';
import whitePlane from '../../assets/icons/white-plane.svg';
import Reviews from '../../components/Reviews/Reviews';
import Certificate from '../../assets/images/certificate.png';
import Popup from '../../components/Popup/Popup';
import plane from '../../assets/icons/plane.svg';
import './Main.scss';

const Main = () => {
 
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
};

  return (
        <>
            <section className="search">
                <div className="container">
                    <h2 className="search__title">Платите меньше - <span>путешествуйте больше</span></h2>
                    <Link to="/search" className="search__button">Найти тур<img className="button-image" src={whitePlane} alt="plane" /></Link>
                </div>
            </section>

 <section className="containerServices">
      <div className="why-header">
        <h2 className="textLato800">Почему мы?</h2>
        <div className="why-contacts">
          <p className="textLato900">+7 778 900 67 21</p>
          <button id="why-contacts__button" className="contacts__button why-contacts-btn">заказать обратный звонок</button>
        </div>
      </div>
      
      <div className="whyussection">
        <ul className="why-list">
          <li>Наш сервис порадует даже самых искушенных путешественников!</li>
          <li>У нас самые приемлемые цены!</li>
          <li>Наши партнеры заслуживают доверия</li>
          <li>Мы честны перед государственными органами</li>
          <li>Путешествовать с нами безопасно!</li>
          <li>Все оформляем онлайн. Не нужно никуда ехать!</li>
          <li>Большая сеть партнеров</li>
        </ul>
      </div>
    </section>
            <section className="offerings">
                <div className="container">
                    <h1 className="offerings__title">Туристическое агентство «BERGEN TOUR»</h1>
                    <h2 className="offerings__subtitle">оказывает следующие виды услуг:</h2>
                    <ul className="offerings__list">
                        <div className="offerings__left-container">
                            <li className="offerings__list-item"><img src={travel} alt="travel-explore"/>продажа турпакетов</li>
                            <li className="offerings__list-item"><img src={accessibility} alt="accessibility"/>индивидуальные туры</li>
                            <li className="offerings__list-item"><img src={person} alt="person-add"/>групповые туры</li>
                            <li className="offerings__list-item"><img src={bag} alt="bag"/>организация деловых поездок, корпоративных мероприятий и отдыха сотрудников вашей компании</li>
                            <li className="offerings__list-item"><img src={umbrella} alt="umbrella"/>лечебно-оздоровительные туры</li>
                        </div>
                        <div className="offerings__right-container">
                            <li className="offerings__list-item"><img src={check} alt="person-check"/>визовые услуги</li>
                            <li className="offerings__list-item"><img src={hand} alt="hand-with-heart"/>страхование выезжающих зарубеж</li>
                            <li className="offerings__list-item"><img src={sailing} alt="sailing"/>круизы</li>
                            <li className="offerings__list-item"><img src={hotel} alt="hotel"/>бронирование гостиниц</li>
                            <li className="offerings__list-item"><img src={plane} alt="plane"/>продажа авиабилетов</li>
                        </div>
                    </ul>
                </div>
            </section>
    <section className="backgroundColor">
      <div >
        <h2 className="textLato800">Отзывы от наших клиентов</h2>
                </div>
                <div >    <Reviews /> </div>
        </section>
 
 
        <section className="backgroundImg">
      <div className="reviewsectionHeader">
        <h2 className="textLato800">Подарочные сертификаты</h2>
        <div className="reviewsCert">
           
            <div><img className='certImage' src={Certificate} alt="certificate"/></div> 
              <div className='reviewRow'> <div className="reviewsColumn"> 
            <div className="certDiscount"><span className="certDiscount-orange">Скидка 3%</span> при покупке от 10 сертификатов</div>
             <div className="certDiscount">
              <span className="certDiscount-orange">Скидка 5%</span> при покупке от 20 сертификатов</div>
            </div>
         
    
       <button  className="popupButton" onClick={togglePopup}>Оставить заявку <img src={plane} alt="airplane"/></button>
       </div>
           
           
          </div>
      </div>
      {isPopupOpen && <Popup onClose={togglePopup} />}
    </section>
      
			<section className="tours">
				<div className="container">
					<h2 className="tours__header"><span className="tours__header-orange">Готовые турпакеты и отдельные услуги</span><br/>по честным ценам</h2>
					<h3 className="tours__subheader">Если найдете дешевле, то свяжитесь с нами</h3>
					<Tours/>
				</div>
    		</section>
        </>
    );
};


export default Main;
