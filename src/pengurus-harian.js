// pengurus-harian.js
import React from 'react';
import './pengurus-harian.css'; // Add your CSS file for styling
import HelenPage from './assets/image/helen.png'; // Import Helen's image
import ZsazaPage from './assets/image/zsaza.png'; // Import Zsaza's image
import SyafaPage from './assets/image/syafa.png'; // Import Syafa's image (update the actual image path)

// List of members with roles and images
const members = [
  {
    name: 'Helena Martin',
    role: 'Ketua',
    image: HelenPage, // Correct image path for Helen
  },
  {
    name: 'Zsaza Qonita',
    role: 'Bendahara',
    image: ZsazaPage, // Correct image path for Zsaza
  },
  {
    name: 'Syafa',
    role: 'Sekretaris',
    image: SyafaPage, // Correct image path for Syafa
  },
];

const PengurusHarian = () => {
  return (
    <div className="pengurus-harian">
      <h2 className="section-title">Anggota Divisi</h2>
      <div className="members-container">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <img src={member.image} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PengurusHarian;
