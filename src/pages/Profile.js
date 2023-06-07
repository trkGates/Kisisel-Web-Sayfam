import React, { useContext, useEffect, useState } from "react";
import { DarkLightMod } from "../contexts/DarkLightContext";
import { LanguageVerisi } from "../contexts/LanguageContext";
import Aos from "aos";
import "aos/dist/aos.css";
import "./CSS/Profile.css";

const Profile = () => {
  const { theme } = useContext(DarkLightMod);
  const { language } = useContext(LanguageVerisi);

  const [profil, setProfil] = useState("");
  const [dTarihi, setdTarihi] = useState("");
  const [ikamet, setIkamet] = useState("");
  const [egitimDurumu, setEgitimDurumu] = useState("");
  const [egitim, setEgitim] = useState("");
  const [rol, setRol] = useState("");
  const [rolAciklama, setRolAciklama] = useState("");
  const [hakkinda, setHakkinda] = useState("");
  const [hakkindaAciklama, setHakkindaAciklama] = useState("");

  useEffect(() => {
    if (language === "tr-TR") {
      setProfil("Profil");
      setdTarihi("Doğum Tarihi");
      setIkamet("İkamet Şehri");
      setEgitimDurumu("Eğitim Durumu");
      setEgitim(
        <p>
          => Afyon Kocatepe Üniversitesi/Mühendislik Fakültesi/Biyomedikal
          Mühendisliği
          <br />
          => Süleyman Demirel Üniversitesi/Teknik Bilimler Meslek
          Yüksekokulu/Biyomedikal Cihaz Teknolojisi
        </p>
      );
      setRol("Tercih Ettiği Rol");
      setRolAciklama("Frontend Developer");
      setHakkinda("Hakkında");
      setHakkindaAciklama(
        <p>
          Full stack web geliştirici olarak, kariyer ve eğitim geçmişimin yanı
          sıra Workintech eğitim kurumunda aldığım eğitimle bilgi ve
          becerilerimi önemli ölçüde geliştirdim. 900 saatten fazla süren bu
          yoğun eğitim programı, beni endüstri standartlarına uygun bir şekilde
          donatarak gerçek dünya projelerinde tecrübe kazanmama olanak sağladı.
          Bu süre zarfında, birçok projede aktif olarak yer aldım ve kendimi
          sürekli olarak geliştirme fırsatı buldum. Yazılım geliştirmeye olan
          merakım ve tutkum, tamamen kullanıcı odaklı deneyimler yaratma
          hedefiyle birleşti. Detaylara olan dikkatim ve görsel estetiğe
          verdiğim önemle, sezgisel ve etkileyici web uygulamaları oluşturmayı
          hedefledim. Bu süre içinde JavaScript, React.js ve Node.js gibi
          teknolojilerde becerilerimi geliştirdim. Bu sayede dinamik ve
          etkileşimli web siteleri inşa etme yeteneğine sahip oldum. Sürekli
          olarak kendimi güncel tutmak ve endüstri trendleriyle adım adım
          ilerlemek için çaba sarf ettim. Yaratıcılık, teknik uzmanlık ve
          sürekli öğrenme tutkum, kalıcı etkiler bırakan yüksek kaliteli
          çözümler sunma konusundaki taahhüdümü destekler. Aynı vizyona sahip
          profesyonellerle işbirliği yapmaktan heyecan duyuyorum ve her zaman
          yeni zorluklarla karşılaşmayı sabırsızlıkla bekliyorum.
        </p>
      );
    } else if (language === "en-US") {
      setProfil("Profile");
      setdTarihi("Date of Birth");
      setIkamet("Residence City");
      setEgitimDurumu("Education Status");
      setEgitim(
        <p>
          => Afyon Kocatepe University/Faculty of Engineering/Biomedical
          Engineering
          <br />
          => Süleyman Demirel University/Vocational School of Technical
          Sciences/Biomedical Device Technology
        </p>
      );
      setRol("Preferred Role");
      setRolAciklama("Frontend Developer");
      setHakkinda("About Me");
      setHakkindaAciklama(
        <p>
          As a full stack web developer, I have significantly improved my
          knowledge and skills with my career and education background as well
          as the training I received at Workintech training institution. This
          intensive training program, which lasted more than 900 hours, enabled
          me to gain experience in real world projects by equipping me in
          accordance with industry standards. During this time, I actively
          participated in many projects and had the opportunity to constantly
          improve myself. My curiosity and passion for software development
          combined with the goal of creating user-focused experiences. With my
          attention to detail and my emphasis on visual aesthetics, I aimed to
          create intuitive and impressive web applications. During this time, I
          improved my skills in technologies such as JavaScript, React.js, and
          Node.js. This enabled me to build dynamic and interactive websites. I
          have made efforts to keep myself up to date and to progress step by
          step with industry trends. My creativity, technical expertise, and
          passion for continuous learning support my commitment to providing
          high quality solutions that leave lasting effects. I am excited to
          collaborate with professionals who share the same vision, and I always
          look forward to encountering new challenges.
        </p>
      );
    }
  }, [language]);

  useEffect(() => {
    Aos.init({ duration: 2000 , disable: false});
  }, []);

  return (
    <div  id="ProfileMain">
      <div data-aos="fade" id="ProfileKisim1">
        <h3>{profil}</h3>
      </div>
      <div id="ProfileKisim2">
        <div data-aos="fade-up" id="ProfileKisim2-Profile">
          <h4 className="ProfilYaziBoyutu">{profil}</h4>
          <div  id="ProfileKisim2-1">
            <div className="ProfileHakkinda">
              <h5 className="ProfileHakkinda-1">{dTarihi}</h5>
              <p className="ProfileHakkinda-2">08.06.1999</p>
            </div>
            <div className="ProfileHakkinda">
              <h5 className="ProfileHakkinda-1">{ikamet}</h5>
              <p className="ProfileHakkinda-2">Isparta</p>
            </div>
            <div className="ProfileHakkinda">
              <h5 className="ProfileHakkinda-1">{egitimDurumu}</h5>
              <p className="ProfileHakkinda-2">{egitim}</p>
            </div>
            <div  className="ProfileHakkinda">
              <h5 className="ProfileHakkinda-1">{rol}</h5>
              <p className="ProfileHakkinda-2">{rolAciklama}</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" id="ProfileKisim2-About">
          <h4 className="ProfilYaziBoyutu">{hakkinda}</h4>
          <p>{hakkindaAciklama}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Profile;
