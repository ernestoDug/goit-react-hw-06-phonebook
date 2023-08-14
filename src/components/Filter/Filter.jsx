// import PropTypes from 'prop-types';
import { useDispatch, useSelector  } from "react-redux";
// import { addContacts } from 'redux/actions';
import { getContactsFilter } from 'redux/selectors';
import { filterContacts } from "redux/filtersSlice";
import css from './Filter.module.css';
// import { setContactsFilter } from 'redux/actions';


export  const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);


// знятта та запис фільтрації
  const filterChanger = ({ currentTarget: { value } }) => {

    dispatch(filterContacts(value));
    console.log(value)
  };

  return (
  
    <div className={css.miniWrapp}> 
    
      <h4>ЗНАЙдіть конТАКт за ім'ям</h4>
      <input
        name="filter"
        className={css.filter}
        type="text"
        onChange={   filterChanger}
        placeholder="Введіть ім'я контакту"
        title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад Адріан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
     value={filter}
     />
      </div>
    
  );
};

// проптайпи
// Filter.propTypes = {
//   filterProp: PropTypes.func.isRequired,
// };

export default Filter;
