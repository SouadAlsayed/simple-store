import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import QuantityIcons from "./QuantityIcons";
import type { Product } from "@/types/product";
import { useProducts } from "@/context/ProductContext";

interface CartItemProps {
  item: Product;
}

function CartItem({ item }: CartItemProps) {
  const { id, title, price, category, image } = item;
  const { deleteFromCart } = useProducts();

  return (
    <Card className="bg-[var(--gray-50)]">
      <CardHeader className="flex justify-center items-center gap-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-[var(--gray-600)]">
          {category}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col sm:flex-row justify-between items-center">
        <img className="h-40 w-40 object-contain" src={image} />

        <p className="my-3">{price}$</p>
        <div>
          <QuantityIcons id={id} />
        </div>
        <CardFooter className="flex sm:flex-col justify-around items-center mt-3">
          <Button
            className="border-b border-[var(--color-charcoal)] hover:text-[var(--color-rose)] hover:border-[var(--color-rose)] mx-3"
            variant="link"
          >
            Show
          </Button>
          <Button
            onClick={() => deleteFromCart(id)}
            className="bg-[var(--color-charcoal)] text-[var(--color-cream)] hover:bg-[var(--color-night)] mx-3"
          >
            Delete
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
export default CartItem;
