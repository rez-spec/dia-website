const { useState, useEffect, useRef } = React;
const cx = (...a) => a.filter(Boolean).join(" ");

// ---------- Icons ----------
const Icon = {
  arrow: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>,
  chevron: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>,
  up: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>,
  pin: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  phone: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>,
  mail: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  svcIcon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  // Service-specific icons
  svc: {
    newBuild: <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 28h24" /><path d="M6 28V13l10-7 10 7v15" /><path d="M12 28v-8h8v8" /><circle cx="20" cy="14" r="1.4" fill="currentColor" /></svg>,
    extension: <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 28h26" /><path d="M5 28V14l7-5 7 5v14" /><path d="M19 28V18l6-4 4 3v11" /><path d="M9 28v-5h4v5" /></svg>,
    loft: <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 28h26" /><path d="M5 28V18L16 7l11 11v10" /><rect x="14" y="14" width="4" height="6" /><path d="M11 28v-4h10v4" /></svg>,
    garage: <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 28V13l12-7 12 7v15" /><path d="M4 28h24" /><rect x="9" y="15" width="14" height="13" /><path d="M9 19h14M9 23h14" /></svg>,
    plan: <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 5h16l4 4v18H6z" /><path d="M22 5v4h4" /><path d="M10 14h12M10 18h12M10 22h7" /></svg>,
    interior: <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 23h24v4H4z" /><path d="M6 23v-7a4 4 0 014-4h12a4 4 0 014 4v7" /><path d="M10 12V9a3 3 0 013-3h6a3 3 0 013 3v3" /><path d="M6 27v2M26 27v2" /></svg>,
    landscape: <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 26h24" /><path d="M16 26V14" /><path d="M16 14c-4 0-7-3-7-6 4 0 7 3 7 6z" /><path d="M16 17c4 0 7-3 7-6-4 0-7 3-7 6z" /><circle cx="22" cy="22" r="3" /><path d="M22 19V14" /></svg>,
    commercial: <svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 28h24" /><path d="M6 28V10h20v18" /><path d="M4 10l3-5h18l3 5" /><rect x="10" y="14" width="4" height="4" /><rect x="18" y="14" width="4" height="4" /><rect x="14" y="22" width="4" height="6" /></svg>
  },
  contactIcon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>,
  // Menu icons (small, outlined tan)
  menu: {
    home:     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-7 9 7v9a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>,
    studio:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3" width="6" height="14" rx="2"/><path d="M9 9h6M9 13h6"/><path d="M12 17v4M9 21h6"/></svg>,
    how:      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18l5-5M14 6l4 4-9 9H5v-4z"/><path d="M14 6l2-2 4 4-2 2"/></svg>,
    work:     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 16l4-2 4 2 4-2 6 3v3H3z"/><path d="M5 12c2 0 3-1 5-1s3 1 5 1 3-1 5-1"/></svg>,
    services: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l2 2 6-6"/><path d="M12 21c5-3 8-6 8-11V5l-8-3-8 3v5c0 5 3 8 8 11z"/></svg>,
    packages: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/><path d="M16 3l1 2 2 .5-1.5 1.4.4 2-1.9-1-1.9 1 .4-2L13.5 5.5 15.5 5z"/></svg>,
    contact:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/></svg>
  },
  // Social icons — minimal monoline marks
  social: {
    ig: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
    fb: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.3h-3.1V8.5c0-1 .3-1.6 1.6-1.6h1.7V4a23 23 0 00-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4z"/></svg>,
    in: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.3 18.3H5.7V10h2.6v8.3zM7 8.9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11.3 9.4h-2.6v-4c0-1-.02-2.2-1.3-2.2-1.3 0-1.5 1-1.5 2.1v4.1H10.4V10h2.5v1.1c.35-.66 1.2-1.36 2.5-1.36 2.7 0 3.2 1.77 3.2 4.08v4.48z"/></svg>,
    x: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3 2H21l-6.5 7.5L22.2 22H16l-4.9-6.4L5.5 22H2.7l7-8L1.8 2h6.3l4.4 5.9L18.3 2zm-1 18h1.6L7 3.5H5.3L17.3 20z"/></svg>,
    yt: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.2-1.6-.9-2.3c-.85-.9-1.8-.9-2.25-1C16.95 3.5 12 3.5 12 3.5s-4.95 0-7.85.2c-.45.05-1.4.1-2.25 1C1.2 5.4 1 7 1 7s-.2 1.85-.2 3.7v1.6c0 1.85.2 3.7.2 3.7s.2 1.6.9 2.3c.85.9 1.95.85 2.45.95C5.95 19.5 12 19.55 12 19.55s4.95-.05 7.85-.25c.45-.05 1.4-.1 2.25-1 .7-.7.9-2.3.9-2.3s.2-1.85.2-3.7v-1.6C23.2 8.85 23 7 23 7zM9.7 14.6V8.4l6.4 3.1-6.4 3.1z"/></svg>,
    be: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7.4 8.7c.7 0 2.1.05 2.1 1.55 0 1.45-.85 1.75-2.15 1.75h-3V8.7h3.05zm.4 7.95c1.45 0 2.4-.6 2.4-2 0-1.4-.8-2.05-2.35-2.05h-3.1v4.05h3.05zm.45-11.05H2v13.8h6.5c3.1 0 5.9-1.4 5.9-4.5 0-1.9-1-3.3-2.85-3.85 1.4-.65 2.05-1.7 2.05-3.2 0-2.65-2.05-3.5-5.4-3.5zM18 12.5c.95 0 1.7.4 1.8 1.55h-3.65c.05-1.2 1-1.55 1.85-1.55zm0-2.4c-3 0-4.5 2.2-4.5 5.1 0 2.95 1.6 5 4.5 5 2 0 3.5-.9 4.25-2.95l-2.3-.05c-.3.5-.85.8-1.85.8-1.1 0-1.85-.65-1.9-1.9h6.3v-.6c0-3.2-1.55-5.4-4.5-5.4zM20 7.5h-4.5v1.3H20v-1.3z"/></svg>,
    pt: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9.1-.5.9-3.5.9-3.5s-.2-.5-.2-1.2c0-1.1.6-2 1.5-2 .7 0 1 .5 1 1.1 0 .7-.4 1.7-.7 2.7-.2.8.4 1.5 1.2 1.5 1.4 0 2.5-1.5 2.5-3.7 0-1.9-1.4-3.3-3.4-3.3-2.3 0-3.7 1.7-3.7 3.6 0 .7.3 1.4.6 1.8l-.2.85c-.04.16-.13.2-.3.12-1.1-.5-1.8-2.1-1.8-3.4 0-2.7 2-5.3 5.7-5.3 3 0 5.3 2.1 5.3 5 0 3-1.9 5.4-4.5 5.4-.9 0-1.7-.5-2-1l-.5 2c-.2.8-.8 1.7-1.1 2.3 1 .3 2 .4 3.1.4 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
  },
  ig: "Ig", fb: "Fb", in: "In", yt: "Yt", x: "X", be: "Bē", tt: "Tt", pt: "Pt"
};

function Logo({ onClick, big }) {
  return (
    <div className="logo" onClick={() => onClick && onClick("home")}>
      <span className="logo-img" role="img" aria-label="DiA Residential" style={{ height: big ? 96 : 38, width: big ? 280 : 110 }}></span>
    </div>);

}

function Img({ src, label, className, style }) {
  return (
    <div className={cx("img-placeholder", className)} data-label={label} style={style}>
      <img src={src} alt={label || ""} loading="lazy" onError={(e) => {e.target.style.opacity = 0;}} />
    </div>);

}

function CallBtn({ tel, label = "Call Us", variant = "primary", compact = false }) {
  const D = window.DIA;
  const number = tel || D && D.offices && D.offices[0] && D.offices[0].tel || "+44 (0) 207 459 4964";
  const href = "tel:" + number.replace(/[^\d+]/g, "");
  return (
    <a className={cx("btn call-btn", variant === "outline" && "btn-outline", compact && "compact")} href={href}>
      <span className="call-ic">{Icon.phone}</span>
      <span className="call-label">{label}</span>
      {!compact && <span className="call-num">{number}</span>}
    </a>);

}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute("data-theme") || "dark");
  useEffect(() => {
    const saved = (() => {try {return localStorage.getItem("dia-theme");} catch (e) {return null;}})();
    if (saved && saved !== document.documentElement.getAttribute("data-theme")) {
      document.documentElement.setAttribute("data-theme", saved);
    }
    const obs = new MutationObserver(() => setTheme(document.documentElement.getAttribute("data-theme") || "dark"));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {localStorage.setItem("dia-theme", next);} catch (e) {}
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { theme: next } }, "*");
  };
  const sun = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>;
  const moon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>;
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme" title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
      <span className="theme-toggle-icon">{theme === "dark" ? sun : moon}</span>
      <span className="theme-toggle-label">{theme === "dark" ? "LIGHT" : "DARK"}</span>
    </button>);

}

function Nav({ section, page, onNav, onSection }) {
  const [menu, setMenu] = useState(false);
  useEffect(() => {setMenu(false);}, [page, section]);
  const menuItems = [
    { id: "home",     label: "HOME",            icon: "home",     action: () => onNav("home") },
    { id: "studio",   label: "OUR STUDIO",      icon: "studio",   action: () => onNav("studio") },
    { id: "how",      label: "HOW DO WE DO IT?", icon: "how",     action: () => onSection("why") },
    { id: "work",     label: "OUR WORK",        icon: "work",     action: () => onNav("projects") },
    { id: "services", label: "OUR SERVICES",    icon: "services", action: () => onNav("services"), sub: true },
    { id: "packages", label: "OUR PACKAGES",    icon: "packages", action: () => onNav("packages", "architecture"), sub: true },
    { id: "contact",  label: "CONTACT US",      icon: "contact",  action: () => onSection("contact") }
  ];
  return (
    <React.Fragment>
      <header className="nav">
        <div className="nav-left">
          <button className={cx("menu-btn", menu && "open")} onClick={() => setMenu((m) => !m)} aria-label="Menu"><span></span><span></span><span></span></button>
          <div className="region">
            <span className="on">UK</span><span className="sep">|</span>
            <span>EGYPT</span><span className="sep">|</span>
            <span>WORLDWIDE</span>
          </div>
          <ThemeToggle />
        </div>
        <nav className="nav-links">
          {window.DIA.nav.map((n) =>
          <a key={n.id} href={"#" + n.id} className={section === n.id ? "active" : ""} onClick={(e) => {e.preventDefault();onSection(n.id);}}>{n.label}</a>
          )}
        </nav>
        <Logo onClick={onNav} />
      </header>
      <div className={cx("menu-dropdown", menu && "open")}>
        <div className="menu-dd-head">
          <span className="logo-img" role="img" aria-label="DiA" style={{ height: 22, width: 64, backgroundColor: "var(--c-tan)" }}></span>
          <span className="menu-dd-residential">RESIDENTIAL</span>
        </div>
        <div className="menu-dd-divider"></div>
        <ul className="menu-dd-list">
          {menuItems.map((m) => (
            <li key={m.id} className="menu-dd-item" onClick={() => { m.action(); setMenu(false); }}>
              <span className="menu-dd-ic">{(Icon.menu && Icon.menu[m.icon]) || ""}</span>
              <span className="menu-dd-label">{m.label}</span>
              {m.sub && <span className="menu-dd-chev">{Icon.chevron}</span>}
            </li>
          ))}
        </ul>
      </div>
      {menu && <div className="menu-backdrop" onClick={() => setMenu(false)}></div>}
    </React.Fragment>);

}

function Rail({ onSection, onNav }) {
  return (
    <div className="rail">
      <button className="rail-btn" onClick={() => onNav ? onNav("services") : onSection("services")}>
        <div className="rail-icon">{Icon.svcIcon}</div>
        <div className="rail-label">Services</div>
      </button>
      <button className="rail-btn" onClick={() => onSection("contact")}>
        <div className="rail-icon">{Icon.contactIcon}</div>
        <div className="rail-label">Contact Us</div>
      </button>
    </div>);

}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button className={cx("btt", show && "show")} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <div className="btt-icon">{Icon.up}</div>
      <div className="btt-label">SWIPE</div>
    </button>);

}

function Footer({ onNav, onSection }) {
  const D = window.DIA;
  const socials = [
    { id: "ig", href: "#", label: "Instagram" },
    { id: "fb", href: "#", label: "Facebook" },
    { id: "in", href: "#", label: "LinkedIn" },
    { id: "x",  href: "#", label: "X" },
    { id: "yt", href: "#", label: "YouTube" },
    { id: "be", href: "#", label: "Behance" },
    { id: "pt", href: "#", label: "Pinterest" }
  ];
  return (
    <footer className="foot">
      <div className="foot-card">
        <div className="foot-logo">
          <span className="logo-img" role="img" aria-label="DiA Residential" style={{ height: 60, width: 180, display: "block" }}></span>
        </div>
        <div className="foot-office">
          <h4>{D.offices[0].city}</h4>
          <ul>
            <li><span className="ic">{Icon.pin}</span>{D.offices[0].addr}</li>
            <li><span className="ic">{Icon.phone}</span><a className="foot-link" href={"tel:" + D.offices[0].tel.replace(/[^\d+]/g, '')}>{D.offices[0].tel}</a></li>
            <li><span className="ic">{Icon.mail}</span><a className="foot-link" href={"mailto:" + D.offices[0].mail}>{D.offices[0].mail}</a></li>
          </ul>
          <div className="foot-office kent">
            <h4>{D.offices[1].city}</h4>
            <ul>
              <li><span className="ic">{Icon.pin}</span>{D.offices[1].addr}</li>
              <li><span className="ic">{Icon.phone}</span><a className="foot-link" href={"tel:" + D.offices[1].tel.replace(/[^\d+]/g, '')}>{D.offices[1].tel}</a></li>
              <li><span className="ic">{Icon.mail}</span><a className="foot-link" href={"mailto:" + D.offices[1].mail}>{D.offices[1].mail}</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-office">
          <h4>{D.offices[2].city}</h4>
          <ul>
            <li><span className="ic">{Icon.pin}</span>{D.offices[2].addr}</li>
            <li><span className="ic">{Icon.phone}</span><a className="foot-link" href={"tel:" + D.offices[2].tel.replace(/[^\d+]/g, '')}>{D.offices[2].tel}</a></li>
            <li><span className="ic">{Icon.mail}</span><a className="foot-link" href={"mailto:" + D.offices[2].mail}>{D.offices[2].mail}</a></li>
          </ul>
        </div>
        <div className="foot-sitemap">
          <h4>SITE MAP</h4>
          <ul>
            <li onClick={() => onNav("home")}>HOME</li>
            <li onClick={() => onSection("about")}>ABOUT US</li>
            <li onClick={() => onSection("why")}>HOW DO WE DO?</li>
            <li onClick={() => onNav("projects")}>OUR WORK</li>
            <li onClick={() => onNav("services")}>OUR SERVICES</li>
            <li onClick={() => onNav("packages", "architecture")}>OUR PACKAGES</li>
            <li onClick={() => onSection("contact")}>CONTACT US</li>
          </ul>
        </div>
        <div className="foot-social">
          {socials.map((s) => <a key={s.id} href={s.href} aria-label={s.label}>{Icon.social[s.id]}</a>)}
        </div>
      </div>
      <div className="foot-strip">
        <span className="links">
          <span>CAREERS</span><span className="sep">|</span>
          <span>PRIVACY STATEMENT</span><span className="sep">|</span>
          <span>LEGAL</span>
        </span>
        <span className="copy">2025 | Design-itude Associates LTD</span>
      </div>
    </footer>);

}

function SectionHead({ children, left }) {
  return (
    <div className={cx("section-head", left && "left")}>
      <span className="slash" aria-hidden="true">/</span>
      <h2>{children}</h2>
    </div>);

}

function FadeUp({ children, delay = 0, style = {}, className = "", as = "div" }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {if (e.isIntersecting) {setSeen(true);io.disconnect();}}), { threshold: 0.12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return <Tag ref={ref} className={cx("fade-up", seen && "in", className)} style={{ transitionDelay: `${delay}ms`, ...style }}>{children}</Tag>;
}

function Lightbox({ images, index, onClose, onNav }) {
  useEffect(() => {
    const k = (e) => {if (e.key === "Escape") onClose();if (e.key === "ArrowRight") onNav(1);if (e.key === "ArrowLeft") onNav(-1);};
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose, onNav]);
  if (index === null || index === undefined) return null;
  const img = images[index];
  return (
    <div className="lightbox open" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>CLOSE ✕</button>
      <button className="lightbox-nav prev" onClick={(e) => {e.stopPropagation();onNav(-1);}}>{Icon.chevron && <span style={{ transform: "rotate(180deg)", display: "inline-block" }}>{Icon.chevron}</span>}</button>
      <button className="lightbox-nav next" onClick={(e) => {e.stopPropagation();onNav(1);}}>{Icon.chevron}</button>
      <div className="lightbox-wrap" onClick={(e) => e.stopPropagation()}>
        <Img src={img.src} label={img.l} />
      </div>
    </div>);

}

Object.assign(window, { Logo, Img, CallBtn, Nav, ThemeToggle, Rail, BackToTop, Footer, SectionHead, FadeUp, Lightbox, Icon, cx });