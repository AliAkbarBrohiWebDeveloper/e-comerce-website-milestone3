

// "use client"
// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { removeItem, increaseQuantity, decreaseQuantity } from '@/app/(add to cart)/Redux/cartslice'; 
// import Image from 'next/image';
// import cartImage from "/public/cart.jpg"

// function Cart() {
//   const cartitems = useSelector((state: any) => state.cart.items || []); 
//   const dispatch = useDispatch(); 

//   const handleRemove = (id: number) => {
//     dispatch(removeItem(id));
//   };

//   const handleIncrease = (id: number) => {
//     dispatch(increaseQuantity(id));
//   };

//   const handleDecrease = (id: number) => {
//     dispatch(decreaseQuantity(id));
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h1 className="text-3xl font-semibold text-center mb-6">Your Cart</h1>
      
//       {cartitems.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {cartitems.map((item: any) => {
//             const totalPrice = item.price * item.quantity; 
//             return (
//               <div key={item.id} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                
              
//                 <div className="w-full h-60 flex justify-center items-center mb-4">
//                   <Image className="object-contain max-h-full" src={item.image} alt={item.title} height={500} width={500}/>
//                 </div>

              
//                 <div className="text-center mb-4">
//                   <h5 className="text-xl font-medium text-gray-800">{item.title}</h5>
//                   <h5 className="text-lg text-gray-600">${item.price} x {item.quantity} = ${totalPrice}</h5>
//                 </div>

             
//                 <div className="flex items-center mb-4">
//                   <button
//                     onClick={() => handleDecrease(item.id)}
//                     className="px-3 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400 focus:outline-none"
//                   >
//                     -
//                   </button>
//                   <span className="mx-4 text-lg">{item.quantity}</span>
//                   <button
//                     onClick={() => handleIncrease(item.id)}
//                     className="px-3 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400 focus:outline-none"
//                   >
//                     +
//                   </button>
//                 </div>

              
//                 <button 
//                   onClick={() => handleRemove(item.id)} 
//                   className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full text-sm font-semibold hover:bg-red-700 focus:outline-none transition-all duration-200">
//                   Remove
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="text-xl text-center text-gray-500">Your cart is empty</p>
       
//       )}
//     </div>
//   );
// }

// export default Cart;








// "use client"
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem, increaseQuantity, decreaseQuantity } from '@/app/(add to cart)/Redux/cartslice'; 
// import Image from 'next/image';
// import { FaTrashAlt } from 'react-icons/fa'; 

// function Cart() {
//   const cartitems = useSelector((state:any) => state.cart.items || []); 
//   const dispatch = useDispatch(); 

//   const handleRemove = (id: number) => {
//     dispatch(removeItem(id));
//   };

//   const handleIncrease = (id: number) => {
//     dispatch(increaseQuantity(id));
//   };

//   const handleDecrease = (id: number) => {
//     dispatch(decreaseQuantity(id));
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h1 className="text-3xl font-semibold text-center mb-6">Your Cart</h1>

     
//       {cartitems.length === 0 && (
//         <div className="flex justify-center mb-6">
//           <Image 
//             src="/cart.jpg" 
//             alt="Cart" 
//             height={300} 
//             width={300} 
//             className="object-contain" 
//           />
//         </div>
//       )}
      
//       {cartitems.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {cartitems.map((item: any) => {
//             const totalPrice = item.price * item.quantity; 
//             return (
//               <div key={item.id} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
               
//                 <div className="w-full h-60 flex justify-center items-center mb-4">
//                   <Image className="object-contain max-h-full" src={item.image} alt={item.title} height={500} width={500} />
//                 </div>

             
//                 <div className="text-center mb-4">
//                   <h5 className="text-xl font-medium text-gray-800">{item.title}</h5>
//                   <h5 className="text-lg text-gray-600">${item.price} x {item.quantity} = ${totalPrice}</h5>
//                 </div>

               
//                 <div className="flex items-center mb-4">
//                   <button
//                     onClick={() => handleDecrease(item.id)}
//                     className="px-3 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400 focus:outline-none"
//                   >
//                     -
//                   </button>
//                   <span className="mx-4 text-lg">{item.quantity}</span>
//                   <button
//                     onClick={() => handleIncrease(item.id)}
//                     className="px-3 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400 focus:outline-none"
//                   >
//                     +
//                   </button>
//                 </div>

              
//                 <button 
//                   onClick={() => handleRemove(item.id)} 
//                   className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full text-sm font-semibold hover:bg-red-700 focus:outline-none transition-all duration-200 flex items-center justify-center"
//                 >
//                   <FaTrashAlt className="mr-2" /> 
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="text-xl text-center text-gray-500">Your cart is empty</p>
//       )}
//     </div>
//   );
// }

// export default Cart;















"use client";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '@/app/(add to cart)/Redux/cartslice'; 
import Image from 'next/image';
import { FaTrashAlt } from 'react-icons/fa';


interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

function Cart() {
 
  const cartitems = useSelector((state: { cart: { items: CartItem[] } }) => state.cart.items || []); 
  const dispatch = useDispatch(); 

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleIncrease = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">Your Cart</h1>

      {cartitems.length === 0 && (
        <div className="flex justify-center mb-6">
          <Image 
            src="/cart.jpg" 
            alt="Cart" 
            height={300} 
            width={300} 
            className="object-contain" 
          />
        </div>
      )}
      
      {cartitems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartitems.map((item) => {
            const totalPrice = item.price * item.quantity; 
            return (
              <div key={item.id} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-full h-60 flex justify-center items-center mb-4">
                  <Image className="object-contain max-h-full" src={item.image} alt={item.title} height={500} width={500} />
                </div>

                <div className="text-center mb-4">
                  <h5 className="text-xl font-medium text-gray-800">{item.title}</h5>
                  <h5 className="text-lg text-gray-600">${item.price} x {item.quantity} = ${totalPrice}</h5>
                </div>

                <div className="flex items-center mb-4">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="px-3 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400 focus:outline-none"
                  >
                    -
                  </button>
                  <span className="mx-4 text-lg">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="px-3 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400 focus:outline-none"
                  >
                    +
                  </button>
                </div>

                <button 
                  onClick={() => handleRemove(item.id)} 
                  className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full text-sm font-semibold hover:bg-red-700 focus:outline-none transition-all duration-200 flex items-center justify-center"
                >
                  <FaTrashAlt className="mr-2" /> 
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-xl text-center text-gray-500">Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
