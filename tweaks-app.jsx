// DiA Residential — Tweaks panel
function DiATweaks() {
  const defaults = /*EDITMODE-BEGIN*/{
    "theme": "dark",
    "accent": "#D0B389",
    "motion": true,
    "density": "comfortable"
  }/*EDITMODE-END*/;
  const [t, setTweak] = useTweaks(defaults);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", t.theme);
    document.documentElement.style.setProperty("--c-tan", t.accent);
    document.documentElement.style.setProperty("--motion", t.motion ? "1" : "0");
    document.documentElement.setAttribute("data-density", t.density);
    document.documentElement.setAttribute("data-motion", t.motion ? "on" : "off");
  }, [t.theme, t.accent, t.motion, t.density]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Theme">
        <TweakRadio label="Mode" value={t.theme} options={[{ label: "Dark", value: "dark" }, { label: "Light", value: "light" }]} onChange={(v) => setTweak("theme", v)} />
      </TweakSection>
      <TweakSection title="Accent">
        <TweakColor label="Tan" value={t.accent} options={["#D0B389", "#A3906F", "#C89F65", "#8A6F47", "#E8C8A0"]} onChange={(v) => setTweak("accent", v)} />
      </TweakSection>
      <TweakSection title="Layout">
        <TweakRadio label="Density" value={t.density} options={[{ label: "Compact", value: "compact" }, { label: "Comfortable", value: "comfortable" }, { label: "Spacious", value: "spacious" }]} onChange={(v) => setTweak("density", v)} />
        <TweakToggle label="Motion & fades" value={t.motion} onChange={(v) => setTweak("motion", v)} />
      </TweakSection>
    </TweaksPanel>
  );
}
// mount alongside main app
(function mountTweaks() {
  const host = document.createElement("div");
  host.id = "dia-tweaks";
  document.body.appendChild(host);
  ReactDOM.createRoot(host).render(<DiATweaks />);
})();
