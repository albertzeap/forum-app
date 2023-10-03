const Category = require('../models/Category');


const CategoryController = {

    getCategories: async (req, res) => {
        try {

            const categories = await Category.find();

            if(categories && categories.length > 0){
                res.status(200).json(categories);
            } else{
                res.status(404).json({message : "Looks like there are no categories"});
            }

        } catch(error) {
            console.error("Error in category controller: ", error);
            res.status(500).json({ error : "Error in category"});
        }
    },

    createCategory: async (req, res) => {
        try {
            const {name, description} = req.body;
            const category = new Category({name, description});
            await category.save();
            res.status(201).json({
                                    message : "Your category was created!",
                                    created : category
                                })
            
        } catch (error) {
            console.log("Error in category controller: ", error);
            res.status(500).json({error : "Error in category"})
        }
    }

}

module.exports = CategoryController;