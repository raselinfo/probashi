import React, { useContext, useState, useEffect } from 'react';
import { Store } from "../Store/Store"
import { useNavigate } from "react-router-dom"
const Dashboard = () => {
    const date = new Date()
    const navigate = useNavigate()
    const { user, setUser } = useContext(Store)
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [totalUser, setTotalUser] = useState(0)
    const [userLink, setUserLink] = useState("")
    const currentDate = `${date.toLocaleDateString()}`
    const [probashiInfo, setProbashiInfo] = useState({
        name: "",
        fatherName: "",
        motherName: "",
        address: "",
        issueDate: currentDate
    })

    // Copy Text Handler
    const copyTextHandler = () => {
        navigator.clipboard.writeText(userLink.trim())
    }

    const createProbashi = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (!probashiInfo.name || !probashiInfo.fatherName || !probashiInfo.motherName || !probashiInfo.address || !probashiInfo.issueDate) {
            alert("Please fil up all data! ❌")
            setLoading(false)
            return
        }
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/create-user?email=${user}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(probashiInfo)
            })
            const data = await response.json()
            setMessage(data?.message)
            setUserLink(data?.data)
            setLoading(false)
        } catch (err) {
            setMessage(err.message)
            setLoading(false)
        }

    }
    const logOutHandler = () => {
        localStorage.removeItem("user")
        setUser(null)
        navigate("/")
    }
    // English to Bangla
    const englishToBangla = (number) => {
        const banglaNumber = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"]
        let bangla = ""
        for (let i = 0; i < number.length; i++) {
            bangla += banglaNumber[number[i]]
        }
        return bangla
    }

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch(`${process.env.REACT_APP_API}/get-users?email=${user}`)
                const data = await response.json()
                setTotalUser(englishToBangla(data?.data?.toString()))

            } catch (err) {
                alert(err.message)
            }
        }
        fetchData()
    }, [user])

    return (
        <section>
            <h1 className='dashboard__heading'>আমি  প্রবাসী 🥰
                <br />
                <button onClick={logOutHandler} className='btn btn-danger btn-lg'>Logout</button>
            </h1>

            <div className="mainSection">


                <div className="createProbashi col-md-6 mx-auto p-sm-5">
                    <div className="totalProbashi mb-5">
                        মোট প্রবাসীঃ {totalUser} জন
                    </div>
                    {/* User Link */}
                    {userLink && (<> <a rel="noreferrer" target={"_blank"} href={ userLink } className="user__link mr-3">View Link</a>
                        <button onClick={copyTextHandler} className="copy__link btn btn-success">Copy Link</button>
                        <hr /></>)}
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
                        <button className='btn probashi-btn btn-lg' type="submit" onClick={createProbashi}>{loading ? "Creating..." : "Create User"}</button>
                    </form>
                    <p>{message}</p>

                </div>
            </div>
        </section>
    );
}

export default Dashboard;