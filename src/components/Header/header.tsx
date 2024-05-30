// components/Header.js
import React from 'react';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
    MenubarSub,
    MenubarSubTrigger,
    MenubarCheckboxItem,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSubContent
} from "@/components/ui/menubar"


const Header = () => {
    return (
        <header className="bg-gray-800 p-1  text-white ">
            <nav className="flex justify-start p-1">
                <Menubar className="bg-gray-800 text-white p-1">
                    <MenubarMenu>
                        <MenubarTrigger className="px-4 py-2 hover:bg-gray-700">Home</MenubarTrigger>
                        <MenubarContent className="bg-gray-800 text-white">
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Dashboard</MenubarItem>
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Notifications</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="px-4 py-2 hover:bg-gray-700">Appointments</MenubarTrigger>
                        <MenubarContent className="bg-gray-800 text-white">
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Schedule</MenubarItem>
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">My Appointments</MenubarItem>
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Calendar</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="px-4 py-2 hover:bg-gray-700">Clients</MenubarTrigger>
                        <MenubarContent className="bg-gray-800 text-white">
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Client List</MenubarItem>
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Add New Client</MenubarItem>
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Client History</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="px-4 py-2 hover:bg-gray-700">Services</MenubarTrigger>
                        <MenubarContent className="bg-gray-800 text-white">
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Service List</MenubarItem>
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Add New Service</MenubarItem>
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Pricing</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="px-4 py-2 hover:bg-gray-700">Billing</MenubarTrigger>
                        <MenubarContent className="bg-gray-800 text-white">
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Invoices</MenubarItem>
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Payments</MenubarItem>
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Billing Settings</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="px-4 py-2 hover:bg-gray-700">Reports</MenubarTrigger>
                        <MenubarContent className="bg-gray-800 text-white">
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Appointment Reports</MenubarItem>
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Revenue Reports</MenubarItem>
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Client Reports</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="px-4 py-2 hover:bg-gray-700">Settings</MenubarTrigger>
                        <MenubarContent className="bg-gray-800 text-white">
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Profile Settings</MenubarItem>
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Notification Settings</MenubarItem>
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Account Settings</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="px-4 py-2 hover:bg-gray-700">Help</MenubarTrigger>
                        <MenubarContent className="bg-gray-800 text-white">
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Documentation</MenubarItem>
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">Support</MenubarItem>
                            <MenubarItem className="hover:bg-gray-700 px-4 py-2">FAQ</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </nav>
        </header>
    );
};

export default Header;
