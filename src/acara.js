import React from 'react';
import './acara.css'; // Add your CSS file for styling
import NidaPage from './assets/image/nida.png'; // Import Helen's image
import FatulPage from './assets/image/fatul.png'; // Import Zsaza's image
import BerlinPage from './assets/image/berlin.png'; // Import Syafa's image (update the actual image path)

const members = [
    {
      name: 'Nida',
      role: 'Ketua',
      image: NidaPage, 
    },
    {
      name: 'Fatul',
      role: 'Bendahara',
      image: FatulPage, // Replace with the actual image path
    },
    {
      name: 'Berlin',
      role: 'Sekretaris',
      image: BerlinPage, // Replace with the actual image path
    },
  ];
  
  const acara = () => {
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
  
  export default acara;
  