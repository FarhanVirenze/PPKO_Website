import React from 'react';
import './logistik.css'; // Add your CSS file for styling
import NaylaPage from './assets/image/nayla.png'; // Import Zsaza's image
import SofianPage from './assets/image/sofian.png'; // Import Syafa's image (update the actual image path)
import FaziPage from './assets/image/fazi.png'; // Import Syafa's image (update the actual image path)

const members = [
    {
      name: 'Kartika Nayla Anggraini',
      role: 'Logistik',
      image: NaylaPage, // Replace with the actual image path
    },
    {
      name: 'Sofian Hidayat',
      role: 'Logistik',
      image: SofianPage, // Replace with the actual image path
    },
    {
      name: 'Muhammad Naufal Mafazi',
      role: 'Logistik',
      image: FaziPage, // Replace with the actual image path
    },
  ];
  
  const logistik = () => {
    return (
      <div className="pengurus-harian">
        <h2 className="section-title">Anggota Divisi</h2>
        <div className="members-container">
          {members.map((member, index) => (
            <div className="member-card" key={index}>
              <img src={member.image} alt={member.name} className="member-image" />
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-introduction">{member.introduction}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default logistik;
  