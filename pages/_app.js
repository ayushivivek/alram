import { useEffect, useState } from "react";
import Layout from "../components/layout";
import "../styles/globals.css";
import ThemeContext, { themes } from "../contexts/ThemeContext";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(themes.dark);
  const [digit, setDigit] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };
  const handleDigital = () => {
    setDigit(!digit);
  };
  return (
    <ThemeContext.Provider value={theme} className="w-full">
      <Layout
        toggleTheme={toggleTheme}
        mode={theme}
        handleDigital={handleDigital}
        digit={digit}
      >
        <Component {...pageProps} digit={digit} />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default MyApp;
