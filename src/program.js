import React, { useState } from 'react';
import './program.css';
import ProgramImage from './assets/image/program.jpg';
import ShortCourse3LImage from './assets/image/shortcourse3l.jpg';
import CaregiverImage from './assets/image/caregiverr.jpg';
import DEBESTImage from './assets/image/debestt.jpg';
import DemoHoreImage from './assets/image/demohoree.jpg';
import BankSampahImage from './assets/image/banksampah.jpg';
import InstagramLogo from './assets/image/logoinstagram.png'; // Add image for the right outcome
import TiktokLogo from './assets/image/tiktoklogo.png'; // Add image for the right outcome
import YoutubeLogo from './assets/image/youtubelogo.png'; // Add image for the right outcome
import LokasiLogo from './assets/image/lokasilogo.png'; // Add image for the right outcome

const Program = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Track active description

    const programData = [
        {
            headline: "Teropong Jiwa Pasien ODGJ",
            image: ProgramImage,
            description: "Teropong Jiwa atau Terapi Okupasi untuk Orang Dengan Gangguan Jiwa (ODGJ) merupakan salah satu program unggulan kami yang dirancang secara khusus untuk mendukung proses pemulihan ODGJ melalui berbagai kegiatan yang berbasis lingkungan dan berfokus pada aspek sosial. Program ini tidak hanya membantu ODGJ dalam memperbaiki kemampuan berinteraksi dengan lingkungan sekitar, tetapi juga memberdayakan mereka dengan keterampilan praktis yang dapat digunakan dalam kehidupan sehari-hari. Melalui inisiatif Bank Sampah, kami tidak hanya mengatasi masalah lingkungan tetapi juga mengoptimalkan keterlibatan aktif masyarakat dalam menciptakan lingkungan yang lebih bersih, sehat, dan berkelanjutan. Dengan demikian, program ini memberikan dampak positif ganda, yakni membantu pemulihan ODGJ sekaligus mendorong kesadaran lingkungan dan gotong-royong di masyarakat.",
          },
          {
            headline: "Short Course 3L",
            image: ShortCourse3LImage,
            description: "Program Short Course 3L yang digagas oleh PPK Ormawa HIMFA UMY mengusung konsep Look, Listen, Link (Lihat, Dengarkan, Hubungkan) sebagai pendekatan holistik untuk menangani masalah kesehatan mental di masyarakat, khususnya dalam mendukung Orang Dengan Gangguan Jiwa (ODGJ). Pendekatan ini melibatkan Konselor Sebaya, platform konsultasi seperti Website Diarys, serta edukasi yang berlangsung dalam rangkaian Short Course 3L. Dalam program Short Course 3L, Konselor Sebaya memiliki peran krusial sebagai bagian dari intervensi sosial yang berfokus pada dukungan psikologis bagi komunitas Desa Hargorejo. Mereka dilatih melalui rangkaian kursus yang intensif, dengan mempelajari cara melihat tanda-tanda awal gangguan mental di kalangan teman sebaya, mendengarkan keluhan mereka secara empatik, dan menghubungkan mereka dengan bantuan profesional atau sumber daya yang lebih lanjut.",
          },
          {
            headline: "Caregiver",
            image: CaregiverImage,
            description: "Program Caregiver adalah sebuah pelatihan yang dirancang untuk mengoptimalkan peran penting yang dimainkan oleh kader kesehatan dan keluarga pasien dalam mendukung pemulihan dan kesejahteraan Orang Dengan Gangguan Jiwa (ODGJ). Pelatihan ini bertujuan untuk memperkuat keterampilan dan pengetahuan mereka agar mampu menjadi caregiver yang efektif dalam membantu pasien ODGJ menjalani kehidupan sehari-hari. Dalam pelatihan ini, kader dan keluarga menerima materi dari Yakkum, sebuah lembaga yang berpengalaman dalam memberikan dukungan kesehatan mental. Salah satu bentuk nyata dari program ini adalah penerapan Monitoring Habit Tracker, sebuah alat yang digunakan untuk memantau dan mengawasi kebiasaan serta aktivitas harian pasien ODGJ, dengan tujuan meningkatkan pemulihan dan kualitas hidup mereka. Program ini tidak hanya memberikan pemahaman teoretis, tetapi juga alat praktis yang dapat langsung diterapkan dalam kehidupan sehari-hari pasien dan keluarga.",
          },
          {
            headline: "DEBEST",
            image: DEBESTImage,
            description: "Lokakarya DEBEST atau Desa Bersih, Aman, Nyaman, dan Sehat dilaksanakan untuk memberikan penyuluhan kepada masyarakat mengenai pentingnya kebersihan dan kesehatan lingkungan. Kegiatan ini bertujuan untuk meningkatkan kesadaran masyarakat tentang perilaku hidup bersih dan sehat, serta mengajak mereka berpartisipasi dalam menjaga kebersihan desa. Dalam lokakarya ini, peserta mendapatkan informasi dan praktik langsung mengenai pengelolaan sampah, sanitasi, serta cara menciptakan lingkungan yang lebih sehat, termasuk pentingnya penggunaan jamban sehat. Penggunaan jamban sehat merupakan salah satu aspek krusial dalam menjaga kesehatan masyarakat dan mencegah penyakit. Selain itu, lokakarya ini juga menjadi sarana untuk memperkuat kolaborasi antara masyarakat, pemerintah, dan organisasi lokal dalam mewujudkan lingkungan yang lebih bersih dan aman bagi semua. Dengan upaya bersama, diharapkan desa dapat menjadi tempat yang nyaman untuk ditinggali, serta mendukung kesehatan masyarakat secara keseluruhan.",
          },
          {
            headline: "DemoHore",
            image: DemoHoreImage,
            description: "Program DemoHore atau Demo Hore Remedies dirancang khusus untuk kader posyandu dengan tujuan utama meningkatkan kesadaran dan pemahaman masyarakat tentang manfaat tumbuhan herbal, terutama kunyit, yang merupakan salah satu potensi alam yang sangat berharga. Dalam program ini, kami bekerja sama dengan mitra kami, yaitu Jamu Kiringan, untuk memperkenalkan produk inovatif yang kami hasilkan, yaitu curcuma jelly. Produk ini tidak hanya lezat, tetapi juga kaya akan manfaat kesehatan, terutama dalam membantu mencegah stunting pada anak. Melalui edukasi dan pelatihan yang diadakan dalam program ini, diharapkan kader posyandu dapat mengedukasi masyarakat mengenai pentingnya memanfaatkan tumbuhan herbal dan produk olahannya, sehingga dapat meningkatkan kesehatan anak-anak dan mengurangi angka stunting di komunitas. Kami percaya bahwa dengan pemahaman yang lebih baik dan dukungan dari semua pihak, masyarakat akan lebih termotivasi untuk menerapkan gaya hidup sehat yang berfokus pada penggunaan sumber daya lokal dan alami.",
          },
          {
            headline: "Revitalisasi Bank Sampah",
            image: BankSampahImage,
            description: "Revitalisasi Bank Sampah Alam Lestari di Desa Hargorejo merupakan upaya strategis yang dilakukan untuk meningkatkan kesadaran masyarakat terhadap pentingnya pengelolaan sampah yang berkelanjutan dan ramah lingkungan. Program ini bertujuan tidak hanya untuk mengurangi volume sampah yang dihasilkan, tetapi juga untuk mengubah pola pikir masyarakat dalam memperlakukan sampah sebagai sumber daya yang memiliki nilai ekonomis. Melalui program revitalisasi ini, masyarakat diajak untuk lebih aktif terlibat dalam kegiatan pengumpulan, pemilahan, dan pengolahan sampah yang dapat dimanfaatkan kembali, sehingga menghasilkan produk yang bermanfaat dan mengurangi dampak negatif terhadap lingkungan. salah satu hasil produk kami adalah Ecobrick dari meja dan kursi, dan Pot Tanaman",
          }
          ];

    const toggleDescription = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active index
    };

    return (
        <div className="programm-section">
            <h2 className="programm__title">Program PPK Ormawa HIMFA UMY</h2>
            <div className="programm-grid">
                {programData.map((program, index) => (
                    <div className="programm-item" key={index}>
                        <img src={program.image} alt={program.headline} className="programm-image" />
                        <h3 className="programm__headline">{program.headline}</h3>

                        {/* Button to toggle description */}
                        <button
                            className="programm__toggle-btn"
                            onClick={() => toggleDescription(index)} // Call toggleDescription here
                        >
                            {activeIndex === index ? 'Tutup Deskripsi' : 'Buka Deskripsi'}
                        </button>

                        {/* Add/remove active class for description */}
                        <p className={`programm__description ${activeIndex === index ? 'active' : ''}`}>
                            {program.description}
                        </p>
                    </div>
                ))}
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

export default Program;
