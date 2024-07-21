import { useEffect, useState, useContext } from "react";
import { ContactContext } from "../../context/context";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "../errors/NotFound";
import colors from "../../helpers/theme";
import axios from "axios";
import "../../styles/viewContact.css"
const ViewContact = () => {
    const { dispatch, url } = useContext(ContactContext)
    const param = useParams()
    const navigate = useNavigate()
    const paramId = param.contactName
    const [contact, setContact] = useState({})
    const [isError,setIsError] = useState(false)
    useEffect(() => {
        axios.get(url + "/" + paramId).then((res) => {
            setContact(res.data)
        }).catch((err) => {
            setIsError(true)
        })
    }, [paramId, url])
    const { name, email, number, id, nationalId,tel,telephone } = contact
    return (
        <>
            {isError ?
                <div className="view-error">
                    <NotFound textValue="مشکلی در نمایش این مخاطب به وجود آمده است" /> 
                </div>
                :
                <div className="col-md-6 col-12 position-absolute top-50 start-50 translate-middle">
                    <ul className="list-group text-center" >
                        <li dir="rtl" className="list-group-item text-light" style={{ backgroundColor: colors.backGround }}> نام : {name}</li>
                        {nationalId && <li dir="rtl" className="list-group-item text-light" style={{ backgroundColor: colors.backGround }}> کد ملی : {nationalId}</li>}
                        <li dir="rtl" className="list-group-item text-light" style={{ backgroundColor: colors.backGround }}> شماره تماس : {number}</li>
                        {telephone && <li dir="rtl" className="list-group-item text-light" style={{ backgroundColor: colors.backGround }}> تلفن ثابت : {telephone}</li>}
                        <li dir="rtl" className="list-group-item text-light" style={{ backgroundColor: colors.backGround }}> آدرس ایمیل : {email}</li>
                        {tel && <li dir="rtl" className="list-group-item text-light" style={{ backgroundColor: colors.backGround }}> آدرس تلگرام : {tel}@</li>}
                        <li dir="rtl" className="list-group-item text-light p-0" style={{ backgroundColor: colors.backGround }}>
                            <div className="d-flex flex-row justify-content-between">
                                <button className="btn flex-grow-1 text-dark" style={{ backgroundColor: colors.Cyan, borderRadius: "0 0 5px 0" }} onClick={() => navigate("/")}>بازگشت</button>
                                <button className="btn flex-grow-1 p-2 text-light" style={{ borderRadius: "0 0 0 5px", backgroundColor: colors.Selection }} onClick={() => dispatch({ type: "DELETE_CONTACT", payload: id, navigate })}>حذف مخاطب</button>
                            </div>
                        </li>
                    </ul>
                </div>}
        </>
    )
}
export default ViewContact;