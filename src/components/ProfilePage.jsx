import React from "react";
import imgproduct from "../img/Asics Gel-NYC.png"

function Profile() {


  const product = {

    img: {imgproduct},
    userId: "654b975e7479aaef625151ca",
    marcanome: "Asics",
    modelo: "Tênis ",
    genero: "Masculino",
    preco: 679.9,
    tamanho: 32,
    tags: "casual",
  };

  return (

    <div>


      <button className="justify-center text-white font-medium whitespace-nowrap bg-indigo-900 items-stretch pl-10 pr-5 p-1 rounded-lg ">
          Add Product +
      </button>

      <div className="items-center bg-white flex flex-col px-20 max-md:px-5">
        atesateasfgwdg 
      </div>

      <div className="bg-neutral-300 flex flex-col items-stretch px-7 py-7 rounded-xl max-md:px-5">
      <img
        loading="lazy"
        srcSet={product.img}
        className="object-contain object-center w-full overflow-hidden"
        alt=""
      />
      <div className="text-white text-base font-medium capitalize whitespace-nowrap bg-indigo-900 justify-center items-center mt-20 px-16 py-6 rounded-md max-md:mt-10 max-md:px-5">
        Edit
      </div>
      <div className="flex justify-between gap-5 mt-6 pr-3.5 items-start">
        <div className="text-white text-base font-medium capitalize whitespace-nowrap bg-red-600 grow justify-center items-stretch px-14 py-6 rounded-md max-md:px-5">
          delete
        </div>
        <div className="text-white text-base font-medium capitalize whitespace-nowrap bg-amber-400 grow justify-center items-center px-16 py-6 rounded-md max-md:px-5">
          Hide
        </div>
      </div>
    </div>

    </div>

 
  );
}


export default Profile;