type Props = {
  href?: string;
  className?: string;
  pink?: boolean;
  cancel?: boolean;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  className,
  href,
  pink,
  cancel,
  children,
}) => (
  <a
    href={href}
    className={
      pink
        ? `bg-secondary-pink py-1 px-10 text-white text-xl rounded-2xl ${className}`
        : cancel
        ? "bg-white text-primary-gray border-2 border-primary-gray text-xl py-1 px-10 rounded-2xl"
        : `bg-secondary-orange py-2 px-10 text-white text-3xl rounded-2xl ${className}`
    }
  >
    {children}
  </a>
);
export default Button;
