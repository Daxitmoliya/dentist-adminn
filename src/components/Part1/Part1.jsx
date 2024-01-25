import React from 'react';
import { FaStethoscope, FaUserPlus, FaWheelchair, FaBriefcaseMedical } from 'react-icons/fa';

const Part1 = () => {
  const doctors = [
    { 
      title: 'Doctors', count: 4567, link: '#', icon: <FaStethoscope style={{ fontSize: 32 }} /> 
    },
    {
       title: 'NURSES', count: 7890, link: '#', icon: <FaUserPlus style={{ fontSize: 32 }} />
     },
    { 
      title: 'PATIENTS ', count: 1234, link: '#', icon: <FaWheelchair style={{ fontSize: 32 }} /> 
    },
    {
       title: 'PHARMACISTS', count: 5678, link: '#', icon: <FaBriefcaseMedical style={{ fontSize: 32 }} /> 
      },
  ];

  return (
    <div className="page-body p-3">
      <div className="content">
        <div className="row">
          {
          doctors.map((doctor) => (
            <div  className="col-xl-3">
              <a href={doctor.link}>
                <div className="ms-card card-gradient-custom ms-widget ms-infographics-widget ms-p-relative pt-2 m-0">
                  <div className="ms-card-body media ">
                    <div className="media-body">
                      <h6 className="bold">{doctor.title}</h6>
                      <p className="ms-card-change mb-0 text-white">{doctor.count}</p>
                    </div>
                  </div>
                  <i>{doctor.icon}</i>
                </div>
              </a>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Part1;
