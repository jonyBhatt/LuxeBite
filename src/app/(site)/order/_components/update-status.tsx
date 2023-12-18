"use client";

import { Button } from "@/components/ui/button";
import { QueryClient, useMutation } from "@tanstack/react-query";
import Image from "next/image";
import toast from "react-hot-toast";

const UpdateStatus = ({ id, status }: { status: string; id: string }) => {
  console.log(id);

  const queryClient = new QueryClient();
  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;

    mutation.mutate({ id, status });
    toast.success("The order status has been changed!");
  };

  return (
    <form
      className="flex items-center justify-center gap-4"
      onSubmit={(e) => handleUpdate(e, id)}
    >
      <input
        placeholder={status}
        className="p-2 ring-0 bg-transparent rounded-md"
      />
      <Button className="bg-accent p-2 rounded-full">
        <Image src="/image/edit.png" alt="" width={20} height={20} />
      </Button>
    </form>
  );
};

export default UpdateStatus;
