import React from 'react'
import icon1 from '../img/icon/icon-5.png'
import icon2 from '../img/icon/icon-2.png'
import ReactPlayer from 'react-player'
const About = () => {
    return (
        <div className="container-xxl about my-5">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-6">
                        <div className="h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '300px' }}>
                            <button type="button" className="btn-play" data-bs-toggle="modal"
                                src="https://www.youtube.com/watch?v=efUV27CTmJU" data-bs-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-lg-5 wow fadeIn" data-wow-delay="0.5s">
                        <div className="bg-white rounded-top p-5 mt-lg-5">
                            <p className="fs-5 fw-medium text-primary">About Us</p>
                            <h1 className="display-6 mb-4">The Best Marketing Agency to Improve Your Business</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                                diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                            <div className="row g-5 pt-2 mb-5">
                                <div className="col-sm-6">
                                    <img className="img-fluid mb-4" src={icon1} alt="" />
                                    <h5 className="mb-3">Managed Services</h5>
                                    <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                                </div>
                                <div className="col-sm-6">
                                    <img className="img-fluid mb-4" src={icon2} alt="" />
                                    <h5 className="mb-3">Dedicated Experts</h5>
                                    <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                                </div>
                            </div>
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="">Explore More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal modal-video fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="ratio ratio-16x9">
                                <ReactPlayer url="https://www.youtube.com/watch?v=efUV27CTmJU" width="100%" height="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About