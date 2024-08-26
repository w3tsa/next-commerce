import Link from "next/link";
import { getMenu } from "src/lib/shopify";
import { Icons } from "src/components/icons";

export default async function NavMenu() {
  const menu = await getMenu("main-menu");
  return (
    <nav className="ml-auto flex gap-4 sm:gap-6">
      {menu?.map((item) => (
        <Link
          href={item.path}
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
          key={item.title}
        >
          {item.title}
        </Link>
      ))}
      <Link href="#" className="flex items-center" prefetch={false}>
        <Icons.cart className="h-6 w-6" />
        <span className="sr-only">Cart</span>
      </Link>
    </nav>
  );
}
