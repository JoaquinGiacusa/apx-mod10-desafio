import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { HeaderInput } from "ui/textfield";
import { SecondaryButton } from "ui/button";
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
    router.push("/search?q=" + data.search);
  }

  const mobile = true;

  return (
    <FormBase
      className={mobile ? "mobile" : "noMobile"}
      onSubmit={handleSubmit(submitHandler)}
    >
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
