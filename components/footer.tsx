export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#FFD700]/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-[#FFD700] font-montserrat font-bold text-lg mb-4">99Films</h4>
            <p className="text-[#C0C0C0] font-open-sans text-sm leading-relaxed">
              Empowering independent filmmakers with complete ecosystem solutions from production to global
              distribution.
            </p>
          </div>

          <div>
            <h4 className="text-[#FFD700] font-montserrat font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-[#C0C0C0] font-open-sans text-sm">
              <li>
                <a href="#" className="hover:text-[#FFD700] transition-colors">
                  Film Production
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFD700] transition-colors">
                  White Label Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFD700] transition-colors">
                  In-Film Branding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFD700] transition-colors">
                  OTT Integration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFD700] font-montserrat font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-[#C0C0C0] font-open-sans text-sm">
              <li>
                <a href="#" className="hover:text-[#FFD700] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFD700] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFD700] transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFD700] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFD700] font-montserrat font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-[#C0C0C0] font-open-sans text-sm">
              <li>
                <a href="#" className="hover:text-[#FFD700] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFD700] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFD700] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#FFD700]/20 mt-8 pt-8 text-center">
          <p className="text-[#C0C0C0] font-open-sans text-sm">© 2025 99Films. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
