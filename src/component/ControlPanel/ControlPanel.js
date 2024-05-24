import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Link from React Router
import Nav from 'react-bootstrap/Nav';
import { AiFillDashboard } from "react-icons/ai";
import { MdInventory } from "react-icons/md";
import { BsFillPinMapFill } from "react-icons/bs";
import { IoMdAnalytics } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa6";

function ControlPanel() {
  return (
    <div>
    <Nav justify variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
        <Link to="dashboard">< AiFillDashboard /></Link> {/* Use Link component */}
      </Nav.Item>
      <Nav.Item>
        <Link to="inventory"><MdInventory /></Link> {/* Use Link component */}
      </Nav.Item>
      <Nav.Item>
        <Link to="map"><BsFillPinMapFill /></Link> {/* Use Link component */}
      </Nav.Item>
      <Nav.Item>
        <Link to="analytics"><IoMdAnalytics /></Link> {/* Use Link component */}
      </Nav.Item>
      <Nav.Item>
        <Link to="controltower"><FaRegLightbulb /></Link> {/* Use Link component */}
      </Nav.Item>
    </Nav>
    <Outlet/>
    </div>

    
  );
}

export default ControlPanel;
