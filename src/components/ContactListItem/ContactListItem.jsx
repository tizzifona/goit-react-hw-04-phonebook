import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import Contact from './icons/contacts.png';
import Delete from './icons/delete.png';
const ContactListItem = ({ id, name, number, onDeleteContact }) => (
  <li className={css.contactItem}>
    <img src={Contact} alt="Contact Icon" className={css.contactIcon} />
    <p className={css.contactName}>{name}:</p>
    <p className={css.contactNumber}>{number}</p>
    <button className={css.contactButton} type="button" onClick={() => onDeleteContact(id)}>
      <img src={Delete} alt="Delete Icon" className={css.deleteIcon} />
    </button>
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactListItem;

