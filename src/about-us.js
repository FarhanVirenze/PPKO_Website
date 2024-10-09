import React from 'react';
import AboutImage from './assets/image/fulltim.png'; // Ganti dengan path gambar program
import MediaImage from './assets/image/mediatim.png';
import AcaraImage from './assets/image/acaratim.png';
import LogistikImage from './assets/image/logistiktim.png';
import PHImage from './assets/image/phtim.png';
import './about-us.css'; // Import file CSS

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
      <h2 className="about__title">ABOUT PPKO ORMAWA HIMFA UMY</h2>
      <h3 className="about__subheading">Apa sih PPKO Ormawa HIMFA UMY itu?</h3>
      <p className="about__description">
        PPKO Ormawa HIMFA UMY 2024 adalah singkatan dari Program Penguatan Kapasitas Organisasi Kemahasiswaan yang mengusung tema "TEROPONG JIWA: Terapi Okupasi Orang Dengan Gangguan Jiwa Berbasis Bank Sampah Melalui Optimalisasi Kader Kesehatan di Desa Hargorejo." Program ini berfokus pada kolaborasi lintas sektor, termasuk dengan masyarakat desa, tenaga kesehatan, dan mitra terkait, untuk menciptakan dampak sosial yang berkelanjutan. Dengan pendekatan berbasis komunitas, program ini diharapkan dapat membantu ODGJ untuk berinteraksi kembali dengan lingkungan mereka, sekaligus memberdayakan masyarakat melalui pengelolaan sampah yang baik dan terintegrasi. PPKO Ormawa HIMFA UMY 2024 juga melibatkan banyak mahasiswa sebagai agen perubahan, dengan harapan mereka bisa menerapkan ilmu yang didapat di dunia akademik untuk membantu masyarakat secara nyata.
      </p>

      {/* Divisions Section */}
      <h2 className="about-us__title">Our Division</h2>

      {/* Section for PENGURUS HARIAN */}
      <div className="division">
        <img
          src={PHImage} // Ganti dengan path gambar Pengurus Harian
          alt="PENGURUS HARIAN"
          className="division__image"
        />
        <h3 className="division__name">PENGURUS HARIAN</h3>
      </div>

      {/* Section for ACARA */}
      <div className="division">
        <img
          src={AcaraImage} // Ganti dengan path gambar Acara
          alt="ACARA"
          className="division__image"
        />
        <h3 className="division__name">ACARA</h3>
      </div>

      {/* Section for MEDIA */}
      <div className="division">
        <img
          src={MediaImage} // Ganti dengan path gambar Media
          alt="MEDIA"
          className="division__image"
        />
        <h3 className="division__name">MEDIA</h3>
      </div>

      {/* Section for HUMAS */}
      <div className="division">
        <img
          src="path_to_humas_image" // Ganti dengan path gambar Humas
          alt="HUMAS"
          className="division__image"
        />
        <h3 className="division__name">HUMAS</h3>
      </div>

      {/* Section for LOGISTIK */}
      <div className="division">
        <img
          src={LogistikImage} // Ganti dengan path gambar Logistik
          alt="LOGISTIK"
          className="division__image"
        />
        <h3 className="division__name">LOGISTIK</h3>
      </div>
    </section>
  );
};

export default AboutUs;
