import React from 'react'

const UserDisplay = ({ userName }) => {
    return (
        <div className="col-lg-12">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-between align-items-center">
                            <div>
                                <h1 className="fw-bold mb-3">Welcome {userName} 👋 </h1>
                                <p>
                                    Empower your future with Bitcoin – invest today for a smarter tomorrow.
                                </p>
                                <a href="/dashboard/investment-plans" type="button" className="btn btn-primary mt-5">
                                    Invest now
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center academy-img"></div>
                    </div>
                    <div className=" vertical-scroll vertical-scroll-res text-center">
                        <img
                            src="/assets/images/special-pages/academy/01.png"
                            className="img-fluid w-30"
                            alt="img1"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDisplay
