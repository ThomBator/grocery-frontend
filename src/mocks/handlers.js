import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:5000/api/items", (req, res, ctx) => {
    return res(
      ctx.json([
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
      ])
    );
  }),
];
