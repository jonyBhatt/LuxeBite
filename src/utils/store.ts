import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartType, ActionTypes } from "@/types";

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create<CartType & ActionTypes>((set, get) => ({
  products: INITIAL_STATE.products,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,

  addToCart(item) {
    set((state) => ({
      products: [...state.products, item],
      quantity: state.totalItems + item.quantity,
      price: state.totalPrice + item.price,
    }));
  },
  removeFromCart(item) {
    set((state) => ({
      products: state.products.filter((product) => product.id !== item.id),
      quantity: state.totalItems - item.quantity,
      price: state.totalPrice - item.price,
    }));
  },
}));
