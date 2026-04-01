import sraBadge from "@/assets/sra-badge.png";
import actapsLogo from "@/assets/actaps-small.webp";
import cyberEssentials from "@/assets/cyber-essentials.webp";
import legal500 from "@/assets/legal-500.webp";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground px-4 py-12 md:py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          {/* Contact info */}
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-accent font-semibold mr-2">T</span>
              <a href="tel:03301759912" className="hover:text-accent transition-colors">
                0330 175 9912
              </a>
            </p>
            <p>
              <span className="text-accent font-semibold mr-2">E</span>
              <a href="mailto:enquiries@idrlaw.co.uk" className="hover:text-accent transition-colors">
                enquiries@idrlaw.co.uk
              </a>
            </p>
            <p className="text-primary-foreground/60 pt-1">
              46 Tower Street, Harrogate HG1 1HS
            </p>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-items-center gap-6">
            <img src={sraBadge} alt="Solicitors Regulation Authority" className="h-14 object-contain" />
            <img src={actapsLogo} alt="ACTAPS" className="h-10 object-contain" />
            <img src={cyberEssentials} alt="Cyber Essentials Certified" className="h-14 object-contain" />
            <img src={legal500} alt="Legal 500" className="h-10 object-contain" />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/15 pt-6">
          <p className="text-[11px] text-primary-foreground/50 leading-relaxed text-center max-w-4xl mx-auto mb-4">
            IDR Law Limited (trading as IDR Law) are solicitors of England and Wales authorised and regulated by the Solicitors Regulation Authority No. 642790. Details of the SRA Standards and Regulations can be found at www.sra.org.uk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-primary-foreground/60 mb-3">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <span className="text-primary-foreground/30">/</span>
            <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            <span className="text-primary-foreground/30">/</span>
            <a href="#" className="hover:text-accent transition-colors">Terms and Conditions</a>
          </div>
          <p className="text-[11px] text-primary-foreground/40 text-center">
            © {new Date().getFullYear()} IDR Law. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
