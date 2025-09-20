import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
function ButtonLoading() {
  return (
    <div className="flex justify-center items-center">
      <Button size="lg" disabled>
        <Loader2Icon className="animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
export default ButtonLoading;
