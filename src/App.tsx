import { RouterProvider } from "react-router-dom";
import AppRouter from "./routers/app-router";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";
import { Theme } from "@chakra-ui/react";
import "@/styles/styles.css"

function App() {
  return (
    <>
      <ColorModeProvider forcedTheme="dark">
        <Theme appearance="dark" maxH={"200vh"} minH={"100vh"}  w={"100%" } >
          <RouterProvider router={AppRouter} />
        </Theme>
      </ColorModeProvider>
    </>
  );
}

export default App;
