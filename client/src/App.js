import { Landing, Error, Register, ProtectedRoute } from './pages';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AddOrder, AllOrders, Profile, SharedLayout } from './pages/dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            {/* <Route index element={<Stats />} /> */}
            <Route index element={<AllOrders />} />
            <Route path='profile' element={<Profile />} />
            <Route path='add-order' element={<AddOrder />} />
          </Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
