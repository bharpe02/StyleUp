import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from "./Sidebar";
import SurveySidebar from "./SurveySidebar";

function Layout() {
    const location = useLocation();
  
    // Check if the current route is for the Survey
    const isSurveyRoute = location.pathname.startsWith('/Survey');
  
    return (
      <div style={{ display: 'flex' }}>
        {/* Conditionally render the sidebar */}
        {isSurveyRoute ? <SurveySidebar /> : <Sidebar />}
  
        {/* Main content */}
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
      </div>
    );
  }
  
  export default Layout;