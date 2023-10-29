import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import useAuthenticateContext from "../context/useAuthenticate";
import { dbData } from "../data/state";

function NavBar() {
  const username = useContext(useAuthenticateContext);
  const list = [
    'ProductionManager',
    'Employee',
    'CustomerServiceManager',
    "AdministrationDepartmentManager",
    "CustomerService",
    "FinancialManager",
    "ServiceManager",
    "HumanResources",
    "Admin"
  ];
  const accessList = dbData.role[username.username];

  return (
    list.includes(username.username) && (
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About</Link>
          </li>
          {accessList.includes('eventPlans') && (
            <li className="navbar-item">
              <Link to="/events">Events</Link>
            </li>
          )}
          {accessList.includes('eventApplications') && (
            <li className="navbar-item">
              <Link to="/eventApplications">Event Applications</Link>
            </li>
          )}
          {accessList.includes('activityPlans') && (
            <li className="navbar-item">
              <Link to="/activityPlans">
                <span className="accent-yellow">Activity Plans</span>
              </Link>
            </li>
          )}
          {accessList.includes('budgetRequests') && (
            <li className="navbar-item">
              <Link to="/budgetRequests">Budget Requests</Link>
            </li>
          )}
          {accessList.includes('todos') && (
            <li className="navbar-item">
              <Link to="/tasks">Tasks</Link>
            </li>
          )}
          {accessList.includes('hiringRequests') && (
            <li className="navbar-item">
              <Link to="/hiringRequests">Hiring Requests</Link>
            </li>
          )}
          {accessList.includes('jobPostings') && (
            <li className="navbar-item">
              <Link to="/jobPostings">Job Postings</Link>
            </li>
          )}
          {accessList.includes('inbox') && (
            <li className="navbar-item">
              <Link to="/inbox">Inbox</Link>
            </li>
          )}
        </ul>
      </nav>
    )
  );
}

export default NavBar;
