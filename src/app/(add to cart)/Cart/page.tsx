
"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, increaseQuantity, decreaseQuantity } from "@/app/(add to cart)/Redux/cartslice";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";


interface CartItem {
  id: number;
  title: string;
  price: string; // Keep price as string
  quantity: number;
  size: string;
  color: string;
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

  
  const convertPriceToNumber = (price: string) => {
    return parseFloat(price.replace(/[^0-9.-]+/g, '')); 
  };

  
  const calculateSubtotal = () => {
    return cartitems.reduce((total, item) => total + convertPriceToNumber(item.price) * item.quantity, 0);
  };

  
  const calculateTotalPrice = (item: CartItem) => {
    return convertPriceToNumber(item.price) * item.quantity;
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Your Cart</h1>

      {cartitems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <div>
          <div className="space-y-6">
            {cartitems.map((item) => {
              const totalPrice = calculateTotalPrice(item); 
              return (
                <div key={item.id} className="flex justify-between items-center border-b pb-4">
                  <Image src={item.image} alt={item.title} width={80} height={80} className="rounded" />
                  <div className="flex-1 px-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      Size: {item.size}, Color: {item.color}
                    </p>
                    <p className="text-sm font-medium">
                      ${convertPriceToNumber(item.price).toFixed(2)} x {item.quantity} = ${totalPrice.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 bg-gray-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            <div className="flex justify-between mt-2">
              <span>Subtotal</span>
              <span>${calculateSubtotal().toFixed(2)}</span> 
            </div>
            <div className="flex justify-between mt-2">
              <span>Discount (-20%)</span>
              <span>-$0</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Delivery Fee</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between mt-4 font-bold">
              <span>Total</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full px-3 py-2 border rounded mb-2"
              />
              <button className="w-full px-4 py-2 bg-black text-white rounded">Apply</button>
            </div>
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-black text-white rounded">
            Go to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;

























