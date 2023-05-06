import React, { useState } from 'react';
import MobileMenuButton from './MobileMenuButton';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import Link from './Link';
import Container from '../atoms/Container';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className='relative z-50 bg-gray-800 text-offwhite md:h-16'>
      <Container className='px-0 md:px-4'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='h-16 inset-y-0 left-0 flex items-center md:hidden'>
            <MobileMenuButton mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
          </div>
          <div
            className={`${
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } min-h-screen md:min-h-0 px-4 absolute w-full bg-gray-800 transition ease-in-out pb-8 md:relative md:translate-x-0 md:px-0 md:pb-0 md:flex md:flex-1 md:items-center md:justify-start md:h-16`}
          >
            <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-3'>
              <Link href='/'>Home</Link>
              <DropdownMenu href='/about' text='About'>
                <DropdownItem href='#'>Meet the team</DropdownItem>
                <DropdownItem href='#'>Officials</DropdownItem>
                <DropdownItem href='#'>The BPF Academy</DropdownItem>
                <DropdownItem href='#'>About the BPF</DropdownItem>
                <DropdownItem href='#'>About the IPL</DropdownItem>
                <DropdownItem href='#'>Sponsors</DropdownItem>
                <DropdownItem href='#'>Contact Us</DropdownItem>
              </DropdownMenu>
              <Link href='#'>Membership</Link>
              <Link href='#'>Events</Link>
              <Link href='#'>Results</Link>
              <Link href='#'>Blog</Link>
              <Link href='#'>British Strict Curl Federation</Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
