import React from "react";

const page = () => {
  return (
    <div style={{ backgroundImage: 'url("/assets/images/auth/01.png")' }}>
      <div className="wrapper">
        <section className="vh-100 bg-image">
          <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
              <div className="col-md-5 mt-5">
                <div className="card bg-dark">
                  <div className="card-body">
                    <div className="auth-form">
                      <div className="text-center">
                        <a href="#">
                        <svg  width={50}
                            height={50} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.9993C2 6.48027 6.48 1.99927 12 1.99927C17.53 1.99927 22 6.48027 22 11.9993C22 17.5203 17.53 21.9993 12 21.9993C6.48 21.9993 2 17.5203 2 11.9993ZM11.12 8.20927C11.12 7.73027 11.52 7.32927 12 7.32927C12.48 7.32927 12.87 7.73027 12.87 8.20927V12.6293C12.87 13.1103 12.48 13.4993 12 13.4993C11.52 13.4993 11.12 13.1103 11.12 12.6293V8.20927ZM12.01 16.6803C11.52 16.6803 11.13 16.2803 11.13 15.8003C11.13 15.3203 11.52 14.9303 12 14.9303C12.49 14.9303 12.88 15.3203 12.88 15.8003C12.88 16.2803 12.49 16.6803 12.01 16.6803Z" fill="currentColor"></path>                            </svg>                        
                          
                        </a>
                        <h2 className="mt-3">Account Not Verified !</h2>
                        <p className="mt-3">
                          A mail has been send to your email@domain.com.please
                          check for an email from company and click on the
                          included link to the reset your password
                        </p>
                        <div className="d-inline-block mt-3">
                          <a href="/dashboard" className="btn btn-primary">
                            Back to Home
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
