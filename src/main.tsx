import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Attribution for color bg later <a href="https://www.freepik.com/free-vector/hand-drawn-vegetables-collection_15741632.htm#query=vegetables&position=8&from_view=search&track=sph">Image by Vectonauta</a> on Freepik
// Attribution for bw bg <a href="https://www.freepik.com/free-vector/vegetables-designs-collection_969207.htm#query=vegetables&position=7&from_view=search&track=sph">Image by planolla</a> on Freepik
export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        "background-color": "#fdf8f1",
        "background-image": " url(images/OG27A00.jpg)",
        "background-position": "center",
      },
    },
  },
});

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
