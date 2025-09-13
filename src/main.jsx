import { createRoot } from 'react-dom/client'
import App from './Components/App/App'
import UserContextProvider from "./Context/Usercontext";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'


let root = createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <App/>
  </UserContextProvider>
)


