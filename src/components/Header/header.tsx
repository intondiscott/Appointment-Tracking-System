"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Search, CircleUser } from "lucide-react";

type SubItem = {
  name: string;
  path?: string;
};

type HeaderItem = {
  name: string;
  subItems?: SubItem[];
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [headerData, setHeaderData] = useState<HeaderItem[]>([]);

  // Simulate an API call to check if the user is logged in
  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await fakeLoginCheck();
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  // Fetch header data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/UI_Template");
      const data = await res.json();
      setHeaderData(data);
    };

    fetchData();
  }, []);

  const fakeLoginCheck = async (): Promise<boolean> => {
    // Simulate an API call delay and return a boolean value
    return new Promise(resolve => setTimeout(() => resolve(false), 1000)); // if you set resolve to true it is going to show the header of when it logged in
    // i purposely set it to false to display the hompage header
  };

  return (
    <>
      {isLoggedIn ? (
        <header className='bg-gray-800 p-1 text-white sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
          <nav className='flex justify-start p-1'>
            <Menubar className='bg-gray-800 text-white p-1'>
              {headerData.map((headerItem, index) => (
                <MenubarMenu key={index}>
                  <MenubarTrigger className='px-4 py-2 hover:bg-gray-700'>
                    {headerItem.name}
                  </MenubarTrigger>
                  {headerItem.subItems && (
                    <MenubarContent className='bg-gray-800 text-white'>
                      {headerItem.subItems.map((subItem, subIndex) => (
                        <MenubarItem key={subIndex} className='hover:bg-gray-700 px-4 py-2'>
                          {subItem.path ? <Link href={subItem.path}>{subItem.name}</Link> : subItem.name}
                        </MenubarItem>
                      ))}
                    </MenubarContent>
                  )}
                </MenubarMenu>
              ))}
            </Menubar>
          </nav>

          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search products..." className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Reports</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
      ) : (
          <header className="bg-gray-800 text-white sticky top-0 flex items-center justify-between px-4 py-5">
            <nav className="flex justify-between w-full">
              <ul className="flex space-x-8">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/solution">Solution</Link></li>
              </ul>
              <ul className="flex space-x-8">
                <li><Link href="/Login"> Login </Link></li>
              </ul>
            </nav>
          </header>
      )}
    </>
  );
};

export default Header;
