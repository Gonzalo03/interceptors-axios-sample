import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import GetUsersPage from './pages/GetUsersPage';

const Router = () => {
  return (
    <div>
         <BrowserRouter>
      <Routes>
          <Route index element={<App />} />
        <Route path="/users" element={<GetUsersPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router/>);

