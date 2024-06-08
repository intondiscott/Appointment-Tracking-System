import React from "react";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Search, CircleUser } from "lucide-react";

type SubItem = {
  name: string;
  path?: string;
};

type HeaderItem = {
  name: string;
  subItems?: SubItem[];
};

const Header = async () => {
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/UI_Template");
    return res.json();
  };
  const headerData = await getData();

  return (
    <header className='bg-gray-800 p-1 text-white sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
      <nav className='flex justify-start p-1'>
        <Menubar className='bg-gray-800 text-white p-1'>
          {headerData.map((headerItem: HeaderItem, index: number) => (
            <MenubarMenu key={index}>
              <MenubarTrigger className='px-4 py-2 hover:bg-gray-700'>
                {headerItem.name}
              </MenubarTrigger>
              {headerItem.subItems && (
                <MenubarContent className='bg-gray-800 text-white'>
                  {headerItem.subItems.map(
                    (subItem: SubItem, subIndex: number) => (
                      <MenubarItem
                        key={subIndex}
                        className='hover:bg-gray-700 px-4 py-2'
                      >
                        {subItem.path ? (
                          <Link href={subItem.path}>{subItem.name}</Link>
                        ) : (
                          subItem.name
                        )}
                      </MenubarItem>
                    )
                  )}
                </MenubarContent>
              )}
            </MenubarMenu>
          ))}
        </Menubar>
      </nav>

      <div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
        <form className='ml-auto flex-1 sm:flex-initial'>
          <div className='relative'>
            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Search products...'
              className='pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]'
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='secondary' size='icon' className='rounded-full'>
              <CircleUser className='h-5 w-5' />
              <span className='sr-only'>Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
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
  );
};

export default Header;
