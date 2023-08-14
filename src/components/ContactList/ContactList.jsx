// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from './ContactList.module.css';
import ContactItem from './ContactItem';


const ContactList = ({ contacts, deliter }) => {
  // console.log(contacts,"contacts")
  return (
    <div className={css.miniWrapp}> 

    <ul className={css.listCont}>
      <h3>Контакти</h3>
      {contacts?.map(({ id, name, number }) => (
        <ContactItem
          id={id}
          key={id}
          name={name}
          number={number}
          deliter={deliter}
        />
      ))}
    </ul>
    </div>
  );
};
// протайпи
ContactList.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default ContactList;
