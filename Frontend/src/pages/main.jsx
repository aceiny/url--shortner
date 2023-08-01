import React, { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import NavBar from "../comps/navbar";
import axios from "axios";
const Main = () =>  {
    const api = 'http://localhost:8080/api/v1/urls' // api for postin data to db
    const [urll,setUrl] = useState('')
    const [urlb ,setUrlb] = useState(false)
    let url = useRef()
    let btn = useRef()
    // toasts 
    const InvalidUrlNotif = () => {
        toast.error('Invalid Url', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    const SuccesNotif = () => {
        toast.success('Url Created successfully (click on url to copy)', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/; //RegEx to check the url
    function isURL(url) {
    return urlPattern.test(url);
    }
    const addUrl = async (data) =>{
        const response = await axios.post(api, {url : data}) // send request to add url to db
        setUrl(`https://${location.hostname}/${response.data.urlid}`)
        setTimeout(()=>{setUrlb(false)},10000)
        setUrlb(true)
        SuccesNotif()
    }
    const clickHandler = (e) => { //on submite get the url
        e.preventDefault()
        if(isURL(url.current.value)){
            addUrl(url.current.value)
        }
        else{
            InvalidUrlNotif()
        }
    }
    function copyToClipboard(text) { // click on url to copy
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
    return(
        <>
        <NavBar />
        <div className="flex flex-col items-center gap-4 justify-center">
        <ToastContainer
position="top-left"
autoClose={10000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

        <div className="flex flex-col gap-6 bg-slate-500 justify-center items-center shadow-xl px-6 py-10 bg-gradient-to-tr from-cyan-500 to-red-600  rounded-md text-white">
            <div>
                <h1 className="text-[32px] font-[700]">Past url to shorten</h1>
            </div>
            <div className="flex items-center">
                
                <form action="/shorten" method="POST" className="flex items-center rounded">
                    <input type="text" placeholder="url to shorten" className=" w-[608px] h-[52px] px-4 rounded-l text-black" ref={url}/>
                    <button type="submite" className="w-[202px] h-[52px] btn-shorten rounded-r" ref={btn} onClick={clickHandler}>Shorten Url</button>
                </form>
            </div>
            <div className="w-[60%] text-center">
                <p className="text-[16px] font-[600]">this is a free tool to shorten URLs and generate short links URL shortener allows to create a shortened link making it easy to share</p>
            </div>
        </div>
        <div className="urlResult">
            {urlb && <div className="shortnedurl"onClick={()=>copyToClipboard(urll)}>{urll}</div>}
        </div>
        </div></>
    
    )
}
export default Main