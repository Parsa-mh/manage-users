import React from "react";
import "../styles/search.css";
const Search = ({ theme, searching }) => {
  return (
    <div className="flex-grow-1">
      <div className="input-group align-content-center w-auto">
        <span
          className="input-grout-text align-items-center w-auto pe-3 justify-content-center icon"
          style={{ backgroundColor: theme.Purple }}
        >
          <i
            className="fa fa-search"
            style={{
              transform: "translateY(45%) translateX(50%)",
              color: theme.Foreground,
            }}
          />
        </span>
        <input
          onChange={searching}
          type="text"
          className="form-control"
          placeholder="جستجوی مخاطب"
          style={{ maxWidth: 280 }}
          dir="rtl"
        />
      </div>
    </div>
  );
};
export default Search;
