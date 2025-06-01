import React from "react";

export default function Footer() {
  const copyright = "\u00A9 2025 ProAnt Trades. All rights reserved";
  const contactSupportText = "Contact Support";
  return (
    <div className="footer">
      <span>
        <span className="icon-margin">
          <i class="fa-solid fa-headset"></i>
        </span>
        {contactSupportText}
      </span>
      <span>{copyright}</span>
    </div>
  );
}
