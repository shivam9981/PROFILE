import React, { useState } from "react";
import Usecontect from './Usecontect'

const Contectdata = (props) => {
    const [datas, setdatas] = useState([])

    const fatchuser = async () => {
        const response = await fetch(`http://localhost:8000/Api/Auth/fatchuser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authtoken': localStorage.getItem('token'),
            },
        })
        const data = await response.json()
        setdatas(data)
    }


    const addmessage = async (value) => {
        const { name, email, mobile, textbox } = value;
        const response = await fetch(`http://localhost:8000/Api/Auth/sendmessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authtoken':localStorage.getItem('token'),
            },
            body: JSON.stringify({ name, email, mobile, textbox })
        })
        const data = await response.json()
        if(data.success){
            alert("Message Send")
        }
        else(
            alert("Invalid message")
        )
    }


    return (
        <Usecontect.Provider value={{ datas, fatchuser, addmessage }}>
            {props.children}
        </Usecontect.Provider>
    )
}

export default Contectdata















