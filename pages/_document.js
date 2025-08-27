import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA Manifest */}
          <link rel="manifest" href="/manifest.json" />
          
          {/* PWA Meta Tags */}
          <meta name="theme-color" content="#000000" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="Portfolio" />
          <meta name="application-name" content="Portfolio" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-tap-highlight" content="no" />
          
          {/* Favicons */}
          <link rel="icon" href="/images/favicons/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
          <link rel="apple-touch-icon" href="/images/favicons/logo_192x192.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/images/favicons/logo_144x144.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/logo_192x192.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/images/favicons/logo_144x144.png" />
          
          {/* PWA Splash Screens */}
          <link rel="apple-touch-startup-image" href="/images/favicons/logo_512x512.png" />
          
          {/* Preconnect to external domains for better performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
