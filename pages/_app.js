import { createTheme, NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    type: "dark",
    theme: {
      colors: {
        primary: "#ffc400",
      },
      fonts: {
        sans: "Lato",
      },
    },
  });

  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
