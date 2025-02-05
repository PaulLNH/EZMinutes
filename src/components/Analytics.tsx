import Script from "next/script";

const Analytics = () => {
    const { GA_TRACKING_ID } = process.env;
    return (
        <>
            <Script async id="analytics-tag-manager" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></Script>
            <Script id="analytics-gtag">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
            
                    gtag('config', '${GA_TRACKING_ID}');
                `}
            </Script>
        </>
    );
};

export default Analytics;