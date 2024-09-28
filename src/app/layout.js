import Script from "next/script";
import localFont from '@next/font/local'
import { Montserrat } from "next/font/google";
import { ApolloWrapper } from "@/app/_libs/apolloWrapper";
import { ReduxProvider } from '@/app/_redux/provider';
import ParallaxProvider from '@/app/_components/ParallaxProvider'
import "./globals.css";

//// COMPONENTS
import Nav from "@/app/_components/nav"
import Footer from "@/app/_components/footer"

const montserrat        = Montserrat({ subsets: ['latin'],  weight: ['300', '400', '500', '600', '700'], variable: '--font-montserrat'})
const above = localFont({
  src: [
    {
      path: '../../public/assets/fonts/AboveDemoRegular-lJMd.ttf',
      weight: '400'
    },
    {
      path: '../../public/assets/fonts/AboveDemoRegular-lJMd.ttf',
      weight: '500'
    },
    {
      path: '../../public/assets/fonts/AboveDemoRegular-lJMd.ttf',
      weight: '600'
    },
    {
      path: '../../public/assets/fonts/AboveDemoRegular-lJMd.ttf',
      weight: '700'
    }
  ],
  variable: '--font-above'
})

export const metadata = {
  title: "AVP Arch",
  description: "Drafting planning and design",
  icons: {
    icon: '/favicon.png', // Path to your favicon in the public folder
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${above.variable}`}>
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
