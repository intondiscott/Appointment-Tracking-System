import { NextResponse } from "next/server";

export function GET() {
  type SubItem = {
    name: string;
    path?: string; // Add path property
  };

  type HeaderItem = {
    name: string;
    subItems?: SubItem[];
  };

  const headerData: HeaderItem[] = [
    {
      name: "Home",
      subItems: [
        { name: "Home Page", path: "/" },
        { name: "Dashboard", path: "/Admindashboard" },
        { name: "Notifications", path: "/yes" },
      ],
    },
    {
      name: "Appointments",
      subItems: [
        { name: "Schedule", path: "/yrd" },
        { name: "My Appointments", path: "/clients/ShowAllAppointments" },
        { name: "Calendar", path: "/lkllk" },
      ],
    },
    {
      name: "Clients",
      subItems: [
        { name: "Client List", path: "/clients" },
        { name: "Add New Client", path: "/AddClient" },
        { name: "Client History", path: "/kkkk" },
      ],
    },
    {
      name: "Services",
      subItems: [
        { name: "Service List", path: "/ShowClientServices" },
        { name: "Add New Service", path: "/clients/AddClientService" },
        { name: "Pricing", path: "/jkjjj" },
      ],
    },
    {
      name: "Billing",
      subItems: [
        { name: "Invoices", path: "/klkklk" },
        { name: "Payments", path: "/hhhhh" },
        { name: "Billing Settings", path: "/" },
      ],
    },
    // {
    //   name: 'Reports',
    //   subItems: [
    //     { name: 'Appointment Reports', path: '' },
    //     { name: 'Revenue Reports', path: '' },
    //     { name: 'Client Reports', path: '' },
    //   ],
    // },
    // {
    //   name: 'Settings',
    //   subItems: [
    //     { name: 'Profile Settings', path: '' },
    //     { name: 'Notification Settings', path: '' },
    //     { name: 'Account Settings', path: '' },
    //   ],
    // },
    {
      name: "Help",
      subItems: [
        { name: "Documentation", path: "/" },
        { name: "Support", path: "/DeveloperSupport" },
        { name: "FAQ", path: "/" },
      ],
    },
  ];

  return NextResponse.json(headerData);
}
