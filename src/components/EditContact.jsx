import { useState } from "react";
import toast from "react-hot-toast";
import styles from "../styles/edit.module.css"
import { useNavigate, useParams } from "react-router-dom";
import colors from "../helpers/theme";
const EditContact = ({ contacts, setContacts }) => {
    const param = useParams()
    const navigate = useNavigate()
    const findContact = () => {
        const id = param.contactID
        return contacts.find((contact) => contact.id === Number(id))
    }
    const contact = findContact();
    const [myContact, setMyContact] = useState({ name: contact.name, email: contact.email, number: contact.number,id : contact.id })
    const myCon = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMyContact({...myContact , [name] : value})
    }
    const submitHandle = (event) => {
        event.preventDefault();
        if (myContact.name && myContact.email && myContact.number) {
            setContacts(() => {
                const test = contacts.filter((item) => item.id !== Number(myContact.id))
                return [...test , myContact]
            })
            navigate("/")
        }
        else {
            toast.error(" لطفا فیلد ها را پر نمایید", {
                duration: 2500,
                iconTheme: {
                    primary: "red",
                    secondary : "white"
                }
            })
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