import { cn } from "@/lib/utils";
export const DashboardSvg = ({ colors }: { colors?: string }) => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={cn(colors, "#C0C0C0")}
    viewBox="0 0 24.00 24.00"
    stroke="#C0C0C0"
    strokeWidth="0.00024000000000000003"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
    </g>
  </svg>;
};
