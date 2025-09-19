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

function CardItem() {
  return (
    <Card className="bg-[var(--gray-50)]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription className="text-[var(--gray-600)]">
          Card Category
        </CardDescription>
      </CardHeader>

      <CardContent>
        <img src="/bg.jpg" />

        <p className="my-3">100$</p>

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
