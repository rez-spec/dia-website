// DiA Residential — Our Services + Our Packages pages

// ============== OUR SERVICES (long-form, 5 service sections + contact) ==============
function ServicesPage({ onNav, onSection }) {
  const D = window.DIA;
  return (
    <div className="page-enter services-page">
      <section className="section" style={{ paddingTop: 140 }}>
        <div className="container" style={{ maxWidth: 1620 }}>
          <SectionHead left>OUR SERVICES</SectionHead>
        </div>

        <div className="container" style={{ maxWidth: 1620, marginTop: 32 }}>
          {D.ourServices.map((s, i) => (
            <FadeUp key={s.id}>
              <article className="svc-row">
                <header className="svc-row-head">
                  <h2>{s.t}</h2>
                </header>
                <div className="svc-row-grid">
                  <div className="svc-row-img" onClick={() => onNav("our-service", s.id)}>
                    <Img src={s.img} label={s.l} />
                    <div className="svc-row-overlay">
                      <span>{s.t}</span>
                    </div>
                  </div>
                  <div className="svc-row-body">
                    <p className="svc-row-tag">{s.tag}</p>
                    <p className="svc-row-sub">{s.sub}</p>
                    <p className="svc-row-para">{s.paragraphs[0]}</p>
                    <div className="svc-row-foot">
                      <button className="why-more" onClick={() => onNav("our-service", s.id)}>EXPLORE</button>
                    </div>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <ContactForm />
      </section>
    </div>
  );
}

// ============== OUR PACKAGES (router shell) ==============
function PackagesPage({ kind = "architecture", onNav, onSection }) {
  return kind === "interior" ? <InteriorPackagesPage onNav={onNav} /> : <ArchitecturePackagesPage onNav={onNav} />;
}

// ============== ARCHITECTURE PACKAGES ==============
function ArchitecturePackagesPage({ onNav }) {
  const D = window.DIA;
  const pkg = D.archPackages;

  return (
    <div className="page-enter pkg-page">
      <section className="section" style={{ paddingTop: 140, paddingBottom: 40, textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <FadeUp>
            <p className="pkg-tagline">{pkg.tagline}</p>
          </FadeUp>
        </div>
      </section>

      <section style={{ padding: "0 var(--pad-x) 24px" }}>
        <div className="container" style={{ maxWidth: 1620 }}>
          <div className="pkg-subnav">
            <button className="pkg-tab on">ARCHITECTURE PACKAGES</button>
            <button className="pkg-tab" onClick={() => onNav("packages", "interior")}>INTERIOR DESIGN PACKAGES</button>
          </div>
        </div>
      </section>

      <section style={{ padding: "32px var(--pad-x) 100px" }}>
        <div className="container" style={{ maxWidth: 1620 }}>
          <SectionHead left>OUR PACKAGES</SectionHead>

          <div className="pkg-tiers">
            {pkg.tiers.map((t, i) => (
              <FadeUp key={t.id} delay={i * 60}>
                <article className={cx("pkg-tier", "tone-" + t.tone)}>
                  <div className="pkg-tier-side">
                    <span className="pkg-tier-side-label">{t.name}</span>
                    <span className="pkg-tier-side-num">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="pkg-tier-main">
                    <h3 className="pkg-tier-name">{t.name}</h3>
                    <p className="pkg-tier-blurb">{t.blurb}</p>

                    <div className="pkg-tier-list-head">DELIVERABLES</div>
                    <ul className="pkg-tier-list">
                      {t.deliverables.map((d) => <li key={d}>{d}</li>)}
                    </ul>

                    <div className="pkg-tier-list-head">OUTCOME</div>
                    <p className="pkg-tier-outcome">{t.outcome}</p>

                    <div className="pkg-tier-foot">
                      <button className="btn-pill" onClick={() => onNav("contact")}>SELECT THIS PACKAGE</button>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>

          {/* Comparison strip at bottom */}
          <div className="pkg-compare">
            {pkg.tiers.map((t) => (
              <div key={t.id} className={cx("pkg-compare-card", "tone-" + t.tone)}>
                <div className="pkg-compare-name">{t.name}</div>
                <ul className="pkg-compare-list">
                  {t.deliverables.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <ContactForm />
      </section>
    </div>
  );
}

// ============== INTERIOR DESIGN PACKAGES ==============
function InteriorPackagesPage({ onNav }) {
  const D = window.DIA;
  const pkg = D.interiorPackages;
  const arch = D.archPackages;

  return (
    <div className="page-enter pkg-page">
      <section className="section" style={{ paddingTop: 140, paddingBottom: 40, textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <FadeUp>
            <p className="pkg-tagline">{pkg.tagline}</p>
          </FadeUp>
        </div>
      </section>

      <section style={{ padding: "0 var(--pad-x) 24px" }}>
        <div className="container" style={{ maxWidth: 1620 }}>
          <div className="pkg-subnav">
            <button className="pkg-tab" onClick={() => onNav("packages", "architecture")}>ARCHITECTURE PACKAGES</button>
            <button className="pkg-tab on">INTERIOR DESIGN PACKAGES</button>
          </div>
        </div>
      </section>

      {/* Compact architecture tiers row */}
      <section style={{ padding: "32px var(--pad-x) 16px" }}>
        <div className="container" style={{ maxWidth: 1620 }}>
          <SectionHead left>ARCHITECTURE PACKAGES</SectionHead>
          <div className="pkg-compare" style={{ marginTop: 0 }}>
            {arch.tiers.map((t) => (
              <div key={t.id} className={cx("pkg-compare-card", "tone-" + t.tone)}>
                <div className="pkg-compare-name">{t.name}</div>
                <ul className="pkg-compare-list">
                  {t.deliverables.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior design 6 cards */}
      <section style={{ padding: "64px var(--pad-x) 80px" }}>
        <div className="container" style={{ maxWidth: 1620 }}>
          <SectionHead left>INTERIOR DESIGN PACKAGES</SectionHead>

          {/* Chip row of card names */}
          <div className="pkg-chip-row">
            {pkg.cards.map((c, i) => (
              <div key={c.id} className={cx("pkg-chip", "tone-c" + ((i % 6) + 1))}>
                {c.name}
              </div>
            ))}
          </div>

          {/* Detailed cards */}
          <div className="pkg-detail-stack">
            {pkg.cards.map((c, i) => (
              <FadeUp key={c.id} delay={i * 40}>
                <article className="pkg-detail">
                  <h3 className="pkg-detail-name">{c.name}</h3>

                  {c.whatsIncluded && (
                    <React.Fragment>
                      <div className="pkg-detail-label">WHAT'S INCLUDED:</div>
                      <div className="pkg-detail-grid">
                        {c.whatsIncluded.map((it) => (
                          <div key={it.t} className="pkg-detail-item">
                            <h4>{it.t}</h4>
                            <p>{it.b}</p>
                          </div>
                        ))}
                      </div>
                    </React.Fragment>
                  )}

                  {c.types && (
                    <React.Fragment>
                      <div className="pkg-detail-label">{c.types.label.toUpperCase()}:</div>
                      <div className="pkg-types-row">
                        {c.types.items.map((it) => (
                          <span key={it} className="pkg-type-pill">{it}</span>
                        ))}
                      </div>
                    </React.Fragment>
                  )}
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <ContactForm />
      </section>
    </div>
  );
}

Object.assign(window, { ServicesPage, PackagesPage, ArchitecturePackagesPage, InteriorPackagesPage });
