import React from 'react';
import { MdAirlineSeatFlat } from 'react-icons/md';
import { MdAirlineSeatIndividualSuite } from 'react-icons/md';
import { FaWheelchair } from 'react-icons/fa6';
import Staff from '../Staff/Staff';


const Part3 = () => {
  return (
    <>
      <div className="page-body p-2">
        <div className="content">
          <div className="row ">
            <div className="col-6">
              <div className="ms-panel ms-device-sessions ms-quick-mic">
                <div className="ms-panel-header">
                  <h6>Hospital Birth &amp; Death Analytics</h6>
                </div>
                <div className="ms-panel-body">
                  <div className="row">
                    <div className="col-4 mb-2">
                      <i className="material-icons">
                        <MdAirlineSeatFlat />
                      </i>
                      <h4>Birth</h4>
                      <p className="ms-text-primary">45.07%</p>
                      <span className="ms-text-primary">201,434</span>
                    </div>
                    <div className="col-4 mb-2">
                      <i className="material-icons">
                        <MdAirlineSeatIndividualSuite />
                      </i>
                      <h4>Death</h4>
                      <p className="ms-text-primary">29.05%</p>
                      <span className="ms-text-primary">134,693</span>
                    </div>
                    <div className="col-4 mb-2">
                      <i className="material-icons">
                        <FaWheelchair />
                      </i>
                      <h4>Accidents</h4>
                      <p className="ms-text-primary">18.43%</p>
                      <span className="ms-text-primary">81,525</span>
                    </div>
                  </div>
                  <div className="progress">
                    <div  className="progress-bar bg-primary"  role="progressbar"  aria-valuenow={45.07}  aria-valuemin={0}  aria-valuemax={100}  style={{ width: '45.07%' }}
                    ></div>
                    <div className="progress-bar bg-danger"  role="progressbar"  aria-valuenow={29.05}  aria-valuemin={0}  aria-valuemax={100}  style={{ width: '29.05%' }}></div>
                    <div  className="progress-bar bg-warning"  role="progressbar"  aria-valuenow={25.48}  aria-valuemin={0}  aria-valuemax={100}  style={{ width: '25.48%' }}  ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
                <Staff/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Part3;
