import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import colors from "../helpers/theme";
import axios from "axios";
const ViewContact = ({ handleDelete,url }) => {
    const param = useParams()
    const navigate = useNavigate()
    const paramId = param.contactName
    const [contact, setContact] = useState({})
    useEffect(() => {
        axios.get(url + "/" + paramId).then((res) => {
            setContact(res.data)
        })
    },[paramId,url])
    const {name,email,number,id} = contact
    return (
        <div className="col-md-6 col-12 position-absolute top-50 start-50 translate-middle">
            <ul className="list-group text-center" >
                <li dir="rtl" className="list-group-item text-light" style={{backgroundColor : colors.backGround}  }> نام : { name }</li>
                <li dir="rtl" className="list-group-item text-light" style={{backgroundColor : colors.backGround}  }> شماره تماس : { number }</li>
                <li dir="rtl" className="list-group-item text-light" style={{ backgroundColor: colors.backGround }}> آدرس ایمیل : {email}</li>
                <li dir="rtl" className="list-group-item text-light p-0" style={{ backgroundColor: colors.backGround }}>
                    <div className="d-flex flex-row justify-content-between">
                    <button className="btn flex-grow-1 text-dark" style={{ backgroundColor: colors.Cyan, borderRadius: "0 0 5px 0" }} onClick={() => navigate("/")}>بازگشت</button>
                    <button className="btn flex-grow-1 p-2 text-light" style={{ borderRadius: "0 0 0 5px", backgroundColor: colors.Selection }} onClick={() => handleDelete(id)}>حذف مخاطب</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default ViewContact;