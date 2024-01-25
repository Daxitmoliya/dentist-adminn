import React from 'react'
import { FaUserPlus } from "react-icons/fa";

const Doctorpro = () => {
  return (
   <>
        <div className='ms-card ms-widget ms-profile-widget text-center ms-card-fh br-0 p-0'> 
            <div className='ms-card-img'>
                <img src="https://slidesigma.nyc/templatemonster/react/medboard/static/media/gallery-4-760x260.8ba315fb.jpg" alt="" width={345}/>
            </div>
            <img src="https://slidesigma.nyc/templatemonster/react/medboard/static/media/doctor-1.08b54795.jpg" alt="" width={100} className='ms-img-large ms-img-round ms-user-img'/>
            <div className='ms-card-body'>
            <h2>Anny Farisha</h2>
            <span>Doctor</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
            <button type="button" class="btn btn-primary " name="button" style={{backgroundColor:"#009efb" }}><i class="material-icons"><FaUserPlus/></i> Assign</button>
            <ul className='ms-profile-stats d-flex list-unstyled'>
                <li>
                <h3 className="ms-count">5790</h3>
                <span>Operations</span>
                </li>
                <li>
                 <h3 className="ms-count">4.8</h3><span>Medical Rating</span>
                 </li>
            </ul>
            </div>
        </div>
    
   </>
  )
}

export default Doctorpro