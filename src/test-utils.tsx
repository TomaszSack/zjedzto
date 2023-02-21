import { ReactElement, ReactNode, useState } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "components/context/CartService";
import { maxQuantity } from "config";

interface Dish {
  id: number;
  name: string;
  price: number;
  img: string;
  alt: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  alt: string;
  quantity: number;
}

interface OrderItem {
  apartment_number: string;
  city: string;
  comment: string;
  email: string;
  first_name: string;
  floor: string;
  house_number: string;
  order: CartItem[];
  phone_number: string;
  postcode: string;
  street: string;
  surname: string;
}

const dish = [
  {
    id: 1,
    name: "Burger wołowy z bekonem",
    price: 32.99,
    img: "assets/hero-img.jpeg",
    alt: "soczysty burger wołowy z frytkami",
    quantity: 4,
  },
];

const mockedOrder = {
  apartment_number: "42",
  city: "Gdańsk",
  comment: "Proszę o dodanie dodatkowego sosu do burgera",
  email: "tomek.sack@gmail.com",
  first_name: "Tomasz",
  floor: "2",
  house_number: "16E",
  id: 1676546032919,
  order: [
    {
      id: 1,
      name: "Burger wołowy z bekonem",
      price: 32.99,
      img: "assets/hero-img.jpeg",
      alt: "soczysty burger wołowy z frytkami",
      quantity: 4,
    },
  ],
  phone_number: "4342442",
  postcode: "80-041",
  street: "Platynowa",
  surname: "Sack",
};

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(dish)
  const [orderItems, setOrderItems] = useState<OrderItem>(mockedOrder);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const cartTotalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (dish: Dish) => {
    const { id } = dish;
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { ...dish, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id && item.quantity < maxQuantity) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id && item.quantity) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };
  return (
    <CartContext.Provider
      value={{
        increaseCartQuantity,
        decreaseCartQuantity,
        cartItems,
        setCartItems,
        getItemQuantity,
        removeFromCart,
        cartQuantity,
        cartTotalPrice,
        orderItems,
        setOrderItems,
      }}
    >
      <BrowserRouter>{children}</BrowserRouter>
    </CartContext.Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
