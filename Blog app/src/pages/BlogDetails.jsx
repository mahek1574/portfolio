import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogById, deleteBlog } from "../utils/storage";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const data = getBlogById(id);
      setBlog(data);
      setLoading(false);
    }, 400);
  }, [id]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      deleteBlog(id);
      navigate("/");
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
        <div className="text-slate-400 font-medium">Loading article...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-slate-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Article not found</h2>
        <p className="text-slate-500 mb-8">The story you're looking for might have been moved or deleted.</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-md active:scale-95"
        >
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <nav className="max-w-4xl mx-auto px-4 py-8 flex justify-between items-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors group px-4 py-2 bg-slate-50 rounded-lg text-sm font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Insights
        </Link>

        <div className="flex gap-2">
          <button 
            onClick={handleDelete}
            className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
            title="Delete Article"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 pb-20">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full uppercase tracking-wider">
              {blog.category || "General"}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 text-sm">5 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl w-fit">
            <div className="h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200">
              {blog.blogger_name?.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-slate-900 leading-none mb-1">{blog.blogger_name}</p>
              <p className="text-sm text-slate-500">Published in {blog.category || "General"}</p>
            </div>
          </div>
        </header>

        <figure className="mb-12 rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-100/50">
          <img
            src={blog.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200"}
            alt={blog.title}
            className="w-full h-auto object-cover max-h-[600px] hover:scale-105 transition-transform duration-700"
          />
        </figure>

        <article className="max-w-none">
          <div className="text-slate-700 leading-relaxed text-lg lg:text-xl whitespace-pre-wrap font-serif">
            {blog.description}
          </div>
        </article>
      </main>
    </div>
  );
}

export default BlogDetails;
