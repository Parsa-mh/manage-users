import NotFound from "./NotFound";
import Spinner from "./spinner";
import Add from "./AddButton";
import Contact from "./Contact";
const Contacts = ({ colors, contacts, loading }) => {
  return (
    <main className="container">
      <Add colors={colors} />
      {loading ? (
        <Spinner />
      ) : (
        <section>
          <div className="grid">
            <div className="row g-3" dir="rtl">
              {contacts.length > 0 ? (
                contacts.map((c) => <Contact colors={colors} data={c} />)
              ) : (
                <NotFound colors={colors} />
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
export default Contacts;
