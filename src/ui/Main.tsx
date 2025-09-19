interface ChildrenProps {
  children: React.ReactNode;
}

function Main({ children }: ChildrenProps) {
  return <main>{children}</main>;
}

export default Main;
