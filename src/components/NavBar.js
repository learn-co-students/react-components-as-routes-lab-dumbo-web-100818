import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
        <NavLink
          to = "/"
          exact
          active style = {{
            background: 'hotpink',
            width: '100px',
            padding: '1px',
            margin: '0 6px 6px',
            background: 'hotpink',
            textDecoration: 'underline',
            color: 'white'
          }}
          >Home
        </NavLink> </li>

        <li> <NavLink
          to = "/directors"
          exact
            active style = {{
              background: 'hotpink',
              width: '100px',
              padding: '1px',
              margin: '0 6px 6px',
              background: 'hotpink',
              textDecoration: 'underline',
              color: 'white'
            }}
            >Directors
          </NavLink> </li>

          <li> <NavLink
            to = "/movies"
            exact
              active style = {{
                background: 'hotpink',
                width: '100px',
                padding: '1px',
                margin: '0 6px 6px',
                background: 'hotpink',
                textDecoration: 'underline',
                color: 'white'
              }}
              >Movies
            </NavLink> </li>

            <li> <NavLink
              to = "/actors"
              exact
                active style = {{
                  background: 'hotpink',
                  width: '100px',
                  padding: '1px',
                  margin: '0 6px 6px',
                  background: 'hotpink',
                  textDecoration: 'underline',
                  color: 'white'
                }}
                >Actors
              </NavLink> </li>

        </ul>
    </div>

  );
};

export default NavBar;
