import { render, screen, fireEvent } from "test-utils";
import { CartContext } from "components/context/CartService";
import QuantityPicker from "components/QuantityPicker/QuantityPicker";
import { useState } from "react";

type TestElement = Document | Element | Window | Node;

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

function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

const WrappedQuantityPicker = () => {
  const [cartItems, setCartItems] = useState(dish);

  const increaseCartQuantity = (dish: any) => {
    const { id } = dish;
    setCartItems((currItems: any) => {
      if (currItems.find((item: any) => item.id === id) == null) {
        return [...currItems, { ...dish, quantity: 1 }];
      } else {
        return currItems.map((item: any) => {
          if (item.id === id && item.quantity < 9) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currItems: any) => {
      if (currItems.find((item: any) => item.id === id)?.quantity === 1) {
        return currItems.filter((item: any) => item.id !== id);
      } else {
        return currItems.map((item: any) => {
          if (item.id === id && item.quantity) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const OrderItem = {
    apartment_number: "",
    city: "",
    comment: "",
    email: "",
    first_name: "",
    floor: "",
    house_number: "",
    order: [],
    phone_number: "",
    postcode: "",
    street: "",
    surname: "",
  };

  const mock = {
    mockedString: "",
    mockedFc: () => "" || 1,
    moockedNum: 1,
  };

  return (
    <CartContext.Provider
      value={{
        increaseCartQuantity,
        decreaseCartQuantity,
        cartItems,
        setCartItems,
        getItemQuantity: mock.mockedFc,
        removeFromCart: mock.mockedFc,
        cartQuantity: mock.moockedNum,
        cartTotalPrice: mock.mockedString,
        orderItems: OrderItem,
        setOrderItems: mock.mockedFc,
        sorting: mock.mockedString,
        setSorting: mock.mockedFc,
      }}
    >
      <QuantityPicker
        value={cartItems[0].quantity}
        min={0}
        max={9}
        dish={cartItems[0]}
      />
    </CartContext.Provider>
  );
};

test("should increment initialValue", async () => {
  render(<WrappedQuantityPicker />);

  fireEvent.click(screen.getByTitle("plus"));
  fireEvent.click(screen.getByTitle("plus"));

  const input = screen.getByRole("textbox");

  expect(hasInputValue(input, "6")).toBe(true);
});

test("should decrement initialValue", async () => {
  render(<WrappedQuantityPicker />);

  fireEvent.click(screen.getByTitle("minus"));
  fireEvent.click(screen.getByTitle("minus"));

  const input = screen.getByRole("textbox");

  expect(hasInputValue(input, "2")).toBe(true);
});

test("should not exceed max value", async () => {
  render(<WrappedQuantityPicker />);
  for (let i = 0; i < 10; i++) {
    fireEvent.click(screen.getByTitle("plus"));
  }

  const input = screen.getByRole("textbox");

  expect(hasInputValue(input, "9")).toBe(true);
  expect(screen.getByTitle("plus").closest("button")).toHaveClass(
    "mod-disable"
  );
});
