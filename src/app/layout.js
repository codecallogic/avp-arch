import Script from "next/script";
import localFont from "@next/font/local";
import { Montserrat } from "next/font/google";
import { ApolloWrapper } from "@/app/_libs/apolloWrapper";
import { ReduxProvider } from "@/app/_redux/provider";
import ParallaxProvider from "@/app/_components/ParallaxProvider";
import "./globals.css";

//// COMPONENTS
import Nav from "@/app/_components/nav";
import Footer from "@/app/_components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const above = localFont({
  src: [
    {
      path: "../../public/assets/fonts/AboveDemoRegular-lJMd.ttf",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/AboveDemoRegular-lJMd.ttf",
      weight: "500",
    },
    {
      path: "../../public/assets/fonts/AboveDemoRegular-lJMd.ttf",
      weight: "600",
    },
    {
      path: "../../public/assets/fonts/AboveDemoRegular-lJMd.ttf",
      weight: "700",
    },
  ],
  variable: "--font-above",
});

export const metadata = {
  title: "AVP Arch",
  description: "Drafting planning and design",
  icons: {
    icon: "/favicon.png", // Path to your favicon in the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${above.variable}`}>
        <ReduxProvider>
          <ApolloWrapper>
            <ParallaxProvider>
              {/* Add Tealium analytics script */}
              <Script
                id="tealium-tag"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    var utag_data = {};
                    (function(a,b,c,d){
                      a='https://tags.tiqcdn.com/utag/marketingcenter/common/prod/utag.js';
                      b=document;
                      c='script';
                      d=b.createElement(c);
                      d.src=a;
                      d.type='text/java'+c;
                      d.async=true;
                      a=b.getElementsByTagName(c)[0];
                      a.parentNode.insertBefore(d,a);
                    })();
                  `,
                }}
              />
              <Script
                id="external-parameters"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.Parameters = window.Parameters || { ExternalUid: 'we61ac5lk1lkhiav' };
                  `,
                }}
              />

              {/* Add Smooch analytics script */}
              <Script
                id="smooch-analytics"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                  __html: `
                    setTimeout(() => {
                      var integrationId = '6736a3cb6dc3d83c25195c8e';
                      !(function (o, p, s, e, c) {
                        var i, a, h, u = [], d = [];
                        function t() {
                          var t = "You must provide a supported major version.";
                          try {
                            if (!c) throw new Error(t);
                            var e, n = "https://cdn.smooch.io/", r = "smooch";
                            if ((e = "string" == typeof this.response ? JSON.parse(this.response) : this.response).url) {
                              var o = p.getElementsByTagName("script")[0],
                                  s = p.createElement("script");
                              s.async = !0;
                              var i = c.match(/([0-9]+).?([0-9]+)?.?([0-9]+)?/),
                                  a = i && i[1];
                              if (i && i[3]) s.src = n + r + "." + c + ".min.js";
                              else {
                                if (!(4 <= a && e["v" + a])) throw new Error(t);
                                s.src = e["v" + a];
                              }
                              o.parentNode.insertBefore(s, o);
                            }
                          } catch (e) {
                            e.message === t && console.error(e);
                          }
                        }
                        (o[s] = {
                          init: function () {
                            i = arguments;
                            var t = {
                              then: function (e) {
                                return d.push({ type: "t", next: e }), t;
                              },
                              catch: function (e) {
                                return d.push({ type: "c", next: e }), t;
                              },
                            };
                            return t;
                          },
                          on: function () {
                            u.push(arguments);
                          },
                          render: function () {
                            a = arguments;
                          },
                          destroy: function () {
                            h = arguments;
                          },
                        }),
                        (o.__onWebMessengerHostReady__ = function (e) {
                          if ((delete o.__onWebMessengerHostReady__, (o[s] = e), i))
                            for (var t = e.init.apply(e, i), n = 0; n < d.length; n++) {
                              var r = d[n];
                              t = "t" === r.type ? t.then(r.next) : t.catch(r.next);
                            }
                          a && e.render.apply(e, a), h && e.destroy.apply(e, h);
                          for (n = 0; n < u.length; n++) e.on.apply(e, u[n]);
                        });
                        var n = new XMLHttpRequest();
                        n.addEventListener("load", t), n.open("GET", "https://" + e + ".webloader.smooch.io/", !0), (n.responseType = "json"), n.send();
                      })(window, document, "Smooch", integrationId, "5");
                      setTimeout(() => {
                        const delegate = {
                          beforeSend(message, data) {
                            const urlParams = new URLSearchParams(window.location.search);          
                            const utm_ci = urlParams.get('utm_ci');
                            const utm_channel = urlParams.get('utm_channel');
                            const utm_ad = urlParams.get('utm_ad');
                            const utm_cm = urlParams.get('utm_cm');
                            
                            if (utm_ci && utm_channel && utm_ad && utm_cm) {
                              message.metadata = {
                                utm_ci,
                                utm_channel,
                                utm_ad,
                                utm_cm
                              };
                            }

                            return message;
                          }
                        };
                        Smooch.init({
                          integrationId: integrationId,
                          delegate: delegate,
                          menuItems: {},
                          prechatCapture: {
                            enabled: true,
                            enableEmailLinking: true,
                            fields: [
                              {
                                type: 'email',
                                name: 'email',
                                label: 'Email',
                                placeholder: 'your@email.com'
                              },
                              {
                                type: 'text',
                                name: 'phone',
                                label: 'Phone',
                                placeholder: '555-555-5555'
                              },
                              {
                                type: 'text',
                                name: 'first_name',
                                label: 'First Name',
                                placeholder: 'first name'
                              },
                              {
                                type: 'text',
                                name: 'last_name',
                                label: 'Last Name',
                                placeholder: 'last name'
                              }
                            ]
                          },
                          customText: {
                            prechatCaptureGreetingText: "Hi there,\\n\\nBefore you begin, please note that a transcript of this chat may be retained.\\n\\nTo start off, we'd like to know a little bit about you. \\n\\n By providing your email and mobile number via this chat, you consent to our Terms of Use and Privacy Policy (found in the footer of this site) and to us sending emails and text messages or placing voice calls to you for advertising and marketing purposes. Giving this consent is not required as a condition of purchasing any goods or services."
                          },
                        }).then(
                          function () {
                            console.log("Script Ran for Sunshine");
                          },
                          function (err) {
                            console.log("Script Error for Sunshine");
                          }
                        );
                      }, 1000);
                    }, 2000);
                  `,
                }}
              />
              <Nav />
              {children}
              {/* Uncomment Footer if needed */}
              {/* <Footer /> */}
            </ParallaxProvider>
          </ApolloWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
