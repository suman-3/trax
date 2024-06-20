import { Toaster } from "@/components/ui/sonner";

import React from "react";
import { ModalProvider } from "../../components/provider/modal-provider";
import { QueryProvider } from "@/components/provider/query-provider";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <Toaster />
      <ModalProvider />
      {children}
    </QueryProvider>
  );
};

export default PlatformLayout;
