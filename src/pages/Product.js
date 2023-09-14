import React from "react";
import Footer from "./landing-page/components/Footer";

export function Product() {
    return (
        <div>
        <br></br>
        <center>
        <h2 className="bg-teal-accent-400 mb-2 inline-block rounded-full px-3 py-px text-lg-20 font-semibold uppercase tracking-wider text-red-900">List Product</h2>
        <hr className="mb-4 h-1.5 w-1/4 bg-gray-600" />
        </center>
        <div className="grid grid-cols-3 gap-3 m-14">
     <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
   <img className="h- rounded-t-lg object-cover" src="https://img.freepik.com/free-photo/new-black-sneakers-isolated-white-background_93675-135051.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais" alt="product image" />

 <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Disc</span>
 <div className="mt-4 px-5 pb-5">
   <div className="flex items-center justify-between">
     <p>
       <span className="text-3xl font-bold text-slate-900">$12</span>
       <span className="text-sm text-slate-900 line-through">$20</span>
     </p>
   </div>
 </div>
</div>
<div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
   <img className="h- rounded-t-lg object-cover" src="https://img.freepik.com/free-photo/fashion-shoes_1203-7555.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais" alt="product image" />
 <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Disc</span>
 <div className="mt-4 px-5 pb-5">
   <div className="flex items-center justify-between">
     <p>
       <span className="text-3xl font-bold text-slate-900">$12</span>
       <span className="text-sm text-slate-900 line-through">$20</span>
     </p>
   </div>
 </div>
</div>
<div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
   <img className="h- rounded-t-lg object-cover" src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais" alt="product image" />
 <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Disc</span>
 <div className="mt-4 px-5 pb-5">
   <div className="flex items-center justify-between">
     <p>
       <span className="text-3xl font-bold text-slate-900">$12</span>
       <span className="text-sm text-slate-900 line-through">$20</span>
     </p>
   </div>
 </div>
</div>
<div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
   <img className="h- rounded-t-lg object-cover" src="https://img.freepik.com/free-photo/background-red-retro-model-tennis_1203-3993.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais" alt="product image" />
 <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Disc</span>
 <div className="mt-4 px-5 pb-5">
   <div className="flex items-center justify-between">
     <p>
       <span className="text-3xl font-bold text-slate-900">$12</span>
       <span className="text-sm text-slate-900 line-through">$20</span>
     </p>
   </div>
 </div>
</div>
<div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
   <img className="h- rounded-t-lg object-cover" src="https://img.freepik.com/free-photo/shoes-men-white-top-two_1203-6455.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais" alt="product image" />
 <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Disc</span>
 <div className="mt-4 px-5 pb-5">
   <div className="flex items-center justify-between">
     <p>
       <span className="text-3xl font-bold text-slate-900">$12</span>
       <span className="text-sm text-slate-900 line-through">$20</span>
     </p>
   </div>
 </div>
</div>
<div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
   <img className="h- rounded-t-lg object-cover" src="https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-135053.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais" alt="product image" />
 <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Disc</span>
 <div className="mt-4 px-5 pb-5">
   <div className="flex items-center justify-between">
     <p>
       <span className="text-3xl font-bold text-slate-900">$12</span>
       <span className="text-sm text-slate-900 line-through">$20</span>
     </p>
   </div>
 </div>
</div>
</div>
<Footer/>
</div>
    )
}

export default Product;