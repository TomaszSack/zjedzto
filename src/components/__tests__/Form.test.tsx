import { act, fireEvent, render } from "@testing-library/react";
import OrderPage from "pages/OrderPage";


const data = {
  street: "Bema",
  house_number:"23",
  postcode:'14-100',
  city:'Ostróda',
  first_name:"Tomasz",
  surname:"Sack",
  phone_number:'123123123',
  email:"tomasz@test.com"
}

test("should not display error when value is valid", async () => {
  const { getByRole, findByText, queryAllByRole } = render(<OrderPage />);

  await act(async () => {
    fireEvent.change(getByRole("textbox", { name: /street/i }), {
      target: {
        value: data.street,
      },
    });
    fireEvent.change(getByRole("textbox", { name: /house_number/i }), {
      target: {
        value: data.house_number,
      },
    });
    fireEvent.change(getByRole("textbox", { name: /postcode/i }), {
      target: {
        value: data.postcode,
      },
    });
    fireEvent.change(getByRole("textbox", { name: /city/i }), {
      target: {
        value: data.city,
      },
    });
    fireEvent.change(getByRole("textbox", { name: /first_name/i }), {
      target: {
        value: data.first_name,
      },
    });
    fireEvent.change(getByRole("textbox", { name: /surname/i }), {
      target: {
        value: data.surname,
      },
    });
    fireEvent.change(getByRole("textbox", { name: /phone_number/i }), {
      target: {
        value: data.phone_number,
      },
    });
    fireEvent.change(getByRole("textbox", { name: /email/i }), {
      target: {
        value: data.email,
      },
    });
  });

  await act(async () => {
    fireEvent.click(getByRole("button"));
  });

  expect(await findByText("Zamawiam")).toBeInTheDocument();
  expect(queryAllByRole("alert")).toHaveLength(0);
});

test("should display required error when value is invalid", async () => {
  const { getByRole, findAllByRole } = render(<OrderPage />);

  fireEvent.submit(getByRole("button", { name: /zamawiam/i }));

  expect(await findAllByRole("alert")).toHaveLength(8);
});
