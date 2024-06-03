// components/Header.js
import React from 'react';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger
} from "@/components/ui/menubar";


type SubItem = {
    name: string
}

type HeaderItem = {
    name: string,
    subItems? : SubItem[]
}

const headerData: HeaderItem[] = [
    {
        name: "Home",
        subItems: [
            { name: "Dashboard" },
            { name: "Notifications" }
        ]
    },
    {
        name: "Appointments",
        subItems: [
            { name: "Schedule" },
            { name: "My Appointments" },
            { name: "Calendar" }
        ]
    },
    {
        name: "Clients",
        subItems: [
            { name: "Client List" },
            { name: "Add New Client" },
            { name: "Client History" }
        ]
    },
    {
        name: "Services",
        subItems: [
            { name: "Service List" },
            { name: "Add New Service" },
            { name: "Pricing" }
        ]
    },
    {
        name: "Billing",
        subItems: [
            { name: "Invoices" },
            { name: "Payments" },
            { name: "Billing Settings" }
        ]
    },
    {
        name: "Reports",
        subItems: [
            { name: "Appointment Reports" },
            { name: "Revenue Reports" },
            { name: "Client Reports" }
        ]
    },
    {
        name: "Settings",
        subItems: [
            { name: "Profile Settings" },
            { name: "Notification Settings" },
            { name: "Account Settings" }
        ]
    },
    {
        name: "Help",
        subItems: [
            { name: "Documentation" },
            { name: "Support" },
            { name: "FAQ" }
        ]
    }
];

const Header = () => {
    return (
        <header className="bg-gray-800 p-1 text-white">
            <nav className="flex justify-start p-1">
                <Menubar className="bg-gray-800 text-white p-1">
                    {headerData.map((headerItem: HeaderItem  , index: number) => (
                        <MenubarMenu key={index}>
                            <MenubarTrigger className="px-4 py-2 hover:bg-gray-700">{headerItem.name}</MenubarTrigger>
                            {headerItem.subItems && (
                                <MenubarContent className="bg-gray-800 text-white">
                                    {headerItem.subItems.map((subItem: SubItem, subIndex: number) => (
                                        <MenubarItem key={subIndex} className="hover:bg-gray-700 px-4 py-2">
                                            {subItem.name}
                                        </MenubarItem>
                                    ))}
                                </MenubarContent>
                            )}
                        </MenubarMenu>
                    ))}
                </Menubar>
            </nav>
        </header>
    );
};

export default Header;
