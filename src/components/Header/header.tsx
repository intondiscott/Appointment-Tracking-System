// components/Header.js
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
type SubItem = {
  name: string;
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
    <header className='bg-gray-800 p-1 text-white'>
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
                        {subItem.name}
                      </MenubarItem>
                    )
                  )}
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
