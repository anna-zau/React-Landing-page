import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import residencies from "../../utils/slider.json";
import css from "./Residencies.module.scss";
import { Section, Container } from "../../globalStyles.styled";

const Residencies = () => {
  return (
    <Section>
      <Container>
        <h3 className={css.secondTitle}>Best Choices</h3>
        <h2 className={css.mainTitle}>Popular Residencies</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          navigation
          autoplay
        >
          {residencies.map(({ name, price, details, image }) => {
            return (
              <SwiperSlide key={name}>
                <div className={css.sliderBox}>
                  <img src={image} alt="Residence" className={css.image} />
                  <div>
                    <span className={css.currency}>&#36;</span>
                    <span className={css.price}>{price}</span>
                  </div>
                  <h4 className={css.titleName}>{name}</h4>
                  <p className={css.textCard}>{details}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Section>
  );
};

export default Residencies;
