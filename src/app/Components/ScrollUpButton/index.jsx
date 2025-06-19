import { useEffect, useState, useCallback } from "react";

const ScrollUpButton = () => {
  // State to manage scroll-up button visibility
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Throttled scroll handler for better performance
  const throttledHandleScroll = useCallback(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
      ticking = false;
    };

    return () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };
  }, []);

  // Effect to handle scroll event
  useEffect(() => {
    const scrollHandler = throttledHandleScroll();

    // Attach scroll event listener
    window.addEventListener("scroll", scrollHandler, { passive: true });

    // Clean up: remove scroll event listener
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [throttledHandleScroll]); // Include throttledHandleScroll in dependency array

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollButton && (
        <span
          className={`cs_scrollup ${showScrollButton ? "cs_scrollup_show" : ""}`}
          onClick={scrollToTop}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z"
              fill="currentColor"
            />
          </svg>
        </span>
      )}
    </>
  );
};

export default ScrollUpButton;

// cs_scrollup_show;
