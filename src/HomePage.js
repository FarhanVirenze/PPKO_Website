// HomePage.js
import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel styles
import "./HomePage.css"; // Pastikan untuk membuat file CSS jika perlu
import HeroImage1 from './assets/image/tim.jpg';
import HeroImage2 from './assets/image/carousel2.jpg';
import HeroImage3 from './assets/image/carousel3.jpg';
import HeadLineImage from './assets/image/headline.jpg';
import ProgramImage from './assets/image/program.jpg';
import RingkasanEksekutifImage from './assets/image/ringkasaneksekutif.jpg'; // Add image for the left outcome
import RefleksiOrmawaImage from './assets/image/refleksiormawa.jpg'; // Add image for the right outcome
import MDesaSehatImage from './assets/image/mdesasehat.jpg'; // Add image for the right outcome
import MPelatihanSC3LImage from './assets/image/mpelatihansc3l.jpg'; // Add image for the right outcome
import MPelatihanDEBESTImage from './assets/image/mpelatihandebest.jpg'; // Add image for the right outcome
import MPelatihanCaregiverImage from './assets/image/mpelatihancaregiver.jpg'; // Add image for the right outcome
import MPelatihanDemoHoreImage from './assets/image/mpelatihandemohore.jpg'; // Add image for the right outcome
import PosterHabbitTrackerImage from './assets/image/posterhabbittracker.jpg'; // Add image for the right outcome
import WebDiaryImage from './assets/image/webdiary.jpg'; // Add image for the right outcome
import KoranImage from './assets/image/koran.jpg'; // Add image for the right outcome
import MySmahImage from './assets/image/mysmash.jpg'; // Add image for the right outcome
import PosterJellyImage from './assets/image/posterjelly.jpg'; // Add image for the right outcome
import PosterJamuImage from './assets/image/posterjamu.jpg'; // Add image for the right outcome
import EcobrickImage from './assets/image/ecobrick.jpg'; // Add image for the right outcome
import CurcumaJellyImage from './assets/image/curcumajelly.jpg'; // Add image for the right outcome
import JamuImmunoImage from './assets/image/jamuimmuno.jpg'; // Add image for the right outcome
import InstagramLogo from './assets/image/logoinstagram.png'; // Add image for the right outcome
import TiktokLogo from './assets/image/tiktoklogo.png'; // Add image for the right outcome
import YoutubeLogo from './assets/image/youtubelogo.png'; // Add image for the right outcome
import LokasiLogo from './assets/image/lokasilogo.png'; // Add image for the right outcome

const HomePage = () => {

  useEffect(() => {
    const handleScroll = () => {
        const homepage = document.querySelector('.homepage');
        const scrollPosition = window.scrollY; // Get the current scroll position
        const maxScroll = document.body.scrollHeight - window.innerHeight; // Max scroll value

        // Calculate the blue value based on scroll position
        const blueValue = Math.min(255, Math.floor((scrollPosition / maxScroll) * 255));
        const borderColor = `rgb(84, ${blueValue}, 255)`;

        // Set the new border color
        homepage.style.setProperty('--border-color', borderColor);

        // Set the opacity based on the scroll position
        const opacity = Math.min(scrollPosition / 500, 1); // Max opacity of 1
        homepage.style.setProperty('--border-opacity', opacity);
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize opacity to 0
    const homepage = document.querySelector('.homepage');
    homepage.style.setProperty('--border-opacity', '0');

    // Cleanup the event listener on component unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

    return (
      <div className="homepage">
        {/* Hero Section */}
        <div className="homepage__hero">
          <Carousel 
            showArrows={true} 
            autoPlay={true} 
            infiniteLoop={true} 
            interval={3000}
            showThumbs={false} 
            showStatus={false} 
            className="homepage__carousel"
          >
            <div>
              <img src={HeroImage1} alt="PPKO Ormawa HIMFA UMY Slide 1" />
              <p className="legend">Welcome to Website PPKO Ormawa HIMFA UMY</p>
            </div>
            <div>
              <img src={HeroImage2} alt="PPKO Ormawa HIMFA UMY Slide 2" />
              <p className="legend">Our Theme: TEROPONG JIWA</p>
            </div>
            <div>
              <img src={HeroImage3} alt="PPKO Ormawa HIMFA UMY Slide 3" />
              <p className="legend">Empowering Communities through Mental Health and Environment</p>
            </div>
          </Carousel>
          {/* About Section */}
        <h2 className="homepage__about-title">About PPK Ormawa HIMFA UMY</h2>
        {/* Subheading */}
        <h3 className="homepage__subheading">Apa sih PPK Ormawa HIMFA UMY itu?</h3>
  
        {/* Title and Description */}
        <p className="homepage__description">
        PPK Ormawa HIMFA UMY 2024 adalah singkatan dari Program Penguatan Kapasitas Organisasi Kemahasiswaan yang mengusung tema "TEROPONG JIWA: Terapi Okupasi Orang Dengan Gangguan Jiwa Berbasis Bank Sampah Melalui Optimalisasi Kader Kesehatan di Desa Hargorejo." Program ini berfokus pada kolaborasi lintas sektor, termasuk dengan masyarakat desa, tenaga kesehatan, dan mitra terkait, untuk menciptakan dampak sosial yang berkelanjutan. Dengan pendekatan berbasis komunitas, program ini diharapkan dapat membantu ODGJ untuk berinteraksi kembali dengan lingkungan mereka, sekaligus memberdayakan masyarakat melalui pengelolaan sampah yang baik dan terintegrasi. PPKO Ormawa HIMFA UMY 2024 juga melibatkan banyak mahasiswa sebagai agen perubahan, dengan harapan mereka bisa menerapkan ilmu yang didapat di dunia akademik untuk membantu masyarakat secara nyata.
        </p>
        <a href="/about-us" className="homepage__cta">Info Lebih Lanjut Tentang Kami</a>

        {/* Program Section */}
        <div className="program-section">
          <h2 className="program__title">Program PPK Ormawa HIMFA UMY</h2>
          <img src={ProgramImage} alt="PPKO Ormawa HIMFA UMY" className="program-image" />
          <div className="program__content">
            {/* About Section */}
        <h2 className="program_tittle-about">Teropong Jiwa Pasien ODGJ</h2>
            <p className="program__description">
            Teropong Jiwa atau Terapi Okupasi untuk Orang Dengan Gangguan Jiwa (ODGJ) merupakan salah satu program unggulan kami yang dirancang secara khusus untuk mendukung proses pemulihan ODGJ melalui berbagai kegiatan yang berbasis lingkungan dan berfokus pada aspek sosial. Program ini tidak hanya membantu ODGJ dalam memperbaiki kemampuan berinteraksi dengan lingkungan sekitar, tetapi juga memberdayakan mereka dengan keterampilan praktis yang dapat digunakan dalam kehidupan sehari-hari. Melalui inisiatif Bank Sampah, kami tidak hanya mengatasi masalah lingkungan tetapi juga mengoptimalkan keterlibatan aktif masyarakat dalam menciptakan lingkungan yang lebih bersih, sehat, dan berkelanjutan. Dengan demikian, program ini memberikan dampak positif ganda, yakni membantu pemulihan ODGJ sekaligus mendorong kesadaran lingkungan dan gotong-royong di masyarakat.
            </p>
            <a href="/program" className="program__cta">Jelajahi Program Lebih Lanjut</a>
          </div>
  
          {/* News Section */}
          <div className="news-section">
            <h2 className="news__title">Berita PPK Ormawa HIMFA UMY</h2>
            <img src={HeadLineImage} alt="PPKO Ormawa HIMFA UMY" className="headline-image" />
            <h3 className="news__headline">
              PPK Ormawa HIMFA UMY Hadirkan Web Diary's: Platform Konsultasi Kesehatan Mental
            </h3>
            <div className="news__content">
              <p className="news__description">
              Salah satu inovasi terbaru dalam bidang kesehatan mental adalah pengembangan platform yang memungkinkan masyarakat untuk mengakses layanan konsultasi dengan mudah dan efektif. Platform ini dirancang untuk memberikan solusi yang lebih praktis bagi individu yang membutuhkan dukungan psikologis, tanpa harus menghadapi berbagai hambatan seperti jarak, waktu, atau stigma yang sering kali melekat pada upaya mencari bantuan kesehatan mental. Dengan fitur-fitur yang ramah pengguna dan terintegrasi, masyarakat dapat dengan cepat menghubungi tenaga profesional, seperti psikolog atau konselor, yang siap membantu mereka mengatasi berbagai permasalahan emosional, mental, maupun perilaku, sehingga tercipta sistem yang mendukung kesehatan mental secara lebih inklusif dan merata di berbagai lapisan masyarakat.
              </p>
              <a 
              href="https://kumparan.com/ppko-himfa-2024/ppk-ormawa-himfa-umy-hadirkan-web-diarys-platform-konsultasi-kesehatan-mental-23ZiQzRjtGZ/2" 
              target="_blank" 
              className="news__cta"
            >
              Baca Berita Lengkap
            </a>
              <a href="/news" className="news2__cta">Jelajahi Berita Lebih Lanjut</a>
                   </div>
                </div>
             </div>

               {/* Luaran (Outcomes) Section */}
        <div className="outcomes-section" id="outcomes-section">
          <h2 className="outcomes__title">Luaran PPK Ormawa HIMFA UMY</h2>
          <div className="outcomes__content">
            <div className="outcomes__image-left">
              <img src={RingkasanEksekutifImage} alt="Luaran Kiri" />
              <p className="outcomes__caption">Buku Ringkasan Eksekutif</p>
            </div>
            <div className="outcomes__image-right">
              <img src={RefleksiOrmawaImage} alt="Luaran Kanan" />
              <p className="outcomes__caption">Buku Refleksi Ormawa</p>
            </div>
            <div className="outcomes__image-right">
              <img src={MDesaSehatImage} alt="Luaran Kanan" />
              <p className="outcomes__caption">Modul Desa Sehat</p>
            </div>
            <div className="outcomes__image-right">
              <img src={MPelatihanSC3LImage} alt="Luaran Kanan" />
              <p className="outcomes__caption">Modul Pelatihan Short Course 3L</p>
            </div>
            <div className="outcomes__image-right">
              <img src={MPelatihanDEBESTImage} alt="Luaran Kanan" />
              <p className="outcomes__caption">Modul Pelatihan DEBEST</p>
            </div>
            <div className="outcomes__image-right">
              <img src={MPelatihanCaregiverImage} alt="Luaran Kanan" />
              <p className="outcomes__caption">Modul Pelatihan Caregiver</p>
            </div>
            <div className="outcomes__image-right">
              <img src={MPelatihanDemoHoreImage} alt="Luaran Kanan" />
              <p className="outcomes__caption">Modul Pelatihan DemoHore</p>
            </div>
            <div className="outcomes__image-right">
              <img src={PosterHabbitTrackerImage} alt="Luaran Kanan" />
              <p className="outcomes__caption">Poster Habbit Tracker</p>
            </div>
            <div className="outcomes__image-right">
              <img src={WebDiaryImage} alt="Luaran Kanan" />
              <p className="outcomes__caption">Web Diary's</p>
            </div>
            <div className="outcomes__image-right">
              <img src={KoranImage} alt="Luaran Kanan" />
              <p className="outcomes__caption">Publikasi Media Koran</p>
            </div>
            <div className="outcomes__image-right">
              <img src={MySmahImage} alt="Luaran Kanan" />
              <p className="outcomes__caption">MySmash Bank Sampah</p>
            </div>
            <div className="outcomes__image-right">
              <img src={PosterJellyImage} alt="Luaran Kanan" />
              <p className="outcomes__caption">Poster Curcuma Jelly</p>
            </div>
            <div className="outcomes__image-right">
              <img src={PosterJamuImage} alt="Luaran Kanan" />
              <p className="outcomes__caption">Poster Jamu Immuno</p>
            </div>
            <div className="outcomes__image-right">
              <img src={EcobrickImage} alt="Luaran Kanan" />
              <p className="outcomes__caption">Ecobrick Meja dan Kursi</p>
            </div>
            <div className="outcomes__image-right">
              <img src={CurcumaJellyImage} alt="Luaran Kanan" />
              <p className="outcomes__caption">Puding Curcuma Jelly</p>
            </div>
            <div className="outcomes__image-right">
              <img src={JamuImmunoImage} alt="Luaran Kanan" />
              <p className="outcomes__caption">Jamu Immuno</p>
            </div>
          </div>
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
    
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer__content">
          <p>© PPK Ormawa HIMFA UMY 2024.<br />
      All Rights Reserved.
    </p>
        </div>
      </footer>
   </div>
    );
  };
  
  export default HomePage;
  