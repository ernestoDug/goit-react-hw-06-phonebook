// import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';


import { useDispatch } from "react-redux";
import { addContacts } from 'redux/actions';
import css from './ContactForm.module.css';

export  const  ContactForm = () =>  {
  const dispatch = useDispatch();

  // обранник універсальний
  const changer = event => {
    const { name } = event.target;
    switch (name) {
      case 'name': {
        // setName(value);
        break;
      }
      case 'number': {
        // setNumber(value);

        break;
      }
      default:
        return;
    }
  };

  // const deliter = id => {
  //   const goodBayContact = contacts.filter(contact => contact.id !== id);
  //   setContacts(contacts => goodBayContact);
  // };
  // відправник
  const submiter = event => {
    event.preventDefault();
     const form = event.target;
    dispatch(addContacts(form.elements.text.value));
    form.reset();
    
    
    
    // виклик методу з ап
    
  };
  return (
    <>
        <div className= {css.phoneBookWrapp}>
        <div className={css.forms}>
        <div className={css.boorH1}> 
      <h3>Телефонна книга</h3>
    <form onSubmit={submiter} className={css.formsWr}>
      <label className={css.label}>
        Ім'я
        <input
          className={css.input}
          onChange={changer}
          // value={name}
          // pattern= "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          //  так чомусь помилка в консолі
          type="text"
          placeholder="Введіть ім'я"
          title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад Адріан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
          name="name"
          required
        />
      </label>

      <label className={css.label}>
        Номер телефону
        <input
          className={css.input}
          type="tel"
          placeholder="Введіть номер телефону"
          onChange={changer}
          // value={number}
          name="number"
          // pattern= "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // i так чомусь помилка в консолі

          title="Номер телефону має складатися з цифр і може містити пробіли, тире, круглі дужки та починатися з +"
          required
        />
      </label>

      <button className={css.buttons} type="submit">
        Додати контакт{' '}
      </button>
    </form>
    </div>
    </div>
<img className={css.imgBus} width = '200' height={200} src="https://png.pngtree.com/thumb_back/fw800/background/20220523/pngtree-hippie-bus-with-peace-and-love-label-and-flowers-image_1393563.jpg" alt="bus" />
    </div>
  </>
 );
}

// // прототайпи
ContactForm.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
};
