const scrollToElement = (element: string) => {
  console.log('click');
  document.querySelector(`#${element}`)?.scrollIntoView({
    behavior: 'smooth',
  });
};

export default scrollToElement;
