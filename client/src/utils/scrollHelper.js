const handleScroll = (setIsScrolled) => {
  const threshold = 20;
  const scrolled = window.scrollY > threshold;
  setIsScrolled(scrolled);
};

export default handleScroll;
