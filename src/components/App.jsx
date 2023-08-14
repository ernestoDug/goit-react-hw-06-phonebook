import { Layout } from './Loyaout/Layout';
// import { nanoid } from 'nanoid';
// import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './ContactForm';
// import Filter from './Filter';
import ContactList from './ContactList';
// **********************************


export default function App() {
  
  return (
      <Layout>  
      {/* <ToastContainer
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
      /> */}
      <ContactForm

        />
        <div className='wrFcon'> 
           {/* <Filter

      />  */}

        <ContactList
/>
  
</div>
    </Layout>
  );
}

