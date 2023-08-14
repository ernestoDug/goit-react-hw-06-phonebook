
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletecontacts } from 'redux/contactsSlice';


import css from './ContactItem.module.css';

const ContactItem = ({ name, number, id, }) => {
  const dispatch = useDispatch();
  const deliter = userId => {
    dispatch(deletecontacts(userId));
  };


  return (
        <li className={css.listContItem}>
      {name}: {number}
      <button
        className={css.listContDell}
        onClick={() => {
          deliter(id);
        }}
      >
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
