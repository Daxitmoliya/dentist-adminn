import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateAdmin } from '../../services/action/student.action';

const UpdatedocForm = ({ admin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    appointmentDate: '',
    appointmentTime: '',
    selectedDoctor: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    navigate('/patients-appointment')
    dispatch(updateAdmin(formData))
    .then(() => {
      console.log('Appointment added successfully');
    })
    .catch((error) => {
      console.error('Error adding appointment:', error);
    });
  
  };

  return (
    <>
      <div className="page-body p-3">
      <div className="content">
      <section className='ftco-section pb-0 pt-0'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <form action="#" className="appointment aside-stretch pe-lg-5 d-flex align-items-center" onSubmit={handleSubmit}>
                <div>
                  <span className="subheading">We Are Here For You</span>
                  <h2 className="mb-5 appointment-head">Make An Appointment</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Your Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Full Name"
                          style={{ color: '#6c757d' }}
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          style={{ color: '#6c757d' }}
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Phone Number"
                          style={{ color: '#6c757d' }}
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Appointment Date</label>
                        <input
                          type="text"
                          className="form-control arrival_date datepicker-input"
                          placeholder="Appointment Date"
                          style={{ color: '#6c757d' }}
                          name="appointmentDate"
                          value={formData.appointmentDate}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Appointment Time</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Appointment Time"
                          style={{ color: '#6c757d' }}
                          name="appointmentTime"
                          value={formData.appointmentTime}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Select A Doctor</label>
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon"><span className="fa fa-chevron-down"></span></div>
                            <select
                            name="selectedDoctor"
                            className="form-control"
                            value={formData.selectedDoctor}
                            onChange={handleChange}
                          >
                            <option value="Dr. Lloyd Wilson">Dr. Lloyd Wilson</option>
                            <option value="Dr. Rachel Parker">Dr. Rachel Parker</option>
                            <option value="Dr. Ian Smith">Dr. Ian Smith</option>
                            <option value="Dr. Alicia Henderson">Dr. Alicia Henderson</option>
                            <option value="Dr. Robert Johnson">Dr. Robert Johnson</option>
                            <option value="Dr. Blake Wood">Dr. Blake Wood</option>
                          </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          name="message"
                          cols="0"
                          rows="5"
                          className="form-control"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12 d-flex align-items-center">
                      <div className="form-group">
                        <input type="submit" value="Send message" className="btn btn-white py-3 d-block rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
      </div>
    </>

  );
};

export default UpdatedocForm;
