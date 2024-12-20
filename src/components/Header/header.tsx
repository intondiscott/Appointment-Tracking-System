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
//import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { LogOut } from "@/app/action/user";
import { getSession } from "@/lib/getSession";
import User from "@/app/Models/users";
import { ThemeProvider } from "../theme-provider";
type SubItem = {
  name: string;
  path?: string;
};

type HeaderItem = {
  name: string;
  subItems?: SubItem[];
};

const Header = async () => {
  const session = await getSession();
  const email = session?.user?.email as string;
  const user = await User.findOne({ email });
  const res = await fetch(
    `${process.env.AUTH_URL || "http://localhost:3000"}/api/UI_Template`
  );
  const data = await res.json();
  return (
    <>
      {session ? (
        <>
          {" "}
          <header className="bg-gray-800 p-1 text-white sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="flex justify-start p-1">
              <Menubar className="bg-gray-800 text-white pl-2 pr-6">
                <Image
                  className="rounded w-6"
                  width={100}
                  height={100}
                  src="/assets/companylogo.png"
                  alt={"company logo"}
                />
                {data.map((headerItem: any, index: number) => (
                  <MenubarMenu key={index}>
                    <MenubarTrigger className="px-4 py-2 hover:bg-gray-700">
                      {headerItem.name}
                    </MenubarTrigger>
                    {headerItem.subItems && (
                      <MenubarContent className="bg-gray-800 text-white">
                        {headerItem.subItems.map(
                          (subItem: any, subIndex: number) => (
                            <MenubarItem
                              key={subIndex}
                              className="hover:bg-gray-700 px-4 py-2"
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

            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <form className="ml-auto flex-1 sm:flex-initial">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  />
                </div>
              </form>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <Image
                      className="rounded-full"
                      src={
                        user.providerId === "google"
                          ? user.image
                          : `/assets/${user.image}`
                      }
                      alt="alt"
                      width={60}
                      height={60}
                    />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/Settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <form action={LogOut}>
                      <button type="submit">Logout</button>
                    </form>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Reports</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
        </>
      ) : (
        <header className="bg-gray-800 text-white sticky top-0 flex items-center justify-between px-4 py-5">
          <nav className="flex justify-between w-full">
            <ul className="flex space-x-8">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/solution">Solution</Link>
              </li>
            </ul>
            <ul className="flex space-x-8">
              <li>
                <Link href="/Login"> Login </Link>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
