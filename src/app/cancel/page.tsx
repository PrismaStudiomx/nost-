export default function CancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-6xl mb-6">
          Payment Cancelled
        </h1>

        <p className="text-neutral-500 mb-8">
          Your checkout was not completed.
        </p>

        <a
          href="/cart"
          className="
            inline-block
            border
            px-8
            py-4
            uppercase
            tracking-widest
          "
        >
          Back To Cart
        </a>

      </div>

    </main>
  );
}