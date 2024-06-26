import Script from "next/script";
import { Montserrat } from "next/font/google";
import { ApolloWrapper } from "@/app/_libs/apolloWrapper";
import { ReduxProvider } from '@/app/_redux/provider';
import ParallaxProvider from '@/app/_components/ParallaxProvider'
import "./globals.css";

//// COMPONENTS
import Nav from "@/app/_components/nav"
import Footer from "@/app/_components/footer"

const montserrat        = Montserrat({ subsets: ['latin'],  weight: ['300', '400', '500', '600', '700'], variable: '--font-montserrat'})

export const metadata = {
  title: "AVP Arch",
  description: "Drafting planning and design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} `}>
        <ReduxProvider>
          <ApolloWrapper>
            <ParallaxProvider>
              <Nav></Nav>
              {children}
              {/* <Footer></Footer> */}
            </ParallaxProvider>
          </ApolloWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
