import React from 'react';
import './location.css';
import BalaiDesaImage from './assets/image/balaidesa.jpg';
import PasarKokapImage from './assets/image/pasarkokap.jpg';
import PetaDesaImage from './assets/image/petadesa.png'; // Tambahkan gambar peta desa
import InstagramLogo from './assets/image/logoinstagram.png'; // Add image for the right outcome
import TiktokLogo from './assets/image/tiktoklogo.png'; // Add image for the right outcome
import YoutubeLogo from './assets/image/youtubelogo.png'; // Add image for the right outcome
import LokasiLogo from './assets/image/lokasilogo.png'; // Add image for the right outcome

const Location = () => {
  return (
    <section className="location_section">
      <h2>Lokasi Pengabdian</h2>

      {/* Lokasi: Balai Desa Hargorejo */}
      <div className="location_item">
        <h3>Balai Desa Hargorejo</h3>
        <img 
          src={BalaiDesaImage} 
          alt="Balai Desa Hargorejo"
          className="location_image"
        />
        <iframe
          title="Google Maps Desa Hargorejo"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.2381198557387!2d110.108369475918!3d-7.8701333782544864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ae4eb51161d69%3A0xb1937e0906b1c57d!2sBalai%20Desa%20Hargorejo!5e0!3m2!1sen!2sid!4v1728525136745!5m2!1sen!2sid" 
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Lokasi: Pasar Kokap */}
      <div className="location_item">
        <h3>Pasar Kokap Desa Hargorejo</h3>
        <img 
          src={PasarKokapImage}
          alt="Pasar Kokap"
          className="location_image"
        />
        <iframe
          title="Google Maps Pasar Kokap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.5150810669606!2d110.1006762!3d-7.841033299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ae50590c38ee3%3A0xe7630586c6aa93ed!2zUGFzYXIgS29rYXBb6qal6qax6qaC6qaP6qa66qa06qaP6qal6qeAXQ!5e0!3m2!1sen!2sid!4v1728525905204!5m2!1sen!2sid"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Peta Desa Hargorejo Section */}
      <div className="map_section">
        <h3>Peta Desa Hargorejo</h3>
        <img 
          src={PetaDesaImage}
          alt="Peta Desa Hargorejo"
          className="map_image"
        />
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

    </section>
  );
};

export default Location;
