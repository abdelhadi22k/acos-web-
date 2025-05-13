import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useEffect, useRef } from "react";

const About = () => {

  const imageRef = useRef(null);
  const targetContainerRef = useRef(null);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 480) return; // نفذ فقط على الشاشات الأكبر من 480px

      const img = imageRef.current;
      const target = targetContainerRef.current;

      // بداية الحركة (نقطة البدء من الصورة)
      const start = img.offsetTop - 200;
      // نهاية الحركة (نقطة التوقف 200px قبل أسفل العنصر الهدف)
      const end = target.offsetTop + target.offsetHeight - 550;

      // ارتفاع الصفحة الذي تم التمرير إليه
      const scrollY = window.scrollY + window.innerHeight / 2;

      if (scrollY < start) {
        img.style.transform = `translateY(0px)`; // الصورة تكون في مكانها الأساسي
        img.style.width = `200px`; // الحجم الأساسي
      } else if (scrollY > end) {
        // الصورة تتوقف عند هذه النقطة ولا تتجاوزها
        img.style.transform = `translateY(${end - start}px)`;
        img.style.width = `350px`; // الحجم النهائي
      } else {
        // حساب المسافة المقطوعة بين البداية والنهاية
        const progress = (scrollY - start) / (end - start);
        const moveY = -200 + progress * (end - start);
        const newWidth = 200 + progress * (350 - 200);

        // تطبيق التغييرات
        img.style.transform = `translateY(${moveY}px)`;
        img.style.width = `${newWidth}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="about">
      <Container className="about_container">
        <div className="about_info">
          <p>
          At Acos Web Studio, we don't just design websites... 
          we create digital experiences that make a real difference.
          </p>

          <p>
            Create your own amazing digital product <br />
            (website or web application)
          </p>

          <p>
          We believe that good design is not a luxury, but an 
          investment in the success of your project.
          </p>

          <Image
          ref={imageRef}
          loading="lazy"
          className="main_about_Img"
          src="sources/img/main_img.webp"
          alt="main-img"
          fluid
        />
        

        </div>

        <div className="about_details">
          <div className="img_about_Container1">
            <Image
            loading="lazy"
              className="about_Img1"
              src="sources/img/abuot1.webp"
              alt="main-img"
              fluid
            />

            <Image
            loading="lazy"
              className="about_Img2"
              src="sources/img/abuot2.webp"
              alt="main-img"
              fluid
            />
          </div>

          <h1>
            web <br />
            <span>studio</span>{" "}
          </h1>

          <div className="img_about_Container2">
            <Image
            loading="lazy"
              className="about_Img3"
              src="sources/img/abuot3.webp"
              alt="main-img"
              fluid
            />
          </div>
        </div>

        <div className="about_main">

          <div className="about_main_Container">
          <p>
          What is acos web studio “acos  offers innovative solutions in web
          development, SEO, and UIUX design, thanks to a passionate and
          experienced team
          </p>
          </div>

          <div className="img_About_Container" ref={targetContainerRef}></div>

          <div className="about_main_details">
            <p>
              <span>01</span>
              Strategic thinking before design
            </p>
            <p>
              <span>02</span>
              Continuous support and transparency 
              every step of the way.
            </p>
            <p>
              <span>03</span>
              Building experiences that inspire 
              users and drive results
            </p>
        
          </div>

        </div>
      </Container>
    </section>
  );
};
export default About;