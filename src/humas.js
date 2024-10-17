import React from 'react';
import './humas.css'; // Add your CSS file for styling
import FitriPage from './assets/image/fitri.png'; // Import Helen's image
import AqilPage from './assets/image/hanin.png'; // Import Zsaza's image

const members = [
    {
      name: 'Aqil',
      role: 'Ketua',
      image: 'path/to/john_image.jpg', // Replace with the actual image path
      introduction: 'John is responsible for overseeing the entire team and ensuring that all activities are aligned with our goals.',
    },
    {
      name: 'Fitri',
      role: 'Bendahara',
      image: 'path/to/jane_image.jpg', // Replace with the actual image path
      introduction: 'Jane assists the Ketua and takes charge in their absence, making sure everything runs smoothly.',
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
  