'use client';

import Script from 'next/script';

export function BuyMeCoffeeWidget() {
  return (
    <Script
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-name="BMC-Widget"
      data-cfasync="false"
      data-id="thaka"
      data-description="Support me on Buy me a coffee!"
      data-color="#5F7FFF"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
      strategy="afterInteractive"
    />
  );
}
