import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <nav className="fixed z-20 top-0 w-full h-16 border-b shadow-sm bg-white flex items-center px-8">
      <MobileSidebar />
      <div className="flex items-center gap-x-5">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
          size="sm"
          className="rounded-sm hidden md:block h-auto py-1.5 px-2"
          variant="primary"
        >
          Create
        </Button>
        <Button
          variant="primary"
          className="rounded-sm bloack md:hidden"
          size="sm"
        >
          <Plus className="h-4 w-4 shrink-0" />
        </Button>
      </div>

      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 35,
                width: 35,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};
