import Script from 'next/script';

export default function Page() {
  return (
    <html lang="en" className="light">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>ScalePerfect | Kinetic Clarity</title>
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
                  borderRadius: {
                    DEFAULT: "0.125rem",
                    lg: "0.25rem",
                    xl: "0.5rem",
                    full: "0.75rem"
                  },
                  spacing: {
                    unit: "4px",
                    "margin-desktop": "64px",
                    "max-width": "1280px",
                    lg: "24px",
                    xl: "40px",
                    gutter: "24px",
                    "margin-mobile": "16px",
                    xs: "4px",
                    sm: "8px",
                    md: "16px"
                  },
                  fontFamily: {
                    "headline-lg": ["Inter"],
                    "headline-lg-mobile": ["Inter"],
                    "label-md": ["Inter"],
                    "body-lg": ["Inter"],
                    "body-md": ["Inter"],
                    "headline-md": ["Inter"],
                    display: ["Inter"],
                    code: ["jetbrainsMono"],
                    "title-lg": ["Inter"]
                  },
                  fontSize: {
                    "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "600" }],
                    "headline-lg-mobile": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
                    "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "500" }],
                    "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
                    "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
                    "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
                    display: ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
                    code: ["13px", { lineHeight: "20px", fontWeight: "400" }],
                    "title-lg": ["18px", { lineHeight: "28px", fontWeight: "600" }]
                  }
                }
              }
            }
          `}
        </Script>
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
            background-color: #ffffff;
            color: #0b1c30;
          }
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid #E2E8F0;
          }
        `}</style>
      </head>
      <body className="bg-surface selection:bg-primary-container selection:text-on-primary-container">

        {/* TopNavBar */}
        <nav className="bg-surface dark:bg-on-background border-b border-outline-variant dark:border-outline docked full-width top-0 z-50 fixed w-full">
          <div className="flex justify-between items-center max-w-[1280px] mx-auto px-lg h-[64px] w-full">
            <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
              SaaSPlatform
            </div>
            <div className="hidden md:flex items-center gap-xl">
              <a className="text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary pb-1 font-body-md text-body-md transition-colors duration-200" href="#">Features</a>
              <a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200 font-body-md text-body-md" href="#">Pricing</a>
              <a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200 font-body-md text-body-md" href="#">About</a>
            </div>
            <div className="flex items-center gap-md">
              <button className="bg-primary-container text-on-primary-container px-lg py-sm font-label-md text-label-md rounded active:scale-95 transition-all duration-150 hover:opacity-90">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-[140px] pb-xl px-lg">
          <div className="max-w-[1280px] mx-auto text-center">
            <h1 className="font-display text-display mb-md tracking-tight">
              Scale your business with <span className="text-primary">Kinetic Clarity</span>
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-xl">
              The all-in-one platform for modern teams to collaborate and deliver results. Precision-engineered for high-performance organizations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-md">
              <button className="bg-primary-container text-on-primary-container px-xl py-md rounded-lg font-title-lg text-title-lg shadow-sm hover:shadow-md transition-shadow active:scale-95">
                Start Free Trial
              </button>
              <button className="border border-outline-variant text-on-surface px-xl py-md rounded-lg font-title-lg text-title-lg hover:bg-surface-container-low transition-colors active:scale-95">
                Book a Demo
              </button>
            </div>
            {/* Hero Image */}
            <div className="mt-xl relative rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest p-xs shadow-lg">
              <img alt="SaaS Platform Dashboard" className="w-full rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOWld3lPe94ngAUKseYL-8RuR5VrEZRUr6n6m6LjsrYMxR_rS6apcmefd57RcrJCnSe81kbEIIWw7UXSWypMoFwxwHiUoXeeQW3lBPz04iAB0qLHWFPiAAB-kqxAZcI1Fi0Fz0uzkbbkcpmAfbcxD23i8o_2w0OCe5nZFA-v6qRNuHvgqWVtyIc30ZnMu6THWIwYtFfpjPMjWo_u_c9VwV63riLR-8_v6L3NwpcprOKAaP3mZdSR2Z5YlKvVK-Uf1QUDUPMtvO1TU" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-xl bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              {/* Feature 1 */}
              <div className="p-lg bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center mb-md">
                  <span className="material-symbols-outlined text-[28px]">speed</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-sm">Fast</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Engineered for speed with a globally distributed infrastructure that ensures sub-100ms response times for your entire team.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="p-lg bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center mb-md">
                  <span className="material-symbols-outlined text-[28px]">shield</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-sm">Secure</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Enterprise-grade security with end-to-end encryption, SOC2 compliance, and advanced role-based access controls standard.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="p-lg bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center mb-md">
                  <span className="material-symbols-outlined text-[28px]">trending_up</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-sm">Scalable</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Our platform grows with you, from your first two founders to a global team of thousands without missing a beat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-xl">
          <div className="max-w-[1280px] mx-auto px-lg">
            <div className="text-center mb-xl">
              <h2 className="font-headline-lg text-headline-lg mb-sm">Transparent Pricing</h2>
              <p className="font-body-lg text-body-lg text-secondary">Choose the plan that fits your current needs and scale when ready.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg items-end">
              {/* Starter */}
              <div className="p-xl border border-outline-variant rounded-xl bg-surface-container-lowest flex flex-col h-full">
                <div className="font-label-md text-label-md text-secondary mb-xs">Starter</div>
                <div className="font-display text-[40px] mb-md">$0<span className="text-body-md text-secondary">/mo</span></div>
                <ul className="space-y-md mb-xl flex-grow">
                  <li className="flex items-center gap-sm font-body-md text-body-md"><span className="material-symbols-outlined text-primary" data-icon="check">check</span> Up to 3 members</li>
                  <li className="flex items-center gap-sm font-body-md text-body-md"><span className="material-symbols-outlined text-primary" data-icon="check">check</span> Basic analytics</li>
                  <li className="flex items-center gap-sm font-body-md text-body-md"><span className="material-symbols-outlined text-primary" data-icon="check">check</span> 5GB Storage</li>
                </ul>
                <button className="w-full py-md border border-outline-variant rounded-lg font-title-lg text-title-lg hover:bg-surface-container transition-colors">Choose Starter</button>
              </div>
              {/* Pro (Featured) */}
              <div className="p-xl border-2 border-primary rounded-xl bg-surface-container-lowest relative flex flex-col h-[105%] shadow-xl scale-105 z-10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-lg py-xs rounded-full font-label-md text-label-md">
                  Most Popular
                </div>
                <div className="font-label-md text-label-md text-primary font-bold mb-xs">Pro</div>
                <div className="font-display text-[40px] mb-md text-on-surface">$29<span className="text-body-md text-secondary">/mo</span></div>
                <ul className="space-y-md mb-xl flex-grow">
                  <li className="flex items-center gap-sm font-body-md text-body-md"><span className="material-symbols-outlined text-primary" data-icon="check">check</span> Everything in Starter</li>
                  <li className="flex items-center gap-sm font-body-md text-body-md"><span className="material-symbols-outlined text-primary" data-icon="check">check</span> Unlimited members</li>
                  <li className="flex items-center gap-sm font-body-md text-body-md"><span className="material-symbols-outlined text-primary" data-icon="check">check</span> Advanced reporting</li>
                  <li className="flex items-center gap-sm font-body-md text-body-md"><span className="material-symbols-outlined text-primary" data-icon="check">check</span> 100GB Storage</li>
                  <li className="flex items-center gap-sm font-body-md text-body-md"><span className="material-symbols-outlined text-primary" data-icon="check">check</span> API Access</li>
                </ul>
                <button className="w-full py-md bg-primary text-on-primary rounded-lg font-title-lg text-title-lg hover:opacity-90 transition-opacity">Get Started with Pro</button>
              </div>
              {/* Enterprise */}
              <div className="p-xl border border-outline-variant rounded-xl bg-surface-container-lowest flex flex-col h-full">
                <div className="font-label-md text-label-md text-secondary mb-xs">Enterprise</div>
                <div className="font-display text-[40px] mb-md">Custom</div>
                <ul className="space-y-md mb-xl flex-grow">
                  <li className="flex items-center gap-sm font-body-md text-body-md"><span className="material-symbols-outlined text-primary" data-icon="check">check</span> Everything in Pro</li>
                  <li className="flex items-center gap-sm font-body-md text-body-md"><span className="material-symbols-outlined text-primary" data-icon="check">check</span> Custom integrations</li>
                  <li className="flex items-center gap-sm font-body-md text-body-md"><span className="material-symbols-outlined text-primary" data-icon="check">check</span> Dedicated support</li>
                  <li className="flex items-center gap-sm font-body-md text-body-md"><span className="material-symbols-outlined text-primary" data-icon="check">check</span> SSO &amp; SAML</li>
                </ul>
                <button className="w-full py-md border border-outline-variant rounded-lg font-title-lg text-title-lg hover:bg-surface-container transition-colors">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-xl mb-xl">
          <div className="max-w-[1280px] mx-auto px-lg">
            <div className="bg-primary text-on-primary rounded-xl p-xl text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
              </div>
              <h2 className="font-display text-headline-lg mb-md relative z-10">Ready to transform your workflow?</h2>
              <p className="font-body-lg text-body-lg text-primary-fixed mb-xl max-w-xl mx-auto relative z-10">
                Join over 10,000+ teams who are building the future with Kinetic Clarity. Start your 14-day free trial today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-md relative z-10">
                <button className="bg-white text-primary px-xl py-md rounded-lg font-title-lg text-title-lg hover:bg-opacity-90 transition-all active:scale-95">
                  Start Free Trial
                </button>
                <button className="border border-white border-opacity-30 text-white px-xl py-md rounded-lg font-title-lg text-title-lg hover:bg-white hover:bg-opacity-10 transition-all active:scale-95">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant dark:border-outline full-width">
          <div className="max-w-[1280px] mx-auto px-lg py-xl flex flex-col md:flex-row justify-between items-center gap-md w-full">
            <div className="flex flex-col gap-sm items-center md:items-start">
              <div className="font-title-lg text-title-lg font-bold text-on-surface dark:text-inverse-on-surface">
                SaaSPlatform
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant">
                © 2024 SaaSPlatform Inc. All rights reserved.
              </p>
            </div>
            <div className="flex gap-lg flex-wrap justify-center">
              <a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all duration-200 opacity-80 hover:opacity-100" href="#">Terms of Service</a>
              <a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all duration-200 opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
              <a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all duration-200 opacity-80 hover:opacity-100" href="#">Contact Support</a>
            </div>
          </div>
        </footer>

        <Script id="stitch-animations" strategy="afterInteractive">
          {`
            const observerOptions = { threshold: 0.1 };
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('opacity-100', 'translate-y-0');
                  entry.target.classList.remove('opacity-0', 'translate-y-4');
                }
              });
            }, observerOptions);
            document.querySelectorAll('section > div > div').forEach(el => {
              el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4');
              observer.observe(el);
            });
          `}
        </Script>
      </body>
    </html>
  );
}