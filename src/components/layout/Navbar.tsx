

'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(add to cart)/Redux/store"; 

function Navbar() {
  const items = useSelector((state: RootState) => state.cart.items);
  
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    
    setIsClient(true);
  }, []);

  if (!isClient) {
  
    return null;
  }

  return (
    <header>
      <nav className="flex justify-between text-2xl font-bold">
        <div className="relative">
          <Link className="text-5xl" href="/Cart">
            <BiShoppingBag />
          </Link>

          {items && items.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
              {items.length}
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
