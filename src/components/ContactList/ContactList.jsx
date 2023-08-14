import PropTypes from 'prop-types';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import { getContacts, getContactsFilter } from 'redux/selectors';

import css from './ContactList.module.css';
import ContactItem from './ContactItem';


const ContactList = () => {
  const myContacts = useSelector(getContacts);
  const filterCont = useSelector(getContactsFilter);
  const filtrat = [
    ...myContacts.filter(myContact => myContact.name.toLowerCase().includes(filterCont)),
  ];

  // console.log(contacts,"contacts")
  return (
    <div className={css.miniWrapp}> 

    <ul className={css.listCont}>
      <h3>Контакти</h3>
      {myContacts?.map(({ id, name, number }) => (
        <ContactItem
          id={id}
          key={id}
          name={name}
          number={number}
          // deliter={deliter}
        />
      ))}
    </ul>
    </div>
  );
};
// протайпи
// ContactList.propTypes = {
//   number: PropTypes.number,
//   name: PropTypes.string,
//   id: PropTypes.string,
// };

export default ContactList;
