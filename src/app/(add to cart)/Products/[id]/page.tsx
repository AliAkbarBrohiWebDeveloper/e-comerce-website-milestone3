

"use client"

import Wrapper from '@/components/shareable/Wrapper';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addItem } from "@/app/(add to cart)/Redux/cartslice";
interface Iproducts {
  id: number;
  header: string;
  image: string;
  description: string;
  button: string;
  price:string
}

const products: Iproducts[] = [
  {
        id: 1,
        header: "Nike Air Force 1 Mid '07",
        image: "/p1.png",
        price:"$50",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 2,
        header: "Nike Court Vision Low Next Nature",
        image: "/p2.png",
        price:"$30",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
      {
        id: 3,
        header: "Nike Air Force 1 PLT.AF.ORM",
        image: "/p3.png",
        price:"$34",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 4,
        header: "Nike Air Force 1 React",
        image: "/p4.png",
        price:"$45",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 5,
        header: "Air Jordan 1 Elevate Low",
        image: "/p5.png",
        price:"$35",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 6,
        header: "Nike Standard Issue",
        image: "/p6.png",
        price:"$16",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 7,
        header: "Nike Dunk Low Retro SE",
        image: "/p7.png",
        price:"$19",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 8,
        header: "Nike Dri-FIT UV Hyverse",
        image: "/p8.png",
        price:"$15",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
    
    
      {
        id: 9,
        header: "Nike Court Vision Low",
        image: "/p9.png",
        price:"$26",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      {
        id: 10,
        header: "Nike Dri-FIT Ready",
        image: "/p10.png",
        price:"$37",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      {
        id: 12,
        header: "Nike One Leak Protection: Period",
        image: "/p12.png",
        price:"$27",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      {
        id: 13,
        header:" Nike Air Force 1 LV8 3",
        image: "/p13.png",
        price:"$24",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 14,
        header: "Nike Blazer Low Platform",
        image: "/p14.png",
        price:"$41",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 15,
        header: "Nike Dri-FIT UV Miler",
        image: "/p15.png",
        price:"$35",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
    
      {
        id: 16,
        header: "Nike Dunk Low Retro",
        image: "/p16.png",
        price:"$9",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      {
        id: 17,
        header: "Nike Pro Dri-FIT",
        image: "/p17.png",
        price:"$11",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
      {
        id: 18,
        header: "Nike Air Max SYSTM",
        image: "/p18.png",
        price:"$23",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      {
        id: 19,
        header: "Nike Air Max SYSTM",
        image: "/p19.png",
        price:"$19",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
      {
        id: 20,
        header: "Nike Alate All U",
        image: "/p20.png",
        price:"$28",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },

      {
        id: 21,
        header: "Nike Court Legacy Lift",
        image: "/p21.png",
        price:"$17",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },

      {
        id: 22,
        header: "Nike Air Fo",
        image: "/16.png",
        price:"$34",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },

      
      {
        id: 23,
        header: "Nike Swoosh",
        image: "/p23.png",
        price:"$25",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    

      
      {
        id: 24,
        header: "Nike SB Zoom Janoski OG+",
        image: "/p24.png",
        price:"$23",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
      
      {
        id: 26,
        header: "Nike Dri-FIT Run Division Rise 365",
        image: "/p26.png",
        price:"$20",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      
      {
        id: 27,
        header: "Nike Air Nike Dri-FIT Challenger",
        image: "/p27.png",
        price:"$14",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
      
      {
        id: 28,
        header: "Jordan Series ES",
        image: "/p28.png",
        price:"$24",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
      {
        id: 29,
        header: "Nike Outdoor Play",
        image: "/p29.png",
        price:"$18",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },



      {
        id: 30,
        header: "Nike Sportswear Trend",
        image: "/p30.png",
        price:"$12",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    

      {
        id: 31,
        header: "Nike Blazer Low '77 Jumbo",
        image: "/p31.png",
        price:"$15",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
    
    
      {
        id: 32,
        header: "Nike SB Force 58",
        image: "/p5.png",
        price:"$10",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    

      {
        id: 33,
        header: "Nike Dri-FIT Run Division Challenger",
        image: "/p33.png",
        price:"$11",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      {
        id: 34,
        header: "Nike Legend Essential 3 Next Nature",
        image: "/p34.png",
        price:"$16",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      {
        id: 35,
        header: "Nike Air Max SYSTM",
        image: "/p35.png",
        price:"$18",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },


      {
        id: 36,
        image: "/h2.png",
        price:"16",
        header: "Nike Air Max Pulse", 
      description: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button:"Add to Cart"
      },
      {
        id: 37,
        image: "/h2.png",
        price:"$36",
        header: "Nike Air Max Pulse",
      description: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button:"Add to Cart"
      },
      {
        id: 38,
        image: "/h2.png",
        price:"$26",
        header: "Nike Air Max 97 SE",
      description: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button:"Add to Cart"}





  
];

const ProductDetailPage = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const id = params.id;
  const item = products.find((pro) => pro.id === Number(id));

  if (!item) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
  
    dispatch(addItem({
      id: item.id,
      image: item.image,
      title: item.header, 
      price: item.price ,
      quantity: 1,
    }));
  };

  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-9">
        <div>
          <Image src={item.image} alt={item.header} height={653} width={653} />
        </div>
        <div>
          <h3 className="font-bold text-2xl">{item.header}</h3>
          <p className="mt-3">{item.description}</p>
          <span className='text-xl mt-2'>⭐⭐⭐⭐⭐⭐⭐</span>
          <h3 className='text-xl font-bold mt-3 text-green-500'>{item.price}</h3>
          <button
            className="px-7 py-2 bg-black text-white rounded-xl mt-6 text-xl hover:scale-105 duration-300 hover:opacity-75"
            onClick={handleAddToCart} 
          >
            {item.button}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductDetailPage;



































