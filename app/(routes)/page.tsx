import getBillBoards from "@/actions/get-billboards";
import BillBoard from "@/components/BillBoard";

import Container from "@/components/ui/Container";
import { Billboard } from "@/types";

type Props = {
  data: Billboard;
};
export const revalidate = 0;
export default async function HomePage({ data }: Props) {
  const billBoards = await getBillBoards(
    "4178dbe4-b67c-4fc9-b6e3-f1663451400e"
  );
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillBoard data={billBoards} />
      </div>
    </Container>
  );
}
