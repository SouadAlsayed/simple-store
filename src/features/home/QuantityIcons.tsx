import { Button } from "@/components/ui/button";

function QuantityIcons() {
  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        className="bg-[var(--gray-100)] size-6 hover:bg-[var(--gray-200)]"
      >
        +
      </Button>

      <span className="mx-2 text-center">1</span>

      <Button
        variant="secondary"
        size="icon"
        className="bg-[var(--gray-100)] size-6 hover:bg-[var(--gray-200)]"
      >
        -
      </Button>
    </>
  );
}
export default QuantityIcons;
