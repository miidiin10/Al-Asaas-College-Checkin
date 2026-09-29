import "./globals.css";
import Header from "../components/Header";
import BrandBadge from "../components/BrandBadge";

export const metadata = {
  title: "Teacher Attendance",
  description: "Scan in, see the daily and monthly earliest-arrival ranking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-slate-900">
        <div className="max-w-md mx-auto p-4">
          <Header />
	<header className="bg-white border-b border-slate-200 py-4 px-4 shadow-sm sticky top-0 z-10">
          <div className="max-w-lg mx-auto flex items-center justify-center">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              {/* Make sure this matches your actual file name exactly */}
              <img 
                src="/logo.jpg" 
                alt="Al-asaas College" 
                className="h-20 w-auto max-w-full object-contain"
              />
              <span className="font-bold text-slate-800 text-lg hidden sm:inline">
                Attendance
              </span>
            </a>
          </div>
        </header>
          {children}
        </div>
        <BrandBadge />
      </body>
    </html>
  );
}
