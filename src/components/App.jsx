import React from "react";
import { useState } from "react";
import colors from "../helpers/theme";
import Nav from "./Navbar";
import Contacts from "./Contacts";
import profile from "../assets/man-taking-note.png";
const App = () => {
  const [getContacts, setContacts] = useState([
    {
      name: "پارسا محمودی",
      number: "09212445350",
      image: { profile },
      email: "mahmoodiparsa654@gmail.com",
    },
    {
      name: "دایی علی",
      number: "09120084871",
      image: { profile },
      email: "motavalian86@gmail.com",
    },
  ]);
  const [loading, setLoading] = useState(false);
  return (
    <React.Fragment>
      <Nav colors={colors} />
      <Contacts colors={colors} contacts={getContacts} loading={loading} />
    </React.Fragment>
  );
};
export default App;
