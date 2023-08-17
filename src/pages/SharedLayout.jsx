import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/index';

const SharedLayout = () => {
  return (
    <main>
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    </main>
  )
}
export default SharedLayout;