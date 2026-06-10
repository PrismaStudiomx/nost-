export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-6xl mb-6">
          Payment Successful
        </h1>

        <p className="text-neutral-500 mb-8">
          Thank you for your order.
        </p>

        <a
          href="/"
          className="
            inline-block
            border
            px-8
            py-4
            uppercase
            tracking-widest
          "
        >
          Continue Shopping
        </a>

      </div>

    </main>
  );
}