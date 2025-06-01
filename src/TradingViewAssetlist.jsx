import React, { useEffect, useRef } from "react";
import "./TradingView.css";

const TradingViewAssetlist = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const widgetHtml = `
      <div style="height: 100vh;">
        <div class="tradingview-widget-container__widget"></div>
        
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js" async>
          ${JSON.stringify({
            colorTheme: "dark",
            dateRange: "12M",
            showChart: false,
            locale: "en",
            largeChartUrl: "",
            isTransparent: true,
            showSymbolLogo: false,
            showFloatingTooltip: true,
            width: "100%",
            height: "100%",
            plotLineColorGrowing: "rgba(41, 98, 255, 1)",
            plotLineColorFalling: "rgba(41, 98, 255, 1)",
            gridLineColor: "rgba(42, 46, 57, 0)",
            scaleFontColor: "rgba(219, 219, 219, 1)",
            belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
            belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
            belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
            belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
            symbolActiveColor: "rgba(41, 98, 255, 0.12)",
            tabs: [
              {
                title: "Market",
                symbols: [
                  { s: "FOREXCOM:SPXUSD", d: "S&P 500 Index" },
                  { s: "FOREXCOM:NSXUSD", d: "US 100 Cash CFD" },
                  { s: "INDEX:NKY", d: "Japan 225" },
                  { s: "FOREXCOM:UKXGBP", d: "FTSE 100 Index" },
                  { s: "BINANCE:BTCUSDT", d: "Bitcoin" },
                  { s: "BINANCE:SOLUSDT", d: "Solana" },
                  { s: "BINANCE:ETHUSDT", d: "Eth" },
                  { s: "BINANCE:XRPUSDT", d: "Ripple" },
                  { s: "BINANCE:DOGEUSDT", d: "Doge" },
                  { s: "BINANCE:ADAUSDT", d: "Cardano" },
                ],
                originalTitle: "Indices",
              },
            ],
          })}
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
            body { margin: 0; background: transparent; }
            .tradingview-widget-container { width: 100%; height: 100%; }
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
    <div className="tradingview-widget-container">
      <h3
        style={{
          letterSpacing: "0.1em",
          borderBottom: "1px solid rgba(50,50,50)",
          padding: "25px",
          margin: "3px",
        }}
      >
        Watchlist
      </h3>
      <iframe
        ref={iframeRef}
        style={{
          width: "103%",
          height: "100%",
          overflow: "hidden",
          border: "none",
          background: "#00000000",
          scrollbarWidth: "none",
        }}
        title="TradingView Widget"
      />
    </div>
  );
};

export default TradingViewAssetlist;
