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
    <Card className="bg-[var(--gray-50)] flex flex-row justify-around">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-[var(--gray-600)]">
          {category}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <img className="h-48 w-full object-contain" src={image} />

        <p className="my-3">{price}$</p>

        <QuantityIcons id={id} />
      </CardContent>

      <CardFooter className="flex flex-col justify-around">
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
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
}
export default CartItem;
