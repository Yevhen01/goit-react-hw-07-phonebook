import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import s from "../ContactItem/ContactItem.module.css";

import { deleteContactsThunk } from "../../redux/contacts/contactsThunk";

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    console.log(id);
    dispatch(deleteContactsThunk(id));
  };

  return (
    <li key={id} className={s.item}>
      <span>{name}</span>
      <span>{number}</span>
      <button className={s.btn} type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default ContactItem;
