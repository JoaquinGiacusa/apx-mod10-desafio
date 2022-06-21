import { MainLayout } from "components/layout/main-layout";
import { useRouter } from "next/router";

export default function SearchPage() {
  const router = useRouter();
  const { query } = router;

  return (
    <MainLayout>
      <div>{query?.q}</div>
    </MainLayout>
  );
}
