import { createTheme, NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    type: "dark",
    theme: {
      colors: {
        primary: "#f5a623",
        link: "#af4abd",
        twitchColor: "#9146ff",
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
