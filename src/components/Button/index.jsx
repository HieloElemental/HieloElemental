import { PropTypes } from "prop-types";

const typeClassNames = {
  primary:
    "bg-lime-700 text-stone-100 border border-lime-700 hover:bg-transparent hover:text-lime-700",
  secondary:
    "border border-lime-700 bg-transparent text-lime-700 hover:bg-lime-700 hover:text-stone-100",
};

const Button = ({
  className,
  type = "primary",
  href,
  children,
  download = false,
}) => {
  return (
    <div
      className={`inline-block p-2 max-w-fit rounded-md cursor-pointer ${typeClassNames[type]} ${className}`}
    >
      <a href={href} download={download}>
        {children}
      </a>
    </div>
  );
};
Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  download: PropTypes.bool,
};

export default Button;
