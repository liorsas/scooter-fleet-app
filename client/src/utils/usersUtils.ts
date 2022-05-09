import axios from "axios";

async function loginUser(obj:{}) {
  let resp = await axios({
    method: "post",
    url: "https://scooter-fleet.herokuapp.com/api/users/log",
    data: obj,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return resp.data;
}

async function fetchUsers(){

      let resp = await axios({
    method: "get",
    url: "https://scooter-fleet.herokuapp.com/api/users",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return resp.data

}

const exportFunction = {
  loginUser,
  fetchUsers
}


export default exportFunction
