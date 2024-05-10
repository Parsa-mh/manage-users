import { useContext } from "react";
import { ContactContext } from "../../context/context"
import { Outlet,useNavigate } from "react-router-dom";
import propTypes from "prop-types"
import NotFound from "../errors/NotFound";
import Nav from "../navbar/Navbar";
import Contact from "./Contact";
import Loader from "../loader/Loader";
import colors from "../../helpers/theme";
const Contacts = ({ contacts, Search, isLoading }) => {
  const searchedContacts = contacts.filter((con) => {
    let searched = Search.get("filter");
    return searched ? con.name.toLowerCase().includes(searched.toLowerCase()) : true;
  })
  const navigate = useNavigate()
  const { isError } = useContext(ContactContext)
  return (
    <>
      <Outlet />
      <Nav />
      <main className="container">
        <div className="mx-auto w-100 text-center mb-3">
          <button style={{ backgroundColor: colors.Pink }} className="btn d-flex align-items-center mx-auto" dir="rtl" onClick={() => navigate("/contacts/add")}>
            ساخت مخاطب جدید <span className="me-1"><i className="fa fa-plus-circle" /></span>
          </button>
        </div>
        <section>
          <div className="grid">
            <div className="row g-3" dir="rtl">
              {isLoading ? <Loader /> :
                isError ? <NotFound textValue="مشکلی در نمایش مخاطبین به وجود آمده است" /> :
                  searchedContacts.length > 0 ? searchedContacts.sort((a, b) => a.id - b.id).map((con) => <Contact data={con} key={con.id} />) : <NotFound textValue="کاربری یافت نشد" />}
            </div>
          </div>
        </section>
      </main>
    </>

  );
};
Contacts.propTypes = {
  contacts: propTypes.array.isRequired,
  Search: propTypes.object,
  isLoading: propTypes.bool.isRequired
}
Contacts.defaultProps = {
  contacts: [],
  Search: {},
  isLoading: true
}
export default Contacts;
