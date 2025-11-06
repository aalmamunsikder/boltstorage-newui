import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";
import FavoritesSidebar, { FavoritesSidebarProvider, useFavoritesSidebar } from "../components/sidebar/FavoritesSidebar";
import UploadProgressPanel from "../components/upload/UploadProgressPanel";

const LayoutContent: React.FC = () => {
  const { isExpanded, isMobileOpen } = useSidebar();
  const { isExpanded: favoritesSidebarExpanded } = useFavoritesSidebar();

  // Only include sidebar width in margin calculation when sidebar is visible
  const mainSidebarWidth = isMobileOpen || isExpanded ? 290 : (window.innerWidth >= 1024 ? 90 : 0);
  const favoritesSidebarWidth = favoritesSidebarExpanded ? 256 : 0;
  const totalLeftMargin = mainSidebarWidth + favoritesSidebarWidth;

  return (
    <div className="min-h-screen lg:flex">
      <div>
        <AppSidebar />
        <div className="hidden lg:block">
          <FavoritesSidebar />
        </div>
        <Backdrop />
      </div>
      <div
        className="flex-1 transition-all duration-300 ease-in-out border-0"
        style={{
          marginLeft: window.innerWidth >= 1024 ? `${totalLeftMargin}px` : 0,
        }}
      >
        <AppHeader />
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </div>
      
      {/* Upload Progress Panel - Always available */}
      <UploadProgressPanel />
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <FavoritesSidebarProvider>
        <LayoutContent />
      </FavoritesSidebarProvider>
    </SidebarProvider>
  );
};

export default AppLayout;