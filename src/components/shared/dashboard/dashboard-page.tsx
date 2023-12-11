import TopOrderCard from "@/components/card/dashboard/top-order-card";
import TopProductsCard from "@/components/card/dashboard/top-products-card";
import TopSell from "@/components/card/dashboard/top-sell-card";
import UserTable from "../user-table";
import FoodTable from "../food-table";

const DashboardPage = () => {
  return (
    <div className=" font-Inter w-full">
      <div className="grid grid-cols-1 gap-8 place-items-center justify-content-center justify-center md:grid-cols-3 p-4">
        <div className="w-64 mx-auto md:w-44">
          <TopSell />
        </div>
        <div className="w-64 mx-auto md:w-44">
          <TopProductsCard />
        </div>
        <div className="w-64 mx-auto md:w-44">
          <TopOrderCard />
        </div>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center justify-content-center justify-center">
        <div>
          <UserTable />
        </div>
        <div>
          <FoodTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
