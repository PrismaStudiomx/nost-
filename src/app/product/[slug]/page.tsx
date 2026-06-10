import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import type { Metadata } from "next";
import AddToCartButton from "@/components/AddToCartButton";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return {};
  }

  return {
  title: product.name,
  description: product.description,

  openGraph: {
    title: product.name,
    description: product.description,
    images: [product.image],
  },
};
}

export default async function ProductPage({
  params,
}: Props) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16">

          <div className="relative h-175">

            <Image
  src={product.image}
  alt={product.name}
  fill
  priority
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-cover"
/>

          </div>

          <div>

            <h1 className="text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 text-neutral-600">
              {product.description}
            </p>

            <div className="mt-8 text-2xl">
              ${product.price}
            </div>

            <AddToCartButton
  id={product.id}
  name={product.name}
  price={product.price}
  image={product.image}
/>

          </div>

        </div>

      </div>

    </main>
  );
}