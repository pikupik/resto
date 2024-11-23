/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FaShoppingCart } from "react-icons/fa"; // Import icon keranjang

const foodItems = [
  {
    id: 1,
    name: "Burger Beef",
    description: "burger dengan ayam dan keju",
    price: "RP. 20.000",
    image:
      "https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg?semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Chicken Sandwich",
    description: "Sandwich ayam dengan saus spesial",
    price: "RP. 15.000",
    image:
      "https://img.freepik.com/free-photo/chicken-sandwich_23-2150857908.jpg",
  },
  {
    id: 3,
    name: "Veggie Burger",
    description: "Burger vegetarian dengan sayuran segar",
    price: "RP. 18.000",
    image: "https://img.freepik.com/free-photo/veggie-burger_23-2150857908.jpg",
  },
];

const drinkItems = [
  {
    id: 1,
    name: "Ice Lemon Tea",
    description: "Teh lemon dingin yang menyegarkan",
    price: "RP. 10.000",
    image:
      "https://img.freepik.com/free-photo/iced-tea-lemon_23-2150857908.jpg",
  },
  {
    id: 2,
    name: "Coffee Latte",
    description: "Latte kopi dengan susu segar",
    price: "RP. 12.000",
    image:
      "https://img.freepik.com/free-photo/latte-coffee-morning_23-2150857908.jpg",
  },
  {
    id: 3,
    name: "Mango Smoothie",
    description: "Smoothie mangga segar",
    price: "RP. 15.000",
    image:
      "https://img.freepik.com/free-photo/mango-smoothie_23-2150857908.jpg",
  },
];

export default function MenuCard() {
  const [category, setCategory] = useState("food");
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const menuItems = category === "food" ? foodItems : drinkItems;

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setCartCount(cartCount + 1);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace("RP. ", "").replace(".", ""));
      return total + price;
    }, 0);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleButton = () => {
    console.log("pesananmu berhasil di proses");
  };

  return (
    <div className="bg-[#6a73b9] min-h-screen">
      {/* Navigasi kategori */}
      <div className="flex justify-center space-x-4 py-4">
        <button
          className={`px-4 py-2 ${
            category === "food" ? "bg-yellow-500" : "bg-white"
          } rounded-full`}
          onClick={() => setCategory("food")}
        >
          Makanan
        </button>
        <button
          className={`px-4 py-2 ${
            category === "drink" ? "bg-yellow-500" : "bg-white"
          } rounded-full`}
          onClick={() => setCategory("drink")}
        >
          Minuman
        </button>
      </div>

      <div className="flex justify-start ml-2 items-center">
        <h1 className="text-2xl font-bold mb-4">
          {category === "food" ? "Makanan Berat" : "Ice Drink"}
        </h1>
      </div>

      {/* Menampilkan item menu */}
      {menuItems.map((item) => (
        <div key={item.id} className="p-3 flex justify-start">
          <img
            src={item.image}
            alt={item.name}
            className="mt-3 w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"
          />
          <div className="flex flex-col mt-2">
            <h1 className="text-lg lg:text-2xl ml-2">{item.name}</h1>
            <p className="text-sm lg:text-lg ml-2">{item.description}</p>
            <p className="text-sm lg:text-lg text-gray-500 ml-2">
              {item.price}
            </p>
          </div>
          <Button
            className="ml-auto mt-6 lg:mt-8 right-0 bg-yellow-500 hover:bg-[#7aa04a] hover:text-white rounded-xl"
            onClick={() => addToCart(item)}
          >
            Order
          </Button>
        </div>
      ))}

      <div className="flex justify-start ml-2 items-center">
        <h1 className="text-2xl font-bold mb-4">
          {category === "food" ? "Snack" : "Hot Drink"}
        </h1>
      </div>

      {/* Icon Keranjang */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-yellow-500 p-4 rounded-full cursor-pointer shadow-lg"
      >
        <FaShoppingCart size={30} color="white" />
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
            {cartCount}
          </span>
        )}
      </div>

      {/* Modal Keranjang */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-white p-6 rounded-lg w-80">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">Keranjang pesananmu</h2>
            {cart.length === 0 ? (
              <p>Belum ada pesanan kamu nih? yuk pesen dulu</p>
            ) : (
              <div>
                <ul>
                  {cart.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 font-bold">
                  <p>Total: RP. {calculateTotal().toLocaleString()}</p>
                </div>
              </div>
            )}
            <div className="mt-4 flex justify-center gap-5">
              <Button
                className="bg-red-500 text-white text-center"
                onClick={handleButton}
              >
                Pesan Sekarang
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
