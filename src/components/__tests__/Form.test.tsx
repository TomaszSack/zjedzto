import { act, fireEvent, render } from "@testing-library/react";
import OrderPage from "pages/OrderPage";

test("should not display error when value is valid", async () => {
  const { getByRole, findByText, queryAllByRole } = render(<OrderPage />);

  await act(async () => {
    fireEvent.change(getByRole("textbox", { name: /street/i }), {
      target: {
        value: "Zakole",
      },
    });
    fireEvent.change(getByRole("textbox", { name: /house_number/i }), {
      target: {
        value: "23",
      },
    });
    fireEvent.change(getByRole("textbox", { name: /postcode/i }), {
      target: {
        value: "14-100",
      },
    });
    fireEvent.change(getByRole("textbox", { name: /city/i }), {
      target: {
        value: "Ostróda",
      },
    });
    fireEvent.change(getByRole("textbox", { name: /first_name/i }), {
      target: {
        value: "Tomasz",
      },
    });
    fireEvent.change(getByRole("textbox", { name: /surname/i }), {
      target: {
        value: "Sack",
      },
    });
    fireEvent.change(getByRole("textbox", { name: /phone_number/i }), {
      target: {
        value: "514256223",
      },
    });
    fireEvent.change(getByRole("textbox", { name: /email/i }), {
      target: {
        value: "trrsaa@mail.com",
      },
    });
  });

  await act(async () => {
    fireEvent.click(getByRole("button"));
    // fireEvent.submit(screen.getByRole("button"));
  });

  expect(await findByText("Zamawiam")).toBeInTheDocument();
  expect(queryAllByRole("alert")).toHaveLength(0);
});

test("should display required error when value is invalid", async () => {
  const { getByRole, findAllByRole } = render(<OrderPage />);

  fireEvent.submit(getByRole("button"));

  expect(await findAllByRole("alert")).toHaveLength(8);
});
