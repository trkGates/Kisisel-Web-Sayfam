import React from "react";

import ".//CSS/Profile.css";
const Profile = () => {
  return (
    <div id="ProfileMain">
      <div id="ProfileKisim1">
        <h3>Profile</h3>
      </div>

      <div id="ProfileKisim2">
        <div id="ProfileKisim2-Profile">
          <h4 className="ProfilYaziBoyutu">Profile</h4>
          <div id="ProfileKisim2-1">
            <div className="ProfileHakkinda">
              <h5 className="ProfileHakkinda-1">Doğum tarihi</h5>
              <h5 className="ProfileHakkinda-2">08.06.1999</h5>
            </div>
            <div className="ProfileHakkinda">
              <h5 className="ProfileHakkinda-1">İkamet Şehri</h5>
              <h5 className="ProfileHakkinda-2">Isparta</h5>
            </div>
            <div className="ProfileHakkinda">
              <h5 className="ProfileHakkinda-1">Eğitim Durumu</h5>
              <h5 className="ProfileHakkinda-2">
                  => Afyon Kocatepe Üniversitesi/Mühendislik
                  Fakültesi/Biyomedikal Mühendisliği
               <br/>
                  => Süleyman Demirel Üniversitesi/Teknik Bilimler Meslek
                  Yüksekokulu/Biyomedikal Cihaz Teknolojisi
              </h5>
            </div>
            <div className="ProfileHakkinda">
              <h5 className="ProfileHakkinda-1">Tercih Ettiği Rol</h5>
              <h5 className="ProfileHakkinda-2">Frontend Developer</h5>
            </div>
          </div>
        </div>
        <div id="ProfileKisim2-About">
          <h4 className="ProfilYaziBoyutu">About Me</h4>
          <p>
          Full stack web geliştirici olarak, kariyer ve eğitim geçmişimin yanı sıra Workintech eğitim kurumunda aldığım eğitimle bilgi ve becerilerimi önemli ölçüde geliştirdim. 900 saatten fazla süren bu yoğun eğitim programı, beni endüstri standartlarına uygun bir şekilde donatarak gerçek dünya projelerinde tecrübe kazanmama olanak sağladı. Bu süre zarfında, birçok projede aktif olarak yer aldım ve kendimi sürekli olarak geliştirme fırsatı buldum. Yazılım geliştirmeye olan merakım ve tutkum, tamamen kullanıcı odaklı deneyimler yaratma hedefiyle birleşti. Detaylara olan dikkatim ve görsel estetiğe verdiğim önemle, sezgisel ve etkileyici web uygulamaları oluşturmayı hedefledim. Bu süre içinde JavaScript, React.js ve Node.js gibi teknolojilerde becerilerimi geliştirdim. Bu sayede dinamik ve etkileşimli web siteleri inşa etme yeteneğine sahip oldum. Sürekli olarak kendimi güncel tutmak ve endüstri trendleriyle adım adım ilerlemek için çaba sarf ettim. Yaratıcılık, teknik uzmanlık ve sürekli öğrenme tutkum, kalıcı etkiler bırakan yüksek kaliteli çözümler sunma konusundaki taahhüdümü destekler. Aynı vizyona sahip profesyonellerle işbirliği yapmaktan heyecan duyuyorum ve her zaman yeni zorluklarla karşılaşmayı sabırsızlıkla bekliyorum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
