import { FormProfile, Root } from "./styled";
import { InputWhite, Label, TextField } from "ui/textfield";
import { useForm } from "react-hook-form";
import { TitlePage } from "ui/text";
import { loadDefaultErrorComponents } from "next/dist/server/load-components";
import { SecondaryButton } from "ui/button";

export function Profile() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function handleForm(data: any) {
    console.log(data);
  }

  return (
    <Root>
      <TitlePage>Perfil</TitlePage>
      <FormProfile onSubmit={handleSubmit(handleForm)}>
        <Label>Nombre</Label>
        <InputWhite
          className="input"
          type="name"
          {...register("name", { required: true })}
        ></InputWhite>

        <div style={{ width: "100%" }}>
          <Label>Dirección</Label>
          <InputWhite
            className="input"
            type="address"
            {...register("address", { required: true })}
          ></InputWhite>
        </div>
        <div style={{ width: "100%" }}>
          <Label>Teléfono</Label>
          <InputWhite
            className="input"
            type="telefono"
            {...register("telefono")}
          ></InputWhite>
        </div>
        <SecondaryButton className={"button"} text="Guardar"></SecondaryButton>
      </FormProfile>
    </Root>
  );
}
