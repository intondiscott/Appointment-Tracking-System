import { NextResponse } from "next/server";

export function GET() {
  type SubItem = {
    name: string;
  };

  type HeaderItem = {
    name: string;
    subItems?: SubItem[];
  };

  const headerData: HeaderItem[] = [
    {
      name: "Home",
      subItems: [{ name: "Dashboard" }, { name: "Notifications" }],
    },
    {
      name: "Appointments",
      subItems: [
        { name: "Schedule" },
        { name: "My Appointments" },
        { name: "Calendar" },
      ],
    },
    {
      name: "Clients",
      subItems: [
        { name: "Client List" },
        { name: "Add New Client" },
        { name: "Client History" },
      ],
    },
    {
      name: "Services",
      subItems: [
        { name: "Service List" },
        { name: "Add New Service" },
        { name: "Pricing" },
      ],
    },
    {
      name: "Billing",
      subItems: [
        { name: "Invoices" },
        { name: "Payments" },
        { name: "Billing Settings" },
      ],
    },
    {
      name: "Reports",
      subItems: [
        { name: "Appointment Reports" },
        { name: "Revenue Reports" },
        { name: "Client Reports" },
      ],
    },
    {
      name: "Settings",
      subItems: [
        { name: "Profile Settings" },
        { name: "Notification Settings" },
        { name: "Account Settings" },
      ],
    },
    {
      name: "Help",
      subItems: [
        { name: "Documentation" },
        { name: "Support" },
        { name: "FAQ" },
      ],
    },
  ];
  return NextResponse.json(headerData);
}
