"use client"

import Navbar from "@/module/Navbar";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Footer from "@/module/Footer";

/**
     * HomeLayout component wraps the page content with Navbar and Footer.
     * It conditionally hides Navbar and Footer on specific routes like login or password pages.
     * 
     * @param children - The main content to be rendered inside the layout.
     * @param role - The user role, used to customize the Navbar.
 */

const HomeLayout = ({ children }: { children: React.ReactNode; }) => {

       // Get current route pathname
    const pathname = usePathname();

    // Define routes where layout components (Navbar, Footer) should be hidden
    const hideLayout = [
        "/login",
        "/register",
        "/forgot-password",
        "/reset-password",
        "/set-password"
    ].includes(pathname);

      const [queryClient] = useState(() => new QueryClient());

    return (
        <body>
            {!hideLayout && <Navbar />}
            
            {/* Render main page content */}
             <QueryClientProvider client={queryClient} >
                {children}
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </QueryClientProvider>

            { <Footer />}
        
            {/* Toast notifications container */}
            <Toaster />
        </body>
    );
};

export default HomeLayout;