import { deleteSaveToken } from "lib/api";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function Logout() {
  const router = useRouter();
  const deletedToken = deleteSaveToken();

  if (deletedToken) {
    router.push("/");
  }

  return <div></div>;
}
