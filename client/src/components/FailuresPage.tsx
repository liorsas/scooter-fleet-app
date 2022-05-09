import failuresUtils from '../utils/failuresUtils'
import {useEffect,useState} from 'react'
import FailComp from './FailComp'

function FailuresPage() {

  const [failures,setFailures] = useState([] as any [] )

  useEffect(()=>{
fetchFailures()

  },[])

  //function 

  const fetchFailures = async() => {

    let resp = await failuresUtils.fetchFailurs()
    console.log(resp)
    setFailures(resp)

  }


  return (
    <>
      <h1>History Failures</h1>
<div className='fails-main'>
{
  failures.map(fail => {
   return <FailComp
           key = {fail.id}
           fail={fail}
   
   />

  })
}
</div>

    </>
  )
}

export default FailuresPage