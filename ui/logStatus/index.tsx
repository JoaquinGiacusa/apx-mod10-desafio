import styled from "styled-components";

type PropsLogStatus = {
  email: string;
  onClick: any;
};

export function LogStatus({ email, onClick }: PropsLogStatus) {
  return (
    <div>
      <p>{email}</p>
      <p
        onClick={onClick}
        style={{ color: "var(--celeste)", cursor: "pointer" }}
      >
        CERRAR SESIÓN
      </p>
    </div>
  );
}
