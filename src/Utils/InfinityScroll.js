import  { useEffect } from "react";

const CheckPosition = ({ onFetchData, pokemonId }) => {
  useEffect(() => {
    const checkPosition = async () => {
      const height = document.body.offsetHeight;
      const screenHeight = window.innerHeight;
      const scrolled = window.scrollY;
      const threshold = height - screenHeight / 4;
      const position = scrolled + screenHeight;

      if (position >= threshold && pokemonId) {
        // Вызываем переданную функцию для загрузки следующих данных с указанием id последнего покемона
        await onFetchData(pokemonId + 20);
      }
    };

    const throttledCheckPosition = throttle(checkPosition, 250);

    window.addEventListener('scroll', throttledCheckPosition);
    window.addEventListener('resize', throttledCheckPosition);

    return () => {
      window.removeEventListener('scroll', throttledCheckPosition);
      window.removeEventListener('resize', throttledCheckPosition);
    };
  }, [onFetchData, pokemonId]);
  function throttle(callee, timeout) {
    let timer = null;

    return function perform(...args) {
      if (timer) return;

      timer = setTimeout(() => {
        callee(...args);

        clearTimeout(timer);
        timer = null;
      }, timeout);
    };
  }
};

export default CheckPosition;
