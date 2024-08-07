import { useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { ContactContext } from "../../context/context";
import styles from "../../styles/edit.module.css"
import { useNavigate, useParams } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
import colors from "../../helpers/theme";
const EditContact = () => {
    const { url } = useContext(ContactContext)
    const param = useParams()
    const paramId = param.contactID
    const [myContact, setMyContact] = useState({})
    useEffect(() => {
        axios.get(url + "/" + paramId).then((res) => {
            setMyContact(res.data)
        })
    }, [paramId, url])
    const navigate = useNavigate()
    const myCon = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMyContact({ ...myContact, [name]: value })
    }
    const submitHandle = (event) => {
        event.preventDefault();
        if (!myContact.name || !myContact.email || !myContact.number) {
            toast.error(" لطفا فیلد های اجباری را پر نمایید", {
                duration: 2500,
                iconTheme: {
                    primary: "red",
                    secondary: "white"
                }
            })
        }
        else if (!myContact.email.includes("@")) {
            toast.error("لطفا یک ایمیل صحیح وارد کنید")
        }
        else if (!myContact.number.includes("0") || myContact.number.length < 11) {
            toast.error("لطفا یک شماره موبایل صحیح وارد کنید")
        }
        else if (myCon.nationalId && !myCon.nationalId.length === 10) {
            toast.error("کد ملی وارد شده صحیح نمباشد")
        }
        else if (myCon.telephone && !myCon.telephone.length === 8 ) {
            toast.error("شماره تلفن ثابت وارد شده صحیح نمیباشد و یا دارای کد منطقه است")
        }
        else {
            axios.patch(url + '/' + myContact.id, myContact)
            navigate("/")
        }
    }
    return (
        <div className={`position-fixed ${styles.burgerAttack}`}>
            <form className={`${styles.playPingPong} p-4`} onSubmit={submitHandle} style={{ backgroundColor: colors.backGround }}>
                <button className="float-start close" type="button" onClick={() => navigate("/")}><FaRegTimesCircle style={{color: "white"}} /></button>
                <div className="col-12 col-md-9 mx-auto d-flex flex-column gap-3" style={{ transform: "translateY(50px)" }}>
                    <label className="text-light m-0 p-0" htmlFor="name">نام و نام خانوادگی : </label>
                    <input id="name" name="name" value={myContact.name} dir="rtl" onChange={myCon} type="text" className="form-control" />

                    <label className="text-light m-0 p-0" htmlFor="number">شماره تماس : </label>
                    <input id="number" name="number" value={myContact.number} dir="ltr" onChange={myCon} type="text" className="form-control" />

                    <label className="text-light m-0 p-0" htmlFor="email">آدرس ایمیل : </label>
                    <input id="email" name="email" value={myContact.email} dir="ltr" onChange={myCon} type="text" className="form-control" />

                    <label htmlFor="nationalId" className="m-0 p-0 text-light">کد ملی :</label>
                    <input type="text" id="nationalId" placeholder="کد ملی ثبت نشده است" name="nationalId" value={myContact.nationalId} dir={myContact.nationalId ? "ltr" : "rtl"} onChange={myCon} className="form-control" />
                    
                    <label htmlFor="telephone" className="m-0 p-0 text-light">شماره تلفن ثابت :</label>
                    <input type="text" placeholder="شماره تلفن ثابت ثبت نشده است" name="telephone" id="telephone" value={myContact.telephone} dir={myContact.telephone ? "ltr" : "rtl"} onChange={myCon} className="form-control" />

                        <label htmlFor="tel" className="m-0 p-0 text-light">آدرس تلگرام :</label>
                    <div className="input-group" dir="ltr">
                        <span className="input-group-text adsign">@</span>
                        <input type="text" placeholder="آیدی تلگرام ثبت نشده است" name="tel" id="tel" value={myContact.tel} dir={myContact.tel ? "ltr" : "rtl"} onChange={myCon} className="form-control" />
                    </div>
                    <button type="submit" className="btn mt-3" style={{ backgroundColor: colors.Cyan }}>ویرایش</button>
                </div>
            </form>
        </div>
    )
}
export default EditContact;