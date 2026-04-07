export const metadata = {
  title: "Andrew P. McAllister",
  description: "Finance leader focused on systems, pricing, capital, and sustained EBITDA growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#020617" }}>
        {children}
      </body>
    </html>
  );
}
