import { BrowserRouter, Router, Route,swic } from "react-router-dom";
const Home = ()=>{
    return (    
        <section className="section pb-0 hero-section" id="hero">
        <div className="bg-overlay bg-overlay-pattern"></div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-sm-10">
                    <div className="text-center mt-lg-5 pt-5">
                        <h1 className="display-6 fw-semibold mb-3 lh-base">The better way to manage your website with <span className="text-success">Velzon </span></h1>
                        <p className="lead text-muted lh-base">Velzon is a fully responsive, multipurpose and premium Bootstrap 5 Admin &amp; Dashboard Template built in multiple frameworks.</p>

                        <div className="d-flex gap-2 justify-content-center mt-4">
                            <a href="auth-signup-basic.html" className="btn btn-primary">Get Started <i className="ri-arrow-right-line align-middle ms-1"></i></a>
                            <a href="pages-pricing.html" className="btn btn-danger">View Plans <i className="ri-eye-line align-middle ms-1"></i></a>
                        </div>
                    </div>

                    <div className="mt-4 mt-sm-5 pt-sm-5 mb-sm-n5 demo-carousel">
                        <div className="demo-img-patten-top d-none d-sm-block">
                            <img src="assets/images/landing/img-pattern.png" className="d-block img-fluid" alt="..."/>
                        </div>
                        <div className="demo-img-patten-bottom d-none d-sm-block">
                            <img src="assets/images/landing/img-pattern.png" className="d-block img-fluid" alt="..."/>
                        </div>
                        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner shadow-lg p-2 bg-white rounded">
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="assets/images/demos/default.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="assets/images/demos/saas.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="assets/images/demos/material.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="assets/images/demos/minimal.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="assets/images/demos/creative.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item active carousel-item-start" data-bs-interval="2000">
                                    <img src="assets/images/demos/modern.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item carousel-item-next carousel-item-start" data-bs-interval="2000">
                                    <img src="assets/images/demos/interactive.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        <div class="position-absolute start-0 end-0 bottom-0 hero-shape-svg">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                <g mask="url(&quot;#SvgjsMask1003&quot;)" fill="none">
                <path d="M 0,118 C 288,98.6 1152,40.4 1440,21L1440 140L0 140z"></path>
                </g>
            </svg>
        </div>
    </section>
    );
}

export default Home ;