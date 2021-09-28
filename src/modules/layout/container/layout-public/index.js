export function LayoutPublic(props) {
  const { children } = props;

  return (
    <div className="layout-public">
      HEADER DEL LAYOUT PUBLIC
      {children}
      FOOTER DEL LAYOUT PUBLIC
    </div>
  );
}
