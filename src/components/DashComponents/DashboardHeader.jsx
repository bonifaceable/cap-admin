import React from "react";

const DashboardHeader = ({ handleShowSidebar, handleLogout }) => {
  return (
    <nav
      // style={{ right: "0 !important" }}
      className="nav navbar navbar-expand-lg navbar-light iq-navbar  custom-fixed  border-bottom pb-lg-3 pt-lg-3"
    >
      <div className="container-fluid">
        {/* <a href="/" className="navbar-brand"></a> */}
        <button
          onClick={handleShowSidebar}
          // className="sidebar-toggle"
          // className="navbar-toggler"
          className="btn "
          data-toggle="sidebar"
          data-active="true"
        >
          <span className="navbar-toggler-icon">
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </span>
          {/* <i className="icon">
            <svg width="20px" height="20px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </i> */}
        </button>
        {/* <h4 className="title">Dashboard</h4> */}
        <button
          // className="navbar-toggler"
          // className="sidebar-toggle"
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon">
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </span> */}
          <i className="icon">
            <svg width="20px" height="20px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto navbar-list mb-2 mb-lg-0 align-items-center">
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link"
                id="notification-drop"
                data-bs-toggle="dropdown"
              >
                <svg
                  width={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.3889 20.8572C13.0247 22.3719 10.8967 22.3899 9.51953 20.8572"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="bg-danger dots" />
              </a>
              <div
                className="sub-drop dropdown-menu iq-noti dropdown-menu-end p-0"
                aria-labelledby="notification-drop"
              >
                <div className="card shadow-none m-0 bg-transparent">
                  <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                      <p className="fs-6">New notifications.</p>
                    </div>
                    <div className="header-title">
                      <p className="fs-6">Mark all</p>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <a href="#" className="iq-sub-card">
                      <div className="d-flex">
                        <img
                          src="/assets/images/utilities/05.png"
                          className="img-fluid avatar avatar-30 avatar-rounded"
                          alt="img51"
                        />
                        <div className="ms-3 w-100">
                          <h6 className="mb-0">
                            Successfull transaction og 0.01 BTC
                          </h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">15 mins ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <div className>
                          <img
                            src="/assets/images/utilities/03.png"
                            className="img-fluid avatar avatar-30 avatar-rounded"
                            alt="img52"
                          />
                        </div>
                        <div className="ms-3 w-100">
                          <h6 className="mb-0">4 of Pending Transactions!</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">30 mins ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/images/utilities/04.png"
                          className="img-fluid avatar avatar-30 avatar-rounded"
                          alt="img53"
                        />
                        <div className="ms-3 w-100">
                          <h6 className="mb-0">Cancelled order of 2000 ICO</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">55 mins ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/images/utilities/05.png"
                          className="img-fluid avatar avatar-30 avatar-rounded"
                          alt="img54"
                        />
                        <div className="w-100 ms-3">
                          <h6 className="mb-0">
                            Great speed notify of 1.34 LTC
                          </h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">14 Mar</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link py-0 d-flex align-items-center"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/assets/images/avatars/01.png"
                  alt="User-Profile"
                  className="img-fluid avatar avatar-50 avatar-rounded"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li className="border-0">
                  <a className="dropdown-item" href="/dashboard/profile">
                    Profile
                  </a>
                </li>

                <li className="border-0">
                  <hr className="m-0 dropdown-divider" />
                </li>
                <li className="border-0">
                  <a className="dropdown-item" href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
