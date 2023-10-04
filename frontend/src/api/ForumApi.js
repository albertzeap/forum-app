
import axios from 'axios';

// const forumURI = process.env.REACT_APP_BACKEND_URI
const forumURI = "http://localhost:5000"

export const ForumApi = {
    
    getCategories: async (setCategories, setIsLoading) => {
        try {
            const response = await axios.get(forumURI + "/api/category");
            
            if(response){
                setCategories(response.data);
                setTimeout(() => {
                    setIsLoading(false);
                }, 800)
            }

        } catch (error) {
            console.error("Error in getting categories: ", error);
        }
    }

    
}