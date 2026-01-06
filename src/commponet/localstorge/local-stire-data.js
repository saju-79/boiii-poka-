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
    if (storegeBookDb.ibcludes(id)) {
        alert("allady aseeee")
    }
    else{
        storegeBookDb.push(id);
        const data = JSON.stringify(storegeBookDb);
        localStorage.setItem( "read-list" , data)
    }
}
export {addTostotredData}