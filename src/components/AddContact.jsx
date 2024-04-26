import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import colors from "../helpers/theme";
import profile from "../assets/man-taking-note.png";
const AddContact = ({ setContacts,contacts }) => {
    const navigate = useNavigate()
    const [inpValue, setInpValue] = useState({ name: "", number: "", email: "", image: { profile },id : contacts.length + 1 })
    const setValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setInpValue({...inpValue,[name] : value})
    }
    const addContacts = (event) => {
        event.preventDefault();
        if (inpValue.name && inpValue.number && inpValue.email) {
            setContacts([...contacts, inpValue])
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
        <div>
            <form onSubmit={addContacts}>
                <div className="col-11 col-sm-9 col-md-7 col-lg-6 mx-auto d-flex flex-column gap-3 p-4 rounded-5 position-absolute top-50 start-50 translate-middle" style={{backgroundColor : colors.Selection}}>
                    <h1 className="text-center text-light mb-3" style={{fontSize : "3.3rem"}}> اضافه کردن مخاطب جدید</h1>
                    <label dir="rtl" htmlFor="inp1" className="text-light text-end">  نام و نام خانوادگی :</label >
                    <input onChange={setValue} type="text" name="name" dir="rtl" className="form-control" id="inp1"/>
                    <label dir="rtl" htmlFor="inp2" className="text-end text-light">  شماره تماس :</label >
                    <input onChange={setValue} type="text" name="number" dir="rtl" className="form-control" id="inp2" />
                    <label dir="rtl" htmlFor="inp3" className="text-end text-light">آدرس ایمیل :</label >
                    <input onChange={setValue} type="text" name="email" dir="rtl" className="form-control" id="inp3" />
                    <button className="w-100 btn mt-4" style={{backgroundColor : colors.Cyan}}>اضافه کردن</button>
                </div>
            </form>
        </div>
    )
}
export default AddContact;