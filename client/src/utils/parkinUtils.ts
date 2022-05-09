import axios from 'axios'

async function fetchParkingSpot(){
     let resp = await axios({
    method: "get",
    url: "https://scooter-fleet.herokuapp.com/api/park",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return resp.data

}

async function addNewPark(obj:{}){

  console.log(obj)

    let resp = await axios({
    method: "post",
    url: "https://scooter-fleet.herokuapp.com/api/park/add",
    data: obj,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return resp.data

}

async function getAvailableParking()
{
  let resp = await axios({
    method: "get",
    url: "https://scooter-fleet.herokuapp.com/api/park/available",
    headers: {
      "Content-Type": "application/json",
    },
  });

  
  return resp.data 
}

const exportFunction = {
  fetchParkingSpot,
  addNewPark,
  getAvailableParking
}
export default exportFunction
