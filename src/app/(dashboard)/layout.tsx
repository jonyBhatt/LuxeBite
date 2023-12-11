import Sidebar from "@/components/shared/dashboard/side-bar";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="admin-bg font-Inter min-h-screen">
      <div className="flex gap-4 justify-between">
        <Sidebar />
        <main className="w-full">{children}</main>
      </div>
    </section>
  );
}
