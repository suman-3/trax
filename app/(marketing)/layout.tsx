import React from "react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

const MarketingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
       <Navbar/>
      <main className="pt-32 pb-20 bg-slate-100">
       
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default MarketingPageLayout;
