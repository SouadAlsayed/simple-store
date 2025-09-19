import { Button } from "./button";

function Header() {
  return (
    <header className="[background-color:var(--color-cream)] flex justify-between items-center border-b-2 px-3 py-2">
      <div className="flex font-bold text-lg">Veloura</div>

      <nav className="flex justify-between items-center gap-10">
        <Button variant="link">Home</Button>
        <Button variant="link">Shop</Button>
        <Button variant="link">About</Button>
        <Button variant="link">Contact</Button>
      </nav>

      <div className="flex font-semibold">Cart</div>
    </header>
  );
}

export default Header;
