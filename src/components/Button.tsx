type Props = {
  href?:string,
  pink?:boolean,
  children: React.ReactNode,
};

const Button: React.FC<Props> = ({ href, pink, children }) => (
  <a
    href={href}
    className={
      pink
        ? "bg-secondary-pink text-white text-xl py-1 px-10 rounded-2xl"
        : "bg-secondary-orange py-2 px-10 text-white text-3xl rounded-2xl"
    }
  >
    {children}
  </a>
);
export default Button;
