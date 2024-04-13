import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/router';
import { Provider } from './contexts/context';


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </Provider>
  )
}
export default App;
