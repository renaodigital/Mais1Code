import '../css/main.css';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {

    <>
        <Script strategy="lazyOnload" src={'https://www.googletagmanager.com/gtag/js?id=G-VWPJJRMJCP'} />
        <Script strategy="lazyOnload">
            {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-VWPJJRMJCP');
    `}

        </Script>
        </>;
    return <Component {...pageProps} />;


}
