import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import Calander from '../Calander/Calander';
import Doctorpro from '../Doctorpro/Doctorpro';


const createChart = (chartId, title, labels, values) => {
  useEffect(() => {
    const canvas = document.getElementById(chartId);

    if (canvas.chart) {
      canvas.chart.destroy();
    }

    canvas.chart = new Chart(canvas.getContext('2d'), {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: title,
          data: values,
          backgroundColor: '#009efb',
          borderColor: '#009efb',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, [chartId, title, labels, values]);
};

const Part2 = () => {
  const renderChart = (title, chartId, labels, values) => (
    <div key={chartId} className='ms-card ms-widget has-graph-full-width ms-infographics-widget'>
      <div className='chartjs-size-monitor'>
        <div className="chartjs-size-monitor-expand"><div className=""></div></div>
      </div>
      <div className='chartjs-size-monitor-shrink'>
        <div className=""></div>
      </div>
      <div className='ms-card-body media'>
        <div className='media-body'>
          <h6 className="bold">{title}</h6>
        </div>
      </div>
      <canvas id={chartId} height={237} width={475} style={{ display: 'block', height: '190px', width: '380px' }} className="chartjs-render-monitor"></canvas>
    </div>
  );

  const appointmentsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    values: [3, 5, 2, 8, 6, 10]
  };

  const newPatientsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    values: [150, 120, 80, 200, 160, 300]
  };

  createChart("appointmentsChart", "Appointments", appointmentsData.labels, appointmentsData.values);
  createChart("newPatientsChart", "NEW PATIENTS", newPatientsData.labels, newPatientsData.values);

  return (
    <div className="page-body p-2">
      <div className="content ">
        <div className="row">
          <div className="col-4 " style={{height:570}}>
            {renderChart("Appointments", "appointmentsChart", appointmentsData.labels, appointmentsData.values)}
            {renderChart("NEW PATIENTS", "newPatientsChart", newPatientsData.labels, newPatientsData.values)}
          </div>
          <div className="col-4">
            <Calander/>
          </div>
          <div className="col-4">
          <Doctorpro/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part2;
