export type MenuType = {
  id: string;
  title: string;
  desc: string;
  price: number;
  img: string;
  catSlug: string;
};
export type ShortMenuType = {
  id?: string;
  title?: string;
  description: string;
  price: number;
  image: string;
  category?: string;
};

export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  quantity?: string;
  catSlug?: string;
};

export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  status: string;
  createdAt: string;
  intent_id?: String;
};

export type CartItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
};

export type paymentType = {
  id: string;
  name: string;
  orderId: string;
  number: string;
  address: string;
  createdAt: string;
};

export type ActionTypes = {
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
};
