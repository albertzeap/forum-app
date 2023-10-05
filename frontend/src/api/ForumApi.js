
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
    },

    getDiscussionByCategory: async (categoryId, setDiscussions) => {
        try {
            const response = await axios.get(forumURI + "/api/discussion/category/" + categoryId);

            if(response){
                setDiscussions(response.data);
            }

        } catch (error) {
            console.error("Error in getting discussions: ", error);
        }
    },

    getReplyByDiscussion: async(discussionId, setReplies) => {
        try {
            const response = await axios.get(forumURI + "/api/reply/discussion/" + discussionId);

            if(response){
                console.log(response);
                setReplies(response.data);
            }

        } catch (error) {
            console.error("Error in getting replies: ", error);
        }
    },

    createReply: async(userId, discussionId, content, handleIsSent) => {
        try {

            const requestBody ={
                author: userId,
                discussion: discussionId,
                content: content
            }

            const response = await axios.post(forumURI + "/api/reply", requestBody);

            if(response){
                handleIsSent();
                console.log(response);
            }
            
        } catch (error) {
            console.error("Error in creating replies: ", error);
        }
    }

    
}