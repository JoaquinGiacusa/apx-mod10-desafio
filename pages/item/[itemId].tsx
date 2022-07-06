import { Item } from "components/item";
import { MainLayout } from "components/layout/main-layout";
import { useRouter } from "next/router";

export default function ItemPage() {
  const router = useRouter();
  const { itemId } = router.query;

  return (
    <MainLayout searcher={true}>
      <Item itemId={itemId}></Item>
    </MainLayout>
  );
}
