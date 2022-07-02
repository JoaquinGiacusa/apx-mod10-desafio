import { useState } from "react";
import { sendCode, getToken, getSaveToken } from "lib/api";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { InputWhite, Label, TextField } from "ui/textfield";
import { SecondaryButton } from "ui/button";
import { FormLogin, Root } from "./styled";
import { BodyText, TitlePage } from "ui/text";

export function Login() {
  const router = useRouter();
  const token = getSaveToken();

  if (token) {
    router.push("profile");
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");

  function handleEmailForm(data: any) {
    try {
      sendCode(data.email);
      setEmail(data.email);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleCodeForm(data: any) {
    const code = data.code;
    try {
      await getToken(email, code);
      router.push("/");
    } catch (error: any) {
      //guardar el error en un state y mostrarlo en la pantalla
      console.log(error.message);
    }
  }

  return (
    <Root>
      {!email ? (
        <FormLogin onSubmit={handleSubmit(handleEmailForm)}>
          <TitlePage>Ingresar</TitlePage>
          <Label className={"label"}>Email</Label>
          <InputWhite
            className="input"
            type="email"
            placeholder="example@example.com"
            {...register("email", { required: true })}
          ></InputWhite>
          <SecondaryButton
            className={"button"}
            text="Continuar"
          ></SecondaryButton>
        </FormLogin>
      ) : (
        <FormLogin onSubmit={handleSubmit(handleCodeForm)}>
          <TitlePage>Codigo</TitlePage>
          <InputWhite
            className="input"
            type="text"
            placeholder="123456"
            {...register("code", { required: true })}
          ></InputWhite>
          <BodyText className="text-msj">
            Te envíamos un código a tu mail
          </BodyText>
          <SecondaryButton
            className={"button"}
            text="ingresar"
          ></SecondaryButton>
        </FormLogin>
      )}
    </Root>
  );
}
