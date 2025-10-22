import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the Context
const ThemeContext = createContext();

// Custom hook to use the theme context easily
export const useTheme = () => useContext(ThemeContext);

// 2. Create the Provider Component
export const ThemeProvider = ({ children }) => {
  // Check local storage for a theme preference, defaulting to 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      // If a saved theme exists, use it. Otherwise, check system preference.
      if (savedTheme) {
        return savedTheme;
      }
      // Check system preference (prefers-color-scheme)
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    return 'dark';
  });

  // 3. Effect to apply theme class to the document <html> tag
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove both classes first to prevent conflicts
    root.classList.remove('light', 'dark');

    // Add the current theme class
    root.classList.add(theme);

    // Save the preference to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  // 4. Provide the theme state and toggle function
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
