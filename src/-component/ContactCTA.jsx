
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section
      dir="rtl"
      className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 px-5 py-20 md:py-24"
    >
      <div className="mx-auto max-w-4xl text-center">

        <h2 className="mb-7 text-3xl font-bold text-white md:text-4xl">
          لديك أسئلة؟ دعنا نتحدث!
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-base leading-9 text-white/90 md:text-xl">
          نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
          أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
        </p>

        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">

          <Link
            to="/blog"
            className="order-2 rounded-2xl border-2 border-white/40 px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:order-1"
          >
            تصفح المقالات
          </Link>

          <Link
            to="/contact"
            className="order-1 flex items-center gap-3 rounded-2xl bg-[#0b0b0b] px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:bg-zinc-800 hover:scale-105 sm:order-2"
          >
            <HiOutlineEnvelope className="h-6 w-6" />
            تواصل معنا
          </Link>

        </div>
      </div>
    </section>
  );
}
