import {
  LayoutDashboard,
  User2,
  Briefcase,
  Sliders,
  Home,
  UtensilsCrossed,
  BadgeDollarSign,
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
    title: "Food",
    url: "/admin-dashboard/food",
    icon: <UtensilsCrossed />,
  },
  {
    title: "Orders",
    url: "/admin-dashboard/orders",
    icon: <Briefcase />,
  },

  {
    title: "Payments",
    url: "/admin-dashboard/payment",
    icon: <BadgeDollarSign />,
  },

  {
    title: "Setting",
    url: "/admin-dashboard/settings",
    icon: <Sliders />,
  },
];
