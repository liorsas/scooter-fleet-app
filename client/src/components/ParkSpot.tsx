import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom'
import parkingUtils from '../utils/parkinUtils'
import ParkComp from './ParkComp';



function ParkSpot() {
  const navigate = useNavigate()

const [parks,setParks] =useState([] as any [] )


useEffect(()=>{
fetchParking()

},[])

useEffect(()=>{
fetchAvailableParking()

},[])



//function 
const fetchParking =async () => {

  let resp = await parkingUtils.fetchParkingSpot()
  setParks(resp)
 
}

const fetchAvailableParking = async() => {

  let resp = await parkingUtils.getAvailableParking()
  let parkArr = parks
  
  
  for(let i = 0 ; i<resp.length ;i++){
parkArr[i].capacity = resp[i].available
  }
 
  setParks(parkArr)


}

const addParkingPage = () => {
  navigate("/menu/addpark")

}
  return (
   <div>
   <input  className='add-park-btn'  type = "button" value = "Add Parking" onClick={addParkingPage} />
   <div className='park-spot' >



      {
        parks.map(park =>{
    return <ParkComp
          key = {park._id}
          park= {park}
          //  place = {()=> {numOfSpace.filter(el=>el.id ===park._id) } }
    />
        })
      }
  


    </div>
    </div>
  )
}

export default ParkSpot