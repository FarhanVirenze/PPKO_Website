// HomePage.js
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel styles
import "./HomePage.css"; // Pastikan untuk membuat file CSS jika perlu
import HeroImage1 from './assets/image/tim.jpg';
import HeroImage2 from './assets/image/headline.jpg';
import HeroImage3 from './assets/image/program.jpg';
import HeadLineImage from './assets/image/headline.jpg';
import ProgramImage from './assets/image/program.jpg';

const HomePage = () => {
    return (
      <div className="homepage">
        {/* Hero Section */}
        <div className="homepage__hero">
          <Carousel 
            showArrows={true} 
            autoPlay={true} 
            infiniteLoop={true} 
            interval={4000}
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
        <h2 className="homepage__about-title">ABOUT PPKO ORMAWA HIMFA UMY</h2>
        {/* Subheading */}
        <h3 className="homepage__subheading">Apa sih PPKO Ormawa HIMFA UMY itu?</h3>
  
        {/* Title and Description */}
        <p className="homepage__description">
        PPKO Ormawa HIMFA UMY 2024 adalah singkatan dari Program Penguatan Kapasitas Organisasi Kemahasiswaan yang mengusung tema "TEROPONG JIWA: Terapi Okupasi Orang Dengan Gangguan Jiwa Berbasis Bank Sampah Melalui Optimalisasi Kader Kesehatan di Desa Hargorejo." Program ini berfokus pada kolaborasi lintas sektor, termasuk dengan masyarakat desa, tenaga kesehatan, dan mitra terkait, untuk menciptakan dampak sosial yang berkelanjutan. Dengan pendekatan berbasis komunitas, program ini diharapkan dapat membantu ODGJ untuk berinteraksi kembali dengan lingkungan mereka, sekaligus memberdayakan masyarakat melalui pengelolaan sampah yang baik dan terintegrasi. PPKO Ormawa HIMFA UMY 2024 juga melibatkan banyak mahasiswa sebagai agen perubahan, dengan harapan mereka bisa menerapkan ilmu yang didapat di dunia akademik untuk membantu masyarakat secara nyata.
        </p>
        <a href="/about-us" className="homepage__cta">Info Lebih Lanjut Tentang Kami</a>
        
        {/* Program Section */}
        <div className="program-section">
          <h2 className="program__title">Program PPKO Ormawa HIMFA UMY</h2>
          <img src={ProgramImage} alt="PPKO Ormawa HIMFA UMY" className="program-image" />
          <div className="program__content">
            {/* About Section */}
        <h2 className="program_tittle-about">TERAPI OKUPASI ORANG DENGAN GANGGUAN JIWA</h2>
            <p className="program__description">
            Terapi Okupasi untuk Orang Dengan Gangguan Jiwa (ODGJ) merupakan salah satu program unggulan kami yang dirancang secara khusus untuk mendukung proses pemulihan ODGJ melalui berbagai kegiatan yang berbasis lingkungan dan berfokus pada aspek sosial. Program ini tidak hanya membantu ODGJ dalam memperbaiki kemampuan berinteraksi dengan lingkungan sekitar, tetapi juga memberdayakan mereka dengan keterampilan praktis yang dapat digunakan dalam kehidupan sehari-hari. Melalui inisiatif Bank Sampah, kami tidak hanya mengatasi masalah lingkungan tetapi juga mengoptimalkan keterlibatan aktif masyarakat dalam menciptakan lingkungan yang lebih bersih, sehat, dan berkelanjutan. Dengan demikian, program ini memberikan dampak positif ganda, yakni membantu pemulihan ODGJ sekaligus mendorong kesadaran lingkungan dan gotong-royong di masyarakat.
            </p>
            <a href="/program" className="program__cta">Jelajahi Program Lebih Lanjut</a>
          </div>
  
          {/* News Section */}
          <div className="news-section">
            <h2 className="news__title">Berita PPKO Ormawa HIMFA UMY</h2>
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
          </div>
       </div>
    );
  };
  
  export default HomePage;
  