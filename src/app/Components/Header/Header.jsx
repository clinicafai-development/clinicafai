"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaAnglesRight } from 'react-icons/fa6';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import SocialIcons from '../SocialIcons';

const Header = ({ isTopBar, variant }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState();
  const menu = {
    email: 'contact@clinicafai.com',
    location: 'Clinica Fai, 1335/A, Rd Number 45, Jubilee Hills, Hyderabad',
    logoUrl: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/logo//Logo.png',
    logoLink: '/',
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'Dr. Shubhra Goel', href: '/about', subItems: [
        { label: 'Credentials', href: '/about/credentials' },
        { label: 'Patient Experience', href: '/about/patient-experience' },
      ] },
      { label: 'Our Services', href: '/service', subItems: [
        { label: 'Our Treatment', href: '/service/our-treatment' },
        { label: 'Plexer Pro', href: '/service/plexer-pro' },
      ] },
      { label: 'Knowledge Center', href: '/blog', subItems: [
        { label: 'About Us', href: '/blog/about-us' },
        { label: 'FAQ', href: '/blog/faq' },
      ] },
      { label: 'Contact Us', href: '/contact' },
    ],
    btnUrl: '/contact',
    btnText: 'Contact Now',
  };

  const handleOpenMobileSubmenu = index => {
    if (openMobileSubmenuIndex.includes(index)) {
      setOpenMobileSubmenuIndex(prev => prev.filter(f => f !== index));
    } else {
      setOpenMobileSubmenuIndex(prev => [...prev, index]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs_gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs_gescout_sticky cs_gescout_show'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);
  return (
    <>
      <header
        className={`cs_site_header cs_style_1 ${
          variant ? variant : ''
        } cs_primary_color cs_sticky_header ${isSticky ? isSticky : ''}`}
      >
        {isTopBar && (
          <div className="cs_top_header cs_blue_bg cs_white_color">
            <div className="container">
              <div className="cs_top_header_in">
                <div className="cs_top_header_left">
                  <ul className="cs_header_contact_list cs_mp_0">
                    <li>
                      <i>
                        <FaEnvelope />
                      </i>
                      <Link href={`https://mail.google.com/mail/?view=cm&fs=1&to=${menu.email}`} target="_blank">{menu.email}</Link>
                    </li>
                    <li>
                      <i>
                        <FaLocationDot />
                      </i>
                      <Link href="https://maps.google.com/?q=Clinica+Fai,+1335/A,+Rd+Number+45,+Jubilee+Hills,+Hyderabad,+Telangana+500033" target="_blank">
                        {menu.location}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="cs_top_header_right">
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding logo-hover" href={menu.logoLink}>
                <Image src={menu.logoUrl} alt="ClinicaFai - Medical Healthcare Logo" width={205} height={53} priority />
                </Link>
              </div>
              <div className="cs_main_header_right ">
                <div className="cs_nav cs_primary_color ">
                  <ul
                    className={`cs_nav_list ${isShowMobileMenu && 'cs_active'}`}
                  >
                    {menu.navItems.map((item, index) => (
                      <li
                        className={
                          item.subItems ? 'menu-item-has-children' : ''
                        }
                        key={index}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                        >
                          {item.label}
                        </Link>
                        {item.subItems && (
                          <ul
                            style={{
                              display: openMobileSubmenuIndex.includes(index)
                                ? 'block'
                                : 'none',
                            }}
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={subItem.href}
                                  onClick={() =>
                                    setIsShowMobileMenu(!isShowMobileMenu)
                                  }
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                        {item.subItems?.length && (
                          <span
                            className={`cs_menu_dropdown_toggle ${
                              openMobileSubmenuIndex.includes(index)
                                ? 'active'
                                : ''
                            }`}
                            onClick={() => handleOpenMobileSubmenu(index)}
                          >
                            <span></span>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`cs_menu_toggle ${
                      isShowMobileMenu && 'cs_toggle_active'
                    }`}
                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                  >
                    <span></span>
                  </span>
                </div>
                <div className="cs_search_wrap">
                  <div
                    className="cs_search_toggle cs_center"
                    onClick={() => setIsSearchActive(!isSearchActive)}
                  >
                    <i>
                      <HiMiniMagnifyingGlass />
                    </i>
                  </div>
                  <form
                    action="#"
                    className={`cs_header_search_form ${
                      isSearchActive ? 'active' : ''
                    }`}
                  >
                    <div className="cs_header_search_form_in">
                      <input
                        type="text"
                        placeholder="Search"
                        className="cs_header_search_field"
                      />
                      <button className="cs_header_submit_btn">
                        <i>
                          <HiMiniMagnifyingGlass />
                        </i>
                      </button>
                    </div>
                  </form>
                </div>
                <Link href={menu.btnUrl} className="cs_btn cs_style_1 cs_color_1">
                  <span>{menu.btnText}</span>
                  <i>
                    <FaAnglesRight />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {variant == 'cs_type_1' && (
          <div className="cs_main_header_shape">
            <svg
              width={1679}
              height={112}
              viewBox="0 0 1679 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0L1679 0.014C1679 0.014 1639 23.128 1639 48.261V111.014H40V47.351C40 22.567 0 0 0 0Z"
                fill="#2EA6F7"
              />
              <path
                d="M10 0L1669 0.014C1669 0.014 1629 23.128 1629 48.261V111.014H50V47.351C50 22.567 10 0 10 0Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </header>
      {isTopBar && <div className="cs_site_header_spacing_150" />}
      <style jsx>{`
        .logo-hover {
          transition: transform 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
        }
        .logo-hover:hover {
          transform: scale(1.18);
          z-index: 10;
        }
      `}</style>
    </>
  );
};

export default Header;
