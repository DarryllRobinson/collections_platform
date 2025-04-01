import ResponsiveAppBar from "./ResponsiveAppbar";

export default function NavbarLayout(props) {
  const { checked, onChange } = props;

  return (
    <>
      <ResponsiveAppBar checked={checked} onChange={onChange} />
    </>
  );
}
