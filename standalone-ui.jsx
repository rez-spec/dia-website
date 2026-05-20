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
  contactIcon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>,
  ig: "Ig", fb: "Fb", in: "In", yt: "Yt", x: "X", be: "Bē", tt: "Tt", pt: "Pt"
};

function Logo({ onClick, big }) {
  return (
    <div className="logo" onClick={() => onClick && onClick("home")}>
      <img src={window.__resources.asset1} alt="DiA Residential" className="logo-img" style={{ height: big ? 96 : 38 }} />
    </div>);

}

function Img({ src, label, className, style }) {
  return (
    <div className={cx("img-placeholder", className)} data-label={label} style={style}>
      <img src={src} alt={label || ""} loading="lazy" onError={(e) => {e.target.style.opacity = 0;}} />
    </div>);

}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute("data-theme") || "dark");
  useEffect(() => {
    const saved = (() => { try { return localStorage.getItem("dia-theme"); } catch (e) { return null; } })();
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
    try { localStorage.setItem("dia-theme", next); } catch (e) {}
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { theme: next } }, "*");
  };
  const sun = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>;
  const moon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme" title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
      <span className="theme-toggle-icon">{theme === "dark" ? sun : moon}</span>
      <span className="theme-toggle-label">{theme === "dark" ? "LIGHT" : "DARK"}</span>
    </button>
  );
}

function Nav({ section, page, onNav, onSection }) {
  const [menu, setMenu] = useState(false);
  useEffect(() => {setMenu(false);}, [page, section]);
  return (
    <React.Fragment>
      <header className="nav">
        <div className="nav-left">
          <button className="menu-btn" onClick={() => setMenu(true)} aria-label="Menu"><span></span><span></span><span></span></button>
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
      <div className={cx("menu-overlay", menu && "open")}>
        <div className="menu-head">
          <Logo onClick={(p) => {onNav(p);setMenu(false);}} />
          <button className="menu-close" onClick={() => setMenu(false)} aria-label="Close">✕</button>
        </div>
        <div className="menu-links">
          <a href="#home" onClick={(e) => {e.preventDefault();onNav("home");setMenu(false);}}><span className="n">01</span> Home</a>
          {window.DIA.nav.map((n, i) =>
          <a key={n.id} href={"#" + n.id} onClick={(e) => {e.preventDefault();onSection(n.id);setMenu(false);}}>
              <span className="n">0{i + 2}</span> {n.label}
            </a>
          )}
          <a href="#projects" onClick={(e) => {e.preventDefault();onNav("projects");setMenu(false);}}><span className="n">07</span> Our Work</a>
        </div>
      </div>
    </React.Fragment>);

}

function Rail({ onSection }) {
  return (
    <div className="rail">
      <button className="rail-btn" onClick={() => onSection("services")}>
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
      <div className="btt-label">Back to Top</div>
    </button>);

}

function Footer({ onNav, onSection }) {
  const D = window.DIA;
  const socials = [Icon.ig, Icon.fb, Icon.in, Icon.yt, Icon.x, Icon.be, Icon.tt, Icon.pt];
  return (
    <footer className="foot">
      <div className="foot-card">
        <div className="foot-logo">
          <img src={window.__resources.asset2} alt="DiA Residential" style={{ height: 160, width: "auto", display: "block", objectFit: "fill" }} />
        </div>
        <div className="foot-office">
          <h4>{D.offices[0].city}</h4>
          <ul>
            <li><span className="ic">{Icon.pin}</span>{D.offices[0].addr}</li>
            <li><span className="ic">{Icon.phone}</span>{D.offices[0].tel}</li>
            <li><span className="ic">{Icon.mail}</span>{D.offices[0].mail}</li>
          </ul>
          <div className="foot-office kent">
            <h4>{D.offices[1].city}</h4>
            <ul>
              <li><span className="ic">{Icon.pin}</span>{D.offices[1].addr}</li>
              <li><span className="ic">{Icon.phone}</span>{D.offices[1].tel}</li>
              <li><span className="ic">{Icon.mail}</span>{D.offices[1].mail}</li>
            </ul>
          </div>
        </div>
        <div className="foot-office">
          <h4>{D.offices[2].city}</h4>
          <ul>
            <li><span className="ic">{Icon.pin}</span>{D.offices[2].addr}</li>
            <li><span className="ic">{Icon.phone}</span>{D.offices[2].tel}</li>
            <li><span className="ic">{Icon.mail}</span>{D.offices[2].mail}</li>
          </ul>
        </div>
        <div className="foot-sitemap">
          <h4>SITE MAP</h4>
          <ul>
            <li onClick={() => onNav("home")}>HOME</li>
            <li onClick={() => onSection("about")}>ABOUT US</li>
            <li onClick={() => onSection("why")}>HOW DO WE DO?</li>
            <li onClick={() => onNav("projects")}>OUR WORK</li>
            <li onClick={() => onSection("services")}>OUR SERVICES</li>
            <li onClick={() => onSection("contact")}>CONTACT US</li>
          </ul>
        </div>
        <div className="foot-social">
          {socials.map((s, i) => <a key={i} href="#" aria-label="social">{s}</a>)}
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

Object.assign(window, { Logo, Img, Nav, ThemeToggle, Rail, BackToTop, Footer, SectionHead, FadeUp, Lightbox, Icon, cx });