import { Button } from "@/components/ui/button";
import { useProducts } from "@/context/ProductContext";

interface QuantityIconsProps {
  id: number;
}

function QuantityIcons({ id }: QuantityIconsProps) {
  const { cartItems, updateQuantity } = useProducts();

  const item = cartItems.find((i) => i.id === id);
  const quantity = item?.quantity ?? 1;

  function handleIncreaseQuantity() {
    updateQuantity(id, quantity + 1);
  }

  function handleDecreaseQuantity() {
    updateQuantity(id, quantity > 1 ? quantity - 1 : 1);
  }

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
