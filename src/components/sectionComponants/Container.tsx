interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({
  className = "",
  children,
  id = "",
  style = {},
  ...props
}) => {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 ${className}`}
      id={id}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
