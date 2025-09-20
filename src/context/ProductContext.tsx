import { getProducts } from "@/services/fetchApi";
import type { Product, ProductContextType } from "@/types/product";
import { createContext, useContext, useEffect, useState } from "react";

interface ProductProviderProps {
  children: React.ReactNode;
}

const ProductsContext = createContext<ProductContextType>({
  products: [],
  cartItems: [],
  isLoading: false,
  error: null,
  setProducts: () => {},
  addToCart: () => {},
  deleteFromCart: () => {},
  updateQuantity: () => {},
});

function ProductsProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        const productsWithQuantity = data.map((product: Product) => ({
          ...product,
          quantity: 1,
        }));

        setProducts(productsWithQuantity);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products");
        setIsLoading(false);
      });
  }, []);

  function updateQuantity(id: number, quantity: number) {
    setCartItems((items) =>
      items.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  }

  function addToCart(item: Product) {
    setCartItems((items) => {
      if (items.find((i) => i.id === item.id))
        return items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );

      return [...items, item];
    });
  }
  function deleteFromCart(id: number) {
    setCartItems(cartItems.filter((i) => i.id !== id));
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        error,
        setProducts,
        cartItems,
        addToCart,
        deleteFromCart,
        updateQuantity,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts was used outside of ProductsProvider");
  }
  return context;
}

export { ProductsProvider, useProducts };
