import React, { useState } from 'react';

const Dashboard = () => {
    const date = new Date()
    const currentDate = `${date.toLocaleDateString()}`
    const [probashiInfo, setProbashiInfo] = useState({
        name: "",
        fatherName: "",
        motherName: "",
        address: "",
        issueDate: currentDate
    })
    const createProbashi = (e) => {
        e.preventDefault()
        if (!probashiInfo.name || !probashiInfo.fatherName || !probashiInfo.motherName || !probashiInfo.address || !probashiInfo.issueDate) {
            return alert("Please fil up all data! ❌")
        }
        console.log(probashiInfo)
    }


    return (
        <section>
            <h1 className='dashboard__heading'>আমি  প্রবাসী 🥰</h1>
            <div className="mainSection">


                <div className="createProbashi col-md-6 mx-auto p-sm-5">
                    <div className="totalProbashi mb-5">
                        মোট প্রবাসীঃ ৫০ জন
                    </div>
                    <h2 className='probashi_form_heading'>প্রবাসী রেজিস্ট্রেশন</h2>
                    <form className='createProbashiForm'>
                        <div>
                            <label htmlFor="name">Name*</label>
                            <input onChange={(e) => setProbashiInfo({ ...probashiInfo, name: e.target.value })} type="text" name="name" id="name" className='form-control from-control-lg' required />
                        </div>
                        <div>
                            <label htmlFor="father">Father's Name*</label>
                            <input onChange={(e) => setProbashiInfo({ ...probashiInfo, fatherName: e.target.value })} type="text" name="father" id="father" className='form-control from-control-lg' required />
                        </div>
                        <div>
                            <label htmlFor="mother">Mother's Name*</label>
                            <input onChange={(e) => setProbashiInfo({ ...probashiInfo, motherName: e.target.value })} type="text" name="mother" id="mother" className='form-control from-control-lg' required />
                        </div>
                        <div>
                            <label htmlFor="address">Address*</label>
                            <textarea onChange={(e) => setProbashiInfo({ ...probashiInfo, address: e.target.value })} className='form-control ' name="address" id="address" rows="5" required></textarea>
                        </div>
                        <div>
                            <label htmlFor="mother">Issue Date: </label>
                            <span>{" "}{currentDate}</span>
                        </div>
                        <button className='btn probashi-btn btn-lg' type="submit" onClick={createProbashi}>Create User</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;