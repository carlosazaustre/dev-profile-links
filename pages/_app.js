import { createTheme, NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    type: "dark",
    theme: {
      colors: {
        primary: "#f0d500",
        link: "#af4abd",
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
