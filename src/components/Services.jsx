import React from 'react'
import icon1 from '../img/icon/icon-5.png'
import icon2 from '../img/icon/icon-6.png'
import icon3 from '../img/icon/icon-7.png'
import icon4 from '../img/icon/icon-8.png'
import icon5 from '../img/icon/icon-9.png'
import icon6 from '../img/icon/icon-10.png'

const Services = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
                    <p className="fs-5 fw-medium text-primary">Our Services</p>
                    <h1 className="display-5 mb-5">Digital Marketing Services that We Offer</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item position-relative h-100">
                            <div className="service-text rounded p-5">
                                <div className="btn-square bg-light rounded-circle mx-auto mb-4"
                                    style={{ width: "64px", height: "64px" }}>
                                    <img className="img-fluid" src={icon1} alt="Icon" />
                                </div>
                                <h5 className="mb-3">Digital Marketing</h5>
                                <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
                                    stet</p>
                            </div>
                            <div className="service-btn rounded-0 rounded-bottom">
                                <a className="text-primary fw-medium" href="">Read More<i
                                    className="bi bi-chevron-double-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item position-relative h-100">
                            <div className="service-text rounded p-5">
                                <div className="btn-square bg-light rounded-circle mx-auto mb-4"
                                    style={{ width: "64px", height: "64px" }}>
                                    <img className="img-fluid" src={icon2} alt="Icon" />
                                </div>
                                <h5 className="mb-3">Internet Marketing</h5>
                                <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
                                    stet</p>
                            </div>
                            <div className="service-btn rounded-0 rounded-bottom">
                                <a className="text-primary fw-medium" href="">Read More<i
                                    className="bi bi-chevron-double-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item position-relative h-100">
                            <div className="service-text rounded p-5">
                                <div className="btn-square bg-light rounded-circle mx-auto mb-4"
                                    style={{ width: "64px", height: "64px" }}>
                                    <img className="img-fluid" src={icon3} alt="Icon" />
                                </div>
                                <h5 className="mb-3">Content Marketing</h5>
                                <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
                                    stet</p>
                            </div>
                            <div className="service-btn rounded-0 rounded-bottom">
                                <a className="text-primary fw-medium" href="">Read More<i
                                    className="bi bi-chevron-double-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item position-relative h-100">
                            <div className="service-text rounded p-5">
                                <div className="btn-square bg-light rounded-circle mx-auto mb-4"
                                    style={{ width: "64px", height: "64px" }}>
                                    <img className="img-fluid" src={icon4} alt="Icon" />
                                </div>
                                <h5 className="mb-3">Social Marketing</h5>
                                <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
                                    stet</p>
                            </div>
                            <div className="service-btn rounded-0 rounded-bottom">
                                <a className="text-primary fw-medium" href="">Read More<i
                                    className="bi bi-chevron-double-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item position-relative h-100">
                            <div className="service-text rounded p-5">
                                <div className="btn-square bg-light rounded-circle mx-auto mb-4"
                                    style={{ width: "64px", height: "64px" }}>
                                    <img className="img-fluid" src={icon5} alt="Icon" />
                                </div>
                                <h5 className="mb-3">B2B Marketing</h5>
                                <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
                                    stet</p>
                            </div>
                            <div className="service-btn rounded-0 rounded-bottom">
                                <a className="text-primary fw-medium" href="">Read More<i
                                    className="bi bi-chevron-double-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item position-relative h-100">
                            <div className="service-text rounded p-5">
                                <div className="btn-square bg-light rounded-circle mx-auto mb-4"
                                    style={{ width: "64px", height: "64px" }}>
                                    <img className="img-fluid" src={icon6} alt="Icon" />
                                </div>
                                <h5 className="mb-3">E-mail Marketing</h5>
                                <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
                                    stet</p>
                            </div>
                            <div className="service-btn rounded-0 rounded-bottom">
                                <a className="text-primary fw-medium" href="">Read More<i
                                    className="bi bi-chevron-double-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services