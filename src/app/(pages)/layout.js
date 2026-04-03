import { Footer } from "@/components/layouts/Footer";
import WhatsAppIcon from "@/components/layouts/WhatsAppIcon";

export default function PagesLayout({ children }) {
  return (
    <>
      {children}
      <WhatsAppIcon />
      <Footer />
    </>
  );
}