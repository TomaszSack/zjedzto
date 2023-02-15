import React, { ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "components/context/CartService";

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <CartProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </CartProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
