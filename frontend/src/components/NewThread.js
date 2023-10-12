// NewThread.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DiscussionForm from './DiscussionForm';
import { ForumApi } from '../api/ForumApi';

const NewThread = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get('id');
  const navigate = useNavigate();
  const [sentDiscussion, setSentDiscussion] = useState(false);

  const handleFormSubmit = async (data) => {
    try {
      // Create a new discussion
      await ForumApi.createDiscussion(categoryId, data);

      // After submitting, set a flag to trigger a re-fetch on the category page
      setSentDiscussion(true);

      // Redirect back to the category page
      navigate(`/forum/category?id=${categoryId}`);
    } catch (error) {
      console.error('Error in submitting form:', error);
    }
  };

  return (
    <div>
      <h1>Create New Thread</h1>
      <DiscussionForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default NewThread;