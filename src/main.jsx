import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { SidebarProvider } from './context/sidebarContext.jsx';
import { ThemeContextProvider } from './context/themeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </ThemeContextProvider>
);
