import React, { useState, useEffect } from "react";
import { useSearchParams, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import axios from "axios";
import { ContactContext } from "../context/context";
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
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get(url).then((res) => {
      setContacts(res.data)
      setLoading(false)
    }).catch((err) => {
      console.log(err);
      setLoading(false)
    })
  }, [contacts])
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
      title: "آیا از حذف این مخاطب مطمئن هستید؟",
      showCancelButton: true,
      showDenyButton: true,
      showConfirmButton: false,
      denyButtonText: "حذف",
      cancelButtonText: "انصراف"
    }).then((res) => {
      if (res.isDenied) {
        axios.delete(url + "/" + contactId)
        navigate("/")
      }
    })
  }
  return (
    <>
      <ContactContext.Provider value={{ searching: userSearch, handleDelete, url }}>
        <Toaster />
        <Routes>
          <Route path="/" element={<Navigate to={"/contacts"} />} />
          <Route path="/contacts" element={<Contacts isLoading={loading} contacts={contacts} Search={search} />} >
            <Route path="/contacts/edit/:contactID" element={<EditContact />} />
          </Route>
          <Route path="/contacts/add" element={<AddContact />} />
          <Route path="/contacts/view/:contactName" element={<ViewContact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </ContactContext.Provider>
    </>
  );
};
export default App;
