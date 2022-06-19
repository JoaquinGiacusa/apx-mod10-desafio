import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputStyled } from "ui/textfield";
import { PrimaryButton } from "ui/button";
import { FormBase } from "./styled";

export function SearchItem() {
  // const [search, setSearch] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function submitHandler(data: any) {
    router.push("/search?q=" + data.search);
  }

  const name = watch("nombre");
  if (name?.length > 3) {
    console.log("tiene muchas letras");
  }

  return (
    <FormBase onSubmit={handleSubmit(submitHandler)}>
      <InputStyled
        placeholder="Encontrá tu producto ideal..."
        type="text"
        {...register("search", { required: true })}
      />

      <PrimaryButton text="Buscar" />
    </FormBase>
  );
}
