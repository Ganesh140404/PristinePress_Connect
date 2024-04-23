// ProfilePage.js
import React, { useState, useEffect } from 'react';
import './Profile.css'; // Import your CSS file
import Navbar from './Navbar';
import Footer from './Footer';

const Profile = () => {
  const [name, setName] = useState(localStorage.getItem('profileName') || 'John Doe');
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('profilePhoneNumber') || '123-456-7890');
  const [address, setAddress] = useState(localStorage.getItem('profileAddress') || '123 Main St, Anytown, USA');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Save the changes to local storage
    localStorage.setItem('profileName', name);
    localStorage.setItem('profilePhoneNumber', phoneNumber);
    localStorage.setItem('profileAddress', address);
    setIsEditing(false); // Disable edit mode until "Edit" is clicked again
  };

  useEffect(() => {
    // Retrieve the edited values from local storage when the component mounts
    const storedName = localStorage.getItem('profileName');
    const storedPhoneNumber = localStorage.getItem('profilePhoneNumber');
    const storedAddress = localStorage.getItem('profileAddress');
    if (storedName) {
      setName(storedName);
    }
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    }
    if (storedAddress) {
      setAddress(storedAddress);
    }
  }, []);

  return (
    <div>
      <Navbar />
    <div className="profile-container">
      <h1>Profile Details</h1>
      <div className="profile-details">
        <div className="detail">
          <label>Name:</label>
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <span>{name}</span>
          )}
        </div>
        <div className="detail">
          <label>Phone Number:</label>
          {isEditing ? (
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          ) : (
            <span>{phoneNumber}</span>
          )}
        </div>
        <div className="detail">
          <label>Address:</label>
          {isEditing ? (
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          ) : (
            <span>{address}</span>
          )}
        </div>
      </div>
      <div className="profile-actions">
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Back</button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Profile;
