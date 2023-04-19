import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Layout/Main';
import { Link } from 'react-router-dom';
import './LeftNav.css'
import { GoThreeBars } from "react-icons/go";
const LeftNav = () => {
      const [isCollapsed, setIsCollapsed] = useState(false);

      useEffect(() => {
            const handleResize = () => {
                  if (window.innerWidth < 768) {
                        setIsCollapsed(true);
                  } else {
                        setIsCollapsed(false);
                  }
            };

            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
      }, []);

      const toggleCollapse = () => {
            setIsCollapsed(!isCollapsed);
      };

      const { categories } = useContext(DataContext);
      console.log(categories);
      return (
            <div>
                  <h5 className='fs-4 mb-3'>All Category</h5>
                  {
                        window.innerWidth > 768 ?<>
                        </>

                              :<>
                                    <button className='border-0 bg-transparent ' onClick={toggleCollapse}><GoThreeBars size={'40px'} /></button>
                              </>
                     
                        
                  }
                  {

                        isCollapsed ?
                              <>

                              </>
                              :
                              <>
                                    <div className=' d-flex flex-column gap-2 '>
                                          {
                                                categories.map(category => <Link className='d-block text-decoration-none fs-5 hover-link' to={`/category/${category.id}`}
                                                      key={category.id}
                                                >
                                                      {category.name}
                                                </Link>)
                                          }
                                    </div>
                              </>
                  }
            </div>
      );
};

export default LeftNav;