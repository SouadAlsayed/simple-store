function Footer() {
  return (
    <footer className="[background-color:var(--color-charcoal)] [color:var(--gray-400)]">
      <div className="grid grid-cols-[2fr_1fr_1fr] justify-between gap-5 px-20 py-10 ">
        <div className="flex flex-col px-1.5">
          <h2 className="text-xl [color:var(--color-cream)] font-bold mb-2">
            Veloura Store
          </h2>
          <p>
            Egypt’s favorite destination for clothing, blending elegance,
            comfort, and modern style. We bring you carefully curated
            collections that highlight timeless beauty with a contemporary
            touch.
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold [color:var(--gray-100)]">
            Product
          </h3>
          <ul className="space-y-1">
            <li>
              <a href="#">New In</a>
            </li>
            <li>
              <a href="#">Clothing</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-semibold [color:var(--gray-100)]">Brand</h3>
          <ul className="space-y-1">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Social Mdia</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
