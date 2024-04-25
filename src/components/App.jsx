import React, {useState} from "react";
import { useSearchParams, Routes, Route, Navigate } from "react-router-dom";
import colors from "../helpers/theme";
import Contacts from "./Contacts";
import AddContact from "./AddContact"
import ViewContact from "./ViewContact";
import EditContact from "./EditContact";
import profile from "../assets/man-taking-note.png";
import NoPage from "./PageNotFound";
const App = () => {
  const [search, setSearch] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([
    {
      name: "پارسا محمودی خالدی",
      number: "09212445350",
      image: { profile },
      email: "mahmoodiparsa654@gmail.com",
    },
    {
      name: "علیرضا ناصری",
      number: "09120084871",
      image: { profile },
      email: "motavalian86@gmail.com",
    },
  ]);
  const userSearch = (event) => {
    let filter = event.target.value;
    if (filter) {
      setSearch({ filter: filter });
    } else {
      setSearch({});
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/contacts"} />} />
        <Route path="/contacts" element={<Contacts searching={userSearch} colors={colors} contacts={getContacts} loading={loading} Search={search} />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit" element={<EditContact />} />
        <Route path="/view" element={<ViewContact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};
export default App;
