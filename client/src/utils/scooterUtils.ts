import axios from "axios";
const fetchScooters = async() => {

      let resp = await axios({
    method: "get",
    url: "https://scooter-fleet.herokuapp.com/api/scooters",
    headers: {
      "Content-Type": "application/json",
    },
  });

return resp.data
}

const searchScooterPolygon = async(polygon:number) => {


  // let obj = {
  //   polyNum:polygon
  // }

      let resp = await axios({
    method: "get",
    url: "https://scooter-fleet.herokuapp.com/api/scooters/poly?polygon=" +polygon,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return resp.data

}

const fetchActiveScooters =async () => {

      let resp = await axios({
    method: "get",
    url: "https://scooter-fleet.herokuapp.com/api/scooters/act",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return resp.data
}

const exportFunction = {
    fetchScooters,
    searchScooterPolygon,
    fetchActiveScooters
}
export default exportFunction