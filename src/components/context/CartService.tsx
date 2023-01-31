import { maxQuantity } from "config";
import React, { useContext, createContext, useState, useEffect } from "react";

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
  apartment_number:string;
  city:string;
  comment:string;
  email:string;
  first_name:string;
  floor:string;
  house_number:string;
  order:CartItem[];
  phone_number:string;
  postcode:string;
  street:string;
  surname:string
}

interface CartService {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (dish: Dish) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartTotalPrice: string;
  cartItems: CartItem[];
  orderItems:OrderItem | undefined;
  setOrderItems:(value: OrderItem) => void
}

const CartContext = createContext({} as CartService);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = JSON.parse(localStorage.getItem("cart") || "");
  const [cartItems, setCartItems] = useState<CartItem[]>(initialState);
  const [orderItems, setOrderItems] = useState<OrderItem>()

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

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
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        cartTotalPrice,
        orderItems,
        setOrderItems,

      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
