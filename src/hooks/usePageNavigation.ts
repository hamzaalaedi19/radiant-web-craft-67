import { useNavigate, useLocation } from "react-router-dom";

const pages = ["/", "/about", "/portfolio", "/contact", "/blog"];

export const usePageNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = pages.indexOf(location.pathname);

  const goToNextPage = () => {
    const nextIndex = (currentIndex + 1) % pages.length;
    navigate(pages[nextIndex]);
  };

  const goToPrevPage = () => {
    const prevIndex = currentIndex === 0 ? pages.length - 1 : currentIndex - 1;
    navigate(pages[prevIndex]);
  };

  const hasNextPage = currentIndex < pages.length - 1;
  const hasPrevPage = currentIndex > 0;

  return {
    goToNextPage,
    goToPrevPage,
    hasNextPage,
    hasPrevPage,
    currentPage: currentIndex + 1,
    totalPages: pages.length
  };
};
