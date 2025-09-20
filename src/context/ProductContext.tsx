import { getProducts } from "@/services/fetchApi";
import type { Product, ProductContextType } from "@/types/product";
import { createContext, useContext, useEffect, useState } from "react";

interface ProductProviderProps {
  children: React.ReactNode;
}

const ProductsContext = createContext<ProductContextType>({
  products: [],
  isLoading: false,
  error: null,
  setProducts: () => {},
});

function ProductsProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
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

  return (
    <ProductsContext.Provider
      value={{ products, isLoading, error, setProducts }}
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
