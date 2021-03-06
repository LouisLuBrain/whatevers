import React from 'react';
import routes from '../routes';
import { NavLink, useHistory } from 'react-router-dom';
import '../css/navigation.css';

function Navigation() {
  const history = useHistory();

  return (
    <div className="flex flex-col justify-start items-start py-6 pr-4 shadow-lg h-screen overflow-y-scroll">
      <div 
        onClick={() => {history.push('/')}}
        className="w-full cursor-pointer inline-block text-2xl text-blue-700 px-6 pb-6 tracking-wider font-semibold"
      >Whatevers</div>
      {routes.map(route => (
        <NavLink
          to={route.path}
          exact
          key={route.path}
          className="text-gray-500 w-full transition-all ease-in duration-200 my-1 rounded-r-full pr-32 pl-6 py-2 hover:bg-gray-200"
          activeClassName="bg-blue-200 text-blue-600"
        >
            <span>{route.name}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default Navigation
