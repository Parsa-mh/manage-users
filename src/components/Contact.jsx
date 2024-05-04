import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../context/context";
import colors from "../helpers/theme";
const Contact = ({ data }) => {
  const { handleDelete } = useContext(ContactContext)
  const navigate = useNavigate()

  return (
    <div
      className="col-md-10 col-12 col-lg-6 mx-auto d-flex flex-row align-items-center justify-content-around card"
      style={{ backgroundColor: colors.CurrentLine }}
      dir="rtl"
    >
      <div className="card-body d-flex align-items-center justify-content-around">
        <div className={window.innerWidth > 450 ? "col-4" : "d-none"}>
          <img src={data.image} className="img-fluid rounded" alt="profile" />
        </div>
        <div className={window.innerWidth > 450 ? "col-7" : "col-10"}>
          <ul className="list-group mx-auto p-0 px-2">
            <li className="list-group-item list-group-item-dark" style={{ backgroundColor: colors.backGround, borderColor: colors.CurrentLine, color: colors.Foreground, }}>
              نام و نام خانوادگی : <span className="fw-bold">{data.name}</span>
            </li>
            <li className="list-group-item list-group-item-dark" style={{ backgroundColor: colors.backGround, borderColor: colors.CurrentLine, color: colors.Foreground, }}>
              شماره موبایل : <span className="fw-bold">{data.number}</span>
            </li>
            <li className="list-group-item list-group-item-dark" style={{ backgroundColor: colors.backGround, borderColor: colors.CurrentLine, color: colors.Foreground, }}>
              آدرس ایمیل : <span className="fw-bold">{data.email}</span>
            </li>
          </ul>
        </div>
        <div className={`d-flex flex-column text-center ${window.innerWidth > 450 ? "col-1" : "col-2"}`}>
          <button className="btn my-1" onClick={() => navigate(`/contacts/view/${data.id}`)} style={{ backgroundColor: colors.Orange }}>
            <i className="fa fa-eye w-100 h-100" style={{ backgroundColor: colors.Orange }} />
          </button>
          <button className="btn my-1" style={{ backgroundColor: colors.Cyan }} onClick={() => navigate(`/contacts/edit/${data.id}`)}>
            <i className="fa fa-pen w-100 h-100" style={{ backgroundColor: colors.Cyan, color: "black" }} />
          </button>
          <button onClick={() => handleDelete(data.id)} className="btn my-1" style={{ backgroundColor: colors.Red }}>
            <i className="fa fa-trash w-100 h-100" style={{ backgroundColor: colors.Red }} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
