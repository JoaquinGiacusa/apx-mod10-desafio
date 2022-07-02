import { deleteSaveToken } from "lib/api";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function Logout() {
  const router = useRouter();
  const deletedToken = deleteSaveToken();

  if (deletedToken) {
    router.push("/");
  }

  //   useEffect(() => {
  //   });

  return <div></div>;
}
