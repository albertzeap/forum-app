// EditProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProfile = () => {
  const [userData, setUserData] = useState({
    name: '',
    photo: null, // Store the selected file
    password: '',
    timezone: '',
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setUserData({ ...userData, photo: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the data (including the file) to the server
    const formData = new FormData();
    formData.append('name', userData.name);
    formData.append('password', userData.password);
    formData.append('timezone', userData.timezone);
    formData.append('photo', userData.photo);

    try {
      const response = await axios.post('/api/edit-profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file upload
        },
      });

      if (response.status === 200) {
        alert('Profile updated successfully!');
      } else {
        alert('Profile update failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while updating your profile.');
    }
  };

  useEffect(() => {
    // Fetch the user's current profile data and populate the form fields
    axios.get('/api/user-profile').then((response) => {
      const userData = response.data;
      setUserData({
        name: userData.name,
        timezone: userData.timezone,
        // Populate other fields as needed
      });
    });
  }, []);

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Change Photo:</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Timezone:</label>
          <input
            type="text"
            name="timezone"
            value={userData.timezone}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more fields here */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
