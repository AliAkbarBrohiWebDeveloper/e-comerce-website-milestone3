import React from 'react'

import Link from 'next/link'
import { BiHeart, BiSearch,  } from 'react-icons/bi'

import Wrapper from '../shareable/Wrapper'
import Image from 'next/image'
import Navbar from './Navbar'

  

const Headermain = () => {
  
  return(
   
    <Wrapper>

      <header className="flex justify-between gap-x-9 items-center p-4 mt-9">


        <div className='hidden md:flex'>
<Image src={'/vector1.png'} alt='' height={78} width={78}/>


        </div>
    

        <div>
          <ul className=" space-x-4 hidden md:flex font-semibold">
            <li>
              <Link href={'/'}>New & Featured</Link>
            </li>
            <li>
              <Link href={''}>Men</Link>
            </li>
            <li>
              <Link href={''}>Women</Link>
            </li>
            <li>
              <Link href={'/signup'}>Kids</Link>
            </li>
            <li>
              <Link href={'/signup'}>Sales</Link>
            </li>
            <li>
              <Link href={'/signup'}>SNKRS</Link>
            </li>
            
            
        
      
          </ul>
        </div>

        <div className=" relative w-64 hidden md:flex"> 
          <input 
            type="text" 
             
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl " />
        </div>
<div>
  <Link href={''}><BiHeart className='text-4xl font-bold hidden md:flex'/></Link>

</div>
<div className='hidden md:flex'>
  <Navbar/>
</div>

<div>

</div>




      </header>
      </Wrapper>
   
    
  )
}

export default Headermain
