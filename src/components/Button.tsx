type Props = {
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({children}) => (
  <a
    href="#menu"
    className="bg-secondary-orange py-2 px-10 text-white text-3xl rounded-2xl"
  >
    {children}
  </a>
);
export default Button;
