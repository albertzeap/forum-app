import axios from "axios";

const URI = process.env.REACT_APP_BACKEND_URI;
const UserApi = {


    loginUser: async (credentials, setIsLoggedIn) => {
        try {
            // Make a request to your backend to validate credentials
            const response = await axios.post('http://localhost:5000/api/login', credentials);
      
            setIsLoggedIn(true);  // Update the state to indicate that the user is logged in
            sessionStorage.setItem('token', response.data.token);
            alert(response.data.message);
          } catch (error) {
            console.error('Error in login:', error);
            alert(error.response.data.error);
            // Handle the error, e.g., show an error message to the user
          }
    },

    createUser: async (credentials) => {
      try {
        const response = await axios.post('http://localhost:5000/api/signup', credentials);
        if (response) {
          // Access response data here
          alert(response.data.message);
        }
      } catch (error) {
        // Handle error
        console.error('Error in signup:', error);
        alert(error.response.data.error);
      }
    }
}


export default UserApi;