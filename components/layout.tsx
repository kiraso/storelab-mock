import { useRouter } from "next/router";
import { Sidebar } from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const showSidebar = !router.pathname.startsWith("/auth");

  return (
    <div>
      {showSidebar && <Sidebar />}
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
