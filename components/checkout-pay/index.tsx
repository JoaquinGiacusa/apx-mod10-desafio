import { useRouter } from "next/router";
import { CreateBuyOrder } from "lib/api";
import { useEffect } from "react";

export function CheckoutPay() {
  const router = useRouter();
  const { itemId } = router.query;

  async function RedirectPay() {
    const res = await CreateBuyOrder(itemId as any);
    router.push(res.url);
  }

  useEffect(() => {
    RedirectPay();
  });

  return <div>CheckoutPay</div>;
}
