import { ReactNode } from "react";

interface Props {
  type?:
    | "primary" //use typescript to limit values
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light";
  children: ReactNode;
  onClose?: () => void;
}
/*  destructure props  
    const Alert = (props: Props)...
*/
const Alert = ({ type = "primary", children, onClose }: Props) => {
  return (
    <div
      className={"alert alert-" + type + " alert-dismissible fade show"}
      role="alert"
    >
      {children}

      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
