

interface IProps {
    scooter: {
        _id:string,
   currLocation:{},
   model:string,
   polygon:number,
   status:string,
   year:number
    }
    
}


function Scooter ({scooter}:IProps)  {
  return (
    <div className='scooter-box' >
      
     <div className='scot-model' >
     
       {scooter.model}
     </div>
     <div className='scot-year'>
      
       {scooter.year}
     </div>
     
{
  scooter.status ==='handled' ?
  <div style={{color:"red"}} >{scooter.status}</div>:""
}

    </div>
  )
}

export default Scooter