// import React from 'react';
// import { useGetCategories } from '../../../../api/categori';

// function Categori() {
//     const {data: categories, isLoading } = useGetCategories();
//     if (isLoading) {
//         return (
//             <div>
//                 <br></br><br></br><br></br>
//             <div class="flex justify-center items-center h-full">
//             <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""/>
//         </div>
//         </div>
//         );
//       }

//     return (
//         <div>
              
//         <div class="grid md:grid-cols-3 gap-8  mt-10 pl-5">
//         {categories.map((categori) => {
//                 return(
                
//             <div class="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
//                 <img src="category.banner" alt=""/>
//               <h1> {categori.name} </h1>
    
                  
//             </div>
//         )
//     })}
//             </div>
    
    
//     </div>
//     )
// }


// export default Categori;
