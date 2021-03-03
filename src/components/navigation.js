import React from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { desktopVw, fonts, letterSpacing } from '../styles';

export default ({ color }) => (
  <Animation>
    <StyledNavigation color={color} className="transform" role="navigation">
      <h3>
        <Link to="/">
          NIELS REIJNDERS
        </Link>
      </h3>
      <StyledUl>
        <li>
          <Link to="/work">
            WORK
          </Link>
        </li>

        <li><Link to="/about">ABOUT</Link></li>
      </StyledUl>
      {/* <p>
        AVAILABLE FOR WORK
      </p> */}
    </StyledNavigation>
  </Animation>
);

const Animation = styled.div``;

const StyledNavigation = styled.div`
  display: flex;
  padding: ${desktopVw(65)} ${desktopVw(100)};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: calc(100% - ${desktopVw(200)});
  color: ${(props) => (props.color ? '#fff' : '#fff')};
  /* background: white; */
  justify-content: space-between;
  font-family: ${fonts.poppins};
  font-weight: 600;
  font-size: ${desktopVw(15)};
  letter-spacing: ${letterSpacing(80)};

  h3 {
    font-weight: 600;
  }

  a {
    text-decoration: none;
  }
`;

const StyledUl = styled.ul`
  li {
    display: inline-block;
    margin: 0 ${desktopVw(25)};
  }
`;
