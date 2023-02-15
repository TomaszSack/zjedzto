import { rest } from "msw";

import { BASE_URL } from "config";

const menuHandlers = [
  rest.get(`${BASE_URL}/menu`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "Burger wołowy z bekonem",
          price: 32.99,
          img: "assets/hero-img.jpeg",
          alt: "soczysty burger wołowy z frytkami",
        },
        {
          id: 2,
          name: "Burger z kurczakiem",
          price: 30.99,
          img: "assets/hero-img.jpeg",
          alt: "soczysty burger z kurczakiem",
        },
        {
          id: 3,
          name: "Burger wołowy na ostro",
          price: 35.99,
          img: "assets/hero-img.jpeg",
          alt: "soczysty burger wołowy na ostro",
        },
      ])
    );
  }),
];

const orderHandlers = [
  rest.get(`${BASE_URL}/orders`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          apartment_number: "46",
          city: "Gdańsk",
          comment: "Testowy komentarz, dodaj sosiwo ",
          email: "tomek.sack@gmail.com",
          first_name: "Tomasz",
          floor: "1",
          house_number: "16E",
          phone_number: "4342442",
          postcode: "80-041",
          street: "Platynowa",
          surname: "Sack",
          order: [
            {
              id: 2,
              name: "Burger z kurczakiem",
              price: 30.99,
              img: "assets/hero-img.jpeg",
              alt: "soczysty burger wołowy z frytkami",
              quantity: 1,
            },
            {
              id: 5,
              name: "Frytki",
              price: 6.99,
              img: "assets/hero-img.jpeg",
              alt: "soczysty burger wołowy z frytkami",
              quantity: 1,
            },
          ],
          id: 1675336846975,
        },
      ])
    );
  }),

  rest.post(`${BASE_URL}/orders`, async (req, res, ctx) => {
    const body = await req.json();
    const newOrder = {
      ...body,
      id: "99",
    };
    return res(ctx.status(200), ctx.json(newOrder));
  }),
];

export const handlers = [...menuHandlers, ...orderHandlers];
