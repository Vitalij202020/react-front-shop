import React from 'react';
import './styles/App.css';
import {useTypedSelector} from "./hooks/useTypedSelector";
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from "./components/hoc/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import AdminProductsPage from "./pages/AdminProducsPage/AdminProductsPage";
import RolesPage from "./pages/RolesPage/RolesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
    const {isAuth} = useTypedSelector(state => state.userLogin);

    return (
      <Routes>
          <Route path='/' element={<PrivateRoute roles={['user', 'admin']} component={HomePage}/>}/>
          <Route path='/profile' element={<PrivateRoute roles={['user', 'admin']} component={ProfilePage}/>}/>
          <Route path='/products' element={<PrivateRoute roles={['user']} component={ProductsPage}/>}/>
          <Route path='/products/:id' element={<h1>Product 1</h1>}/>

          <Route path='/admin/users' element={<PrivateRoute roles={['admin']} component={UsersPage}/>}/>
          <Route path='/admin/users/:id' element={<PrivateRoute roles={['admin']} component={UsersPage}/>}/>
          <Route path='/admin/products' element={<PrivateRoute roles={['admin']} component={AdminProductsPage}/>}/>
          <Route path='/admin/roles' element={<PrivateRoute roles={['admin']} component={RolesPage}/>}/>

          <Route path='/login' element={!isAuth ? <LoginPage/> : <Navigate to='/'/>}/>
          <Route path='/register' element={!isAuth ? <RegisterPage/> : <Navigate to='/'/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
  );
}

export default App;
