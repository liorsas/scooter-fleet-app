import {useState} from 'react'
import { Button } from "react-bootstrap";
import parkinUtils from '../utils/parkinUtils'
import {useNavigate} from 'react-router-dom'


function AddParking() {

  const navigate = useNavigate()
  
      interface TcurrLocation  {
        lat:number,
        lon:number
    }

    
    
  
    const [park,setPark] = useState({name:"",address:"",capacity:0 })
    const [parkLocation,setParkLocation] = useState<TcurrLocation> ({lat:0 ,lon:0})

    //function

    const handleNewPark = async() => {
      let obj = {
   name:park.name,
   address:park.address,
   capacity:park.capacity,
   currLocation:{
     lat:parkLocation.lat,
     lon:parkLocation.lon
   }


      }

      if(obj.name !=="" &&
         obj.address !== "" &&
         obj.capacity > 0 && 
         obj.currLocation.lat >0 &&
         obj.currLocation.lon >0
           )
        
        {
let resp = await parkinUtils.addNewPark(obj)
if(resp){
  navigate("/menu/park")
}
else {
  alert("something wrong")
}

        }
        else {
alert("you must to fill all the fields")
        }
        
    }
  return (
        <div className="add-mem-main">
     
      <form className="main-form">
        <div className="add-mem-inp-main">
          <h3 style={{ color: "gray" }}>Add New Parking </h3>
          <label>
           
            <input
              className="add-mem-inp"
              type="text"
              placeholder="enter name"
              onChange={(e) => setPark({ ...park, name: e.target.value })}
              required
            />
          </label>{" "}
          <br />
          <label>
           
            <input
              className="add-mem-inp"
              type="text"
              placeholder="enter address"
              onChange={(e) =>
                setPark({ ...park, address: e.target.value})
              }
              required
            />
          </label>{" "}
          <br />
          <label>
            
            <input
              className="add-mem-inp"
              type="url"
              placeholder="enter capacity"
              onChange={(e) => setPark({ ...park,capacity:parseInt(e.target.value)})}
              required
            />
          </label>
          <br />
          <label>
          
            <input
              className="add-mem-inp"
              type="text"
              placeholder="enter latitude"
              onChange={e => setParkLocation({...parkLocation,lat:parseFloat(e.target.value)})}
             
            />
          </label>{" "}

          <br />
          <label>
            
              <input
              className="add-mem-inp"
              type="text"
              placeholder="enter lontitude"
              onChange={e => setParkLocation({...parkLocation,lon:parseFloat(e.target.value)})}
             
            />
          </label>{" "}
          <br />
          <br />
          <Button variant="secondary" onClick={handleNewPark}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddParking