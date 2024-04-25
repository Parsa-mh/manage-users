import NotFound from "./NotFound";
import Spinner from "./spinner";
import Add from "./AddButton";
import Contact from "./Contact";
import Nav from "./Navbar";
const Contacts = ({ colors, contacts, loading, Search,searching }) => {
  return (
    <>
      <Nav colors={colors} searching={searching} />
      <main className="container">
        <Add colors={colors} />
        {loading ? (
          <Spinner />
        ) : (
          <section>
            <div className="grid">
              <div className="row g-3" dir="rtl">
                {contacts.filter((con) => {
                  let searched = Search.get("filter");
                  return searched
                    ? con.name.toLowerCase().startsWith(searched.toLowerCase())
                    : true;
                }).length > 0 ? (
                  contacts
                    .filter((con) => {
                      let searched = Search.get("filter");
                      return searched
                        ? con.name
                            .toLowerCase()
                            .startsWith(searched.toLowerCase())
                        : true;
                    })
                    .map((con) => (
                      <Contact colors={colors} data={con} key={con.name} />
                    ))
                ) : (
                  <NotFound colors={colors} />
                )}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
    
  );
};
export default Contacts;
