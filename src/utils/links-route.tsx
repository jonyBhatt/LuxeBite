import {
  LayoutDashboard,
  User2,
  Briefcase,
  MoreHorizontal,
  Bell,
  Bike,
  Sliders,
  Home,
} from "lucide-react";
export const AdminRoutes = [
  {
    title: "Home",
    url: "/",
    icon: <Home />,
  },
  {
    title: "Dashboard",
    url: "/admin-dashboard",
    icon: <LayoutDashboard />,
  },
  {
    title: "Users",
    url: "/admin-dashboard/users",
    icon: <User2 />,
  },
  {
    title: "Orders",
    url: "/admin-dashboard/orders",
    icon: <Briefcase />,
  },
  {
    title: "Delivery",
    url: "/admin-dashboard/delivery",
    icon: <Bike />,
  },
  {
    title: "Menu",
    url: "/admin-dashboard/delivery",
    icon: <MoreHorizontal />,
  },
  {
    title: "Setting",
    url: "/admin-dashboard/delivery",
    icon: <Sliders />,
  },
];
