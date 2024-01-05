"use client";

import Image from "next/image";
import { X } from "lucide-react";
import "@uploadthing/react/styles.css";

import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
interface FileUploadProps {
  endpoint: "imageUploader";
  value: string;
  onChange: (url?: string) => void;
}
export default function UploadFile({
  endpoint,
  value,
  onChange,
}: FileUploadProps) {
  const fileType = value?.split(".").pop();
  if (value && fileType !== "pdf") {
    return (
      <div className=" relative">
        <Image
          src={value}
          alt="server image"
          className="object-cover rounded-lg"
          width={800}
          height={500}
        />
        <button
          className="bg-red-500 text-white p-1 absolute top-0 right-0 shadow-sm rounded-full"
          onClick={() => onChange("")}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
  return (
    <main className="">
      <UploadButton
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          // Do something with the response
          onChange(res?.[0].url);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
