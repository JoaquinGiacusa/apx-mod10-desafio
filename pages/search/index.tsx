import { useRouter } from "next/router";

export default function SearchPage() {
  const router = useRouter();
  const query = router.query.q;

  return <div>resultados de buscar: {query}</div>;
}
