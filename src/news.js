import React, { useEffect, useRef } from 'react';
import './news.css'; 
import DiaryImage from './assets/image/headline.jpg';
import BankSampahImage from './assets/image/revitalisasi.jpg';
import CaregiverImage from './assets/image/caregiver.jpg';
import DemoHoreImage from './assets/image/demohore.jpg';
import DebestImage from './assets/image/debest.jpg';
import PelatihanImage from './assets/image/pelatihan.jpg';
import RRIImage from './assets/image/RRI.jpg';
import InstagramLogo from './assets/image/logoinstagram.png'; // Add image for the right outcome
import TiktokLogo from './assets/image/tiktoklogo.png'; // Add image for the right outcome
import YoutubeLogo from './assets/image/youtubelogo.png'; // Add image for the right outcome
import LokasiLogo from './assets/image/lokasilogo.png'; // Add image for the right outcome
import { Link } from 'react-router-dom';

const news = () => {

    const newsData = [
        {
            headline: "PPK Ormawa HIMFA UMY Hadirkan Web Diary's",
            description: "Salah satu inovasi terbaru dalam bidang kesehatan mental adalah pengembangan platform yang memungkinkan masyarakat untuk mengakses layanan konsultasi dengan mudah dan efektif. Platform ini dirancang untuk memberikan solusi yang lebih praktis bagi individu yang membutuhkan dukungan psikologis, tanpa harus menghadapi berbagai hambatan seperti jarak, waktu, atau stigma yang sering kali melekat pada upaya mencari bantuan kesehatan mental. Dengan fitur-fitur yang ramah pengguna dan terintegrasi, masyarakat dapat dengan cepat menghubungi tenaga profesional, seperti psikolog atau konselor, yang siap membantu mereka mengatasi berbagai permasalahan emosional, mental, maupun perilaku, sehingga tercipta sistem yang mendukung kesehatan mental secara lebih inklusif dan merata di berbagai lapisan masyarakat.",
            image: DiaryImage,
            link: 'https://kumparan.com/ppko-himfa-2024/ppk-ormawa-himfa-umy-hadirkan-web-diarys-platform-konsultasi-kesehatan-mental-23ZiQzRjtGZ/2'
        },
        {
            headline: "Revitalisasi Bank Sampah Alam Lestari Desa Hargorejo",
            description: "Revitalisasi Bank Sampah Alam Lestari di Desa Hargorejo memiliki beberapa tujuan penting. Pertama, program ini bertujuan untuk meningkatkan kesadaran lingkungan di kalangan masyarakat. Dengan memberikan pemahaman tentang pentingnya pengelolaan sampah, diharapkan masyarakat dapat menyadari dampak sampah terhadap lingkungan dan lebih peduli terhadap kebersihan, Selain itu, revitalisasi ini berfokus pada pengurangan jumlah sampah yang dibuang ke tempat pembuangan akhir. Dengan mendorong masyarakat untuk memisahkan dan mendaur ulang sampah, Bank Sampah dapat mengurangi beban TPA dan meningkatkan efisiensi pengelolaan sampah di tingkat lokal.",
            image: BankSampahImage,
            link: 'https://kumparan.com/ppko-himfa-2024/revitalisasi-bank-sampah-alam-lestari-ppk-ormawa-himfa-umy-wujudkan-desa-sehat-23ZjZlGDzFi'
        },
        {
            headline: "Monitoring Habit Tracker Untuk Pasien ODGJ",
            description: "Monitoring Habit Tracker bertujuan untuk memudahkan pasien ODGJ dalam melakukan pemantauan terhadap kebiasaan dan aktivitas harian mereka. Dengan mencatat dan mengawasi kebiasaan positif dan negatif, pasien dapat lebih sadar akan perilaku mereka dan mendapatkan dukungan yang dibutuhkan dalam proses penyembuhan. Monitoring Habit Tracker dapat diimplementasikan dalam bentuk aplikasi mobile, jurnal fisik, atau platform online yang mudah diakses oleh pasien. Pelatihan tentang penggunaan alat ini juga penting agar pasien dan keluarga dapat memanfaatkannya dengan maksimal. Dengan demikian, Monitoring Habit Tracker untuk Pasien ODGJ berfungsi sebagai alat yang efektif untuk mendukung pemulihan dan kesejahteraan mental pasien dengan memberikan cara yang terstruktur untuk memantau kebiasaan dan perilaku mereka.",
            image: CaregiverImage,
            link: 'https://kumparan.com/ppko-himfa-2024/tim-ppk-ormawa-himfa-laksanakan-monitoring-habit-tracker-untuk-pasien-odgj-23ZkKZixQ8E'
        },
        {
            headline: "Kreasikan Potensi Toga Lokal Kunyit Desa Hargorejo",
            description: "Salah satu TOGA yang banyak ditemui di Desa Hargorejo adalah kunyit. Sehingga, Tim PPK Ormawa memilih untuk memanfaatkan kunyit untuk dibuat menjadi beberapa olahan yang inovatif. Kunyit mengandung banyak zat aktif yang berkhasiat untuk menambah nafsu makan dan juga meningkatkan sistem imun. Inovasi olahan kunyit yang dibuat oleh Tim PPK Ormawa HIMFA adalah curcuma jelly dan jamu imuno. Dengan memanfaatkan potensi lokal berupa kunyit, harapannya dapat membantu menyelesaikan permasalahan kesehatan dalam kehidupan sehari-hari. Untuk memperkenalkan inovasi olahan kunyit Tim PPK Ormawa melaksanakan kegiatan Demo Hore sebanyak dua kali. Target sasaran pada kegiatan pertama adalah kader posyandu, yang bertujuan untuk memperkuat pengetahuan dan keterampilan kader dalam pemanfaatan tanaman herbal. Pada pertemuan pertama Tim PPK Ormawa HIMFA bekerja sama dengan salah satu mitra yaitu Jamu Kiringan. Kegiatan yang dilaksanakan pada pertemuan ini adalah pengenalan TOGA dan manfaatnya, demo pembuatan jamu immuno, dan pengenalan produk inovasi lainnya yaitu curcuma jelly.",
            image: DemoHoreImage,
            link: 'https://kumparan.com/ppko-himfa-2024/ppk-ormawa-himfa-umy-kreasikan-potensi-toga-desa-hargorejo-jadi-pengobatan-alami-23bcVB8oD2h'
        },
        {
            headline: "Galakkan Lokakarya DEBEST Untuk Pengoptimalan PHBS",
            description: "Lokakarya PHBS (Perilaku Hidup Bersih dan Sehat) Debest Desa Bersih dan Sehat adalah kegiatan yang bertujuan untuk meningkatkan kesadaran dan pemahaman masyarakat mengenai pentingnya perilaku hidup bersih dan sehat dalam mendukung kesehatan lingkungan dan masyarakat. Lokakarya ini diadakan sebagai upaya untuk mendukung program Desa Bersih dan Sehat, di mana masyarakat diharapkan untuk aktif berpartisipasi dalam menciptakan lingkungan yang bersih dan sehat. Kegiatan ini melibatkan berbagai elemen masyarakat, termasuk tokoh masyarakat, pemuda, kader kesehatan, dan warga desa.",
            image: DebestImage,
            link: 'https://kumparan.com/ppko-himfa-2024/optimalkan-phbs-desa-hargorejo-ppk-ormawa-himfa-umy-galakkan-lokakarya-debest-23NlFn9w1id'
        },
        {
            headline: "Tim PPK Ormawa HIMFA UMY Gelar Pelatihan Internal",
            description: "Tim perlu memperkuat kapasitas sebelum terjun langsung ke desa untuk melakukan program terapi okupasi dimana harus bersinggungan langsung dengan pasien yang memiliki gangguan kesehatan jiwa. Persiapan dilakukan oleh tim berupa mengadakan pelatihan kesehatan mental. Pelatihan kesehatan mental dengan tema “Pentingnya Menjaga Kesehatan Mental dan Penanganan Gangguan Kesehatan Mental”  Pelatihan ini disampaikan oleh pembicara yang kompeten di bidangnya. Materi disampaikan oleh Muhammad Arif Rizqi, S.Psi.M.Psi. Psikolog selaku Kepala Divisi Konseling dan Kesejahteraan Mahasiswa LPKA UMY. Pelatihan ini disambut dengan antusias dan semangat yang tinggi oleh seluruh Tim dan Volunteer PPK Ormawa HIMFA 2024. ",
            image: PelatihanImage,
            link: 'https://kumparan.com/ppko-himfa-2024/siap-terjun-ke-desa-binaan-tim-ppk-ormawa-himfa-umy-gelar-pelatihan-internal-23Ouh1MWdIK'
        },
        {
            headline: "Program HIMFA UMY Wujudkan Desa Hargorejo Sehat Berkarya",
            description: " Program Penguatan Kapasitas (PPK) Organisasi Mahasiswa (Ormawa) Himpunan Mahasiswa Farmasi (HIMFA) Universitas Muhammadiyah Yogyakarta (UMY) mengadakan pengabdian masyarakat di Desa Hargorejo, Kulon Progo, Daerah Istimewa Yogyakarta. Kegiatan yang berlangsung dari Juli hingga September 2024 ini bertema Teropong Jiwa: Terapi Okupasi ODGJ Berbasis Bank Sampah. Program ini bertujuan untuk meningkatkan kualitas hidup Orang dengan Gangguan Jiwa (ODGJ) melalui berbagai inisiatif yang melibatkan kader kesehatan dan masyarakat.",
            image: RRIImage,
            link: 'https://www.rri.co.id/daerah/952723/program-himfa-umy-wujudkan-desa-hargorejo-sehat-berkarya'
        },
    ];

    return (
        <div className="newss-section">
            <h2 className="newss__title">Berita PPK Ormawa HIMFA UMY</h2>
            <div className="newss-grid">
                {newsData.map((news, index) => (
                    <div className="newss-item" key={index}>
                        <img src={news.image} alt={news.headline} className="newss-image" />
                        <h3 className="newss__headline">{news.headline}</h3>
                        <p className="newss__description">{news.description}</p>
                        <a href={news.link} target="_blank" rel="noopener noreferrer" className="newss__cta">
                            Baca Berita Lengkap
                        </a>
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

export default news;
