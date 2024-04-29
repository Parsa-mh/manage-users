import React, {useState,useEffect} from "react";
import { useSearchParams, Routes, Route, Navigate,useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import axios from "axios";
import colors from "../helpers/theme";
import Contacts from "./Contacts";
import AddContact from "./AddContact"
import ViewContact from "./ViewContact";
import EditContact from "./EditContact";
import NoPage from "./PageNotFound";
const App = () => {
  const url = "http://localhost:3000/contacts"
  const navigate = useNavigate()
  const [search, setSearch] = useSearchParams();
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setContacts(res.data)
    }).catch((err) => {
      console.log(err);
    })
  },[contacts])
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
        axios.delete(url+ "/"  + contactId)
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
          <Route path="/contacts/edit/:contactID" element={<EditContact url={url} setContacts={setContacts} />} />
        </Route>
        <Route path="/contacts/add" element={<AddContact setContacts={setContacts} url={url} contacts={contacts} />} />
        <Route path="/contacts/view/:contactName" element={<ViewContact contacts={contacts} url={url} handleDelete={handleDelete} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};
export default App;
