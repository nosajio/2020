const NOSAJ_POSTS_API_URL: string = process.env.NOSAJ_POSTS_API_URL || '';

export const getAllPosts = async () => {
  const req = new Request(`${NOSAJ_POSTS_API_URL}/posts`, { method: 'GET' });
  const res = await fetch(req);
  const json = await res.json();
  return json;
};

export const getPost = async (slug: string) => {
  const req = new Request(`${NOSAJ_POSTS_API_URL}/posts/${slug}`, {
    method: 'GET',
  });
  const res = await fetch(req);
  const json = await res.json();
  return json;
};
