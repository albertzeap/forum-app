const Discussion = require('../models/Discussion');

const DiscussionController = {

  // Get all discussions
  getDiscussions: async (req, res) => {
    try {
      const discussions = await Discussion.find(); 
      if (discussions && discussions.length > 0) {
        res.status(200).json(discussions);
      } else {
        res.status(404).json({ message: 'No discussions found' });
      }
    } catch (error) {
      console.error('Error in getting discussions:', error);
      res.status(500).json({ error: 'Error in getting discussions' });
    }
  },

  // Get a discussion by ID
  getDiscussionById: async (req, res) => {
    try {
      const Discussion = await Discussion.findById(req.params.id);
      if (Discussion) {
        res.status(200).json(Discussion);
      } else {
        res.status(404).json({ message: 'Discussion not found' });
      }
    } catch (error) {
      console.error('Error in getting discussion by ID:', error);
      res.status(500).json({ error: 'Error in getting discussion' });
    }
  },

  // Create a new discussion
  createDiscussion: async (req, res) => {
    try {
      const { title, content, author, category } = req.body;
      const discussion = new Discussion({ title, content, author, category });
      await discussion.save();
      res.status(201).json({ message: 'Discussion created!', discussion });
    } catch (error) {
      console.error('Error in creating discussion:', error);
      res.status(500).json({ error: 'Error in creating discussion' });
    }
  },

  
  // Update a discussion by ID
  updateDiscussionById: async (req, res) => {
    try {
      const { title, content } = req.body;
      const discussion = await Discussion.findByIdAndUpdate(
        req.params.id,
        { title, content },
        { new: true }
      );
      if (discussion) {
        res.status(200).json({ message: 'Discussion updated!', discussion });
      } else {
        res.status(404).json({ message: 'Discussion not found' });
      }
    } catch (error) {
      console.error('Error in updating discussion by ID:', error);
      res.status(500).json({ error: 'Error in updating discussion' });
    }
  },

  // Delete a discussion by ID
  deleteDiscussionById: async (req, res) => {
    try {
      const discussion = await Discussion.findByIdAndRemove(req.params.id);
      if (discussion) {
        res.status(200).json({ message: 'Discussion deleted!', discussion });
      } else {
        res.status(404).json({ message: 'Discussion not found' });
      }
    } catch (error) {
      console.error('Error in deleting discussion by ID:', error);
      res.status(500).json({ error: 'Error in deleting discussion' });
    }
  },
};

module.exports = DiscussionController;
