import React, { createContext } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';

export const DataContext = createContext(null);
const Main = () => {
      const categories = useLoaderData();
      const data={
            categories
      }
    
      return (
            <>
                  <DataContext.Provider value={data}>
                        <Header />
                        <div className=' relative'>
                              <Outlet />
                              <Footer />
                        </div>
                  </DataContext.Provider>
            </>
      );
};

export default Main;