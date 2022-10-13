import React from 'react';

const Home = () => {
    return (
        <section className="qr_section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* QR button start  */}
                        <div className="certificate_button text-end">
                          <span className='print-icon font-bold' >
                                <i className="fa-solid fa-print"></i>
                          </span>
                        </div>
                        {/* QR button end  */}
                        {/* Certificate content start */}
                        <div className="qr_content">
                            <h3 className="text-center success_text text-success">
                                Successful Trainee Information
                            </h3>
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3">
                                    <div className="qr_item">
                                        {/* TOP */}
                                        <div className="qr_top text-white">
                                            <div className="row">
                                                <div className="col-9">
                                                    <h4>House Keeping</h4>
                                                    <h5>Technical Training Center, Keraniganj</h5>
                                                    <h6>Certificate No: fffffff</h6>
                                                </div>
                                                <div className="col-3">
                                                    QR Code
                                                </div>
                                            </div>
                                        </div>
                                        {/* Top end  */}
                                        <div className="qr_bottom">
                                            <div className="row cmb">
                                                <div className="col-6">
                                                    <h4>Name</h4>
                                                </div>
                                                <div className="col-6">
                                                    <p>Faruk Ahamed Jony</p>
                                                </div>
                                            </div>
                                            <div className="row cmb">
                                                <div className="col-6">
                                                    <h4>Father’s name</h4>
                                                </div>
                                                <div className="col-6">
                                                    <p>Md Safiqul Islam</p>
                                                </div>
                                            </div>
                                            <div className="row cmb">
                                                <div className="col-6">
                                                    <h4>Mother’s name</h4>
                                                </div>
                                                <div className="col-6">
                                                    <p>Mst Morjina Begum</p>
                                                </div>
                                            </div>
                                            <div className="row cmb">
                                                <div className="col-6">
                                                    <h4>Issue Date</h4>
                                                </div>
                                                <div className="col-6">
                                                    <p>July 31, 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;