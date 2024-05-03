import { Outlet } from "react-router-dom";
import NotFound from "./NotFound";
import Add from "./AddButton";
import Contact from "./Contact";
import Nav from "./Navbar";
import Loader from "./Loader";
const Contacts = ({ contacts, Search, isLoading }) => {
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
                contacts.filter((con) => {
                  let searched = Search.get("filter");
                  return searched ? con.name.toLowerCase().startsWith(searched.toLowerCase()) : true;
                }).length > 0 ? (
                  contacts.sort((a, b) => a.id - b.id).filter((con) => {
                    let searched = Search.get("filter");
                    return searched ? con.name.toLowerCase().startsWith(searched.toLowerCase()) : true;
                  }).map((con) => (
                    <Contact data={con} key={con.id} />
                  ))
                ) : <NotFound />}
            </div>
          </div>
        </section>
      </main>
    </>

  );
};
export default Contacts;
