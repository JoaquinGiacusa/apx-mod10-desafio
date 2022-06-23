import { MainLayout } from "components/layout/main-layout";
import { useRouter } from "next/router";
import { ResultSearchItems } from "components/results-search";

export default function SearchPage() {
  const router = useRouter();
  const { query } = router;
  const search = query.q;
  const limit = query.limit;
  const offset = query.offset;

  return (
    <MainLayout>
      <ResultSearchItems
        query={search}
        limit={limit}
        offset={offset}
      ></ResultSearchItems>
    </MainLayout>
  );
}
