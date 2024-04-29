import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import styles from "../styles/edit.module.css"
import { useNavigate, useParams } from "react-router-dom";
import colors from "../helpers/theme";
const EditContact = ({ url }) => {
    const param = useParams()
    const paramId = param.contactID
    const [myContact,setMyContact] = useState({})
    useEffect(() => {
        axios.get(url + "/" + paramId).then((res) => {
            setMyContact(res.data)
        })
    } , [paramId,url])
    const navigate = useNavigate()
    const myCon = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMyContact({...myContact , [name] : value})
    }
    const submitHandle = (event) => {
        event.preventDefault();
        if (!myContact.name || !myContact.email  || !myContact.number) {
            toast.error(" لطفا فیلد ها را پر نمایید", {
                duration: 2500,
                iconTheme: {
                    primary: "red",
                    secondary : "white"
                }
            })
        }
        else if(!myContact.email.includes("@")) {
            toast.error("لطفا یک ایمیل صحیح وارد کنید")
        }
        else if (!myContact.number.includes("0") || myContact.number.length < 11) {
            toast.error("لطفا یک شماره موبایل صحیح وارد کنید")
        }
        else {
            axios.patch(url + '/' + myContact.id , myContact)
            navigate("/")
        }
    }
    return (
        <div className={`position-fixed ${styles.burgerAttack}`}>
            <form className={`${styles.playPingPong} p-4`} onSubmit={submitHandle} style={{backgroundColor : colors.backGround}}>
                <button className="btn-close bg-light float-start" type="button" onClick={()=>navigate("/")}></button>
                <div className="col-12 col-md-9 mx-auto d-flex flex-column gap-3" style={{ transform: "translateY(100%)" }}>
                    <label className="text-light m-0 p-0" htmlFor="name">نام و نام خانوادگی : </label>
                    <input id="name" name="name" value={myContact.name} dir="rtl" onChange={myCon} type="text" className="form-control" />
                    <label className="text-light m-0 p-0" htmlFor="number">شماره تماس : </label>
                    <input id="number" name="number" value={myContact.number} dir="rtl" onChange={myCon} type="text" className="form-control" />
                    <label className="text-light m-0 p-0" htmlFor="email">آدرس ایمیل : </label>
                    <input id="email" name="email" value={myContact.email} dir="rtl" onChange={myCon} type="text" className="form-control" />
                    <button type="submit" className="btn mt-3" style={{backgroundColor : colors.Cyan}}>ویرایش</button>
                </div>
            </form>
        </div>
    )
}
export default EditContact;