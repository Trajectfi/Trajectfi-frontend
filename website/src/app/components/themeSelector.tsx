import { ChevronDownIcon, MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { JSX, useEffect, useRef, useState } from "react";

type Theme = {
  name: string;
  icon: JSX.Element;
};

interface ThemeSelectorProps {
  onThemeChange?: (theme: Theme) => void;
}

const themes = [
  {
    name: "Light",
    icon: <SunIcon className="size-4 text-white" />,
  },
  {
    name: "Dark",
    icon: <MoonIcon className="size-4 text-white" />,
  },
];

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onThemeChange }) => {
  const [theme, setTheme] = useState<Theme>(themes[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getInitialTheme = () => {
      if (window.matchMedia) {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        console.log(prefersDark);
        return prefersDark ? themes[1] : themes[0];
      }

      return themes[0];
    };

    setTheme(getInitialTheme());

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? themes[1] : themes[0]);
    };

    mediaQuery.addEventListener("change", handleThemeChange);
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsOpen(false);
    onThemeChange?.(newTheme);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white/60 text-sm rounded-lg h-8 px-2"
      >
        {theme.icon}
        <span>{theme.name}</span>
        <ChevronDownIcon className="size-3 transition-transform duration-200" />
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-1 w-full rounded-lg bg-white/5 shadow-lg py-1 z-10">
          {themes.map((th) => (
            <button
              onClick={() => changeTheme(th)}
              className={
                "flex items-center gap-2 px-3 py-2 w-full text-left hover:bg-white/10 text-sm " +
                (th.name === theme.name ? "bg-white/10" : "")
              }
              key={th.name}
            >
              {th.icon}
              <span>{th.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
