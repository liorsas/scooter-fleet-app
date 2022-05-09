import axios from 'axios'
async function fetchFailurs(){


     let resp = await axios({
    method: "get",
    url: "https://scooter-fleet.herokuapp.com/api/fail",
    headers: {
      "Content-Type": "application/json",
    },
  });
return resp.data
}


    const exportFunction = {
  fetchFailurs
}
export default exportFunction
