import Link from "next/link";
import Container from "./ui/Container";
import MainNav from "./MainNav";
import getCategories from "@/actions/get-categories";
import NavBarActions from "./NavBarActions";

type Props = {};
export const revalidate = 0;
export default async function NavBar({}: Props) {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />

          <NavBarActions />
        </div>
      </Container>
    </div>
  );
}
