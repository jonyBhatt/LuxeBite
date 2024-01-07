import { Button } from "@/components/ui/button";
import AddPayment from "../_components/add-payment";

export default function Payment({ params }: { params: { id: string } }) {
  console.log(params.id);

  return (
    <div className=" h-full flex flex-col items-center justify-center">
      <header className="flex items-center justify-between w-full px-8 py-4">
        <h1 className="text-2xl font-bold">Secure Payment</h1>
        <LockIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
      </header>
      <AddPayment id={params.id} />
    </div>
  );
}

function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
