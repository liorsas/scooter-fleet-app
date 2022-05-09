import React from 'react'


interface IProps {
    park: {
        _id:string,
        address:string
        name:string,
        capacity:number,
   currLocation:{},
 
    }
   
}
   

function ParkComp({park}:IProps) {
  return (
    <div className='park-box' >
 <label className='park-lbl' >Parking Name:</label>
 <div className='park-span'>{park.name}</div>

 <div className='park-add'>
 <label className='park-lbl' >Parking Address:</label>
 <div className='park-span'>{park.address}</div>
 </div>
<div className='availabe-place' >
 <label className='park-lbl' >Available spaces:</label>
 <div className='park-span'>{park.capacity}</div>
</div>

    </div>
  )
}

export default ParkComp