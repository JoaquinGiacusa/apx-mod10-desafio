import { useRouter } from "next/router";
import { CreateBuyOrder } from "lib/api";

export function CheckoutPay() {
  const router = useRouter();
  const { itemId } = router.query;

  CreateBuyOrder(itemId as any).then((res) => {
    router.push(res.url);
  });

  return <div>CheckoutPay</div>;
}
