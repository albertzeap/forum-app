const Category = require('../models/Category');

const CategoryController = {

  // Get all categories
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      if (categories && categories.length > 0) {
        res.status(200).json(categories);
      } else {
        res.status(404).json({ message: 'No categories found' });
      }
    } catch (error) {
      console.error('Error in getting categories:', error);
      res.status(500).json({ error: 'Error in getting categories' });
    }
  },

  // Get a discussion by ID
  getCategoryById: async (req, res) => {
    try {
      const Category = await Category.findById(req.params.id);
      if (Category) {
        res.status(200).json(Category);
      } else {
        res.status(404).json({ message: 'Category not found' });
      }
    } catch (error) {
      console.error('Error in getting category by ID:', error);
      res.status(500).json({ error: 'Error in getting category' });
    }
  },

  // Create a new category
  createCategory: async (req, res) => {
    try {
      const { name, description } = req.body;
      const category = new Category({ name, description });
      await category.save();
      res.status(201).json({ message: 'Category created!', category });
    } catch (error) {
      console.error('Error in creating category:', error);
      res.status(500).json({ error: 'Error in creating category' });
    }
  },

  updateCategoryById: async (req, res) => {
    try {
      const { name, description } = req.body;
      const updatedCategory = await Category.findByIdAndUpdate(
        req.params.id,
        { name, description },
        { new: true }
      );
      if (updatedCategory) {
        res.status(200).json({ message: 'Category updated!', category: updatedCategory });
      } else {
        res.status(404).json({ message: 'Category not found' });
      }
    } catch (error) {
      console.error('Error in updating category by ID:', error);
      res.status(500).json({ error: 'Error in updating category' });
    }
  },

  // Delete a category by ID
  deleteCategoryById: async (req, res) => {
    try {
      const deletedCategory = await Category.findByIdAndRemove(req.params.id);
      if (deletedCategory) {
        res.status(200).json({ message: 'Category deleted!', category: deletedCategory });
      } else {
        res.status(404).json({ message: 'Category not found' });
      }
    } catch (error) {
      console.error('Error in deleting category by ID:', error);
      res.status(500).json({ error: 'Error in deleting category' });
    }
  },

};

module.exports = CategoryController;
