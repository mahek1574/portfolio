import initialData from "../../db.json";

const STORAGE_KEY = "insights_blogs";

export const getBlogs = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData.blogs));
    return initialData.blogs;
  }
  return JSON.parse(data);
};

export const getBlogById = (id) => {
  const blogs = getBlogs();
  return blogs.find((b) => b.id === id);
};

export const saveBlog = (blogData) => {
  const blogs = getBlogs();
  if (blogData.id) {
  
    const index = blogs.findIndex((b) => b.id === blogData.id);
    if (index !== -1) {
      blogs[index] = { ...blogs[index], ...blogData };
    }
  } else {
  
    const newBlog = { 
      ...blogData, 
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString()
    };
    blogs.push(newBlog);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
  return blogs;
};

export const deleteBlog = (id) => {
  const blogs = getBlogs();
  const filtered = blogs.filter((b) => b.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return filtered;
};
