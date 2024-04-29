import { useState, useEffect } from "react";

import "./style.css";

import List from "./list";
import Form from "./form";
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Yusuf",
      phone_number: "12345",
    },
    {
      fullname: "Ayşe",
      phone_number: "4255841",
    },
    {
      fullname: "Nazlı",
      phone_number: "2545",
    },
  ]);
  console.log(contacts);
  useEffect(() => {}, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
