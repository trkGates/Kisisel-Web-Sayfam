import React, { useContext, useEffect, useState } from "react";
import Foto from "../img/Foto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { LanguageVerisi } from "../contexts/LanguageContext";
import Typed from "typed.js";
import "./CSS/Hero.css";
import { DarkLightMod } from "../contexts/DarkLightContext";
const Hero = () => {
  const { language } = useContext(LanguageVerisi);
  const { theme } = useContext(DarkLightMod);
  const [sol2, setSol2] = useState("");
  const [sol3, setSol3] = useState("");
  const [sol4, setSol4] = useState("");
  const [sol2Name, setSol2Name] = useState("");

  useEffect(() => {
    if (language === "tr-TR") {
      setSol2("Merhaba, Ben ");
      setSol2Name("Yusuf Çolak");
      setSol3(
        "Merhaba, Adım Yusuf ve ben bir Full-stack web geliştiricisiyim. Sizlere, etkileyici kullanıcı deneyimleri sunan, güçlü ve ölçeklenebilir önyüz ürünleri geliştirebilecek bir Developer arıyorsanız, işbirliği için hazırım. Projelerinizi başarıya taşımak için bir araya gelmeyi dört gözle bekliyorum. Kaliteli çözümler ve profesyonel yaklaşımım ile projelerinizi başarıya ulaştırmak için sabırsızlanıyorum. Detayları konuşmak ve işbirliği fırsatlarını değerlendirmek adına bir görüşme ayarlamak için lütfen benimle iletişime geçmekten çekinmeyin. "
      );
      setSol4("İletişim");
    } else if (language === "en-US") {
      setSol2("Hello, It's Me");
      setSol2Name("Yusuf Çolak");
      setSol3(
        "Hi, I'm Yusuf, a Full-stack web developer. If you are looking for a Developer who can create compelling user experiences and build robust and scalable frontend products, I'm ready for collaboration. I'm eagerly looking forward to working together to bring your projects to success. With quality solutions and a professional approach, I'm excited to help you achieve your project goals.Please feel free to get in touch to discuss the details and explore potential opportunities for cooperation."
      );
      setSol4("Contact");
    }
  }, [language]);

  useEffect(() => {
    const options = {
      strings: [
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
      ],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    };

    const typingEffect = new Typed(".multitext", options);

    return () => {
      typingEffect.destroy();
    };
  }, []);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "YusufColakCV.pdf";
    link.download = "YusufColakCV.pdf";
    link.click();
  };
  return (
    <div id="HeroMain">
      <div id="leftSide">
        <div id="sol1" className="mg40"></div>
        <div>
          <h2 id="sol2">{sol2} </h2>
        </div>
        <div id="sol2Name" className="mg40">
          <h2>{sol2Name}</h2>
        </div>
        <div className="mg40">
          <h2 id="sol2Yazi">
            <span class="multitext"></span>
          </h2>
        </div>
        <div id="sol3" className="mg40">
          <p>{sol3}</p>
        </div>

        <div id="sol4" className="mg40">
          <div id="sol4Button">
            <a
              className="sol4-1 buttonSolFont"
              href="mailto:yusuf21706@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              {sol4}
            </a>
            <a
              className="sol4-2 buttonSolFont"
              href="https://github.com/yusuf-colak"
              rel="noreferrer"
              target="_blank"
            >
              <p>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: theme === true ? "#3730A3" : "#BAB2E7" }}
                />
              </p>
              <p>Github</p>
            </a>
            <a
              href="https://www.linkedin.com/in/yusufçolak/"
              className="sol4-3 buttonSolFont"
              rel="noreferrer"
              target="_blank"
            >
              <p>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ color: theme === true ? "#3730A3" : "#BAB2E7" }}
                />
              </p>
              <p>Linkedin</p>
            </a>
            <button onClick={handleDownload}>Download PDF</button>
          </div>
        </div>
      </div>

      <div id="rightSide">
        <img id="rightSideFoto" src={Foto} alt="Kişisel Foto" />
      </div>
    </div>
  );
};

export default Hero;
