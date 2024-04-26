import React, {useState} from "react";
import { useSearchParams, Routes, Route, Navigate,useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import colors from "../helpers/theme";
import Contacts from "./Contacts";
import AddContact from "./AddContact"
import ViewContact from "./ViewContact";
import EditContact from "./EditContact";
import profile from "../assets/man-taking-note.png";
import NoPage from "./PageNotFound";
const App = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useSearchParams();
  const [contacts, setContacts] = useState([
    {
      name: "پارسا محمودی خالدی",
      number: "09212445350",
      image: { profile },
      id : 1,
      email: "mahmoodiparsa654@gmail.com",
    },
    {
      name: "علیرضا ناصری",
      number: "09120084871",
      image: { profile },
      id : 2,
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
  const handleDelete = (contactId) => {
    Swal.fire({
      icon: "warning",
      title : "آیا از حذف این مخاطب مطمئن هستید؟",
      showCancelButton: true,
      showDenyButton: true,
      showConfirmButton : false,
      denyButtonText: "حذف",
    }).then((res) => {
      if (res.isDenied) {
        setContacts(contacts.filter((item) => item.id !== Number(contactId)))
        navigate("/")
      }
    })
  }
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Navigate to={"/contacts"} />} />
        <Route path="/contacts" element={<Contacts handleDelete={handleDelete} searching={userSearch} colors={colors} contacts={contacts} Search={search} />} >
          <Route path="/contacts/edit/:contactID" element={<EditContact contacts={contacts} setContacts={setContacts} />} />
        </Route>
        <Route path="/contacts/add" element={<AddContact setContacts={setContacts} contacts={contacts} />} />
        <Route path="/contacts/view/:contactName" element={<ViewContact contacts={contacts} handleDelete={handleDelete} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};
export default App;
