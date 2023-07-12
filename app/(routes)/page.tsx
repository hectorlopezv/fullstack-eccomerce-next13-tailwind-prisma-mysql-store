import getBillBoards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import BillBoard from "@/components/BillBoard";
import ProductList from "@/components/ProductList";

import Container from "@/components/ui/Container";
import { Billboard } from "@/types";

export const revalidate = 0;
export default async function HomePage() {
  const billBoards = await getBillBoards(
    "4178dbe4-b67c-4fc9-b6e3-f1663451400e"
  );
  const products = await getProducts({
    isFeatured: true,
  });
  console.log("products", products);
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
