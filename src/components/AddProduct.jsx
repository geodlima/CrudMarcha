import React from "react";

const ProductForm = () => {
  const productData = {
    userId: "654b975e7479aaef625151ca",
    marcanome: "adidas",
    modelo: "Tênis Adidas Runfalcon 2.0 Azul",
    genero: "feminino",
    preco: 379.9,
    tamanho: 32,
    tags: ["corrida; com cadarço"],
  };

  return (
    <div className="">





      <div className="max-w-md mx-auto my-8 p-8 bg-white rounded shadow-md">
        <form>

   

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              ID do Usuário:
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={productData.userId}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Nome da Marca:
            </label>
            <input
              type="text"
              id="marcanome"
              name="marcanome"
              value={productData.marcanome}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Modelo:
            </label>
            <input
              type="text"
              id="modelo"
              name="modelo"
              value={productData.modelo}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Gênero:
            </label>
            <input
              type="text"
              id="genero"
              name="genero"
              value={productData.genero}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Gênero:
            </label>
            <input
              type="text"
              id="genero"
              name="genero"
              value={productData.preco}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Gênero:
            </label>
            <input
              type="text"
              id="genero"
              name="genero"
              value={productData.tamanho}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Gênero:
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={productData.tags}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              readOnly
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
