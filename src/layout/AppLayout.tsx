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

  const mainSidebarWidth = isExpanded ? 290 : 90;
  const favoritesSidebarWidth = favoritesSidebarExpanded ? 256 : 0;
  const totalLeftMargin = mainSidebarWidth + favoritesSidebarWidth;

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <FavoritesSidebar />
        <Backdrop />
      </div>
      <div
        className="flex-1 transition-all duration-300 ease-in-out"
        style={{
          marginLeft: isMobileOpen ? 0 : `${totalLeftMargin}px`,
        }}
      >
        <AppHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
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
