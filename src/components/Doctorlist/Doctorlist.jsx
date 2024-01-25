import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdEdit } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import { deleteAdmin, fetchData } from '../../services/action/student.action';

export const Doctorlist = () => {
  const dispatch = useDispatch();
  const { admins } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleDelete = (adminId) => {
    dispatch(deleteAdmin(adminId));
  };

  return (
    <>
      <div className="page-body p-3">
        <div className="content">
          <div className="container">
            <div className="doctorlist-ms-panel">
              <div className="doctorlist-ms-panel-header doctorlist-ms-panel-custom">
                <h6>Doctor List</h6>
              </div>
              <div className="doctorlist-ms-panel-body">
                <table className="striped bordered hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Designation</th>
                      <th>Age</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Image</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins.map((admin) => (
                      <tr key={admin.id}>
                        <td>{`${admin.firstName} ${admin.lastName}`}</td>
                        <td>{admin.address}</td>
                        <td>{admin.designation}</td>
                        <td>{admin.dateOfBirth}</td>
                        <td>{admin.mobile}</td>
                        <td>{admin.email}</td>
                        <td>
                          {admin.image ? (
                            <img
                              src={admin.image}
                              alt={`${admin.firstName} ${admin.lastName}`}
                              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                            />
                          ) : (
                            'No Image'
                          )}
                        </td>
                        <td className="d-flex" height={100}>
                         
                          <span className="mx-1"></span>
                          <FaRegTrashAlt
                            type="button"
                            onClick={() => handleDelete(admin.id)}
                            className="doctorlist-FaRegTrashAlt"
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
