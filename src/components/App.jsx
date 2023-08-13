// npm install redux
// npm i react-toastify
// npm install react-redux
// npm install @redux-devtools/extension
// ****************************************************
// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { useSelector } from "react-redux";


import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './ContactForm/ContactForm.module.css';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import useLocSt from 'components/hooks/useLocSt';
// **********************************
import begincontact from 'redux/unitialAtate';



export default function App() {
  const [contacts, setContacts] = useLocSt('contacts', begincontact);
  const [filterCon, setFilterCon] = useState('');

  //   пропс формі і зберігання з форми
  const formLister = data => {
    const addCopy = contacts.find(
      // заборона додавання однакових імен
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (addCopy) {
      toast.warn(`👻 Уважніше,  ${data.name}  вже Є в конТАКтах 👻`);
      return;
    }
    // оновлення списку доданих контактів після сабміту
    setContacts(contacts => [
      ...contacts,
      ...[{ id: nanoid(), name: data.name, number: data.number }],
    ]);
  };

  //  зняття вBоду з  фільтру
  const formFilter = event => {
    const { value } = event.target;
    setFilterCon(value);
  };
  // фільтрат
  const filtrat = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterCon.toLowerCase())
  );

  //  для видалення
  const deliter = id => {
    const goodBayContact = contacts.filter(contact => contact.id !== id);
    setContacts(contacts => goodBayContact);
  };

  return (
    <div className= {css.phoneBookWrapp}>
    <div className={css.forms}>
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
      <div className={css.miniWrappBook}> 
      <div className={css.boorH1}> 
      <h1>Телефонна книга</h1>
      <ContactForm
        // пропс метод  зберігання з форми
        formProps={formLister}
      />
</div>
        </div>
      <img className={css.imgBus} width = '200' height={200} src="https://png.pngtree.com/thumb_back/fw800/background/20220523/pngtree-hippie-bus-with-peace-and-love-label-and-flowers-image_1393563.jpg" alt="bus" />
        <div className={css.miniWrapp}> 
      <h2>Контакти</h2>
      <h5>ЗНАЙдіть конТАКт за ім'ям</h5>
      <Filter
        // методпропс фільтрації
        filterProp={formFilter}
      />

      {/* умова рендеру контактів */}
      {/* є фільтрат */}
      {filterCon.length > 0 ? (
        <ContactList
          contacts={filtrat}
          deliter={deliter}
          // немає фільтрату
        />
      ) : (
        <ContactList contacts={contacts} deliter={deliter} />
      )}
       </div>
    </div>
    </div>
  );
}

