import { useState } from "react";
import { sendCode, getToken } from "lib/api";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { InputWhite, Label, TextField } from "ui/textfield";
import { SecondaryButton } from "ui/button";
import { Form, Root } from "./styled";
import { BodyText, TitlePage } from "ui/text";

export function Login() {
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
      // Router.push("/users");
    } catch (error: any) {
      //guardar el error en un state y mostrarlo en la pantalla
      console.log(error.message);
    }
  }

  return (
    <Root>
      {!email ? (
        <Form onSubmit={handleSubmit(handleEmailForm)}>
          <TitlePage>Ingresar</TitlePage>
          <Label>Nombre</Label>
          <InputWhite
            type="email"
            placeholder="example@example.com"
            {...register("email", { required: true })}
          ></InputWhite>
          <SecondaryButton
            className={"button"}
            text="Continuar"
          ></SecondaryButton>
        </Form>
      ) : (
        <Form onSubmit={handleSubmit(handleCodeForm)}>
          <TitlePage>Codigo</TitlePage>
          <InputWhite
            type="text"
            placeholder="123456"
            {...register("code", { required: true })}
          ></InputWhite>
          <BodyText>Te envíamos un código a tu mail</BodyText>
          <SecondaryButton
            className={"button"}
            text="ingresar"
          ></SecondaryButton>
        </Form>
      )}
    </Root>
  );
}
