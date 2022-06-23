import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HeaderInput, InputWhite } from "ui/textfield";
import { PrimaryButton, SecondaryButton } from "ui/button";
import { FormBase } from "./styled";

export function SearcherHeader({}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function submitHandler(data: any) {
    router.push("/search?q=" + data.search + "&limit=5&offset=0");
  }

  return (
    <FormBase onSubmit={handleSubmit(submitHandler)}>
      <HeaderInput
        placeholder="Encontrá tu producto ideal..."
        type="text"
        {...register("search", { required: true })}
      />
      <div className="buton-search-container">
        <SecondaryButton text="Buscar" />
      </div>
    </FormBase>
  );
}
