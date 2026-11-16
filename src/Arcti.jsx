import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowRight, HiOutlineClock, HiOutlineCamera, HiOutlineBookOpen } from "react-icons/hi2";
import postsData from "./Data/posts.json";

export default function Arcti() {
  const { id } = useParams();
  const posts = postsData.posts || [];
  const post = posts.find((item) => String(item.id) === String(id));

  if (!post) {
    return <h1 className="text-white">المقال غير موجود</h1>;
  }

  const sections = useMemo(() => {
    if (!post?.content) return [];
    const result = [];
    let paragraph = [];
    let headingIndex = 0;
    const saveParagraph = () => {
      const text = paragraph.join(" ").trim();
      if (text) result.push({ type: "paragraph", text });
      paragraph = [];
    };
    post.content.split(/\r?\n/).forEach((line) => {
      const value = line.trim();
      if (!value) return saveParagraph();
      if (value.startsWith("## ")) {
        saveParagraph();
        result.push({ type: "heading", text: value.replace(/^##\s+/, ""), id: `section-${headingIndex++}` });
      } else paragraph.push(value);
    });
    saveParagraph();
    return result;
  }, [post?.content]);

  const headings = sections.filter((item) => item.type === "heading");


  return <>

    <div dir="rtl" className="min-h-screen bg-[#080b10]">

      {/* Hero Section */}
      <section
        className="relative flex min-h-[420px] items-end overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

        {/* Article Title */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 pt-24">

          <span className="mb-5 inline-block rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm text-orange-500">
            {post.category}
          </span>

          <h1 className="max-w-4xl text-3xl font-extrabold leading-relaxed text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 text-sm text-gray-300">
            {post.author.name}
            <span className="mx-3 text-orange-500">•</span>
            {post.author.role}
          </p>

        </div>
      </section>


      {/* Article Details */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_300px]">

        {/* Article Content */}
        <main className="min-w-0">

          <div className="rounded-2xl border border-white/10 bg-[#111111] p-6 sm:p-9">

            {/* Article Excerpt */}
            {post.excerpt && (
              <div className="mb-9 rounded-2xl border-r-4 border-orange-500 bg-[#1b1b1b] px-6 py-5 text-base leading-9 text-gray-200 sm:text-lg">
                {post.excerpt}
              </div>
            )}

            {/* Article Sections */}
            <div>

              {sections.map((section, index) =>
                section.type === "heading" ? (

                  <h2
                    id={section.id}
                    key={section.id}
                    className="mb-5 mt-12 flex scroll-mt-24 items-center gap-3 text-xl font-extrabold text-white sm:text-2xl"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
                      <HiOutlineCamera className="h-6 w-6 text-orange-500" />
                    </span>

                    {section.text}
                  </h2>

                ) : (

                  <p
                    key={index}
                    className="mb-7 text-[15px] leading-9 text-gray-300 sm:text-base sm:leading-10"
                  >
                    {section.text}
                  </p>

                )
              )}

            </div>

          </div>
        </main>


        {/* Sidebar */}
        <aside className="h-fit space-y-5 lg:sticky lg:top-8">

          {/* Table of Contents */}
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 shadow-xl">

            <h2 className="mb-8 flex items-center gap-3 text-base font-extrabold text-white">

              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/40 bg-orange-500/10">
                <HiOutlineBookOpen className="h-5 w-5 text-orange-500" />
              </span>

              محتويات المقال

            </h2>

            {headings.length ? (
              <nav>
                <ol className="space-y-5">

                  {headings.map((heading, index) => (
                    <li key={heading.id}>

                      <a
                        href={`#${heading.id}`}
                        className="group flex items-start gap-3 text-sm leading-7 text-gray-400 transition-colors hover:text-orange-500"
                      >

                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/5 text-xs font-bold text-gray-400 transition group-hover:bg-orange-500 group-hover:text-white">
                          {index + 1}
                        </span>

                        {heading.text}

                      </a>

                    </li>
                  ))}

                </ol>
              </nav>
            ) : (
              <p className="text-sm text-gray-500">
                لا توجد عناوين فرعية لهذا المقال.
              </p>
            )}

          </div>


          {/* Author Information */}
          {post.author && (
            <div className="rounded-2xl border border-white/10 bg-[#111111] p-5">

              <p className="mb-5 text-xs font-bold text-gray-500">
                كاتب المقال
              </p>

              <div className="flex items-center gap-3">

                {post.author.avatar && (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-14 w-14 rounded-full border border-orange-500 object-cover"
                  />
                )}

                <div>
                  <p className="font-bold text-white">
                    {post.author.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {post.author.role}
                  </p>
                </div>

              </div>
            </div>
          )}

        </aside>

      </div>

    </div>
    


  </>
}