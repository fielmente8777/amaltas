import LandingNavbar from "@/src/components/navbar/LandingNavbar";
import LandingFooter from "../(landing-page)/components/LandingFooter";
export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LandingNavbar />

      {children}

      <LandingFooter />
    </>
  );
}
