import React, { useState } from 'react'
import { MdDashboard } from 'react-icons/md';
import { CiStethoscope } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { FaFile } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { CiSquareCheck } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { Accordion } from 'react-bootstrap';
const Sidebar = () => {

  
  return (
    <>
    <section className='side-bar position-fixed overflow-auto'>
      <div id='ms-side-nav' className='scrollbar-container side-nav fixed ms-aside-scrollable ms-aside-left ps m-0'>
        <div className='logo-sn d-block'>
          <a href="#" className='text-center text-center ms-logo-img-link'>
            <img src="https://slidesigma.nyc/templatemonster/react/medboard/static/media/doctor-3.e3e8e76c.jpg" alt="" />
          </a>
          <h5 className="text-center text-white mt-2">Dr.Samuel</h5>
          <h6 class="text-center text-white mb-3">Admin</h6>
        </div>
        <div id="side-nav-accordion" className="accordion ms-main-aside fs-14 accordion">
        <Accordion className="bg-primary" style={{overflow:'hidden'}} >
          <Accordion.Item eventKey="0" className="bg-primary text-white">
            <Accordion.Header >
              <MdDashboard className="me-2"/>
              Dashboard
            </Accordion.Header>
            <Accordion.Body>
              <ul className='list-unstyled'>
                <li>
                  <a href="#" className='text-dark'>Medboard</a>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="1" className='text-dark'>
            <Accordion.Header>
              <CiStethoscope className="me-2"/>
              Doctor
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <a href="#" className='text-dark'>Add doctor</a>
                </li>
                <li>
                  <a href="#" className='text-dark'>Doctor list</a>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2"  className='text-dark'>
            <Accordion.Header>
              <FaUser className="me-2" />
              Patient
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <a href="#" className='text-dark'>Add patient</a>
                </li>
                <li>
                  <a href="#"className='text-dark'>Patient list</a>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
        <Accordion>
          <Accordion.Item eventKey="2"  className='text-dark'>
            <Accordion.Header>
              <CiSquareCheck className="me-2" />
              Department
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <a href="#"className='text-dark'>Add Department</a>
                </li>
                <li>
                  <a href="#"className='text-dark'>Department list</a>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2"  className='text-dark'>
            <Accordion.Header>
              <CiViewList className="me-2" />
              schedule
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <a href="#"className='text-dark'>Add Doctor schedule</a>
                </li>
                <li>
                  <a href="#"className='text-dark'> Doctor schedule list</a>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2"  className='text-dark'>
            <Accordion.Header>
              <FaUser className="me-2" />
              Appoiment
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <a href="#"className='text-dark'>Add Appoiment</a>
                </li>
                <li>
                  <a href="#"className='text-dark'>Appoiment list</a>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2"  className='text-dark'>
            <Accordion.Header>
              <CiCreditCard1 className="me-2" />
              Payment
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <a href="#"className='text-dark'>Add Payment</a>
                </li>
                <li>
                  <a href="#"className='text-dark'>Payment list</a>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2"  className='text-dark'>
            <Accordion.Header>
              <FaFile className="me-2" />
              Report
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <a href="#"className='text-dark'>Patient wise Report</a>
                </li>
                <li>
                  <a href="#"className='text-dark'>Doctor wise Report</a>
                </li>
                <li>
                  <a href="#"className='text-dark'>Total Report</a>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2"  className='text-dark'>
            <Accordion.Header>
              <FaRegUserCircle className="me-2" />
              Human Resourses
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <a href="#"className='text-dark'>Add Employee</a>
                </li>
                <li>
                  <a href="#"className='text-dark'>Employee list</a>
                </li>
                <li>
                  <a href="#"className='text-dark'>Add NUrse</a>
                </li>
                <li>
                  <a href="#"className='text-dark'>Nurse list</a>
                </li>
                <li>
                  <a href="#"className='text-dark'>Add Pharmasist</a>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2"  className='text-dark'>
            <Accordion.Header>
              <FaBed className="me-2" />
              Bed Manager
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <a href="#" className='text-dark'>Add Bed</a>
                </li>
                <li>
                  <a href="#" className='text-dark'>Bed list</a>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="2"  className='text-dark'>
            <Accordion.Header>
              <FaFileAlt className="me-2" />
              Notice
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <a href="#" className='text-dark'>Add Notice</a>
                </li>
                <li>
                  <a href="#" className='text-dark'>Notice list</a>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
      </div>
    </section>
  </>
  )
}

export default Sidebar;