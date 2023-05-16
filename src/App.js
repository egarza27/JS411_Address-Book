import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactCard from "./ContactCard";

function AddressBook() {
  const [data, setData] = useState([]);
  const [isHidden, setHide] = useState(true);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api?results=25")
      .then((response) => setData(response.data.results));
  }, []);

  const handleClick = () => {
    let status = isHidden === true ? false : true;
    setHide(status);
  };

  return (
    <div style={{ margin: "50px" }}>
      <h1>Address Book</h1>
      <div className="grid-card">
        {data.map((user, index) => {
          return (
            <ContactCard
              key={index}
              user={user}
              name={user.name}
              picture={user.picture.large}
              email={user.email}
              phone={user.phone}
              dob={user.dob.date}
              location={user.location}
            ></ContactCard>
          );
        })}
      </div>
    </div>
  );
}

export default AddressBook;
