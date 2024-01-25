import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdmin, fetchData, updateAdmin } from '../../services/action/student.action';
import { useNavigate } from 'react-router';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

const Appoimentlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admins } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (adminId) => {
    dispatch(deleteAdmin(adminId));
  };

  const handleUpdate = (adminId) => {
    const updatedFullName ='';
    const updatedEmail = '';
    const updatedPhoneNumber = '';

    const newdata = {
    fullName: updatedFullName,
    email: updatedEmail,
    phoneNumber: updatedPhoneNumber,
    }

    navigate(`/updateform/${adminId}`);
    dispatch(updateAdmin(adminId, newdata));
    dispatch(fetchData());
    
    console.log(`Update appointment with ID: ${adminId}`);
  };

  const filteredAppointments = admins.filter((admin) =>
  admin.fullName && admin.fullName.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <>
      <div className="page-body p-3">
        <div className="content">
          <div className="container">
            <div className="ms-panel">
              <div className="ms-panel-header ms-panel-custom">
                <h6>Appointment List</h6>
                <button className="ms-btn ms-btn-primary">Add Appointment</button>
              </div>
              <div className="datatables border-1">
                <div className="data-table-extensions">
                  <div className="data-table-extensions-filter">
                    <label className="icon"></label>
                    <input
                      type="text"
                      name="filterDataTable"
                      className="filter-text"
                      placeholder="Filter Table"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="data-table-extensions-action">
                    <button type="button" className="download "></button>
                    <div className="dropdown ">
                      <button type="button">Csv File</button>
                      <button type="button">Excel File</button>
                    </div>
                    <button type="button" className="print"></button>
                  </div>
                </div>
              </div>
              <div className="ms-panel-body">
                <table className="striped bordered hover">
                  <thead>
                    <tr>
                      <th>Fullname</th>
                      <th>EMAIL</th>
                      <th>PHONE NUMBER</th>
                      <th>APPOINTMENT DATE</th>
                      <th>APPOINTMENT TIME</th>
                      <th>SELECT A DOCTOR</th>
                      <th>MESSAGE</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAppointments.map((admin) => (
                      <tr key={admin.id}>
                        <td>{admin.fullName}</td>
                        <td>{admin.email}</td>
                        <td>{admin.phoneNumber}</td>
                        <td>{admin.appointmentDate}</td>
                        <td>{admin.appointmentTime}</td>
                        <td>{admin.selectedDoctor}</td>
                        <td>{admin.message}</td>
                        <td className="d-flex">
                          <MdEdit
                            type="button"
                            style={{ fontSize: 35, color: 'green' }}
                            onClick={() => handleUpdate(admin.id)}
                          />
                          ㅤㅤ
                          <FaRegTrashAlt
                            type="button"
                            onClick={() => handleDelete(admin.id)}
                            style={{ fontSize: 25, color: 'red' }}
                          />
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
    </>
  );
};

export default Appoimentlist;
