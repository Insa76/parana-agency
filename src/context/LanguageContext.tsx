
import {
  useEffect,
  useMemo,
  useState,
  useCallback,
  type ReactNode,
} from "react";

import {
  LanguageContext,
  type Language,
} from "./LanguageContextDefinition";

const STORAGE_KEY = "parana-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "es";
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);

  if (saved === "es" || saved === "en") {
    return saved;
  }

  return "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
      document.documentElement.lang = nextLanguage;
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((currentLanguage) => {
      const nextLanguage = currentLanguage === "es" ? "en" : "es";

      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, nextLanguage);
        document.documentElement.lang = nextLanguage;
      }

      return nextLanguage;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
    }),
    [language, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
