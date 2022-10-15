import React, { useEffect, useState, useRef } from 'react';
import { useParams } from "react-router-dom"
import QRCode from "react-qr-code"
import { useReactToPrint } from 'react-to-print';

const Home = () => {
    const { id } = useParams()
    const [userInfo, setUserInfo] = useState(null)
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState("")
    const userLink = window.location.href;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Probashi Data",
        onAfterPrint: () => alert("Print Successful 😎"),
        copyStyles: true
    });


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(`${process.env.REACT_APP_API}/get-user/${id}`)
                if (response.status === 404) {
                    setMessage("User not found!")
                    setLoading(false)
                    return
                }


                const data = await response.json()
                setUserInfo(data?.data)
                setMessage(data?.message)
                setLoading(false)
            } catch (err) {
                setMessage(err.message)
                console.log(err)
                setLoading(false)
            }
        }
        fetchData()
        console.log("fist effect")
    }, [id])

    console.log(userLink)

    return (
        <section className="qr_section py-5" ref={componentRef}>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* QR button start  */}
                        <div className="certificate_button text-end">
                            <span onClick={handlePrint} className='print-icon font-bold' >
                                <i className="fa-solid fa-print"></i>
                            </span>
                        </div>

                        {/* QR button end  */}
                        {/* Certificate content start */}
                        {
                            loading ? <h1>Loading</h1> : (<div className="qr_content">
                                <h3 className="qr-message text-center success_text text-success">
                                    {message}
                                </h3>
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="qr_item">
                                            {/* TOP */}
                                            <div className="qr_top text-white">
                                                <div className="details__wapper">
                                                    <div className="left">
                                                        <h4 style={{ fontSize: "30px" }}>House Keeping</h4>
                                                        <h5>{userInfo?.address}</h5>
                                                        <h6>Certificate No: {userInfo?._id}</h6>
                                                    </div>
                                                    <div className='right'>
                                                        <div className="qr_code " style={{ background: 'white', marginLeft: "auto" }}>
                                                            <QRCode
                                                                size={256}
                                                                value={userLink}
                                                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                                                viewBox={`0 0 256 256`}
                                                                fgColor="#416D7A"

                                                            />
                                                        </div>
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
                                                        <p>{userInfo?.name}</p>
                                                    </div>
                                                </div>
                                                <div className="row cmb">
                                                    <div className="col-6">
                                                        <h4>Father’s name</h4>
                                                    </div>
                                                    <div className="col-6">
                                                        <p>{userInfo?.fatherName}</p>
                                                    </div>
                                                </div>
                                                <div className="row cmb">
                                                    <div className="col-6">
                                                        <h4>Mother’s name</h4>
                                                    </div>
                                                    <div className="col-6">
                                                        <p>{userInfo?.motherName}</p>
                                                    </div>
                                                </div>
                                                <div className="row cmb">
                                                    <div className="col-6">
                                                        <h4>Issue Date</h4>
                                                    </div>
                                                    <div className="col-6">
                                                        <p>{userInfo?.issueDate}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;