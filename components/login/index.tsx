import { sendCode } from "lib/api";

export function LoginPage() {
  const handle = async () => {
    sendCode("email");
  };

  return <form onSubmit={handle}></form>;
}
