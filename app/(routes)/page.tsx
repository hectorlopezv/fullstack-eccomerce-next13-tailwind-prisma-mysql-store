import getBillBoards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import BillBoard from "@/components/BillBoard";
import ProductList from "@/components/ProductList";

import Container from "@/components/ui/Container";

export default async function HomePage() {
  const billBoards = await getBillBoards(process.env.NEXT_STORE_ID!);
  const products = await getProducts({
    isFeatured: true,
  });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillBoard data={billBoards} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured products" items={products} />
        </div>
      </div>
    </Container>
  );
}
