const store: Storage = window.sessionStorage;
const storePrefix: string = process.env.NOSAJ_STORAGE_KEY_PREFIX || 'nosaj';

export const savePost = (
  key: string,
  val: string,
  overwrite: boolean = true,
) => {
  key = `${storePrefix}_${key}`;
  if (postExists(key)) {
    if (!overwrite) {
      throw new Error(
        `${key} already exists. To overwrite, call savePost() with overwrite=true`,
      );
    }
    deletePost(key);
  }
  store.setItem(key, val);
};

export const getPost = (key: string): string | null => {
  key = `${storePrefix}_${key}`;
  return store.getItem(key);
};

export const postExists = (key: string): boolean =>
  Boolean(store.getItem(`${storePrefix}_${key}`));

export const deletePost = (key: string) => {
  key = `${storePrefix}_${key}`;
  store.removeItem(key);
};

export const clearStore = () => store.clear();
