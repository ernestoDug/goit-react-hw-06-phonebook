import PropTypes from 'prop-types';
import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import { addContacts } from 'redux/contactsSlice';
import { toast } from 'react-toastify';
import css from './ContactForm.module.css';
import ButtonSbmt from 'components/ButtonSbmt/ButtonSbmt';

import 'react-toastify/dist/ReactToastify.css';

const   ContactForm = () =>  {
  const dispatch = useDispatch();
const allContacts = useSelector(getContacts)

  // відправник
  const submiter = event => {
    event.preventDefault();
     const form = event.target;
      const formNumber = event.target.elements.name.value
      const formName = event.target.elements.name.value;
    //  заборона
    if (allContacts.some(({ name }) => name === formName)) {
      return  toast.warn(`👻 Уважніше,  ${formName}  вже Є в конТАКтах 👻`);
         }     
         dispatch(addContacts(formName, formNumber));
         form.reset();
  //  console.log(form.elements.name.value, form.elements.number.value)
       
  };
  return (
    <>
     <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
        <div className= {css.phoneBookWrapp}>
        <div className={css.forms}>
        <div className={css.boorH1}> 
      <h3>Телефонна книга</h3>
    <form onSubmit={submiter} className={css.formsWr}>
      <label className={css.label}>
        Ім'я
        <input
          className={css.input}
          value={allContacts.name}
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
          value={allContacts.number}
          name="number"
          // pattern= "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // i так чомусь помилка в консолі
          title="Номер телефону має складатися з цифр і може містити пробіли, тире, круглі дужки та починатися з +"
          required
        />
      </label>
      <ButtonSbmt/>
     
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


export default ContactForm