import { Outlet } from 'react-router-dom';
//import Navbar from '../navigation/Navbar';
import ResponsiveAppBar from './ResponsiveAppbar';

export default function NavbarLayout(props) {
  const { checked, onChange } = props;

  return (
    <>
      <ResponsiveAppBar checked={checked} onChange={onChange} />
      <>
        <Outlet />
      </>
    </>
  );
}
