import Link from "next/link";
import { Button } from "../ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { APP_ROUTES } from "@/lib/utils";
import Image from "next/image";
import WebLogo from "@/assets/web-logo.png";

export const routes = [
  {
    path: "/dashboard",
    icon: Home,
    title: "Dashboard",
  },
  {
    path: `/${APP_ROUTES.ALL_CLASS}`,
    icon: ShoppingCart,
    title: "All Class",
  },
  {
    path: `/${APP_ROUTES.ALL_STUDENT}`,
    icon: Package,
    title: "All Student",
  },
  {
    path: `/${APP_ROUTES.ALL_USER}`,
    icon: Users,
    title: "Users",
  },
  // =======
  {
    path: `/${APP_ROUTES.ALL_PAYMENT_HISTORY}`,
    icon: Users,
    title: "Payment History",
  },
  {
    path: `/${APP_ROUTES.CREATE_STUDENT}`,
    icon: Users,
    title: "Add Student",
  },
  {
    path: `/${APP_ROUTES.CLASS_STUDENT}`,
    icon: LineChart,
    title: "Class Student",
  },
];
const SideNavigationBar = () => {
  return (
    <>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            {/* <Package2 className="h-6 w-6" /> */}
            <Image src={WebLogo} alt="Website logo" width={34} height={34} />
            <span className="">Educa International</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="flex mt-2 items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <route.icon className="h-4 w-4" />
                <p>{route.title} </p>
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          {/* <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </>
  );
};

export default SideNavigationBar;
