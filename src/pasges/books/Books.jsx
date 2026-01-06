import { Suspense } from "react";
import Book from "./Book";

 

 

 

const Books = ({allData} ) => {
      
   
   
    return (
        <div className="">

            <h1 className="text-center  items-center font-bold text-2xl text-[#181818] my-10">Books</h1>
          <Suspense>
              <div className=' p-2  grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
               {
                allData.map(singleData => <Book key={singleData.bookId} singleData={singleData}></Book>)
                }
           </div>
          </Suspense>
        </div>
    );
};

export default Books;