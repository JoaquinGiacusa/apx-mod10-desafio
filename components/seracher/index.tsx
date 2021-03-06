import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputWhite } from "ui/textfield";
import { PrimaryButton, SecondaryButton } from "ui/button";
import { RootForm } from "./styled";

export function SearchItem() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function submitHandler(data: any) {
    router.push("/search?q=" + data.search + "&limit=4&offset=0");
  }

  return (
    <RootForm onSubmit={handleSubmit(submitHandler)}>
      <InputWhite
        placeholder="EncontrĂ¡ tu producto ideal..."
        type="text"
        {...register("search", { required: true })}
      />

      <PrimaryButton text="Buscar" />
    </RootForm>
  );
}
