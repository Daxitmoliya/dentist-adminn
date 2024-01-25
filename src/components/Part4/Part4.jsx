import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const Part4 = () => {
  
  const chartData = {
    labels: ['1900', '1950', '1999', '2050'],
    datasets: [
      {
        label: 'Patient Total',
        data: [0, 500, 1000, 2000],
        fill: true, 
        backgroundColor: '#007bff', 
        borderColor: '#007bff',
        borderWidth: 2,
        lineTension: 0.9,
      },
    ],
  };

  const icuData = {
    label: 'Patients in ICU',
    data: [10, 50, 100, 200],
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    borderWidth: 2,
  };

  const opdData = {
    label: 'Patients in OPD',
    data: [20, 20, 50, 100],
    backgroundColor: '#6610f2', 
    borderColor: '#6610f2',
    borderWidth: 2,
  };

  const barChartData = {
    labels: ['1900', '1950', '1999', '2050'],
    datasets: [icuData, opdData],
  };

  return (
    <>
      <div className='page-body p-3'>
        <div className='content'>
          <div className='row'>
            <div className='col-6'>
              <div className='ms-panel'>
                <div className='ms-panel-header'>
                  <h6>Patient Total</h6>
                </div>
                <div className='ms-panel-body'>
                  <Line  
                    data={chartData}  
                    height={269}   
                    width={539} 
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className='ms-panel'>
                <div className='ms-panel-header'>
                  <h6>PATIENT IN</h6>
                </div>
                <div className='ms-panel-body'>
                  <Bar 
                    data={barChartData}
                    height={269}   
                    width={539} 
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Part4;
