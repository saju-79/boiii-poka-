
import { ToastContainer, toast } from 'react-toastify';

const getstorgeBook =() =>{
    const storgeBookSTR =localStorage.getItem("read-list");
    if (storgeBookSTR ) {
        const stofreBookData = JSON.parse(storgeBookSTR);
        return stofreBookData 
    } else {
        return [];
    }
};

const addTostotredData =(id) =>{
    const storegeBookDb = getstorgeBook()
    if (storegeBookDb.includes(id) ) {
        alert("allady aseeee")
         toast("Wow so easy!");
    }
    else{
        storegeBookDb.push(id);
        const data = JSON.stringify(storegeBookDb);
        localStorage.setItem( "read-list" , data)
    }
}
export {addTostotredData}