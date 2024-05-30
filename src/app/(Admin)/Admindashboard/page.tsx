import Link from 'next/link';
import { Package2, Menu, Search, CircleUser } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const AdminDashboard = dynamic(() => import('../../../components/Dashboard/AdminDashboard'), { ssr: false });

export default function Dashboard() {
    return (

        <><header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                    <Image src='' alt={''} />
                    <span className="sr-only">S & O Inc</span>
                </Link>
                <Link href="#" className="text-foreground transition-colors hover:text-foreground">
                    Dashboard
                </Link>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Orders
                </Link>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Appointment
                </Link>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Customers
                </Link>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Analytics
                </Link>
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link href="#" className="hover:text-foreground">Dashboard</Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">Orders</Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">Appoinment</Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">Customers</Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">Analytics</Link>
                    </nav>
                </SheetContent>
            </Sheet>
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
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <AdminDashboard />
            </main>
        </>

    );
}
