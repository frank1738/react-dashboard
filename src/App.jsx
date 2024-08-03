import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Layout from './layout/Layout';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <Router>
            <Sidebar />
            <Layout />
          </Router>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
