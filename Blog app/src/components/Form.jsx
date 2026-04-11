import { useState, useEffect } from "react";
import { saveBlog } from "../utils/storage";

function Form({ fetchBlogs, editingBlog, clearEdit }) {
  const [form, setForm] = useState({
    category: "",
    title: "",
    blogger_name: "",
    image: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    if (editingBlog) {
      setForm(editingBlog);
    } else {
      setForm({
        category: "",
        title: "",
        blogger_name: "",
        image: "",
        description: "",
      });
    }
  }, [editingBlog]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      form.title.length < 3 ||
      form.blogger_name.length < 3 ||
      form.description.length < 3
    ) {
      setError("Title, Name, and Description must be at least 3 characters.");
      return;
    }

    if (!form.category) {
      setError("Please select a category.");
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 600));
      
      saveBlog(form);
      fetchBlogs();
      
      if (editingBlog) {
        clearEdit();
      } else {
        setForm({
          category: "",
          title: "",
          blogger_name: "",
          image: "",
          description: "",
        });
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      setError("Failed to save article. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl animate-shake">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Category</label>
          <select
            name="category"
            onChange={handleChange}
            value={form.category}
            className="input-field"
          >
            <option value="">Select Category</option>
            <option>Technology</option>
            <option>Sports</option>
            <option>Business</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Author Name</label>
          <input
            name="blogger_name"
            value={form.blogger_name}
            placeholder="e.g. mahek shanishvara"
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold text-slate-700">Blog Title</label>
          <input
            name="title"
            value={form.title}
            placeholder="Enter a catchy title"
            onChange={handleChange}
            className="input-field text-lg font-medium"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold text-slate-700">Cover Image URL (Optional)</label>
          <input
            name="image"
            value={form.image}
            placeholder="https://images.unsplash.com/your-image-url"
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold text-slate-700">Content</label>
          <textarea
            name="description"
            value={form.description}
            placeholder="What's on your mind? Share your story..."
            onChange={handleChange}
            className="input-field min-h-[160px] resize-none leading-relaxed"
          ></textarea>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4">
        {editingBlog && (
          <button
            type="button"
            onClick={clearEdit}
            className="px-6 py-2 text-slate-500 hover:text-slate-700 font-medium transition-colors"
          >
            Cancel Edit
          </button>
        )}
        <button
          type="submit"
          disabled={loading}
          className={`btn-primary flex items-center gap-2 min-w-[140px] justify-center ${
            loading ? "opacity-70 cursor-not-allowed scale-95" : ""
          }`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {editingBlog ? "Updating..." : "Publishing..."}
            </>
          ) : (
            editingBlog ? "Update Post" : "Publish Article"
          )}
        </button>
      </div>
    </form>
  );
}

export default Form;
