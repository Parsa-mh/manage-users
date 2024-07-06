import React, { useContext } from "react";
import { ContactContext } from "../../context/context";
import { FaSearch } from "react-icons/fa";
import colors from "../../helpers/theme";
import "../../styles/search.css";
const Search = () => {
  const { searching, search } = useContext(ContactContext)
  return (
    <div className="flex-grow-1">
      <div className="input-group align-content-center w-auto">
        <span className="input-grout-text align-items-center w-auto pe-3 justify-content-center icon" style={{ backgroundColor: colors.Purple }}>
          <FaSearch style={{ transform: "translateY(45%) translateX(50%)", color: colors.Foreground, }} />
        </span>
        <input onChange={searching} value={search.get("filter") || ""} type="text" className="form-control" placeholder="جستجوی مخاطب" style={{ maxWidth: 280 }} dir="rtl" />
      </div>
    </div>
  );
};
export default Search;
