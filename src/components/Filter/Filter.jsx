import PropTypes from 'prop-types';
// import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addContacts } from 'redux/actions';


import css from './Filter.module.css';


export  const Filter = () => {
  const dispatch = useDispatch();

  // const formFilter = event => {
  //   const { value } = event.target;
  // };
  // // фільтрат
  // const filtrat = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filterCon.toLowerCase())
  // );
 

  return (
  
    <div className={css.miniWrapp}> 
      <h4>ЗНАЙдіть конТАКт за ім'ям</h4>
      <input
        name="filter"
        className={css.filter}
        type="text"
        onChange={    dispatch(addContacts(form.elements.text.value))}
        placeholder="Введіть ім'я контакту"
        title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад Адріан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
      />
      </div>
    
  );
};

// проптайпи
Filter.propTypes = {
  filterProp: PropTypes.func.isRequired,
};

export default Filter;
