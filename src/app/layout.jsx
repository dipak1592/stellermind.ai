import "./style.css";
import CodeBackground from "@/components/CodeBackground";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://beta-new.vercel.app"),
  title:
    "StellarMind: Because without any advanced tech, you're not leading; you're barely competing",
  description:
    "StellarMind: Where innovation is not just a buzzword, but a way of life. Embrace the future with our avant-garde AI, IoT, AR, Software, Devops solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K2WHNXCM');
          `,
          }}
        />
        <Script
          id="fbp"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '810854423929550');
          fbq('track', 'PageView');
          `,
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G74J3H2F17"
        />
        <Script
          id="gt"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G74J3H2F17');
            `,
          }}
        />
      </head>
      <body className={`${montserrat.className}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2WHNXCM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <CodeBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
