import { useEffect, useId, useRef, useState } from "react";
import { Check, MonitorCog, Moon, Palette, Sun } from "lucide-react";
import { useAppearance } from "../theme/AppearanceProvider";

const themeOptions = [
  { value: "system", label: "System", Icon: MonitorCog },
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
];

const accentOptions = [
  { value: "teal", label: "Teal", color: "#0f766e" },
  { value: "blue", label: "Blue", color: "#2563eb" },
  { value: "violet", label: "Violet", color: "#7c3aed" },
  { value: "amber", label: "Amber", color: "#b45309" },
];

function AppearanceMenu({ compact = false }) {
  const { theme, accent, setTheme, setAccent } = useAppearance();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`appearance-trigger flex items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-700 shadow-sm transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800 ${compact ? "h-8 w-8" : "h-10 w-10"}`}
        aria-label="Appearance settings"
        aria-expanded={open}
        aria-controls={panelId}
        title="Appearance settings"
      >
        <Palette size={19} aria-hidden="true" />
      </button>

      {open && (
        <div id={panelId} role="dialog" aria-label="Appearance" className="appearance-popover absolute right-0 top-[calc(100%+0.65rem)] z-[60] w-[min(19rem,calc(100vw-2rem))] rounded-2xl border border-stone-200 bg-white p-4 text-left shadow-2xl shadow-stone-900/15">
          <div className="flex items-center gap-2">
            <Palette size={17} className="text-teal-700" aria-hidden="true" />
            <h2 className="text-sm font-bold text-stone-950">Appearance</h2>
          </div>

          <div className="mt-4" role="group" aria-label="Theme">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-500">Theme</p>
            <div className="grid grid-cols-3 gap-1 rounded-xl bg-stone-100 p-1">
              {themeOptions.map(({ value, label, Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setTheme(value)}
                  className={`flex min-h-10 items-center justify-center gap-1 rounded-lg px-2 text-xs font-semibold transition ${theme === value ? "bg-white text-teal-800 shadow-sm" : "text-stone-500 hover:text-stone-900"}`}
                  aria-pressed={theme === value}
                >
                  <Icon size={14} aria-hidden="true" />
                  {label}
                  {theme === value && <Check size={13} aria-hidden="true" />}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4" role="group" aria-label="Accent color">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-500">Accent color</p>
            <div className="grid grid-cols-4 gap-2">
              {accentOptions.map(({ value, label, color }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setAccent(value)}
                  className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl border text-[11px] font-semibold transition hover:bg-stone-50 ${accent === value ? "border-teal-600 bg-teal-50 text-stone-900 ring-2 ring-teal-200" : "border-stone-200 text-stone-500"}`}
                  aria-label={`${label} accent${accent === value ? ", selected" : ""}`}
                  aria-pressed={accent === value}
                >
                  <span className="h-5 w-5 rounded-full border-2 border-white shadow-sm ring-1 ring-stone-300" style={{ backgroundColor: color }} aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppearanceMenu;
