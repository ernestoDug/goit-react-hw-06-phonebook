// npm install redux
// npm i react-toastify
// npm install react-redux
// npm install @redux-devtools/extension
// ****************************************************
// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { useSelector } from "react-redux";
import { Layout } from './Loyaout/Layout';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import useLocSt from 'components/hooks/useLocSt';
// **********************************


export default function App() {


  //   пропс формі і зберігання з форми
  
  //  зняття вBоду з  фільтру
  
  return (
      <Layout>  
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
      <ContactForm

        />
        <div className='wrFcon'> 
           <Filter

      /> 

        <ContactList
/>
  
</div>
    </Layout>
  );
}

