import React, { useState, useEffect } from 'react';

const DiscussionForm = ({ onSubmit, discussion }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (discussion) {
      setTitle(discussion.title);
      setContent(discussion.content);
    }
  }, [discussion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DiscussionForm;
