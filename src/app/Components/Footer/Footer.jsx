import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  FaLocationDot,
  FaRegClock,
} from 'react-icons/fa6';
import SocialIcons from '../SocialIcons';

const Footer = () => {
  const data = {
    backgroundImage: '/assets/img/footer_bg.jpg',
    logo: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/logo//Logo.png',
    contactText:
      'Open Hours: <br /> Mon - Fri: 8.00 am. - 6.00 pm.',
    contactText2: 'Clinica Fai, 1335/A, Rd Number 45, Jubilee Hills, Hyderabad, Telangana 500033',
    contactText3: '+91 62811 17454',
    facebookHref: '/',
    pinterestHref: '/',
    twitterHref: '/',
    instagramHref: '/',
    widgets: [
      {
        title: 'Service',
        links: [
          { href: '/service/service-details', text: 'Plastic Surgery' },
          { href: '/service/service-details', text: 'Pharmacology' },
          { href: '/service/service-details', text: 'Dental Care' },
          { href: '/service/service-details', text: 'Dental Care' },
          { href: '/service/service-details', text: 'Orthopedic' },
        ],
      },
      {
        title: 'Quick Link',
        links: [
          { href: '/', text: 'Home' },
          { href: '/about', text: 'About Us' },
          { href: '/service', text: 'Our Services' },
          { href: '/portfolio', text: 'Our Portfolio' },
          { href: '/contact', text: 'Contact' },
        ],
      },
    ],
    recentPosts: [
      {
        href: '/blog/blog-details',
        image: '/assets/img/recent_post_1.png',
        date: '23 jun 2024',
        title: 'We round Solution york Blog',
      },
      {
        href: '/blog/blog-details',
        image: '/assets/img/recent_post_2.png',
        date: '20 jun 2024',
        title: 'The Medical Of This Working Health',
      },
    ],
    copyrightText: 'Copyright © 2024 Clinica Fai, All Rights Reserved.',
    footerMenu: [
      { href: '/about', text: 'About Us' },
      { href: '/', text: 'Events' },
      { href: '/blog', text: 'News' },
      { href: '/service', text: 'Service' },
    ],
  };

  return (
    <footer
      className="cs_footer cs_blue_bg cs_bg_filed cs_white_color"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_highlight_col cs_accent_bg">
              <div className="cs_footer_logo">
              <Image src={data.logo} alt="ClinicaFai - Medical Healthcare Footer Logo" width={205} height={53} />
              </div>
              <ul className="cs_footer_contact cs_mp_0">
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaRegClock />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaLocationDot />
                  </i>
                  <Link href="https://maps.google.com/?q=Clinica+Fai,+1335/A,+Rd+Number+45,+Jubilee+Hills,+Hyderabad,+Telangana+500033" target="_blank">
                    <span
                      dangerouslySetInnerHTML={{ __html: data.contactText2 }}
                    />
                  </Link>
                </li>
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaPhoneAlt />
                  </i>
                  <Link href="tel:+916281117454">
                    <span
                      dangerouslySetInnerHTML={{ __html: data.contactText3 }}
                    />
                  </Link>
                </li>
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaEnvelope />
                  </i>
                  <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@clinicafai.com" target="_blank">
                    <span>contact@clinicafai.com</span>
                  </Link>
                </li>
              </ul>
              <SocialIcons />
            </div>
          </div>

          {data.widgets.map((widget, index) => (
            <div className="cs_footer_col" key={index}>
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title">{widget.title}</h2>
                <ul className="cs_footer_widget_nav_list cs_mp_0">
                  {widget.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Recent Posts</h2>
              <ul className="cs_recent_post_list cs_mp_0">
                {data.recentPosts.map((post, index) => (
                  <li key={index}>
                    <div className="cs_recent_post">
                      <Link href={post.href} className="cs_recent_post_thumb">
                      <Image src={post.image} alt="img" width={85} height={85}   />
                      </Link>
                      <div className="cs_recent_post_right">
                        <p>{post.date}</p>
                        <h3 className="cs_recent_post_title">
                          <Link href={post.href}>{post.title}</Link>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="cs_footer_bottom cs_primary_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <p className="cs_footer_copyright mb-0">{data.copyrightText}</p>
            <ul className="cs_footer_menu cs_mp_0">
              {data.footerMenu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
