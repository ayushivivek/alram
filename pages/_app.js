import { useEffect, useState } from "react";
import Layout from "../components/layout";
import "../styles/globals.css";
import ThemeContext, { themes } from "../contexts/ThemeContext";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(themes.dark);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <Layout toggleTheme={toggleTheme} mode={theme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default MyApp;
