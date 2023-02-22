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

interface CartService {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (dish: Dish) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartTotalPrice: string;
  cartItems: CartItem[];
  orderItems: OrderItem;
  setOrderItems: (value: OrderItem) => void;
  setCartItems: (value: CartItem[]) => void;
}

export const CartContext = createContext({} as CartService);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const storageCart = localStorage.getItem("cart");
  const storageOrder = localStorage.getItem("order");
  const initialCart = storageCart ? JSON.parse(storageCart) : [];
  const initialOrder = storageOrder ? JSON.parse(storageOrder) : {};

  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);
  const [orderItems, setOrderItems] = useState<OrderItem>(initialOrder);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(orderItems));
  }, [orderItems]);

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
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
