import React from 'react';
import './logistik.css'; // Add your CSS file for styling

const members = [
    {
      name: 'Nayla',
      role: 'Ketua',
      image: 'path/to/john_image.jpg', // Replace with the actual image path
      introduction: 'John is responsible for overseeing the entire team and ensuring that all activities are aligned with our goals.',
    },
    {
      name: 'Sofian',
      role: 'Bendahara',
      image: 'path/to/jane_image.jpg', // Replace with the actual image path
      introduction: 'Jane assists the Ketua and takes charge in their absence, making sure everything runs smoothly.',
    },
    {
      name: 'Fazi',
      role: 'Sekretaris',
      image: 'path/to/alice_image.jpg', // Replace with the actual image path
      introduction: 'Alice manages all documentation and communication, keeping the team organized and informed.',
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
  