import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Space_Grotesk } from "next/font/google";
import { Provider } from "@/context/Provider";
import { HeroUIProvider } from "@heroui/react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <Provider>
        <main className={spaceGrotesk.className}>
          <Component {...pageProps} />;
        </main>
      </Provider>
    </HeroUIProvider>
  );
}
