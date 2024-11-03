import localFont from "next/font/local";
import "./globals.css";

const mainFont = localFont({ src: "../assets/fonts/YekanBakh/YekanBakh-Regular.woff" });

export const metadata = {
  title: "طبیبینو",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={mainFont.className}>
        <div className="w-full h-auto min-h-screen mx-auto flex-grow">{children}</div>
      </body>
    </html>
  );
}
