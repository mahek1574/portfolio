import { useEffect, useState } from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import { getBlogs, deleteBlog } from "../utils/storage";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState("All");
  const [editingBlog, setEditingBlog] = useState(null);

  const loadBlogs = () => {
    const data = getBlogs();
    setBlogs(data);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      deleteBlog(id);
      loadBlogs();
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    window.scrollTo({ top: document.getElementById("form-section").offsetTop - 100, behavior: "smooth" });
  };

  const filtered =
    category === "All" ? blogs : blogs.filter((b) => b.category === category);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
          Insights & Stories
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explore the latest from technology, sports, and business. Share your own thoughts with the world.
        </p>
      </header>

      <section id="form-section" className="mb-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">
            {editingBlog ? "Edit Your Post" : "Create New Post"}
          </h2>
          <Form 
            fetchBlogs={loadBlogs} 
            editingBlog={editingBlog} 
            clearEdit={() => setEditingBlog(null)} 
          />
        </div>
      </section>

      <section id="articles">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Recent Articles</h2>
          <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
            {["All", "Technology", "Sports", "Business"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  category === cat
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((blog) => (
              <article
                key={blog.id}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={blog.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleEdit(blog)}
                      className="p-2 bg-white/90 backdrop-blur rounded-lg text-slate-600 hover:text-indigo-600 shadow-sm transition-colors"
                      title="Edit Post"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => handleDelete(blog.id)}
                      className="p-2 bg-white/90 backdrop-blur rounded-lg text-slate-600 hover:text-red-600 shadow-sm transition-colors"
                      title="Delete Post"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full mb-4">
                    {blog.category || "General"}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {blog.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">
                      By {blog.blogger_name}
                    </span>
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2zM14 2v4h4" />
            </svg>
            <p className="text-slate-500 font-medium">No articles found in this category.</p>
            <button 
              onClick={() => setCategory("All")}
              className="mt-4 text-indigo-600 text-sm font-semibold hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
