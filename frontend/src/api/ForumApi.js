
import axios from 'axios';

const forumURI = process.env.REACT_APP_BACKEND_URI

export const ForumApi = {
    
    getCategories: async (setCategories, setIsLoading) => {
        try {
            const response = await axios.get(forumURI + "/api/category");
            console.log(response.data);
            setCategories(response.data);

            setTimeout(() => {
                setIsLoading(false);
            }, 1000)
        } catch (error) {
            console.error("Error in getting categories: ", error.response.data.error);
        }
    }
}