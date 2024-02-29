import "./Tripstyle.css"
import Abc from '../assets/img 2.jpg'
import Cde from '../assets/img 5.jpg'
import Xyz from '../assets/img1.jpg'

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p className="para">You can discover unique destinations using Google Maps</p>

            <div className="t-card">
                <div className="t-image">
                    <img alt="image" src={Abc}/>
                </div>
                <h4>Trip in Indonesia</h4>
                <p>Indonesia officialy the republic officialy of
                    Indonesia,is a country in Southeast Asia
                    and Ocenia between the Indian and 
                    Pacific oceans. It consists of over 17,000
                    islands,including Sumatra,Java,Sulawesi,
                    and parts of Bornea and New Guinea
                </p>
            </div>
            <div className="t-card">
                <div className="t-image">
                    <img alt="image" src={Cde}/>
                </div>
                <h4>Trip in Singapore</h4>
                <p>Indonesia officialy the republic officialy of
                    Indonesia,is a country in Southeast Asia
                    and Ocenia between the Indian and 
                    Pacific oceans. It consists of over 17,000
                    islands,including Sumatra,Java,Sulawesi,
                    and parts of Bornea and New Guinea
                </p>
            </div>
            <div className="t-card">
                <div className="t-image">
                    <img alt="image" src={Xyz}/>
                </div>
                <h4>Trip in Malaysia</h4>
                <p>Indonesia officialy the republic officialy of
                    Indonesia,is a country in Southeast Asia
                    and Ocenia between the Indian and 
                    Pacific oceans. It consists of over 17,000
                    islands,including Sumatra,Java,Sulawesi,
                    and parts of Bornea and New Guinea
                </p>
            </div>
        </div>
        
    )
}


export default Trip