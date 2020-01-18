let debounceTimer: number;

// Return a debounced callback
const debounce = <T extends any[]>(
  fn: (...args: T) => any,
  duration: number,
) => (...args: T) => {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }
  debounceTimer = setTimeout(() => fn(...args), duration);
};

export default debounce;
