const Footer = () => {

  return (
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

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/company/idr-law", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com/idrlaw", label: "Twitter" },
              { icon: Facebook, href: "https://www.facebook.com/idrlaw", label: "Facebook" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
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
