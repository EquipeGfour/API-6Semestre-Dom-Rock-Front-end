import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/router';


function App() {
  return (
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  )
}
export default App;
