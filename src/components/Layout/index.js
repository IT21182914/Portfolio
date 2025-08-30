import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/';
import UpdateBanner from '../UpdateBanner/';
import './index.scss';

const Layout = () => {
  return (
    <>
      <UpdateBanner />
      <Sidebar />
      <div className="page horizontal-scroll-fix">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </>
  );
};

export default Layout;
