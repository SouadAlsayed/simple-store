import { Button } from "@/components/ui/button";
import { useProducts } from "@/context/ProductContext";
import ButtonLoading from "@/ui/ButtonLoading";
interface QuantityIconsProps {
  id: number;
}

function QuantityIcons({ id }: QuantityIconsProps) {
  const { products, setProducts, isLoading } = useProducts();

  const product = products.find((p) => p.id === id);
  const quantity = product ? product.quantity : 1;

  function handleIncreaseQuantity() {
    setProducts(
      products.map((p) =>
        p === product ? { ...product, quantity: product.quantity + 1 } : p
      )
    );
  }

  function handleDecreaseQuantity() {
    setProducts(
      products.map((p) =>
        p === product
          ? {
              ...product,
              quantity: product.quantity > 1 ? product.quantity - 1 : 1,
            }
          : p
      )
    );
  }

  if (isLoading) return <ButtonLoading />;
  return (
    <>
      <Button
        onClick={handleDecreaseQuantity}
        variant="secondary"
        size="icon"
        className="bg-[var(--gray-100)] size-6 hover:bg-[var(--gray-200)]"
      >
        -
      </Button>

      <span className="mx-2 text-center">{quantity}</span>

      <Button
        onClick={handleIncreaseQuantity}
        variant="secondary"
        size="icon"
        className="bg-[var(--gray-100)] size-6 hover:bg-[var(--gray-200)]"
      >
        +
      </Button>
    </>
  );
}
export default QuantityIcons;
