import {Route,Routes} from 'react-router-dom'
import AddParking from './AddParking'
import FailuresPage from './FailuresPage'
import LoginPage from './LoginPage'
import Main from './Menu'
import ParkSpot from './ParkSpot'
import ScootersPage from './ScootersPage'
import Users from './Users'

const MainPage = () => {

    return (
        <div>
<Routes>
 <Route path='/' element = {<LoginPage/>}  ></Route>
 <Route path='/menu' element = {<Main/>} >
   <Route path = "" element ={<ScootersPage/>}  ></Route>
   <Route path = "park" element = {<ParkSpot/>} ></Route>
   <Route path = "users" element = {<Users/>} ></Route>
   <Route path = "fail" element = {<FailuresPage/>} ></Route>
   <Route path = "addpark" element = {<AddParking/>} ></Route>


 </Route>
 

</Routes>
        </div>
    )

}
export default MainPage