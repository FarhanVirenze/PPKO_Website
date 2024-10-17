import React from 'react';
import './media.css'; // Add your CSS file for styling
import AbriPage from './assets/image/abri.png'; // Import Helen's image
import HaninPage from './assets/image/hanin.png'; // Import Zsaza's image
import SivaPage from './assets/image/siva.png'; // Import Syafa's image (update the actual image path)
import FarhanPage from './assets/image/farhan.png'; // Import Syafa's image (update the actual image path)


const members = [
    {
      name: 'Hanin',
      role: 'Ketua',
      image: HaninPage, // Replace with the actual image path
    },
    {
      name: 'Siva',
      role: 'Bendahara',
      image: SivaPage, // Replace with the actual image path
    },
    {
      name: 'Farhan',
      role: 'Sekretaris',
      image: FarhanPage, // Replace with the actual image path
    },
    {
        name: 'Adam',
        role: 'Sekretaris',
        image: AbriPage, // Replace with the actual image path
      },
  ];
  
  const media = () => {
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
  
  export default media;
  