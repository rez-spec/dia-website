function App() {
  const parseHash = () => {
    const h = (window.location.hash || "#home").slice(1);
    if (h.startsWith("project/")) return { page: "project", id: h.slice(8) };
    if (h.startsWith("service/")) return { page: "service", id: h.slice(8) };
    if (h.startsWith("our-service/")) return { page: "our-service", id: h.slice(12) };
    if (h.startsWith("packages/")) return { page: "packages", id: h.slice(9) };
    if (h === "packages") return { page: "packages", id: "architecture" };
    if (h === "services") return { page: "services" };
    if (["projects"].includes(h)) return { page: "projects" };
    if (h === "studio") return { page: "studio" };
    return { page: "home" };
  };
  const [route, setRoute] = React.useState(parseHash());
  const [activeSection, setActiveSection] = React.useState("about");
  const sectionRefs = React.useRef({});

  React.useEffect(() => {
    const h = () => setRoute(parseHash());
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);

  // Scroll-spy for home sections
  React.useEffect(() => {
    if (route.page !== "home") return;
    const onScroll = () => {
      const y = window.scrollY + 140;
      let cur = "about";
      Object.entries(sectionRefs.current).forEach(([k, el]) => {
        if (el && el.offsetTop <= y) cur = k;
      });
      setActiveSection(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [route]);

  const onNav = (page, id) => {
    if (page === "project" && id) window.location.hash = "project/" + id;
    else if (page === "service" && id) window.location.hash = "service/" + id;
    else if (page === "our-service" && id) window.location.hash = "our-service/" + id;
    else if (page === "packages") window.location.hash = id ? "packages/" + id : "packages";
    else if (page === "services") window.location.hash = "services";
    else window.location.hash = page;
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const onSection = (id) => {
    if (route.page !== "home") {
      window.location.hash = "home";
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: "smooth" });
    }
  };

  let Page;
  if (route.page === "projects") Page = <ProjectsPage onNav={onNav} />;
  else if (route.page === "project") Page = <ProjectDetail id={route.id} onNav={onNav} />;
  else if (route.page === "service") Page = <ServiceDetailPage slug={route.id} onNav={onNav} />;
  else if (route.page === "our-service") Page = <ServiceCategoryPage id={route.id} onNav={onNav} />;
  else if (route.page === "services") Page = <ServicesPage onNav={onNav} onSection={onSection} />;
  else if (route.page === "packages") Page = <PackagesPage kind={route.id} onNav={onNav} onSection={onSection} />;
  else if (route.page === "studio") Page = <StudioPage onNav={onNav} onSection={onSection} />;
  else Page = <HomePage onNav={onNav} onSection={onSection} sectionRefs={sectionRefs} />;

  return (
    <React.Fragment>
      <Nav section={activeSection} page={route.page} onNav={onNav} onSection={onSection} />
      <Rail onSection={onSection} onNav={onNav} />
      <BackToTop />
      <main>{Page}</main>
      <Footer onNav={onNav} onSection={onSection} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
