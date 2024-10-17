import React from 'react';
import AboutImage from './assets/image/fulltim.png'; 
import MediaImage from './assets/image/mediatim.png';
import AcaraImage from './assets/image/acaratim.png';
import LogistikImage from './assets/image/logistiktim.png';
import PHImage from './assets/image/phtim.png';
import HumasImage from './assets/image/humastim.png';
import InstagramLogo from './assets/image/logoinstagram.png'; // Add image for the right outcome
import TiktokLogo from './assets/image/tiktoklogo.png'; // Add image for the right outcome
import YoutubeLogo from './assets/image/youtubelogo.png'; // Add image for the right outcome
import LokasiLogo from './assets/image/lokasilogo.png'; // Add image for the right outcome
import { Link } from 'react-router-dom';
import './about-us.css'; 

const AboutUs = () => {
  return (
    <section className="about-us">
      {/* Gambar Program */}
      <img
        src={AboutImage}
        alt="PPKO Ormawa HIMFA UMY"
        className="about-us__image"
      />

      {/* About Section */}
      <h2 className="about__title">About PPK Ormawa HIMFA UMY</h2>
      <h3 className="about__subheading">Apa sih PPK Ormawa HIMFA UMY itu?</h3>
      <p className="about__description">
        PPK Ormawa HIMFA UMY 2024 adalah singkatan dari Program Penguatan Kapasitas Organisasi Kemahasiswaan yang mengusung tema "TEROPONG JIWA: Terapi Okupasi Orang Dengan Gangguan Jiwa Berbasis Bank Sampah Melalui Optimalisasi Kader Kesehatan di Desa Hargorejo." Program ini berfokus pada kolaborasi lintas sektor, termasuk dengan masyarakat desa, tenaga kesehatan, dan mitra terkait, untuk menciptakan dampak sosial yang berkelanjutan. Dengan pendekatan berbasis komunitas, program ini diharapkan dapat membantu ODGJ untuk berinteraksi kembali dengan lingkungan mereka, sekaligus memberdayakan masyarakat melalui pengelolaan sampah yang baik dan terintegrasi. PPKO Ormawa HIMFA UMY 2024 juga melibatkan banyak mahasiswa sebagai agen perubahan, dengan harapan mereka bisa menerapkan ilmu yang didapat di dunia akademik untuk membantu masyarakat secara nyata.
      </p>

      {/* Divisions Section */}
      <h2 className="about-us__title">Our Division</h2>

      {/* Section for PENGURUS HARIAN */}
      <div className="division">
      <Link to="/pengurus-harian">
        <img
          src={PHImage} // Ganti dengan path gambar Pengurus Harian
          alt="PENGURUS HARIAN"
          className="division__image"
        />
        <h3 className="division__name">PENGURUS HARIAN</h3>
        </Link>
      </div>

      {/* Section for ACARA */}
      <div className="division">
      <Link to="/acara">
        <img
          src={AcaraImage} // Ganti dengan path gambar Acara
          alt="ACARA"
          className="division__image"
        />
        <h3 className="division__name">ACARA</h3>
        </Link>
      </div>

      {/* Section for MEDIA */}
      <div className="division">
      <Link to="/media">
        <img
          src={MediaImage} // Ganti dengan path gambar Media
          alt="MEDIA"
          className="division__image"
        />
        <h3 className="division__name">MEDIA</h3>
        </Link>
      </div>

      {/* Section for HUMAS */}
      <div className="division">
      <Link to="/humas">
        <img
          src={HumasImage} // Ganti dengan path gambar Humas
          alt="HUMAS"
          className="division__image"
        />
        <h3 className="division__name">HUMAS</h3>
        </Link>
      </div>

      {/* Section for LOGISTIK */}
      <div className="division">
      <Link to="/logistik">
        <img
          src={LogistikImage} // Ganti dengan path gambar Logistik
          alt="LOGISTIK"
          className="division__image"
        />
        <h3 className="division__name">LOGISTIK</h3>
        </Link>
      </div>

        {/* Social Section */}
        <div className="social-media">
  <h2 className="social-media__title">Social Media PPK Ormawa HIMFA UMY</h2>
  <h3 className="social-media__headline">Our Social Media Accounts</h3>
  
  <div className="social-media__icons">
    <a href="https://www.instagram.com/ppkormawa.himfa/" target="_blank" rel="noopener noreferrer">
      <img src={InstagramLogo} alt="Instagram PPK Ormawa HIMFA UMY" className="social-media__icon" />
      <p className="social__caption">Instagram</p>
    </a>
    <a href="https://www.tiktok.com/@ppkormawa.himfa" target="_blank" rel="noopener noreferrer">
      <img src={TiktokLogo} alt="TikTok PPK Ormawa HIMFA UMY" className="social-media__icon" />
      <p className="social__caption">Tiktok</p>
    </a>
    <a href="https://youtube.com/@himfaumy5962" target="_blank" rel="noopener noreferrer">
      <img src={YoutubeLogo} alt="YouTube PPK Ormawa HIMFA UMY" className="social-media__icon" />
      <p className="social__caption">Youtube</p>
    </a>

    {/* Location Section */}
    <div className="social-media__location">
      <img src={LokasiLogo} alt="Location" className="social-media__location-icon" />
      <span className="social-media__location-text">Jl. Brawijaya, Geblagan, Tamantirto, Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55183</span>
    </div>
  </div>
</div>

    {/* Contact Section */}
<div className="contact-section">
  <h2 className="contact-section__title">Contact Us</h2>
  <form className="contact-section__form">
    <div className="contact-section__input-group">
      <label htmlFor="name" className="contact-section__label"></label>
      <input type="text" id="name" name="name" className="contact-section__input" placeholder="Name" required />
    </div>
    
    <div className="contact-section__input-group">
      <label htmlFor="email" className="contact-section__label"></label>
      <input type="email" id="email" name="email" className="contact-section__input" placeholder="Email" required />
    </div>
    
    <div className="contact-section__input-group">
      <label htmlFor="message" className="contact-section__label"></label>
      <textarea id="message" name="message" className="contact-section__textarea" placeholder="Message" required></textarea>
    </div>    
    <button type="submit" className="contact-section__submit-btn">Submit</button>
  </form>
</div>

      <footer className="footer">
        <div className="footer__content">
          <p>© PPK Ormawa HIMFA UMY 2024.<br />
      All Rights Reserved.
    </p>
        </div>
      </footer>
    </section>
  );
};

export default AboutUs;
