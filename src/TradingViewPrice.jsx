import React, { useEffect, useRef } from "react";

// Optional: import './TradingViewTickerTape.css'; // If you have specific global styles

const TradingViewTickerTapeRegular = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const widgetConfig = {
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500 Index",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "US 100 Cash CFD",
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR to USD",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum",
        },
        {
          description: "Solana",
          proName: "BINANCE:SOLUSDT",
        },
        {
          description: "Ripple",
          proName: "BINANCE:XRPUSDT",
        },
        {
          description: "Cardano",
          proName: "BINANCE:ADAUSDT",
        },
        {
          description: "Litecoin",
          proName: "BINANCE:LTCUSDT",
        },
        {
          description: "BNB",
          proName: "BINANCE:BNBUSDT",
        },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "regular", // Changed from 'compact' in the example
      colorTheme: "dark",
      locale: "en",
    };

    const widgetHtml = `
      <div class="tradingview-widget-container" style="width: 100%; height: 100%;">
        <div class="tradingview-widget-container__widget"></div>
                <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
          ${JSON.stringify(widgetConfig)}
        </script>
      </div>
    `;

    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { margin: 0; background-color: transparent; }
            .tradingview-widget-container { 
              width: 100% !important; 
              height: 100% !important; 
            }
            .tradingview-widget-copyright {
                font-size: 13px !important;
                line-height: 32px !important;
                text-align: center !important;
                vertical-align: middle !important;
                font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif !important;
                color: #9db2bd !important;
            }
            .tradingview-widget-copyright .blue-text {
                color: #2962FF !important;
            }
             a {
                text-decoration: none !important;
                color: #9db2bd !important;
            }
            a:visited {
                color: #9db2bd !important;
            }
            a:hover .blue-text {
                color: #1E53E5 !important;
            }
            a:active .blue-text {
                color: #1848CC !important;
            }
          </style>
        </head>
        <body>
          ${widgetHtml}
        </body>
      </html>
    `);
    doc.close();
  }, []);

  return (
    <iframe
      ref={iframeRef}
      style={{
        width: "100%",
        // Height for ticker tape with copyright is typically around 72px.
        // This should generally accommodate 'regular' display mode as well.
        // Adjust if specific content in 'regular' mode makes it taller.
        height: "51px",
        border: "none",
        backgroundColor: "transparent",
        overflow: "hidden",
      }}
      title="TradingView Ticker Tape Widget (Regular)"
      scrolling="no"
    />
  );
};

export default TradingViewTickerTapeRegular;
