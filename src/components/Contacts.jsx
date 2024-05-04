import { Outlet } from "react-router-dom";
import propTypes from "prop-types"
import NotFound from "./NotFound";
import Add from "./AddButton";
import Contact from "./Contact";
import Nav from "./Navbar";
import Loader from "./Loader";
const Contacts = ({ contacts, Search, isLoading }) => {
  const searchedContacts = contacts.filter((con) => {
    let searched = Search.get("filter");
    return searched ? con.name.toLowerCase().includes(searched.toLowerCase()) : true;
  })
  return (
    <>
      <Outlet />
      <Nav />
      <main className="container">
        <Add />
        <section>
          <div className="grid">
            <div className="row g-3" dir="rtl">
              {isLoading ? <Loader /> :
                searchedContacts.length > 0 ? searchedContacts.sort((a, b) => a.id - b.id).map((con) => <Contact data={con} key={con.id} />) : <NotFound />}
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
