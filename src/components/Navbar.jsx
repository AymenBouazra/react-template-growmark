import React from 'react'

const Navbar = () => {
    return (
        <div className="container-fluid bg-white sticky-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                    <a href="index.html" className="navbar-brand d-lg-none">
                        <h1 className="fw-bold m-0">GrowMark</h1>
                    </a>
                    <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Services</a>
                            <a href="project.html" className="nav-item nav-link">Projects</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                    <a href="feature.html" className="dropdown-item">Features</a>
                                    <a href="team.html" className="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="quote.html" className="dropdown-item">Quotation</a>
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="ms-auto d-none d-lg-block">
                            <a href="" className="btn btn-primary rounded-pill py-2 px-3">Get A Quote</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar