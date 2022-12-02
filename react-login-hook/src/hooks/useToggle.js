import useLocalStorage from './useLocalStorage';

const useToggle = (key, initValue) => {
  const [value, setValue] = useLocalStorage(key, initValue);

  const toggle = (value) => {
    setValue((prev) => {
      console.log(typeof value === 'boolean' ? value : !prev);
      console.log(value);
      return typeof value === 'boolean' ? !value : !prev;
    });
  };

  return [value, toggle];
};

export default useToggle;
