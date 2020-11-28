import axios from "axios";

// Gets all users
 const allUsers = {
getUsers: () => {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
}

export default allUsers;