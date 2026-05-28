import Script from 'next/script';

export const metadata = {
  title: 'ScalePerfect | Kinetic Clarity',
  description: 'The all-in-one platform for modern teams to collaborate and deliver results.',
  other: {
    'font-family': "'Inter', sans-serif",
  },
};

export default function Page() {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" strategy="beforeInteractive" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <Script id="tailwind-config" strategy="afterInteractive">
        {`
          tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                colors: {
                  "on-error": "#ffffff",
                  secondary: "#565e74",
                  primary: "#0050cb",
                  "primary-fixed-dim": "#b3c5ff",
                  "tertiary-fixed": "#ffdbd0",
                  "error-container": "#ffdad6",
                  "outline-variant": "#c2c6d8",
                  "surface-dim": "#cbdbf5",
                  "surface-variant": "#d3e4fe",
                  "secondary-container": "#dae2fd",
                  "tertiary-container": "#cc4204",
                  "primary-fixed": "#dae1ff",
                  "inverse-surface": "#213145",
                  "on-background": "#0b1c30",
                  "surface-container-high": "#dce9ff",
                  "surface-container": "#e5eeff",
                  "on-secondary-container": "#5c647a",
                  "surface-bright": "#f8f9ff",
                  "on-secondary": "#ffffff",
                  background: "#f8f9ff",
                  "surface-container-highest": "#d3e4fe",
                  "on-error-container": "#93000a",
                  "on-tertiary-fixed": "#390c00",
                  "secondary-fixed-dim": "#bec6e0",
                  "secondary-fixed": "#dae2fd",
                  "surface-container-low": "#eff4ff",
                  "on-tertiary-fixed-variant": "#832600",
                  "on-primary-fixed-variant": "#003fa4",
                  "on-primary": "#ffffff",
                  outline: "#727687",
                  "surface-container-lowest": "#ffffff",
                  surface: "#f8f9ff",
                  "on-tertiary-container": "#fff6f4",
                  "on-secondary-fixed": "#131b2e",
                  tertiary: "#a33200",
                  "on-surface-variant": "#424656",
                  "inverse-primary": "#b3c5ff",
                  "primary-container": "#0066ff",
                  "surface-tint": "#0054d6",
                  error: "#ba1a1a",
                  "inverse-on-surface": "#eaf1ff",
                  "on-tertiary": "#ffffff",
                  "on-primary-fixed": "#001849",
                  "on-secondary-fixed-variant": "#3f465c",
                  "tertiary-fixed-dim": "#ffb59d",
                  "on-primary-container": "#f8f7ff",
                  "on-surface": "#0b1c30"
                },
                borderRadius: { DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem" },
                spacing: { unit: "4px", "margin-desktop": "64px", "max-width": "1280px", lg: "24px", xl: "40px", gutter: "24px", "margin-mobile": "16px", xs: "4px", sm: "8px", md: "16px" },
                fontFamily: { "headline-lg": ["Inter"], "headline-lg-mobile": ["Inter"], "label-md": ["Inter"], "body-lg": ["Inter"], "body-md": ["Inter"], "headline-md": ["Inter"], display: ["Inter"], code: ["jetbrainsMono"], "title-lg": ["Inter"] },
                fontSize: { "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "600" }], "headline-lg-mobile": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }], "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "500" }], "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }], "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }], "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }], display: ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }], code: ["13px", { lineHeight: "20px", fontWeight: "400" }], "title-lg": ["18px", { lineHeight: "28px", fontWeight: "600" }] }
              }
            }
          }
        `}
      </Script>

      {/* TopNavBar */}
      <nav className="bg-[#f8f9ff] border-b border-[#c2c6d8] fixed top-0 w-full z-50">
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 h-16 w-full">
          <div className="font-semibold text-xl text-[#0050cb]">SaaSPlatform</div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-[#0050cb] font-bold border-b-2 border-[#0050cb] pb-1 text-sm hover:text-[#0050cb] transition-colors" href="#">Features</a>
            <a className="text-[#565e74] font-medium text-sm hover:text-[#0050cb] transition-colors" href="#">Pricing</a>
            <a className="text-[#565e74] font-medium text-sm hover:text-[#0050cb] transition-colors" href="#">About</a>
          </div>
          <button className="bg-[#0066ff] text-white px-6 py-2 text-xs font-medium rounded active:scale-95 hover:opacity-90 transition-all">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-[140px] pb-10 px-6" style={{ background: '#f8f9ff' }}>
        <div className="max-w-[1280px] mx-auto text-center" style={{ color: '#0b1c30', fontFamily: "'Inter', sans-serif" }}>
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Scale your business with <span className="text-[#0050cb]">Kinetic Clarity</span>
          </h1>
          <p className="text-lg text-[#565e74] max-w-2xl mx-auto mb-10">
            The all-in-one platform for modern teams to collaborate and deliver results. Precision-engineered for high-performance organizations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-[#0066ff] text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-sm hover:shadow-md transition-shadow active:scale-95">Start Free Trial</button>
            <button className="border border-[#c2c6d8] text-[#0b1c30] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#eff4ff] transition-colors active:scale-95">Book a Demo</button>
          </div>
          <div className="mt-10 relative rounded-xl overflow-hidden border border-[#c2c6d8] bg-white p-1 shadow-lg">
            <img alt="SaaS Platform Dashboard" className="w-full rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOWld3lPe94ngAUKseYL-8RuR5VrEZRUr6n6m6LjsrYMxR_rS6apcmefd57RcrJCnSe81kbEIIWw7UXSWypMoFwxwHiUoXeeQW3lBPz04iAB0qLHWFPiAAB-kqxAZcI1Fi0Fz0uzkbbkcpmAfbcxD23i8o_2w0OCe5nZFA-v6qRNuHvgqWVtyIc30ZnMu6THWIwYtFfpjPMjWo_u_c9VwV63riLR-8_v6L3NwpcprOKAaP3mZdSR2Z5YlKvVK-Uf1QUDUPMtvO1TU" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-[#eff4ff]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white border border-[#c2c6d8] rounded-xl hover:shadow-sm transition-shadow">
              <div className="w-12 h-12 bg-[#0066ff] text-white rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">speed</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Fast</h3>
              <p className="text-sm text-[#565e74]">Engineered for speed with a globally distributed infrastructure that ensures sub-100ms response times for your entire team.</p>
            </div>
            <div className="p-6 bg-white border border-[#c2c6d8] rounded-xl hover:shadow-sm transition-shadow">
              <div className="w-12 h-12 bg-[#0066ff] text-white rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">shield</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Secure</h3>
              <p className="text-sm text-[#565e74]">Enterprise-grade security with end-to-end encryption, SOC2 compliance, and advanced role-based access controls standard.</p>
            </div>
            <div className="p-6 bg-white border border-[#c2c6d8] rounded-xl hover:shadow-sm transition-shadow">
              <div className="w-12 h-12 bg-[#0066ff] text-white rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">trending_up</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Scalable</h3>
              <p className="text-sm text-[#565e74]">Our platform grows with you, from your first two founders to a global team of thousands without missing a beat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-10" style={{ background: '#f8f9ff' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold mb-2">Transparent Pricing</h2>
            <p className="text-lg text-[#565e74]">Choose the plan that fits your current needs and scale when ready.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* Starter */}
            <div className="p-8 border border-[#c2c6d8] rounded-xl bg-white flex flex-col h-full">
              <div className="text-xs text-[#565e74] font-medium mb-1">Starter</div>
              <div className="text-4xl font-bold mb-4">$0<span className="text-sm text-[#565e74] font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-[#0050cb]">check</span> Up to 3 members</li>
                <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-[#0050cb]">check</span> Basic analytics</li>
                <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-[#0050cb]">check</span> 5GB Storage</li>
              </ul>
              <button className="w-full py-4 border border-[#c2c6d8] rounded-lg text-lg font-semibold hover:bg-[#e5eeff] transition-colors">Choose Starter</button>
            </div>
            {/* Pro */}
            <div className="p-8 border-2 border-[#0050cb] rounded-xl bg-white relative flex flex-col shadow-xl scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0050cb] text-white px-6 py-1 rounded-full text-xs font-medium">Most Popular</div>
              <div className="text-xs text-[#0050cb] font-bold mb-1">Pro</div>
              <div className="text-4xl font-bold mb-4">$29<span className="text-sm text-[#565e74] font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-[#0050cb]">check</span> Everything in Starter</li>
                <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-[#0050cb]">check</span> Unlimited members</li>
                <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-[#0050cb]">check</span> Advanced reporting</li>
                <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-[#0050cb]">check</span> 100GB Storage</li>
                <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-[#0050cb]">check</span> API Access</li>
              </ul>
              <button className="w-full py-4 bg-[#0050cb] text-white rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">Get Started with Pro</button>
            </div>
            {/* Enterprise */}
            <div className="p-8 border border-[#c2c6d8] rounded-xl bg-white flex flex-col h-full">
              <div className="text-xs text-[#565e74] font-medium mb-1">Enterprise</div>
              <div className="text-4xl font-bold mb-4">Custom</div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-[#0050cb]">check</span> Everything in Pro</li>
                <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-[#0050cb]">check</span> Custom integrations</li>
                <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-[#0050cb]">check</span> Dedicated support</li>
                <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-[#0050cb]">check</span> SSO & SAML</li>
              </ul>
              <button className="w-full py-4 border border-[#c2c6d8] rounded-lg text-lg font-semibold hover:bg-[#e5eeff] transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 mb-10" style={{ background: '#f8f9ff' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-[#0050cb] text-white rounded-xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </div>
            <h2 className="text-3xl font-semibold mb-4 relative z-10">Ready to transform your workflow?</h2>
            <p className="text-lg text-[#b3c5ff] mb-10 max-w-xl mx-auto relative z-10">
              Join over 10,000+ teams who are building the future with Kinetic Clarity. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button className="bg-white text-[#0050cb] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all active:scale-95">Start Free Trial</button>
              <button className="border border-white border-opacity-30 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all active:scale-95">Schedule a Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#c2c6d8]">
        <div className="max-w-[1280px] mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="text-lg font-bold text-[#0b1c30]">SaaSPlatform</div>
            <p className="text-xs text-[#565e74]">© 2026 SaaSPlatform Inc. All rights reserved.</p>
          </div>
          <div className="flex gap-10 flex-wrap justify-center">
            <a className="text-xs text-[#565e74] hover:text-[#0050cb] underline opacity-80 hover:opacity-100 transition-all" href="#">Terms of Service</a>
            <a className="text-xs text-[#565e74] hover:text-[#0050cb] underline opacity-80 hover:opacity-100 transition-all" href="#">Privacy Policy</a>
            <a className="text-xs text-[#565e74] hover:text-[#0050cb] underline opacity-80 hover:opacity-100 transition-all" href="#">Contact Support</a>
          </div>
        </div>
      </footer>

      <Script id="stitch-animations" strategy="afterInteractive">
        {`
          const observerOpts = { threshold: 0.1 };
          const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
              if (e.isIntersecting) {
                e.target.classList.add('opacity-100', 'translate-y-0');
                e.target.classList.remove('opacity-0', 'translate-y-4');
              }
            });
          }, observerOpts);
          document.querySelectorAll('section > div').forEach(el => {
            el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4');
            obs.observe(el);
          });
        `}
      </Script>
    </>
  );
}