// DiA Residential — pages (Home single-page + Projects index + Project detail)

// ============== HOME (single-page scrolling, matches Figma) ==============
function HomePage({ onNav, onSection, sectionRefs }) {
  const D = window.DIA;

  return (
    <div className="page-enter">
      {/* HERO */}
      <section style={{ position: "relative" }}>
        <div className="hero">
          <div className="hero-bg"><Img src={D.hero.image} label={D.hero.imageLabel} /></div>
          <div className="hero-content" style={{ fontFamily: "Montserrat", height: "200.909px" }}>
            <div className="hero-eyebrow" style={{ height: "30.5909px" }}>{D.hero.eyebrow}</div>
            <h1 className="hero-title" style={{ fontFamily: "Montserrat", fontWeight: "700", fontSize: "43.4109px", color: "rgb(208, 179, 137)" }}>Your one-stop destination for <em style={{ fontFamily: "Montserrat" }}>all residential services.</em></h1>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about" ref={(el) => sectionRefs.current.about = el}>
        <div className="container">
          <SectionHead>About Us</SectionHead>
          <div className="about-grid">
            <FadeUp>
              <div className="about-img"><Img src={D.about.portrait} label={D.about.portraitLabel} /></div>
            </FadeUp>
            <FadeUp delay={100}>
              <div className="about-text">
                <h3>"Our surroundings directly influence the quality of our lives."</h3>
                {D.about.body.map((p, i) => <p key={i}>{p}</p>)}
                <button className="btn btn-outline" style={{ marginTop: 16 }} onClick={() => onNav("projects")}>Explore Our Work →</button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* WHY DIA */}
      <section className="section" id="why" ref={(el) => sectionRefs.current.why = el} style={{ background: "var(--c-bg-2)" }}>
        <div className="container">
          <SectionHead>Why DiA?</SectionHead>
          <FadeUp>
            <div className="card why-card" style={{ "--bgimg": `url(${window.__resources.img8})`, backgroundSize: "cover", borderStyle: "solid" }}>
              {D.why.map((w, i) =>
              <div key={i} className="why-item">
                  <h3>{w.t}:</h3>
                  <p>{w.b}</p>
                </div>
              )}
              <div className="why-foot" style={{ gridColumn: "1 / -1" }}>
                <button className="why-more" onClick={() => onNav("projects")}>MORE {Icon.chevron}</button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "0 var(--pad-x)", marginTop: -40, marginBottom: 80 }}>
        <div className="container">
          <FadeUp>
            <div className="card stats-card">
              {D.stats.map((s, i) =>
              <div key={i} className="stat">
                  <div className="stat-num">{s.n}</div>
                  <div className="stat-label">{s.t}</div>
                  <div className="stat-sub">{s.s}</div>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services" ref={(el) => sectionRefs.current.services = el}>
        <div className="container">
          <SectionHead>Our Services</SectionHead>
          <div className="svc-grid">
            {D.services.map((s, i) =>
            <FadeUp key={s.n} delay={i % 3 * 80}>
                <div className="svc">
                  <div className="svc-num">{s.n}</div>
                  <div className="svc-icon">{Icon.svcIcon}</div>
                  <h4>{s.t}</h4>
                  <p>{s.b}</p>
                </div>
              </FadeUp>
            )}
          </div>
        </div>
      </section>

      {/* WHAT WE DO (recent work) */}
      <section className="section" id="work" ref={(el) => sectionRefs.current.work = el} style={{ background: "var(--c-bg-2)" }}>
        <div className="container">
          <SectionHead>What We Do</SectionHead>
          <div className="work-grid">
            {D.work.slice(0, 6).map((p, i) =>
            <FadeUp key={p.id} delay={i % 3 * 80}>
                <div className="work" onClick={() => onNav("project", p.id)}>
                  <div className="work-img"><Img src={p.cover} label={p.coverLabel} /></div>
                  <div className="work-body">
                    <div className="work-tag">{p.typology}</div>
                    <h4>{p.name}</h4>
                    <div className="meta">{p.location} · {p.year}</div>
                  </div>
                </div>
              </FadeUp>
            )}
          </div>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <button className="btn" onClick={() => onNav("projects")}>View All Projects {Icon.arrow}</button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact" ref={(el) => sectionRefs.current.contact = el}>
        <ContactForm />
      </section>
    </div>);

}

// ============== CONTACT FORM ==============
function ContactForm() {
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
                <div className="field country">
                  <span className="flag"></span><span>(+44)</span><span className="chev">{Icon.chevron}</span>
                </div>
                <div className={cx("field", f.phone && "has-value", show("phone") && errs.phone && "error")}>
                  <input id="phone" type="tel" value={f.phone} onChange={(e) => set("phone", e.target.value)} onBlur={() => blur("phone")} />
                  <label htmlFor="phone">Phone Number</label>
                </div>
              </div>
              {show("name") && errs.name || show("phone") && errs.phone ?
            <div style={{ display: "flex", gap: 18, fontSize: 10.5, color: "#c87a64", letterSpacing: "0.06em", textAlign: "left", marginTop: -8 }}>
                  <span style={{ flex: 1 }}>{show("name") && errs.name}</span>
                  <span style={{ width: 140 }}></span>
                  <span style={{ flex: 1.4 }}>{show("phone") && errs.phone}</span>
                </div> :
            null}
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

// ============== PROJECTS INDEX ==============
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
          <button className="btn" onClick={() => {onNav("project", next.id);window.scrollTo(0, 0);}}>Next: {next.name} →</button>
        </div>
      </section>
      <Lightbox images={p.gallery} index={lb} onClose={() => setLb(null)} onNav={(d) => setLb((lb + d + p.gallery.length) % p.gallery.length)} />
    </div>);

}

Object.assign(window, { HomePage, ProjectsPage, ProjectDetail, ContactForm });