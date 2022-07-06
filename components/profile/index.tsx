import { ErrorForm, FormProfile, Root } from "./styled";
import { InputWhite, Label, TextField } from "ui/textfield";
import { useForm } from "react-hook-form";
import { TitlePage } from "ui/text";
import { useMe } from "lib/hooks";
import { SecondaryButton } from "ui/button";
import { useEffect, useState } from "react";
import { updateName, updateAddress } from "lib/api";

export function Profile() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const { data } = useMe();

  useEffect(() => {
    if (data) {
      setValue("name", data?.name + " " + data?.lastName);
      setValue("address", data?.address);
      setValue("phoneNum", data?.phoneNum);
    }
  }, [data]);

  function handleForm(data: any) {
    console.log(data);
    const fullName = data.name;
    const name = fullName.split(" ")[0];
    const lastName = fullName.split(" ")[1];
    const address = data.address;

    updateName(name, lastName);
    updateAddress(address);
  }

  return (
    <Root>
      <TitlePage>Perfil</TitlePage>
      <FormProfile onSubmit={handleSubmit(handleForm)}>
        <div style={{ width: "100%" }}>
          <Label>Nombre</Label>
          <InputWhite
            className="input"
            type="text"
            {...register("name", { required: true })}
          ></InputWhite>
          {errors.name && <ErrorForm>Falta el nombre</ErrorForm>}
        </div>
        <div style={{ width: "100%" }}>
          <Label>Dirección</Label>
          <InputWhite
            className="input"
            type="text"
            {...register("address", { required: true })}
          ></InputWhite>
          {errors.address && <ErrorForm>Falta la dirección</ErrorForm>}
        </div>
        <div style={{ width: "100%" }}>
          <Label>Teléfono</Label>
          <InputWhite
            className="input"
            type="text"
            {...register("phoneNum")}
          ></InputWhite>
        </div>
        <SecondaryButton className={"button"} text="Guardar"></SecondaryButton>
      </FormProfile>
    </Root>
  );
}
