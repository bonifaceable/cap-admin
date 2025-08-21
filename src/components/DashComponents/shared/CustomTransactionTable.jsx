import React from "react";

const CustomTransactionTable = ({ investments }) => {
  return (
    // <div className="container-fluid content-inner pb-0">
    //   <div className="row">
    //     <div className="col-lg-12">
    <div className="table-responsive">
      <table className="table data-table list-table">
        <thead>
          <tr className>
            <th scope="col">
              <span className="ms-5 me-3"># </span> Transaction type
            </th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">7d %</th>
            <th scope="col">Market Cap</th>
            <th scope="col">Volume(24h)</th>
            <th scope="col">Circulating Supply</th>
            <th scope="col">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {investments?.map((investment) => (
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <svg
                    width={35}
                    viewBox="0 0 35 25"
                    className="stars"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4.11804L13.7696 9.56434L13.8819 9.90983H14.2451H19.9717L15.3388 13.2758L15.0449 13.4894L15.1572 13.8348L16.9268 19.2812L12.2939 15.9152L12 15.7016L11.7061 15.9152L7.0732 19.2812L8.84282 13.8348L8.95507 13.4894L8.66118 13.2758L4.02828 9.90983H9.75486H10.1181L10.2304 9.56434L12 4.11804Z"
                      stroke="currentColor"
                    />
                  </svg>
                  <span className="ms-3 me-3">1</span>
                  <div className="d-flex align-items-center ms-2">
                    Bitcoin
                    <p className="ms-2 mb-0 text-body-secondary">BTC</p>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary ms-2"
                    >
                      Buy More
                    </button>
                  </div>
                </div>
              </td>
              <td>$44,460.80</td>
              <td className="text-danger">2.03%</td>
              <td className="text-danger">1.56%</td>
              <td>$833,674,377,631</td>
              <td>
                <div className="d-flex flex-column">
                  <span>$31,005,385,672</span>
                  <small className="text-body-secondary">698,842 BTC</small>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center mb-1">
                  <h6 className="heading-title">18,790,493 BTC</h6>
                </div>
                <span
                  className="progress shadow-none w-100"
                  style={{ height: 8 }}
                >
                  <span
                    className="progress-bar bg-primary"
                    data-toggle="progress-bar"
                    role="progressbar"
                    aria-valuenow={37}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </span>
              </td>
              <td>
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <div
                    id="table-chart-1"
                    className="table-chart"
                    data-color="#1AA053"
                  />
                  <div className="dropdown">
                    <svg
                      width={20}
                      viewBox="0 0 24 24"
                      id="dropdownMenuLink1"
                      data-bs-toggle="dropdown"
                      className="list-rotate"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2.75C17.108 2.75 21.25 6.891 21.25 12C21.25 17.108 17.108 21.25 12 21.25C6.891 21.25 2.75 17.108 2.75 12C2.75 6.892 6.892 2.75 12 2.75Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.9393 12.0129H15.9483"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9301 12.0129H11.9391"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.92128 12.0129H7.93028"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CustomTransactionTable;
