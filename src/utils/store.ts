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
    const existingItem = get().products.find(
      (product) => product.id === item.id
    );
    console.log(existingItem);

    if (existingItem) {
      // If the item is already in the cart, update quantity and price
      set((state) => ({
        products: state.products.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + item.quantity }
            : product
        ),
        totalItems: state.totalItems + item.quantity,
        totalPrice: state.totalPrice + item.price,
      }));
    } else {
      // If the item is not in the cart, add it to the cart
      set((state) => ({
        products: [...state.products, item],
        totalItems: state.totalItems + item.quantity,
        totalPrice: state.totalPrice + item.price,
      }));
    }
  },
  removeFromCart(item) {
    set((state) => ({
      products: state.products.filter((product) => product.id !== item.id),
      quantity: state.totalItems - item.quantity,
      price: state.totalPrice - item.price,
    }));
  },

  increaseQuantity(itemId: string) {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === itemId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
      totalItems: state.totalItems + 1,
      totalPrice:
        state.totalPrice +
        (state.products.find((p) => p.id === itemId)?.price || 0),
    }));
  },

  decreaseQuantity(itemId: string) {
    set((state) => {
      const updatedProducts = state.products.map((product) =>
        product.id === itemId
          ? { ...product, quantity: Math.max(1, product.quantity - 1) } // Ensure quantity is at least 1
          : product
      );

      const updatedItem = updatedProducts.find((p) => p.id === itemId);
      const quantityChange =
        (state.products.find((p) => p.id === itemId)?.quantity || 0) -
        (updatedItem?.quantity || 0);
      const priceChange = quantityChange * (updatedItem?.price || 0);

      return {
        products: updatedProducts,
        totalItems: Math.max(0, state.totalItems - quantityChange), // Ensure totalItems is at least 0
        totalPrice: Math.max(0, state.totalPrice - priceChange), // Ensure totalPrice is at least 0
      };
    });
  },
}));

/** 
addToCart(item) {
    const existingItem = get().products.find((product) => product.id === item.id);

    if (existingItem) {
      // If the item is already in the cart, update quantity and price
      set((state) => ({
        products: state.products.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + item.quantity }
            : product
        ),
        totalItems: state.totalItems + item.quantity,
        totalPrice: state.totalPrice + item.price,
      }));
    } else {
      // If the item is not in the cart, add it to the cart
      set((state) => ({
        products: [...state.products, item],
        totalItems: state.totalItems + item.quantity,
        totalPrice: state.totalPrice + item.price,
      }));
    }
  },
*/

/**
    increaseQuantity(itemId) {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === itemId ? { ...product, quantity: product.quantity + 1 } : product
      ),
      totalItems: state.totalItems + 1,
      totalPrice: state.totalPrice + state.products.find((p) => p.id === itemId)?.price || 0,
    }));
  },

  decreaseQuantity(itemId) {
    set((state) => {
      const updatedProducts = state.products.map((product) =>
        product.id === itemId
          ? { ...product, quantity: Math.max(1, product.quantity - 1) } // Ensure quantity is at least 1
          : product
      );

      const updatedItem = updatedProducts.find((p) => p.id === itemId);
      const quantityChange = (state.products.find((p) => p.id === itemId)?.quantity || 0) - (updatedItem?.quantity || 0);
      const priceChange = quantityChange * (updatedItem?.price || 0);

      return {
        products: updatedProducts,
        totalItems: Math.max(0, state.totalItems - quantityChange), // Ensure totalItems is at least 0
        totalPrice: Math.max(0, state.totalPrice - priceChange), // Ensure totalPrice is at least 0
      };
    });
  },
}));
*/
