import { UserDetails, UserOrder, Wishlist } from "@/components/shared/me";

const Profile = () => {
  return (
    <section className="container mx-auto my-8 font-Inter">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center md:place-items-start">
        {/* User Details */}
        <UserDetails />
        {/* Wishlist */}
        <Wishlist />
        {/* Orders */}
        <UserOrder />
      </div>
    </section>
  );
};

export default Profile;
