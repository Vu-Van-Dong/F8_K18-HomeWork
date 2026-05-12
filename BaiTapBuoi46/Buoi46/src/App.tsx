import "./App.css";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
      <ThemeProvider>
        <Header />
        <Content />
        <Footer />
      </ThemeProvider>
  );
}

export default App;