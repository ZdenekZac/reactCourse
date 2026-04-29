import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineHome } from 'react-icons/hi';
import { LiaShuttleVanSolid } from 'react-icons/lia';
import { GrUserWorker } from 'react-icons/gr';
import { GoPeople } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';

import { MdOutlineCarRental } from 'react-icons/md';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-0);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    color: var(--color-ember-600);
    background-color: var(--color-emerald-400);
    border-radius: var(--border-radius-sm);
  }
`;

function MainNav() {
  return (
    <NavList>
      <li>
        <StyledNavLink to='/dashboard'>
          <HiOutlineHome />
          <span>Home</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/rentals'>
          <MdOutlineCarRental />
          <span>Rentals</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/vans'>
          <LiaShuttleVanSolid />
          <span>Vans</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/staff'>
          <GrUserWorker />
          <span>Staff</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/guests'>
          <GoPeople />
          <span>Guests</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/settings'>
          <IoSettingsOutline />
          <span>Settings</span>
        </StyledNavLink>
      </li>
    </NavList>
  );
}

export default MainNav;
