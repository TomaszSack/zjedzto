interface Props {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
  pink?: boolean;
  cancel?: boolean;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  className,
  href,
  onClick,
  pink,
  cancel,
  children,
}) => (
  <a
    onClick={onClick}
    href={href}
    className={
      pink
        ? `bg-secondary-pink py-1 px-10 text-white text-sm lg:text-lg 3xl:text-xl rounded-2xl hover:scale-110 transition-all ${className}`
        : cancel
        ? "bg-white text-primary-gray border-2 border-primary-gray text-sm lg:text-lg 3xl:text-xl py-1 px-10 rounded-2xl hover:scale-110 transition-all"
        : `bg-secondary-orange py-2 px-10 text-white text-lg lg:text-2xl 3xl:text-3xl rounded-2xl hover:scale-110 transition-all ${className}`
    }
  >
    {children}
  </a>
);
export default Button;
