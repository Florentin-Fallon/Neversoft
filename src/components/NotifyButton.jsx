import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
 import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NotifyButton({
    title,
}) {
   
    const notify = () => toast.success('Fichier télécharger !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    return (
        <div>
            <button onClick={notify} className="className='w-80 h-[45px] bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 my-8'">{title}</button>
            <ToastContainer />
        </div>
    )
}

export default NotifyButton