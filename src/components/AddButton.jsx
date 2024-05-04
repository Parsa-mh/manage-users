import { useNavigate } from "react-router-dom";
import colors from "../helpers/theme";
const Add = () => {
  const navigate = useNavigate()
  return (
    <div className="mx-auto w-100 text-center mb-3">
      <button style={{ backgroundColor: colors.Pink }} className="btn d-flex align-items-center mx-auto" dir="rtl" onClick={() => navigate("/contacts/add")}>
        ساخت مخاطب جدید <span className="me-1"><i className="fa fa-plus-circle" /></span>
      </button>
    </div>
  );
};
export default Add;
