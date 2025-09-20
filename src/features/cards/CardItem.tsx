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

function CardItem({ title, price, category, image }: Product) {
  return (
    <Card className="bg-[var(--gray-50)]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-[var(--gray-600)]">
          {category}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <img className="h-48 w-full object-contain" src={image} />

        <p className="my-3">{price}$</p>

        <QuantityIcons />
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button
          className="border-b border-[var(--color-charcoal)] hover:text-[var(--color-rose)] hover:border-[var(--color-rose)]"
          variant="link"
        >
          Show
        </Button>
        <Button className="bg-[var(--color-charcoal)] text-[var(--color-cream)] hover:bg-[var(--color-night)]">
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
export default CardItem;
