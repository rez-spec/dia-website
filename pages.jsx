// DiA Residential — pages (Home single-page + Projects index + Project detail)

// ============== HOME ==============
function HomePage({ onNav, onSection, sectionRefs }) {
  const D = window.DIA;

  return (
    <div className="page-enter">
      {/* HERO */}
      <section style={{ position: "relative" }}>
        <div className="hero">
          <div className="hero-bg"><Img src={D.hero.image} label={D.hero.imageLabel} /></div>
          <div className="hero-tagline">
            {D.hero.tagline.split("\n").map((line, i) => <div key={i}>{line}</div>)}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about" ref={(el) => sectionRefs.current.about = el}>
        <div className="container" style={{ maxWidth: 1620 }}>
          <SectionHead>ABOUT US</SectionHead>
          <FadeUp>
            <div className="about-block">
              <p className="about-intro">{D.about.intro}</p>
              {D.about.body.map((p, i) => <p key={i} className="about-p" style={{ marginTop: 10 }}>{p}</p>)}
              <div className="about-foot">
                <button className="why-more" onClick={() => onNav("projects")}>MORE</button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* WHY DIA */}
      <section className="section" id="why" ref={(el) => sectionRefs.current.why = el}>
        <div className="container" style={{ maxWidth: 1620 }}>
          <SectionHead>WHY DiA?</SectionHead>
          <FadeUp>
            <div className="why-card">
              {D.why.map((w, i) =>
              <div key={i} className="why-item">
                  <h3>{w.t}:</h3>
                  <p>{w.b}</p>
                </div>
              )}
            </div>
            <div className="why-foot">
              <button className="why-more" onClick={() => onNav("projects")}>MORE</button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* HERO IMAGE BAND */}
      <section style={{ padding: "60px var(--pad-x)" }}>
        <div className="container" style={{ maxWidth: 1740 }}>
          <FadeUp>
            <div style={{ aspectRatio: "1732 / 842", borderRadius: 50, overflow: "hidden" }}>
              <Img src="assets/about-hero.jpg" label="ABOUT BAND · interior" style={{ width: "100%", height: "100%" }} />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "0 var(--pad-x) 60px" }}>
        <div className="container" style={{ maxWidth: 1620 }}>
          <FadeUp>
            <div className="card stats-card">
              {D.stats.map((s, i) =>
              <div key={i} className="stat">
                  <div className="stat-num">{s.n.replace("+", "")}{s.n.includes("+") && <span className="plus">+</span>}</div>
                  <div className="stat-label">{s.t}</div>
                  <div className="stat-sub">{s.s}</div>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* OUR SERVICES — large image cards */}
      <section className="section" id="services" ref={(el) => sectionRefs.current.services = el}>
        <div className="container" style={{ maxWidth: 1620 }}>
          <SectionHead>OUR SERVICES</SectionHead>
          <OurServicesCarousel items={D.ourServices} onMore={() => onNav("our-service", D.ourServices[0].id)} onCardClick={(id) => onNav("our-service", id)} />
        </div>
      </section>

      {/* WHAT WE DO — 8 icon cards */}
      <section className="section" id="work" ref={(el) => sectionRefs.current.work = el}>
        <div className="container" style={{ maxWidth: 1620 }}>
          <SectionHead>WHAT DO WE DO ?</SectionHead>
          <div className="wwd-grid">
            {D.whatwedo.map((s, i) =>
            <FadeUp key={s.n} delay={i % 4 * 60}>
                <div className={cx("wwd-card", "tone-" + i % 6)} onClick={() => onNav("service", D.whatwedoSlugs[s.t])} style={{ height: "461px", opacity: "1" }}>
                  <div className="wwd-icon">{Icon.svc && Icon.svc[s.icon] || Icon.svcIcon}</div>
                  <h4>{s.t}</h4>
                  <p>{s.b}</p>
                  <div className="wwd-foot">
                    <button className="wwd-more" onClick={(e) => {e.stopPropagation();onNav("service", D.whatwedoSlugs[s.t]);}}>MORE</button>
                  </div>
                </div>
              </FadeUp>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact" ref={(el) => sectionRefs.current.contact = el}>
        <ContactForm />
      </section>
    </div>);

}

// ============== SERVICE CATEGORY PAGE (Architecture / Interior / Planning) ==============
function ServiceCategoryPage({ id, onNav }) {
  const D = window.DIA;
  const s = D.ourServices.find((x) => x.id === id) || D.ourServices[0];
  const subServices = (s.services || []).
  map((sub) => {
    const slugToTitle = Object.fromEntries(Object.entries(D.whatwedoSlugs).map(([k, v]) => [v, k]));
    const title = slugToTitle[sub];
    return D.whatwedo.find((w) => w.t === title);
  }).
  filter(Boolean);

  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="detail-hero" style={{ height: "62vh", minHeight: 480 }}>
        <Img src={s.img} label={s.l} style={{ width: "100%", height: "100%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,9,8,0.35), rgba(10,9,8,0.85))" }}></div>
        <div style={{ position: "absolute", bottom: 56, left: "var(--pad-x)", right: "var(--pad-x)" }}>
          <div className="hero-eyebrow">Our Services — {String(D.ourServices.findIndex((x) => x.id === s.id) + 1).padStart(2, "0")} / 03</div>
          <h1 className="hero-title" style={{ fontFamily: "var(--f-display)", fontStyle: "normal", letterSpacing: "0.04em", color: "var(--c-tan)" }}>{s.t}</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <SectionHead>About This Service</SectionHead>
          <div className="about-block">
            <p className="about-intro">{s.tag.toUpperCase()}</p>
            <p className="about-p" style={{ fontFamily: "var(--f-serif)", fontStyle: "italic", fontSize: 22, color: "var(--c-text)", marginBottom: 32 }}>{s.sub}</p>
            {s.paragraphs.map((p, i) => <p key={i} className="about-p">{p}</p>)}
            <div className="about-foot">
              <CallBtn label="Talk to the Studio" variant="outline" compact />
              <button className="why-more" onClick={() => onNav("contact")}>ENQUIRE {Icon.chevron}</button>
            </div>
          </div>
        </div>
      </section>

      {/* SUB-SERVICES */}
      {subServices.length > 0 &&
      <section className="section" style={{ background: "var(--c-bg-2)" }}>
          <div className="container">
            <SectionHead>What's Included</SectionHead>
            <div className="wwd-grid">
              {subServices.map((w) =>
            <FadeUp key={w.t}>
                  <div className="wwd-card" onClick={() => onNav("service", D.whatwedoSlugs[w.t])} style={{ cursor: "pointer" }}>
                    <div className="wwd-icon">{Icon.svc && Icon.svc[w.icon] || Icon.svcIcon}</div>
                    <h4>{w.t}</h4>
                    <p>{w.b}</p>
                    <div className="wwd-foot">
                      <button className="wwd-more">MORE {Icon.chevron}</button>
                    </div>
                  </div>
                </FadeUp>
            )}
            </div>
          </div>
        </section>
      }

      {/* CALL CTA */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="svc-callout">
              <div>
                <div className="svc-callout-eyebrow">READY TO START?</div>
                <h3>Book a 30-minute introductory call with a senior architect.</h3>
              </div>
              <CallBtn label="Call the Studio" />
            </div>
          </FadeUp>
        </div>
      </section>
    </div>);

}

// ============== SERVICE DETAIL PAGE (each "What We Do" item) ==============
function ServiceDetailPage({ slug, onNav }) {
  const D = window.DIA;
  const slugToTitle = Object.fromEntries(Object.entries(D.whatwedoSlugs).map(([k, v]) => [v, k]));
  const title = slugToTitle[slug];
  const s = D.whatwedo.find((w) => w.t === title) || D.whatwedo[0];
  const idx = D.whatwedo.indexOf(s);
  const next = D.whatwedo[(idx + 1) % D.whatwedo.length];

  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="detail-hero" style={{ height: "62vh", minHeight: 480 }}>
        <Img src={s.hero || s.img} label={s.t} style={{ width: "100%", height: "100%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,9,8,0.35), rgba(10,9,8,0.85))" }}></div>
        <div style={{ position: "absolute", bottom: 56, left: "var(--pad-x)", right: "var(--pad-x)" }}>
          <div className="hero-eyebrow">{s.n} — What We Do</div>
          <h1 className="hero-title" style={{ fontFamily: "var(--f-display)", fontStyle: "normal", letterSpacing: "0.04em", color: "var(--c-tan)" }}>{s.t}</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <SectionHead>About</SectionHead>
          <div className="about-block">
            <p className="about-intro">{s.b.toUpperCase()}</p>
            {s.long && <p className="about-p">{s.long}</p>}
          </div>
        </div>
      </section>

      {/* INCLUDES */}
      {s.includes &&
      <section className="section" style={{ background: "var(--c-bg-2)" }}>
          <div className="container" style={{ maxWidth: 1080 }}>
            <SectionHead>What We Cover</SectionHead>
            <div className="includes-grid">
              {s.includes.map((it, i) =>
            <FadeUp key={i} delay={i % 3 * 60}>
                  <div className="include-item">
                    <span className="include-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="include-text">{it}</span>
                  </div>
                </FadeUp>
            )}
            </div>
          </div>
        </section>
      }

      {/* CTA */}
      <section className="section">
        <div className="container">
          <FadeUp>
            <div className="svc-callout">
              <div>
                <div className="svc-callout-eyebrow">INTERESTED?</div>
                <h3>Let's talk about your {s.t.toLowerCase()} project — usually a 30-minute call.</h3>
              </div>
              <CallBtn label="Call the Studio" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* NEXT SERVICE */}
      <section style={{ padding: "60px var(--pad-x) 120px", borderTop: "1px solid var(--c-border)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <button className="btn btn-outline" onClick={() => onNav("home")}>← All Services</button>
          <button className="btn" onClick={() => {onNav("service", D.whatwedoSlugs[next.t]);window.scrollTo(0, 0);}}>Next: {next.t} →</button>
        </div>
      </section>
    </div>);

}

// ============== OUR SERVICES CAROUSEL ==============
function OurServicesCarousel({ items, onMore, onCardClick }) {
  const trackRef = React.useRef(null);
  const [idx, setIdx] = React.useState(0);

  const scrollTo = (n) => {
    setIdx(n);
    if (trackRef.current) {
      const card = trackRef.current.querySelector(".os-card");
      if (card) trackRef.current.scrollTo({ left: (card.offsetWidth + 32) * n, behavior: "smooth" });
    }
  };
  const next = () => scrollTo(Math.min(idx + 1, items.length - 1));
  const prev = () => scrollTo(Math.max(idx - 1, 0));

  return (
    <div className="os-wrap">
      <div className="os-track" ref={trackRef}>
        {items.map((s) =>
        <div className="os-card" key={s.id} onClick={() => onCardClick && onCardClick(s.id)}>
            <div className="os-card-img">
              <Img src={s.img} label={s.l} />
            </div>
            <div className="os-card-label">
              <h3>{s.t}</h3>
            </div>
          </div>
        )}
      </div>
      <button className="os-arrow os-prev" onClick={prev} aria-label="Previous service" style={{ opacity: idx === 0 ? 0.4 : 1 }}>
        <span style={{ display: "inline-block", transform: "rotate(180deg)" }}>{Icon.chevron}</span>
      </button>
      <button className="os-arrow os-next" onClick={next} aria-label="Next service" style={{ opacity: idx === items.length - 1 ? 0.4 : 1 }}>
        {Icon.chevron}
      </button>
      <div className="os-more">
        <button className="why-more" onClick={onMore}>MORE</button>
      </div>
    </div>);

}

// ============== CONTACT FORM ==============
function ContactForm() {
  const COUNTRIES = [
  { flag: "🇬🇧", code: "+44", name: "United Kingdom" },
  { flag: "🇪🇬", code: "+20", name: "Egypt" },
  { flag: "🇺🇸", code: "+1", name: "United States" },
  { flag: "🇦🇪", code: "+971", name: "United Arab Emirates" },
  { flag: "🇸🇦", code: "+966", name: "Saudi Arabia" },
  { flag: "🇫🇷", code: "+33", name: "France" },
  { flag: "🇩🇪", code: "+49", name: "Germany" },
  { flag: "🇮🇹", code: "+39", name: "Italy" },
  { flag: "🇨🇭", code: "+41", name: "Switzerland" }];

  const [country, setCountry] = React.useState(COUNTRIES[0]);
  const [open, setOpen] = React.useState(false);
  const countryRef = React.useRef(null);
  React.useEffect(() => {
    const onDoc = (e) => {if (countryRef.current && !countryRef.current.contains(e.target)) setOpen(false);};
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const [f, setF] = React.useState({ name: "", phone: "", email: "", message: "" });
  const [t, setT] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const errs = {};
  if (!f.name.trim()) errs.name = "Please enter your name.";
  if (!f.phone.trim()) errs.phone = "Please enter a phone number.";else
  if (!/^[\d\s()\-]{6,}$/.test(f.phone)) errs.phone = "That phone number doesn't look right.";
  if (!f.email.trim()) errs.email = "Email is required.";else
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) errs.email = "Enter a valid email address.";
  if (f.message.trim().length < 10) errs.message = "Tell us a little about your project.";

  const set = (k, v) => setF((x) => ({ ...x, [k]: v }));
  const blur = (k) => setT((x) => ({ ...x, [k]: true }));
  const show = (k) => submitted || t[k];

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setT({ name: 1, phone: 1, email: 1, message: 1 });
    if (Object.keys(errs).length === 0) setTimeout(() => setDone(true), 400);
  };

  return (
    <div className="container">
      <SectionHead>Contact Us</SectionHead>
      <div className="contact-wrap">
        {done ?
        <FadeUp>
            <h3 style={{ fontFamily: "var(--f-serif)", fontStyle: "italic", fontSize: 38, color: "var(--c-tan)", marginBottom: 16 }}>Thank you, {f.name.split(" ")[0]}.</h3>
            <p style={{ fontSize: 14, color: "var(--c-text-dim)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
              Your enquiry is with the studio. You'll hear from us within two working days.
            </p>
          </FadeUp> :

        <React.Fragment>
            <p className="contact-intro">Want to discuss your upcoming residential project with us? Either fill out the form below or contact us directly via telephone or email.</p>
            <form className="form" onSubmit={submit} noValidate>
              <div className="form-row">
                <div className={cx("field", f.name && "has-value", show("name") && errs.name && "error")}>
                  <input id="name" value={f.name} onChange={(e) => set("name", e.target.value)} onBlur={() => blur("name")} />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="field country" ref={countryRef} onClick={() => setOpen((o) => !o)} style={{ cursor: "pointer", position: "relative" }}>
                  <span className="flag" style={{ fontSize: 22, lineHeight: 1 }}>{country.flag}</span>
                  <span>({country.code})</span>
                  <span className="chev" style={{ transform: open ? "rotate(90deg)" : "rotate(0)", transition: "transform 0.2s" }}>{Icon.chevron}</span>
                  {open &&
                <div className="country-menu">
                      {COUNTRIES.map((c) =>
                  <button key={c.code} type="button" className={cx("country-opt", c.code === country.code && "on")} onClick={(e) => {e.stopPropagation();setCountry(c);setOpen(false);}}>
                          <span className="flag" style={{ fontSize: 20 }}>{c.flag}</span>
                          <span className="country-name">{c.name}</span>
                          <span className="country-code">{c.code}</span>
                        </button>
                  )}
                    </div>
                }
                </div>
                <div className={cx("field", f.phone && "has-value", show("phone") && errs.phone && "error")}>
                  <input id="phone" type="tel" value={f.phone} onChange={(e) => set("phone", e.target.value)} onBlur={() => blur("phone")} />
                  <label htmlFor="phone">Phone Number</label>
                </div>
              </div>
              {(show("name") && errs.name || show("phone") && errs.phone) &&
            <div style={{ display: "flex", gap: 18, fontSize: 10.5, color: "#c87a64", letterSpacing: "0.06em", textAlign: "left", marginTop: -8 }}>
                  <span style={{ flex: 1 }}>{show("name") && errs.name}</span>
                  <span style={{ width: 140 }}></span>
                  <span style={{ flex: 1.4 }}>{show("phone") && errs.phone}</span>
                </div>
            }
              <div className={cx("field", f.email && "has-value", show("email") && errs.email && "error")}>
                <input id="email" type="email" value={f.email} onChange={(e) => set("email", e.target.value)} onBlur={() => blur("email")} />
                <label htmlFor="email">Email</label>
                {show("email") && errs.email && <div className="field-err" style={{ padding: "0 22px 12px" }}>{errs.email}</div>}
              </div>
              <div className={cx("field", "textarea", f.message && "has-value", show("message") && errs.message && "error")}>
                <textarea id="message" value={f.message} onChange={(e) => set("message", e.target.value)} onBlur={() => blur("message")} />
                <label htmlFor="message">Message</label>
                {show("message") && errs.message && <div className="field-err" style={{ padding: "0 22px 12px" }}>{errs.message}</div>}
              </div>
              <div className="form-submit">
                <button type="submit" className="btn">Submit Now</button>
              </div>
            </form>
          </React.Fragment>
        }
      </div>
    </div>);

}

// ============== STUDIO PAGE (Figma: ABOUT US) ==============
function StudioPage({ onNav, onSection }) {
  const D = window.DIA;
  const s = D.studio;
  return (
    <div className="page-enter">
      {/* TAGLINE BAND */}
      <section style={{ padding: "140px var(--pad-x) 40px", textAlign: "center" }}>
        <FadeUp>
          <div style={{ display: "inline-flex", gap: 14, alignItems: "center", justifyContent: "center" }}>
            <span className="slash" style={{ display: "inline-block", width: 14, height: 24, background: "linear-gradient(180deg, #a3906f 0%, #d0b389 100%)", WebkitMask: "url(assets/section-slash.svg) center / contain no-repeat", mask: "url(assets/section-slash.svg) center / contain no-repeat" }}></span>
            <h2 style={{ fontFamily: "var(--f-serif)", fontStyle: "italic", fontSize: "clamp(28px, 3vw, 42px)", color: "#fff", fontWeight: 400, lineHeight: 1.2 }}>{s.tagline}</h2>
          </div>
        </FadeUp>
      </section>

      {/* WHO ARE WE? */}
      <section style={{ position: "relative", padding: "0", overflow: "hidden" }}>
        <div style={{ position: "relative", minHeight: 540, padding: "100px var(--pad-x)" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Img src={s.whoBg} label="WHO ARE WE · band" style={{ width: "100%", height: "100%", filter: "grayscale(60%) brightness(0.65)" }} />
          </div>
          <div className="container" style={{ position: "relative", maxWidth: 1100 }}>
            <SectionHead>WHO ARE WE?</SectionHead>
            <FadeUp>
              <p className="about-p" style={{ marginBottom: 18, color: "#fff" }}>{s.whoText.split("\n\n")[0]}</p>
              <p className="about-p" style={{ color: "#fff" }}>{s.whoText.split("\n\n")[1]}</p>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 32 }}>
                <button className="why-more" onClick={() => onSection("services")}>MORE ABOUT DiA</button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* THE TEAM */}
      <section className="section">
        <div className="container" style={{ maxWidth: 1620 }}>
          <SectionHead>THE TEAM</SectionHead>
          <FadeUp>
            <div style={{ background: "rgba(94,80,71,0.18)", borderRadius: 40, padding: "44px clamp(36px,4vw,72px)" }}>
              <div className="eyebrow no-rule" style={{ color: "var(--c-tan-soft)", fontSize: 12, letterSpacing: "0.22em", marginBottom: 8 }}>{s.principal.role}</div>
              <h3 className="display" style={{ color: "var(--c-tan-soft)", fontSize: 28, letterSpacing: "0.02em", marginBottom: 24, fontFamily: "var(--f-body)", fontWeight: 700 }}>{s.principal.name}</h3>
              {s.principal.bio.map((p, i) => (
                <p key={i} style={{ fontFamily: "var(--f-body)", fontSize: 16, lineHeight: "26px", color: "#fff", marginBottom: 14 }}>{p}</p>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* TEAM PHOTOS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1620 }}>
          <FadeUp>
            <h3 className="display" style={{ fontSize: 22, letterSpacing: "0.06em", color: "#fff", marginBottom: 18, fontFamily: "var(--f-body)", fontWeight: 700 }}>A BLEND OF TALENT AND CREATIVITY</h3>
            <p className="about-p" style={{ marginBottom: 40, color: "#fff", maxWidth: 1280, marginLeft: 0, textAlign: "left", fontSize: 16, lineHeight: "26px" }}>{s.teamIntro}</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
              {[1,2,3,4,5].map((i) => (
                <div key={i} style={{ width: 130, height: 160, borderRadius: 18, background: "#171615", border: "1px solid rgba(208,179,137,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(208,179,137,0.45)", fontFamily: "ui-monospace, monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Team {String(i).padStart(2, "0")}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 28 }}>
              <button className="why-more">MEET THE FULL TEAM</button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="section">
        <div className="container" style={{ maxWidth: 1620 }}>
          <FadeUp>
            <h3 className="display" style={{ fontSize: 22, letterSpacing: "0.06em", color: "#fff", marginBottom: 32, fontFamily: "var(--f-body)", fontWeight: 700, textTransform: "uppercase" }}>WHAT MAKES US DIFFERENT</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="diff-grid">
              {s.differentiators.map((d, i) => (
                <FadeUp key={i} delay={(i % 2) * 60} style={{ background: "rgba(94,80,71,0.22)", borderRadius: 30, padding: "22px 28px", display: "flex", alignItems: "center", gap: 22 }}>
                  <span style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(208,179,137,0.18)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--c-tan)", flexShrink: 0 }}>
                    {Icon.svc && Icon.svc.newBuild}
                  </span>
                  <span style={{ fontFamily: "var(--f-body)", fontWeight: 700, fontSize: 16, color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase" }}>{d.t}</span>
                </FadeUp>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* DESIGN WITH PURPOSE */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1620 }}>
          <FadeUp>
            <h3 className="display" style={{ fontSize: 22, letterSpacing: "0.06em", color: "#fff", marginBottom: 24, fontFamily: "var(--f-body)", fontWeight: 700, textTransform: "uppercase" }}>DESIGN WITH PURPOSE</h3>
            {s.designPurpose.map((p, i) => (
              <p key={i} style={{ fontFamily: "var(--f-body)", fontSize: 16, lineHeight: "26px", color: "#fff", marginBottom: 18 }}>{p}</p>
            ))}
            <h3 className="display" style={{ fontSize: 22, letterSpacing: "0.06em", color: "#fff", marginTop: 40, marginBottom: 18, fontFamily: "var(--f-body)", fontWeight: 700, textTransform: "uppercase" }}>YOUR VISION, OUR EXPERTISE</h3>
            <p style={{ fontFamily: "var(--f-body)", fontSize: 16, lineHeight: "26px", color: "#fff" }}>{s.yourVision}</p>
          </FadeUp>
        </div>
      </section>

      {/* GUIDED BY CORE VALUES */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1620 }}>
          <FadeUp>
            <h3 className="display" style={{ fontSize: 22, letterSpacing: "0.06em", color: "#fff", marginBottom: 32, fontFamily: "var(--f-body)", fontWeight: 700, textTransform: "uppercase" }}>GUIDED BY CORE VALUES</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }} className="values-grid">
              {s.coreValues.map((v, i) => (
                <FadeUp key={v} delay={i * 50} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(208,179,137,0.18)", borderRadius: 24, padding: "180px 18px 22px", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--f-body)", fontWeight: 700, fontSize: 14, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>{v}</div>
                </FadeUp>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* WANT TO DISCUSS */}
      <section style={{ padding: "0 var(--pad-x) 80px" }}>
        <div className="container" style={{ maxWidth: 1740 }}>
          <FadeUp>
            <div style={{ position: "relative", borderRadius: 50, overflow: "hidden", minHeight: 520, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: 60 }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <Img src="assets/about-band.jpg" label="CTA band" style={{ width: "100%", height: "100%" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(6,7,7,0.55), rgba(6,7,7,0.55))" }}></div>
              </div>
              <h2 className="display" style={{ position: "relative", fontSize: "clamp(36px, 5vw, 70px)", color: "#fff", fontFamily: "var(--f-body)", fontWeight: 700, letterSpacing: "0.02em", marginBottom: 28, lineHeight: 1, textTransform: "uppercase" }}>WANT TO DISCUSS YOUR PROJECT?</h2>
              <button className="why-more" style={{ position: "relative", padding: "14px 28px", fontSize: 14, letterSpacing: "0.2em" }} onClick={() => onSection("contact")}>GET IN TOUCH</button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CONTACT (shared) */}
      <section className="section" id="contact">
        <ContactForm />
      </section>
    </div>
  );
}


function ProjectsPage({ onNav }) {
  const D = window.DIA;
  const types = ["All", "New Build", "Renovation", "Conversion", "Interior"];
  const [filter, setFilter] = React.useState("All");
  const items = filter === "All" ? D.work : D.work.filter((p) => p.typology === filter);
  return (
    <div className="page-enter">
      <section className="section" style={{ paddingTop: 140 }}>
        <div className="container">
          <SectionHead>Our Work</SectionHead>
          <p style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px", fontSize: 14, color: "var(--c-text-dim)", lineHeight: 1.7 }}>
            A selection of recent residential commissions across the UK and Egypt.
          </p>
          <div className="chips">
            {types.map((t) =>
            <button key={t} className={cx("chip", filter === t && "on")} onClick={() => setFilter(t)}>{t}</button>
            )}
          </div>
          <div className="work-grid">
            {items.map((p, i) =>
            <FadeUp key={p.id} delay={i % 3 * 80}>
                <div className="work" onClick={() => onNav("project", p.id)}>
                  <div className="work-img"><Img src={p.cover} label={p.coverLabel} /></div>
                  <div className="work-body">
                    <div className="work-tag">{p.typology} · {p.year}</div>
                    <h4>{p.name}</h4>
                    <div className="meta">{p.location} · {p.area}</div>
                  </div>
                </div>
              </FadeUp>
            )}
          </div>
        </div>
      </section>
    </div>);

}

// ============== PROJECT DETAIL ==============
function ProjectDetail({ id, onNav }) {
  const D = window.DIA;
  const p = D.work.find((x) => x.id === id) || D.work[0];
  const [lb, setLb] = React.useState(null);
  const idx = D.work.findIndex((x) => x.id === p.id);
  const next = D.work[(idx + 1) % D.work.length];
  return (
    <div className="page-enter">
      <section className="detail-hero" style={{ marginTop: 0 }}>
        <Img src={p.cover} label={p.coverLabel} style={{ width: "100%", height: "100%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,9,8,0.4), rgba(10,9,8,0.85))" }}></div>
        <div style={{ position: "absolute", bottom: 60, left: "var(--pad-x)", right: "var(--pad-x)" }}>
          <div className="hero-eyebrow">{p.typology} · {p.location}</div>
          <h1 className="hero-title" style={{ fontStyle: "italic", textTransform: "uppercase" }}>{p.name}</h1>
        </div>
      </section>
      <section style={{ padding: "0 var(--pad-x)" }}>
        <div className="container">
          <div className="detail-fact">
            <div><div className="l">Location</div><div className="v">{p.location}</div></div>
            <div><div className="l">Typology</div><div className="v">{p.typology}</div></div>
            <div><div className="l">Area</div><div className="v">{p.area}</div></div>
            <div><div className="l">Year</div><div className="v">{p.year}</div></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: 900, textAlign: "center" }}>
          <FadeUp><p style={{ fontFamily: "var(--f-serif)", fontStyle: "italic", fontSize: "clamp(22px, 2.6vw, 32px)", lineHeight: 1.5, color: "var(--c-text)" }}>{p.brief}</p></FadeUp>
        </div>
      </section>
      <section style={{ padding: "0 var(--pad-x) 100px" }}>
        <div className="container">
          <div className="bento">
            {p.gallery.map((g, i) => {
              const layouts = [
              { gc: "span 4", gr: "span 2" }, { gc: "span 2", gr: "span 2" },
              { gc: "span 2", gr: "span 1" }, { gc: "span 2", gr: "span 1" }, { gc: "span 2", gr: "span 2" },
              { gc: "span 6", gr: "span 2" }];

              const lay = layouts[i % layouts.length];
              return (
                <FadeUp key={i} delay={i % 3 * 60} style={{ gridColumn: lay.gc, gridRow: lay.gr }}>
                  <button onClick={() => setLb(i)} style={{ width: "100%", height: "100%" }}>
                    <Img src={g.src} label={g.l} />
                  </button>
                </FadeUp>);

            })}
          </div>
        </div>
      </section>
      <section style={{ padding: "60px var(--pad-x) 120px", borderTop: "1px solid var(--c-border)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <button className="btn btn-outline" onClick={() => onNav("projects")}>← All Projects</button>
          <CallBtn label="Discuss a Project Like This" />
          <button className="btn" onClick={() => {onNav("project", next.id);window.scrollTo(0, 0);}}>Next: {next.name} →</button>
        </div>
      </section>
      <Lightbox images={p.gallery} index={lb} onClose={() => setLb(null)} onNav={(d) => setLb((lb + d + p.gallery.length) % p.gallery.length)} />
    </div>);

}

Object.assign(window, { HomePage, OurServicesCarousel, ProjectsPage, ProjectDetail, ContactForm, ServiceCategoryPage, ServiceDetailPage, StudioPage });