import React from 'react';
import './humas.css'; // Add your CSS file for styling
import FitriPage from './assets/image/fitri.png'; // Import Helen's image
import AqilPage from './assets/image/aqil.png'; // Import Zsaza's image

const members = [
    {
      name: 'Muhammad Aqil Faiq Akbar',
      role: 'Humas',
      image: AqilPage, // Replace with the actual image path
    },
    {
      name: 'Fitri Noviyanti',
      role: 'Humas',
      image: FitriPage, // Replace with the actual image path
    },
  ];
  
  const humas = () => {
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
  
  export default humas;
  