

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
}

const products: Iproducts[] = [
  {
        id: 1,
        header: "Nike Air Force 1 Mid '07",
        image: "/p1.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 2,
        header: "Nike Court Vision Low Next Nature",
        image: "/p2.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
      {
        id: 3,
        header: "Nike Air Force 1 PLT.AF.ORM",
        image: "/p3.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 4,
        header: "Nike Air Force 1 React",
        image: "/p4.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 5,
        header: "Air Jordan 1 Elevate Low",
        image: "/p5.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 6,
        header: "Nike Standard Issue",
        image: "/p6.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 7,
        header: "Nike Dunk Low Retro SE",
        image: "/p7.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 8,
        header: "Nike Dri-FIT UV Hyverse",
        image: "/p8.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
    
    
      {
        id: 9,
        header: "Nike Court Vision Low",
        image: "/p9.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      {
        id: 10,
        header: "Nike Dri-FIT Ready",
        image: "/p10.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      {
        id: 12,
        header: "Nike One Leak Protection: Period",
        image: "/p12.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      {
        id: 13,
        header:" Nike Air Force 1 LV8 3",
        image: "/p13.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 14,
        header: "Nike Blazer Low Platform",
        image: "/p14.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
      {
        id: 15,
        header: "Nike Dri-FIT UV Miler",
        image: "/p15.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
    
      {
        id: 16,
        header: "Nike Dunk Low Retro",
        image: "/p16.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      {
        id: 17,
        header: "Nike Pro Dri-FIT",
        image: "/p17.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
      {
        id: 18,
        header: "Nike Air Max SYSTM",
        image: "/p18.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      {
        id: 19,
        header: "Nike Air Max SYSTM",
        image: "/p19.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
      {
        id: 20,
        header: "Nike Alate All U",
        image: "/p20.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },

      {
        id: 21,
        header: "Nike Court Legacy Lift",
        image: "/p21.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },

      {
        id: 22,
        header: "Nike Air Fo",
        image: "/p22.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },

      
      {
        id: 23,
        header: "Nike Swoosh",
        image: "/p23.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    

      
      {
        id: 24,
        header: "Nike SB Zoom Janoski OG+",
        image: "/p24.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
      
      {
        id: 26,
        header: "Nike Dri-FIT Run Division Rise 365",
        image: "/p26.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      
      {
        id: 27,
        header: "Nike Air Nike Dri-FIT Challenger",
        image: "/p27.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
      
      {
        id: 28,
        header: "Jordan Series ES",
        image: "/p28.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
      {
        id: 29,
        header: "Nike Outdoor Play",
        image: "/p29.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },



      {
        id: 30,
        header: "Nike Sportswear Trend",
        image: "/p30.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    

      {
        id: 31,
        header: "Nike Blazer Low '77 Jumbo",
        image: "/p31.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
    
    
      {
        id: 32,
        header: "Nike SB Force 58",
        image: "/p32.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    

      {
        id: 33,
        header: "Nike Dri-FIT Run Division Challenger",
        image: "/p33.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      {
        id: 34,
        header: "Nike Legend Essential 3 Next Nature",
        image: "/p34.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      },
    
    
      {
        id: 35,
        header: "Nike Air Max SYSTM",
        image: "/p35.png",
        description:
          "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
        button: "Add Cart",
      }
    
    
    
    
    
    
    
    


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
      price: 0, 
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
          <button
            className="px-7 py-2 bg-black text-white rounded-xl mt-6 text-xl hover:scale-105 duration-300"
            onClick={handleAddToCart} // Call handleAddToCart on button click
          >
            {item.button}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductDetailPage;






































// "use client"


// import Wrapper from '@/components/shareable/Wrapper';
// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import { addItem } from "@/app/(add to cart)/Redux/cartslice";
// import { useDispatch } from 'react-redux';
// interface Iproducts{
//   id:number,
//   header:string,
//   image:string,
//   description:string,
//   button:string
// }



// const products:Iproducts[] = [
//   {
//     id: 1,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p1.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },
//   {
//     id: 2,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p2.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },

//   {
//     id: 3,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p3.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },
//   {
//     id: 4,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p4.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },
//   {
//     id: 5,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p5.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },
//   {
//     id: 6,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p6.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },
//   {
//     id: 7,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p7.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },
//   {
//     id: 4,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p4.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },




//   {
//     id: 8,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p8.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },


//   {
//     id: 9,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p9.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },


//   {
//     id: 10,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p10.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },


//   {
//     id: 12,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p12.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },
//   {
//     id: 13,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p13.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },
//   {
//     id: 14,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p14.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },



//   {
//     id: 15,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p15.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },


//   {
//     id: 16,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p16.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },

//   {
//     id: 17,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p17.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },


//   {
//     id: 18,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p18.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
//     button: "Add Cart",
//   },



// ];

// const ProductDetailPage = () => {

//   const dispatch=useDispatch();


//    const params=useParams();
//    const id =params.id;
//    const item= products.find((pro)=>pro.id=== Number(id))
  


//   if (!item) {
//     return <div>Product not found</div>;
//   }


//   const handleClick = (product: Iproducts) => {
//     dispatch(addItem(product));
//   };

//   return (
   
//     <Wrapper>


//     <div className='flex flex-col md:flex-row  justify-center items-center gap-6 mt-9'>
//     <div>
//       <Image src={item.image} alt={item.header} height={653} width={653} />
//       </div>
//       <div>
//       <h3 className='font-bold text-2xl '>{item.header}</h3>
//       <p className='mt-3'>{item.description}</p>
//       <button className='px-7 py-2 bg-black text-white rounded-xl mt-6 text-xl  hover:scale-105 duration-300' >{item.button}</button>
//       </div>
//     </div>
//     </Wrapper>

  
//   );
// };

// export default ProductDetailPage;



























// "use client";
// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import React from 'react';


// const products = [
//   {
//     id: 1,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p1.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette.",
//     button: "Add to Cart",
//   },
//   {
//     id: 2,
//     header: "Nike Air Force 1 PLT.AF.ORM",
//     image: "/p2.png",
//     description:
//       "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette.",
//     button: "Add to Cart",
//   },
// ];

// function ProductDetail() {
//   const { id } = useParams(); // Access the product ID from the URL
//   const product = products.find((pro) => pro.id === Number(id));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <h1>{product.header}</h1>
//       <Image src={product.image} alt={product.header} height={400} width={400} />
//       <p>{product.description}</p>
//       <button className='px-6 py-2 bg-black text-white rounded-lg mt-3'>
//         {product.button}
//       </button>
//     </div>
//   );
// }

// export default ProductDetail;




























