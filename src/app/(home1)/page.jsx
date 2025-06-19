import React from 'react';
import HeroSection from '../Components/HeroSection';
import Section from '../Components/Section';
import About from '../Components/About';
import CounterSection from '../Components/FunSection/CounterSection';
import Service from '../Components/Service';
import BrandsSlider from '../Components/BrandsSection';
import ChooseUs from '../Components/ChooseUs';
import ProjectSection from '../Components/ProjectSection';
import CtaSection1 from '../Components/CtaSection/CtaSection1';
import MedicalTabSection from '../Components/MedicalTabSection';
import ContactSection2 from '../Components/ContactSection/ContactSection2';
import BlogSection from '../Components/BlogsSection';
import ErrorBoundary from '../Components/ErrorBoundary';
import BestTreatmentsSection from '../Components/BestTreatmentsSection';
import BeforeAfterConsoleSection from '../Components/BeforeAfterConsoleSection';

const heroData = {
    primarySlider: [
      {
        bgImageUrl: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/landingpagepicture1//golden-hour-beauty-stockcake.jpg',
        title: 'Time to Choose <span>You</span>',
        contactSubtitle:
          "We're here to remind you that choosing yourself is strength. Feel empowered, nurtured, and fully yourself.",
        contactTitle: 'Receive Medical Service.',
        contact: 'Call Us at: (+2) 56 54 1453',
        btnText1: 'Contact Now',
        link: '/contact',
        btnText2: 'Discover More',
        link2: '/about',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },
      {
        bgImageUrl: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/shadiready//Shaadi-Image-MOBILE-min.png',
        bgPosition: 'top center',
        title: 'Your Center for <br>Mental <span>Health.</span>',
        contactSubtitle:
          'Medical ers piciatis unde omnis iste natus this the word medical this mountains, far from the countries Vokalia and, live the docor white teeth sitting on a dental for best medical.',
        contactTitle: 'Receive Medical Service.',
        contact: 'Call Us at: (+2) 56 54 1453',
        btnText1: 'Contact Now',
        link: '/contact',
        btnText2: 'Discover More',
        link2: '/about',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },
      {
        bgImageUrl: '/assets/img/hero_slider_1.jpg',
        title: 'We Hospital Doctors Patients <span>Service.</span>',
        contactSubtitle:
          'Medical ers piciatis unde omnis iste natus this the word medical this mountains, far from the countries Vokalia and, live the docor white teeth sitting on a dental for best medical.',
        contactTitle: 'Receive Medical Service.',
        contact: 'Call Us at: (+2) 56 54 1453',
        btnText1: 'Contact Now',
        link: '/contact',
        btnText2: 'Discover More',
        link2: '/about',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },
    ],
    secondarySlider: [
      '/assets/img/hero_slider_sm_1.png',
      '/assets/img/hero_slider_sm_2.png',
      '/assets/img/hero_slider_sm_3.png',
    ],
  };

  
  
  const aboutData = {
    sectionSubtitle: 'OUR ABOUT US',
    sectionTitle: 'Dr. Shubhra Goel',
    aboutText:
      "An industry-recognized award-winning celebrity oculofacial aesthetic surgeon with over 15 years of global experience, leads our team of specialists.",
    service:
      "There are many variations of pass available this medical service the team <a href='#'>READ MORE +</a>",
    experienceYears: '26+',
    experienceTitle: 'Experience',
    videoUrl: 'https://www.youtube.com/watch?v=r-N7F6zpK6o',
    videoText: 'Watch us on Youtube',
    iconboxes: [
      {
        imgUrl: '/assets/img/icons/about_icon_1.png',
        title: 'Client Support',
        subtitle: 'But must explain to you medical of and pain was.',
      },
      {
        imgUrl: '/assets/img/icons/about_icon_2.png',
        title: 'Doctor Support',
        subtitle: 'But must explain to you medical of and pain was.',
      },
    ],
    btnUrl: '/about',
    btnText: 'About More',
    sectionImgUrl: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/drshubhralandingpage//NEW-doc-image.png',
    headImgUrl: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/drshubhralandingpage1//drpic-1.jpg',
  };
  
  const countersData = [
    {
      iconUrl: '/assets/img/icons/counter_icon_1.png',
      number: '567+',
      title: 'Years of Experinces',
    },
    {
      iconUrl: '/assets/img/icons/counter_icon_2.png',
      number: '23K+',
      title: 'Happy Patients',
    },
    {
      iconUrl: '/assets/img/icons/counter_icon_3.png',
      number: '241+',
      title: 'Treatment',
    },
    {
      iconUrl: '/assets/img/icons/counter_icon_4.png',
      number: '16K+',
      title: 'Services',
    },
  ];
  
  const serviceData = {
    subtitle: 'OUR BEST SERVICE',
    title: 'Explore All Our Treatments',
    description: "We are privileged to treat thousands of patients who place their trust in us and their skin—each patient looking for confidence, clarity, and quality care. From cutting-edge dermatological therapies to personalized aesthetic treatments, we marry scientific precision to a keen sense of beauty. Our clinic is a reliable haven where science and elegance converge, and where your skin is always in the hands of experts.",
    services: [
      {
        backgroundImage: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//Acne.jpg',
        iconUrl: '/assets/img/icons/service_icon_1.png',
        index: '01',
        title: 'Acne',
        subtitle: 'Medical competitor research startup to financial',
        link: '/service/service-details',
      },
      {
        backgroundImage: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//dark%20circle.png',
        iconUrl: '/assets/img/icons/service_icon_2.png',
        index: '02',
        title: 'Dark Circles',
        subtitle: 'Medical competitor research startup to financial',
        link: '/service/service-details',
      },
      {
        backgroundImage: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//skin%20hydration.jpg',
        iconUrl: '/assets/img/icons/service_icon_3.png',
        index: '03',
        title: 'Skin Hydration',
        subtitle: 'Medical competitor research startup to financial',
        link: '/service/service-details',
      },
      {
        backgroundImage: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//chemical%20peel.png',
        iconUrl: '/assets/img/icons/service_icon_4.png',
        index: '04',
        title: 'Chemical Peels',
        subtitle: 'Medical competitor research startup to financial',
        link: '/service/service-details',
      },
      {
        backgroundImage: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//daily%20skin%20care.png',
        iconUrl: '/assets/img/icons/service_icon_5.png',
        index: '05',
        title: 'Daily Skin Care Program',
        subtitle: 'Medical competitor research startup to financial',
        link: '/service/service-details',
      },
      {
        backgroundImage: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//Cellulite.jpg',
        iconUrl: '/assets/img/icons/service_icon_6.png',
        index: '06',
        title: 'Anti-Cellulite Treatment',
        subtitle: 'Medical competitor research startup to financial',
        link: '/service/service-details',
      },
      {
        backgroundImage: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//pigmentation.png',
        iconUrl: '/assets/img/icons/service_icon_7.png',
        index: '07',
        title: 'Pigmentation And Texture Repair',
        subtitle: 'Medical competitor research startup to financial',
        link: '/service/service-details',
      },
      {
        backgroundImage: 'https://jnksxvamrbsxfahkbxgi.supabase.co/storage/v1/object/public/ourservices//cheek%20hollowness.png',
        iconUrl: '/assets/img/icons/service_icon_8.png',
        index: '08',
        title: 'Cheek Hollowness and Smile Folds',
        subtitle: 'Medical competitor research startup to financial',
        link: '/service/service-details',
      },
    ],
    footerIcon: '/assets/img/icons/service_footer_icon_1.png',
    footerText:
      "Delivering tomorrow's health care for your family.<br>medical this View",
    footerLink: '/',
    footerLinkText: 'SEE MORE',
  };
  
  const brandData = [
    { image: '/assets/img/envato-logo.png', altText: 'Brand 1' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 2' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 3' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 4' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 5' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 6' },
  ];
  
  const sectionData = {
    subtitle: 'WHY CHOOSE US',
    title: 'Medical Ready To Get This <br /> Health Solution.',
    services: [
      {
        iconUrl: '/assets/img/icons/service_icon_9.png',
        title: 'Expert Care',
        subtitle: 'Medical competitor research startup to financial',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_10.png',
        title: 'Emergency Help',
        subtitle: 'Medical competitor research startup to financial',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_11.png',
        title: 'Qualified Doctors',
        subtitle: 'Medical competitor research startup to financial',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_12.png',
        title: 'Medical Advices',
        subtitle: 'Medical competitor research startup to financial',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_13.png',
        title: 'Medical Research',
        subtitle: 'Medical competitor research startup to financial',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_14.png',
        title: 'Affordable Prices',
        subtitle: 'Medical competitor research startup to financial',
      },
    ],
  };
  
  const projectData = {
    title: 'All The Great Work That<br> Medical Service',
    subtitle: 'OUR PORTFOLIO',
    description:
      'We are privileged to work with hundreds of future-thinking medial, including many of the world\'s top hardware, software, and brands, feel safe and comfortable in establishing.',
    tabs: [
      { id: 'dental', label: 'Dental' },
      { id: 'cardiology', label: 'Cardiology' },
      { id: 'neurology', label: 'Neurology' },
      { id: 'medical', label: 'Medical' },
    ],
    tabData: [],
  };
  
  const ctaData1 = {
    videoLink: 'https://www.youtube.com/embed/rRid6GCJtgc',
    videoButtonText: 'WATCH VIDEO',
    subtitle: 'OUR WATCH VIDEO',
    title: 'Professional Medical Care Measure Medical.',
    description:
      'We are privileged to work with hundreds of future-thinking medial, including many of the world\'s top hardware, software, and brands, feel safe and comfortable in establishing.',
    buttonLink: '/contact',
    buttonText: 'Video More',
    brandImage: '/assets/img/medical_brand.png',
  };
  
  const medicalTabsData = {
    subtitle: 'Service Offerings',
    title: 'Explore Our Service<br> Offerings',
    tabsTitle: [
      {
        href: 'brain_althim',
        iconUrl: '/assets/img/icons/tab_link_icon_1.png',
        label: 'Modern Technology',
      },
      {
        href: 'emergency',
        iconUrl: '/assets/img/icons/tab_link_icon_2.png',
        label: 'Success of Treatment',
      },
      {
        href: 'heart_beat',
        iconUrl: '/assets/img/icons/tab_link_icon_3.png',
        label: 'Certified Doctors',
      },
      {
        href: 'blood_test',
        iconUrl: '/assets/img/icons/tab_link_icon_4.png',
        label: 'Medical Advice',
      },
    ],
    tabsData: [
      {
        id: 'brain_althim',
        imageSrc: '/assets/img/offerings03.jpg',
        title: 'We are here to hear and heal your',
        subtitle:
          'We are privileged to work with hundreds of future-thinking medial, including many of the world\'s top hardware, software, and brands, feel safe and comfortable in establishing.',
        points: [
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
          },
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
          },
        ],
        linkHref: '/contact',
        buttonText: 'Read More',
      },
      {
        id: 'emergency',
        imageSrc: '/assets/img/offerings02.jpg',
        title: 'Treatment patients in primary care',
        subtitle:
          'We are privileged to work with hundreds of future-thinking medical, including many of the world\'s top hardware, software, and brands, feel safe and comfortable in establishing.',
        points: [
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
          },
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
          },
        ],
        linkHref: '/contact',
        buttonText: 'Read More',
      },
      {
        id: 'heart_beat',
        imageSrc: '/assets/img/offerings01.jpg',
        title: 'Accreditation within a given specialty',
        subtitle:
          'We are privileged to work with hundreds of future-thinking medical, including many of the world\'s top hardware, software, and brands, feel safe and comfortable in establishing.',
        points: [
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
          },
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
          },
        ],
        linkHref: '/contact',
        buttonText: 'Read More',
      },
      {
        id: 'blood_test',
        imageSrc: '/assets/img/offerings04.jpg',
        title: 'Better Health While Aging health',
        subtitle:
          'We are privileged to work with hundreds of future-thinking medical, including many of the world\'s top hardware, software, and brands, feel safe and comfortable in establishing.',
        points: [
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
          },
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
          },
        ],
        linkHref: '/contact',
        buttonText: 'Read More',
      },
    ],
  };
  
  const blogsData = {
    sectionTitle: 'OUR LARGEST BLOG',
    sectionSubtitle: 'Latest Posts &amp; Articles',
    postsData: [],
  };

const Page = () => {
    return (
        <ErrorBoundary>
            <div>
                {/* Start Hero Section */}
                <HeroSection data={heroData} />
                {/* End Hero Section */}

                {/* Start Counter */}
                <Section className="cs_counter_area cs_gray_bg">
                    <CounterSection data={countersData} />
                </Section>
                {/* End Counter */}

                {/* Our Best Treatments Section */}
                <BestTreatmentsSection />

                {/* Start About Section */}
                <Section
                    topSpaceLg="80"
                    topSpaceMd="120"
                    bottomSpaceLg="80"
                    bottomSpaceMd="120"
                    className="cs_about cs_style_1 position-relative"
                >
                    <About data={aboutData} />
                </Section>
                {/* End About Section */}

                {/* Start Service Section */}
                <Section
                    topSpaceLg="70"
                    topSpaceMd="110"
                    bottomSpaceLg="80"
                    bottomSpaceMd="120"
                    className={'cs_gray_bg'}
                >
                    <Service cardBg={'cs_gray_bg'} data={serviceData} />
                </Section>
                {/* End Service Section */}

                {/* 3D Before/After Console Slider Section */}
                <BeforeAfterConsoleSection />

                {/* Start Blog Section */}
                <ContactSection2 />
                <Section
                    topSpaceLg="70"
                    topSpaceMd="110"
                    bottomSpaceLg="80"
                    bottomSpaceMd="120"
                >
                    <BlogSection data={blogsData} />
                </Section>
                {/* End Blog Solution */}

                {/* Start Brand Section */}
                <Section topSpaceLg="70" topSpaceMd="90" className="cs_brands_section">
                    <BrandsSlider data={brandData} />
                </Section>
                {/* End Brand Section */}

                {/* Start Why Choose Us Section */}
                <Section
                    topSpaceLg="70"
                    topSpaceMd="110"
                    bottomSpaceLg="80"
                    bottomSpaceMd="120"
                    className="cs_gray_bg cs_bg_filed"
                    backgroundImage="/assets/img/service_bg_2.jpg"
                >
                    <ChooseUs data={sectionData} />
                </Section>
                {/* End Why Choose Us Section */}

                {/* Start Projects Section */}
                <Section topSpaceLg="70" topSpaceMd="110" className="cs_tabs">
                    <ProjectSection data={projectData} />
                </Section>
                {/* End Projects Section */}

                {/* Start CTA Section */}
                <Section
                    topSpaceLg="70"
                    topSpaceMd="110"
                    bottomSpaceLg="80"
                    bottomSpaceMd="120"
                    className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"
                    backgroundImage="/assets/img/cta_bg_1.jpeg"
                >
                    <CtaSection1 data={ctaData1} />
                </Section>
                {/* End CTA Section */}

                {/* Start Medical Tab Section */}
                <Section topSpaceLg="70" topSpaceMd="110">
                    <MedicalTabSection data={medicalTabsData} />
                </Section>
                {/* End Medical Tab Section */}
            </div>
        </ErrorBoundary>
    );
};

export default Page;