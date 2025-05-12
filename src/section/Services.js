import { Container } from "react-bootstrap";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Image } from "react-bootstrap";

// import required modules
import { Pagination } from "swiper/modules";

const Services = () => {
  return (
    <section className="services" id="services">
      <Container className="servicesContainer">

      <div className="services_main_info">
      <h1>Our <br/>
      Services</h1>
      <p>We offer a range of digital services and different types of programs. You can view our digital services here.</p>
      </div>
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div>
                <Image
                  className="main_about_Img"
                  src="sources/img/ui.webp"
                  alt="main-img"
                  fluid
                />

                <div className="services_info">
                  <h2>UX/UI Design</h2>
                  <p>
                    UIUX design and also design the visual and interactive
                    aspects of web and mobile applications to enhance the user
                    experience and make them attractive.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
                <Image
                  className="main_about_Img"
                  src="sources/img/framer.webp"
                  alt="main-img"
                  fluid
                />

                <div className="services_info">
                  <h2>Framer Web Design</h2>
                  <p>
                  
                  We build modern, responsive websites using Framer — blending sleek design with 
                  seamless performance. Our focus is on delivering visually engaging and interactive 
                  web experiences that communicate your brand and drive results.
                  
                  
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
                <Image
                  className="main_about_Img"
                  src="sources/img/web.webp"
                  alt="main-img"
                  fluid
                />

                <div className="services_info">
                  <h2>Web Development</h2>
                  <p>
                  Programming and developing websites and web applications, 
                  including electronic stores and web applications customized 
                  with the latest technologies.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div>
                <Image
                  className="main_about_Img"
                  src="sources/img/seo.webp"
                  alt="main-img"
                  fluid
                />

                <div className="services_info">
                  <h2>SEO Support</h2>
                  <p>
                  Supporting websites with search engines and making them 
                  appear on the first pages of search engines to reach many 
                  visitors and improve rankings.
                  </p>
                </div>
            </div>
            </SwiperSlide>
          </Swiper>
        </>
      </Container>
    </section>
  );
};

export default Services;
