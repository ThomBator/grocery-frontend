import { rest } from "msw";

const mockItems = [
  {
    id: 1,
    created_at: "2023-03-04 01:43:30.489451+00",
    description: "Milk",
  },
  {
    id: 2,
    created_at: "2023-03-04 01:55:30.489451+00",
    description: "Coffee",
  },
];

const URL = process.env.VITE_URL;

export const handlers = [
  rest.get(`${URL}`, async (req, res, ctx) => {
    return res(ctx.delay(2000), ctx.json(mockItems));
  }),

  rest.post(`${URL}`, async (req, res, ctx) => {
    const descriptionPromise = req.text();
    const newItem = {
      id: 3,
      created_at: "2023-03-04 01:55:30.489451+00",
      description: await descriptionPromise,
    };
    mockItems.push(newItem);
    return res(ctx.json(mockItems));
  }),
];
