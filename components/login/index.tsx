import { useEffect, useState } from "react";
import { sendCode, getToken, getSaveToken } from "lib/api";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { InputWhite, Label, TextField } from "ui/textfield";
import { SecondaryButton } from "ui/button";
import { ErrorForm, FormLogin, Root } from "./styled";
import { BodyText, TitlePage } from "ui/text";

export function Login() {
  const router = useRouter();
  const token = getSaveToken();

  const [error, setError] = useState(false);

  useEffect(() => {
    if (token) {
      router.push("profile");
    }
  });

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
      const token = await getToken(email, code);
      if (!token) {
        setError(true);
      }
    } catch (error: any) {
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
          {error ? (
            <ErrorForm>Codigo incorrecto</ErrorForm>
          ) : (
            <BodyText className="text-msj">
              Te envíamos un código a tu mail
            </BodyText>
          )}

          <SecondaryButton
            className={"button"}
            text="ingresar"
          ></SecondaryButton>
        </FormLogin>
      )}
    </Root>
  );
}
