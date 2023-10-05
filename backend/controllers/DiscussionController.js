const Discussion = require('../models/Discussion');
const mongoose = require('mongoose');

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
      const discussionId = req.params.id; // Capture the discussion ID from the request params
      const discussion = await Discussion.findById(discussionId);
      if (discussion) {
        res.status(200).json(discussion);
      } else {
        res.status(404).json({ message: 'Discussion not found' });
      }
    } catch (error) {
      console.error('Error in getting discussion by ID:', error);
      res.status(500).json({ error: 'Error in getting discussion' });
    }
  },

  // Get discussions by category
  getDiscussionsByCategory: async (req, res) => {
    try {
      const categoryId = req.params.categoryId; // Correctly access categoryId from params
  
      console.log('Category id:', categoryId);
      
      // Create a new ObjectId instance from categoryId
      const categoryIdObjectId = mongoose.Types.ObjectId.createFromHexString(categoryId);
  
      const discussions = await Discussion.find({ category: categoryIdObjectId }); // Use the ObjectId for querying
  
      console.log('Retrieved category:', discussions);
  
      if (discussions && discussions.length > 0) {
        res.status(200).json(discussions);
      } else {
        res.status(404).json({ message: 'No discussions found for this category' });
      }
    } catch (error) {
      console.error('Error in getting discussions by category:', error);
      res.status(500).json({ error: 'Error in getting discussions by category' });
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
