import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './ContactItem.module.css';

import { deleteContactsAct } from 'redux/contactsSlice';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deliter = id => {
    dispatch(deleteContactsAct(id));
    console.log(id);
  };

  return (
    <li className={css.listContItem}>
      {name}: {number}
      <button className={css.listContDell} onClick={() => deliter(id)}>
        <span className={css.listContDellX}>Х</span>
      </button>
    </li>
  );
};

// протайпи
ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactItem;
