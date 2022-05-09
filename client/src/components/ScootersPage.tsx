import {useState,useEffect} from 'react';
import scooterUtils from '../utils/scooterUtils'
import Scooter from './Scooter';



function ScootersPage() {

    const [scooters,setScooters] = useState([] as any [] )
    const [dupScooters,setDupScooters] = useState([] as any [] )
    const [polygon,setPolygon] = useState("")
    const [active ,setActive] = useState(false)

    

    useEffect(()=>{

        fetchData()
        

    },[])

    //functions

    const fetchData = async() => {

let resp = await scooterUtils.fetchScooters()
setScooters(resp)
setDupScooters(resp)

    }

    const searchScooterByPolygon = async() => {

      if(polygon!== "" ){
     let resp = await scooterUtils.searchScooterPolygon(parseInt(polygon))
     if(resp.length>0){
       setDupScooters(resp)
       setPolygon("")
     }
     else {
       alert("no exsits scooter for this polygon area")
       setPolygon("")
     }
      } 
   
     
    }

    const showActive = async() => {
      if(!active){
      let resp = await scooterUtils.fetchActiveScooters();
      setDupScooters(resp)
      setActive(true)
      }
      else{
        setDupScooters(scooters)
        setActive(false)
      }


    }

  return (

    <>
   <input className='active-scooters' style ={{backgroundColor:`${active?"red":""}`}} type = "button" value = "Active For Travel" onClick = {showActive}/>
    <input className='scoot-main-inp' value={polygon} type = "text" placeholder='search scooter by polygon' onChange={e =>setPolygon(e.target.value)} />
    <input className='scoot-main-btn' type = "button" value = "Search" onClick = {searchScooterByPolygon}  />
    <div className='main-scooter'>
   
   {
     dupScooters.map(scooter => {

        return <Scooter
                key = {scooter._id} 
                scooter = {scooter}
              
        />

     })  
   }



    </div>
    </>
  )
}

export default ScootersPage