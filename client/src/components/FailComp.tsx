

interface IProps {
    fail: {
        id:string,
   
   model:string,
   year:number,
   failures:Array<any>,
    }
    
}


function FailComp({fail}:IProps) {


  return (
    <div>

   {
       fail.failures.length > 0 &&
       <div className='fail-box'>

            <div className= "fail-lbl">
   <label >Scooter Model:{' '} {fail.model}</label> <br />
   <label>Scooter Year:{ ' '} {fail.year} </label>

            </div>
            <div className='fail-list'>
                <h4>Failures List</h4>
               <ul>
                   {
                       fail.failures.map( (item: { _id: string, Type: string  ,status: string ,openingTime:Date,closingTime:Date }) => {

                        return <li key = {item._id} >
                                 {item.Type} {' '} <span style={{fontWeight:"bold"}}>{item.status}</span>
                                 
                                 


                        </li>
                       })
                   }
               </ul>


            </div>
           
            
       </div>
    

                }
    </div>
  )
}

export default FailComp