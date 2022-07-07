import { useRouter } from "next/router";
import { CreateBuyOrder } from "lib/api";
import { useEffect } from "react";

export function CheckoutPay() {
  const router = useRouter();
  const { itemId } = router.query;

  // CreateBuyOrder(itemId as any).then((res) => {
  //   router.push(res.url);
  // });
  async function test() {
    const res = await CreateBuyOrder(itemId as any);
    router.push(res.url);
  }

  useEffect(() => {
    test();
  });

  return <div>CheckoutPay</div>;
}
