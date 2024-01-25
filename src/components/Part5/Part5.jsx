import React from 'react';

const appointmentsData = [
  {
    patient: {
      name: 'Bernardo Galaviz',
      imageSrc: 'https://slidesigma.nyc/templatemonster/react/medboard/assets/img/dashboard/patient-1.jpg',
    },
    doctor: 'Dr. Cristina Groves',
    date: '01 Dec 2021',
    timing: '5:00 PM',
    contact: '+01-789-654-123',
    status: true,
  },
  {
    patient: {
      name: 'Jenni',
      imageSrc: 'https://slidesigma.nyc/templatemonster/react/medboard/assets/img/dashboard/patient-2.jpg',
    },
    doctor: 'Dr. Richard Miles',
    date: '01 Dec 2021',
    timing: '8:00 PM',
    contact: '+10-654-654-991',
    status: true,
  },
  {
    patient: {
      name: 'John Doe',
      imageSrc: 'https://slidesigma.nyc/templatemonster/react/medboard/assets/img/dashboard/patient-3.jpg',
    },
    doctor: 'Dr. Andrew',
    date: '01 Dec 2021',
    timing: '10:00 AM',
    contact: '+10-709-254-445',
    status: false,
  },
  {
    patient: {
      name: 'Alesdro Guitto',
      imageSrc: 'https://slidesigma.nyc/templatemonster/react/medboard/assets/img/dashboard/patient-4.jpg',
    },
    doctor: 'Dr. Robert',
    date: '01 Dec 2021',
    timing: '2:00 PM',
    contact: '+10-102-225-333',
    status: true,
  },
  {
    patient: {
      name: 'Richard',
      imageSrc: 'https://slidesigma.nyc/templatemonster/react/medboard/assets/img/dashboard/patient-5.jpg',
    },
    doctor: 'Dr. Adwerd',
    date: '07 Dec 2021',
    timing: '5:00 PM',
    contact: '+01-222-111-356',
    status: false,
  },
];

const Part5 = () => {
  const tableStyle = {
    fontSize: '12px',
  };

  return (
    <div className='page-body p-3'>
      <div className='content'>
        <div className="row">
          <div className='col-12'>
            <div className='ms-panel'>
              <div className='ms-panel-header'>
                <h6>Upcoming Appointments</h6>
              </div>
              <div className='ms-panel-body'>
                <div className='table-responsive'>
                  <table className='table table-hover' style={tableStyle}>
                    <thead className="thead-primary">
                      <tr>
                        <th scope='col'>Patient</th>
                        <th scope='col'>Doctor</th>
                        <th scope='col'>Date</th>
                        <th scope='col'>Timing</th>
                        <th scope='col'>Contact</th>
                        <th scope='col'>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointmentsData.map((appointment, index) => (
                        <tr key={index}>
                          <td className='ms-table-f-w'>
                            <img src={appointment.patient.imageSrc} alt='people' /> {appointment.patient.name}
                          </td>
                          <td>{appointment.doctor}</td>
                          <td>{appointment.date}</td>
                          <td>{appointment.timing}</td>
                          <td>{appointment.contact}</td>
                          <td>
                            <div className='form-check form-switch'>
                              <input className='form-check-input' type='checkbox' id={`switch${index + 1}`} checked={appointment.status} />
                              <label className='form-check-label' htmlFor={`switch${index + 1}`}></label>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>   
        </div>
      </div>
    </div>
  );
};

export default Part5;
