import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillBoards = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`, {
    cache: "no-cache",
  });
  console.log("res", res);
  return res.json();
};
export default getBillBoards;
