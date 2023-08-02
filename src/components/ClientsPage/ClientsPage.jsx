import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import company1 from "../../assets/images/tower.png";
import company2 from "../../assets/images/realty.png";
import company3 from "../../assets/images/equinix.png";
import company4 from "../../assets/images/prologis.png";

import css from "./ClientsPage.module.scss";
import feedback from "../../utils/feedback.json";

import { Container } from "../../globalStyles.styled";

const Clients = () => {
  return (
    <div className={css.section} id="our-clients">
      <Container>
        <h2 className={css.title}>Our clients</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          navigation
          autoplay
        >
          {feedback.map(({ name, picture, feedback }) => {
            return (
              <SwiperSlide key={name}>
                <div className={css.sliderBox}>
                  <img src={picture} alt="User" className={css.imageClient} />
                  <p className={css.clientFeedback}>{feedback}</p>
                  <p className={css.clientName}>{name}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <ul className={css.list}>
          <li>
            <img
              src={company1}
              alt="Client Company Tower"
              className={css.imageCompany}
            />
          </li>
          <li>
            <img
              src={company2}
              alt="Client Company Realty"
              className={css.imageCompany}
            />
          </li>
          <li>
            <img
              src={company3}
              alt="Client Company Equinix"
              className={css.imageCompany}
            />
          </li>
          <li>
            <img
              src={company4}
              alt="Client Company Prologis"
              className={css.imageCompany}
            />
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Clients;
