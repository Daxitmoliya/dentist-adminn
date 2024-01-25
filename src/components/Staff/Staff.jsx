import React from 'react';
import Slider from 'react-slick';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Staff = () => {
  const staffMembers = [
   
    {
        name: 'Jude',
        role: 'Surgeon',
        image:
          'https://slidesigma.nyc/templatemonster/react/medboard/assets/img/dashboard/doctor-2.jpg',
      },
      {
        name: 'anny',
        role: 'Surgeon',
        image:
          'https://slidesigma.nyc/templatemonster/react/medboard/static/media/doctor-1.08b54795.jpg',
      },
      {
        name: 'Jordan',
        role: 'Doctor',
        image:
          'https://slidesigma.nyc/templatemonster/react/medboard/assets/img/dashboard/doctor-3.jpg',
      },
      {
        name: 'Micheal',
        role: 'Nurse',
        image:
          'https://slidesigma.nyc/templatemonster/react/medboard/assets/img/dashboard/doctor-4.jpg',
      },
      {
        name: 'Rough',
        role: 'Doctor',
        image:
          'https://slidesigma.nyc/templatemonster/react/medboard/assets/img/dashboard/doctor-5.jpg',
      },
      {
        name: 'Sameul',
        role: 'Surgeon',
        image:
          'https://slidesigma.nyc/templatemonster/react/medboard/static/media/doctor-1.08b54795.jpg',
      },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <GrFormPrevious style={{ color: '#000', fontSize: 14 }} />,
    nextArrow: <GrFormNext style={{ color: '#000', fontSize: 14 }} />,
  };

  return (
    <>
      <div className='ms-panel'>
        <div className='ms-panel-header d-flex justify-content-between'>
          <h6>Hospital Staff</h6>
        </div>
            <Slider {...sliderSettings}>
            {staffMembers.map((member) => (
    <div className='doc-slide p-3' key={member.name}>
        <img src={member.image} alt={member.name} width={100} style={{ borderRadius: '50%' }} />
        <div className='ms-card-body p-4'>
        <h5>{member.name}</h5>
        <span>{member.role}</span>
        </div>
    </div>
    ))}
        </Slider>
      </div>
    </>
  );
};

export default Staff;
