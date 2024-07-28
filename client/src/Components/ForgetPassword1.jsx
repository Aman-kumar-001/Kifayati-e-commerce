import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ForgetPassword1() {
    let [data, setData] = useState({
        username: ""
    })
    var navigate = useNavigate()
    function getInputData(e) {
        var { name, value } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        var response = await fetch("/api/user/forget-password-1", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify({...data})
        })
        response = await response.json()
        if (response.result==="Done") {
            localStorage.setItem("reset-password-user",data.username)
            navigate("/forget-password-2")
        }
        else {
            alert(response.message)
        }
    }
    return (
        <>
            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h5 className='text-light'>
                                    <Link to="/" className='text-light'>Home</Link><i className='fa fa-arrow-right mx-3'></i>
                                    Reset Password
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}
            <div className='container my-5 w-100'>
                <div className='w-75 m-auto'>
                    <h5 className='text-center text-light menu-bg p-2'><span className='text-warning'>Reset</span> Password</h5>
                    <form onSubmit={postData}>
                        <div className="mb-3">
                            <label>Username</label>
                            <input type="text" onChange={getInputData} name="username" placeholder='Username : ' className='form-control' />
                        </div>
                        <div className="mb-3">
                            <button type='submit' className='btn menu-bg text-light w-100'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
