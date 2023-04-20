import React, { createContext } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import AuthProviders from '../Providers/AuthProviders';

export const DataContext = createContext(null);
const Main = () => {
      const categories = useLoaderData();
      const data = {
            categories
      }

      return (
            <>
                  <AuthProviders>
                        <DataContext.Provider value={data}>
                              <Header />
                              <div className=' relative'>
                                    <Outlet />
                                    <Footer />
                              </div>
                        </DataContext.Provider>
                  </AuthProviders>
            </>
      );
};

export default Main;