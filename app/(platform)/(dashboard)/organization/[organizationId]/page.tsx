import { OrganizationSwitcher } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const organizationPage = ({
  params,
}: {
  params: { organizationId: string };
}) => {
  return <div>organization page</div>;
};

export default organizationPage;
