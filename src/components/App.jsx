import React, { useEffect, useReducer } from "react";
import { useSearchParams, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { ContactContext } from "../context/context";
import { reducer } from "../reducer/reducer";
import Contacts from "./contact managing/Contacts";
import AddContact from "./contact managing/AddContact"
import ViewContact from "./contact managing/ViewContact";
import EditContact from "./contact managing/EditContact";
import NoPage from "./errors/PageNotFound";
const App = () => {
  const url = "http://localhost:3000/contacts"
  const defaultState = {
    contacts: [],
    isLoading: true,
    isError: false
  }
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [search, setSearch] = useSearchParams();
  useEffect(() => {
    axios.get(url).then((res) => {
      dispatch({ type: "CONTACTS_GOT", payload: res.data })
    }).catch(() => {
      dispatch({ type: "ERROR_GET_CONTACTS" })
    })
  }, [state.contacts])
  const userSearch = (event) => {
      if (event.target.value) {
        setSearch({ filter: event.target.value });
      } else {
        setSearch({});
      }
    
  }
  
  return (
    <>
      <ContactContext.Provider value={{ searching: userSearch, url, isError: state.isError, dispatch,search }}>
        <Toaster />
        <Routes>
          <Route path="/" element={<Navigate to={"/contacts"} />} />
          <Route path="/contacts" element={<Contacts isLoading={state.isLoading} contacts={state.contacts} />} >
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
