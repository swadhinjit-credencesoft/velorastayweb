import Header from "@/components/layout/Header/Header";
import MobileNav from "@/components/layout/MobileNav/MobileNav";
import Footer from "@/components/layout/Footer/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton/WhatsAppButton";

export default function LayoutSwitcher({ children }: { children: React.ReactNode }) {
  return <><Header/><MobileNav/>{children}<Footer/><WhatsAppButton/></>;
}
