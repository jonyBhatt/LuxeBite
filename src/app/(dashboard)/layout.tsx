import Sidebar from "@/components/shared/dashboard/side-bar";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="admin-bg p-2 min-h-screen">
      <div className="flex ">
        <Sidebar />
        {children}
      </div>
    </section>
  );
}
