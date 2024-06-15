import React from "react";

const MarketingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <main className="pt-40 pb-20 bg-slate-100">
        {/* navbar */}
        {children}
      </main>
      {/* footer */}
    </div>
  );
};

export default MarketingPageLayout;
