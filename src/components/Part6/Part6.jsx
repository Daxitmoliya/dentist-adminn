import React from 'react';

const generatePatientData = () => {
  const patientsData = [
    {
      name: 'Richard',
      email: 'Richard288@example.com',
      contact: '+1-202-555-0875',
      disease: 'Fever',
      imageSrc: 'https://slidesigma.nyc/templatemonster/react/medboard/assets/img/dashboard/patient-1.jpg',
    },
    {
      name: 'William',
      email: 'William434@example.com',
      contact: '+1-202-534-0112',
      disease: 'Eye',
      imageSrc: 'https://slidesigma.nyc/templatemonster/react/medboard/assets/img/dashboard/patient-2.jpg',
    },
    {
      name: 'Jhone Deo',
      email: 'johndeo652@example.com',
      contact: '+1-202-182-0132',
      disease: 'Typhoid',
      imageSrc: 'https://slidesigma.nyc/templatemonster/react/medboard/assets/img/dashboard/patient-3.jpg',
    },
    {
      name: 'Martin',
      email: 'Martin876@example.com',
      contact: '+1-202-998-2341',
      disease: 'Cancer',
      imageSrc: 'https://slidesigma.nyc/templatemonster/react/medboard/assets/img/dashboard/patient-4.jpg',
    },
    {
      name: 'Robert',
      email: 'Robert082@example.com',
      contact: '+1-202-455-1431',
      disease: 'Diabetes',
      imageSrc: 'https://slidesigma.nyc/templatemonster/react/medboard/assets/img/dashboard/patient-5.jpg',
    },
  ];

  return patientsData;
};

const Part6 = () => {
  const patientsData = generatePatientData();

  return (
    <div className="page-body p-3">
      <div className="content">
        <div className="row">
          <div className="col-12">
            <div className="ms-panel">
              <div className="ms-panel-header">
                <h6>New Patients</h6>
              </div>
              <div className="ms-panel-body">
                <div className="table-responsive">
                  <table className="table table-hover thead-primary">
                    <thead>
                      <tr>
                        <th scope="col">Patient</th>
                        <th scope="col">E-mail Id</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Disease</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patientsData.map((patient, index) => (
                        <tr key={index}>
                          <td className="ms-table-f-w">
                            <img src={patient.imageSrc} alt="people" /> {patient.name}
                          </td>
                          <td>{patient.email}</td>
                          <td>{patient.contact}</td>
                          <td>{patient.disease}</td>
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

export default Part6;
