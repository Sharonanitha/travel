import Mountain1 from '../assets/img 7.jpg'
import Mountain2 from '../assets/img 5.jpg'
import Mountain3 from '../assets/img 6.jpg'
import Mountain4 from '../assets/img 8.jpg'
import "./Destinationstyles.css"
import Trip from '../components/Trip.js'

const Destination = () =>{
    return(
       <div className="destination">
        <h1>Popular Destinations</h1>
        <p className='para'>Tours give you the opportunity to see a lot within a time frame</p>

        <div className="first-des">
        <div className="des-text">
        <h2>Taal Volcano, Batangas</h2>
        <p>One of the most iconic views in Luzon,
            Mt.Taal boasts a volcano inside a lake inside an island.if you fancy a closer look, the hike up to 
            the crater is a mere 45 minutes and is easy enough for beginners.The hike can be dusty and hot,so plan
            foe an early morning trip, and then unwind some bulalo before heading back home!
        </p>
        </div>

        <div className="image">
            <img alt="abc" src={Mountain1}/>
            <img alt="abc" src={Mountain2}/>
        </div>
       </div>
       
       </div>

    )
}

export default Destination