export default function Footer() {
  return (
    <footer className="border-t mt-40">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold">
              NOST
            </h3>

            <p className="text-sm text-neutral-500 mt-3">
              Designer streetwear crafted for creators.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium mb-4">
              Shop
            </h4>

            <ul className="space-y-3 text-sm text-neutral-500">

              <li>
                <a href="#">
                  Oversized Hoodie
                </a>
              </li>

              <li>
                <a href="#">
                  Essential Tee
                </a>
              </li>

              <li>
                <a href="#">
                  Cargo Pants
                </a>
              </li>

              <li>
                <a href="#">
                  Designer Jacket
                </a>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium mb-4">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-neutral-500">

              <li>
                <a href="#">
                  About
                </a>
              </li>

              <li>
                <a href="#">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-medium mb-4">
              Follow
            </h4>

            <ul className="space-y-3 text-sm text-neutral-500">

              <li>
                <a href="#">
                  Instagram
                </a>
              </li>

              <li>
                <a href="#">
                  TikTok
                </a>
              </li>

              <li>
                <a href="#">
                  Pinterest
                </a>
              </li>

            </ul>
          </div>

        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-neutral-500">

          <span>
            © 2026 NOST. All rights reserved.
          </span>

          <span>
            Powered by Prisma Studio
          </span>

        </div>

      </div>
    </footer>
  );
}