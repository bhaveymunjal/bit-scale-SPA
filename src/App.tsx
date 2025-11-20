import { useState } from "react";
import { SidePanel, navigationData } from "./components/navigation";
import { Navbar } from "./components/navbar/Navbar.tsx";
import { Home } from "./components/Home.tsx";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleNavigate = (href: string) => {
        console.log("Navigating to:", href);
        // Close sidebar on mobile after navigation
        if (window.innerWidth < 1024) {
            setIsSidebarOpen(false);
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen w-full bg-white overflow-hidden">
            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar - Hidden on mobile, slide in when open */}
            <div
                className={`fixed lg:relative inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:transform-none ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                }`}
            >
                <SidePanel navigationData={navigationData} onNavigate={handleNavigate} />
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col min-w-0">
                <Navbar onMenuClick={toggleSidebar} />
                <Home />
            </div>
        </div>
    );
}

export default App;
