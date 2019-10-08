export const store: Storage = window.sessionStorage;
const storePrefix: string = process.env.NOSAJ_STORAGE_KEY_PREFIX || 'nosaj';

export const sortPostsByDate = (
  posts: Post[],
  direction: 'desc' | 'asc' = 'desc',
) => {
  const [aBias, bBias] = direction === 'desc' ? [-1, 1] : [1, -1];
  return posts.sort((a, b) =>
    new Date(b.date) < new Date(a.date) ? aBias : bBias,
  );
};

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

const getPostKeys = (): string[] => {
  const storeLen = store.length;
  let storeKeys: string[] = [];

  for (let i = 0; i < storeLen; i++) {
    const k = store.key(i) || '';
    if (!k.includes(storePrefix)) {
      continue;
    }
    storeKeys.push(k);
  }
  return storeKeys;
};

// Clear the namespaced keys from the store. Namespaced items will have their
// keys prefixed with the `storePrefix` string
export const clearStore = () => {
  const storeKeys = getPostKeys();
  storeKeys.forEach(k => store.removeItem(k));
};

// Return all posts currently in the store
export const getAllSavedPosts = (): undefined | Post[] => {
  const storeKeys = getPostKeys();
  const posts: Post[] = storeKeys
    .map(k => {
      const ps = store.getItem(k);
      if (!ps) {
        return undefined;
      }
      return JSON.parse(ps);
    })
    .filter(Boolean);
  if (posts.length === 0) {
    return undefined;
  }
  return sortPostsByDate(posts);
};

export const refreshPostStore = (posts: Post[]) => {
  // Store must be purged of all namespaced items before adding refreshed data
  clearStore();

  // Add posts to store in sequence
  posts.forEach(post => {
    savePost(post.slug, JSON.stringify(post));
  });
};
