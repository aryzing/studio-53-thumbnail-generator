import { FC, StrictMode } from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { App } from "./App";

const AppWrappedWithProviders: FC = () => (
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);

const root = document.getElementById("root");

if (!root) {
  throw new Error("Expected `root` to be defined");
}

render(<AppWrappedWithProviders />, root);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
