
import {
  FaBullseye,
  FaBolt,
  FaHandshake,
  FaArrowsRotate,
} from "react-icons/fa6";

const values = [
  {
    icon: FaBullseye,
    title: "الجودة أولًا",
    description: "محتوى مدروس ومكتوب بخبرة",
  },
  {
    icon: FaBolt,
    title: "تركيز عملي",
    description: "أمثلة واقعية يمكنك تطبيقها اليوم",
  },
  {
    icon: FaHandshake,
    title: "المجتمع",
    description: "تعلم مع آلاف المصورين",
  },
  {
    icon: FaArrowsRotate,
    title: "دائمًا محدث",
    description: "أحدث الاتجاهات وأفضل الممارسات",
  },
];

export default function ValuesSection() {
  return (
    <section
      dir="rtl"
      className="w-full bg-[#111111] px-5 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-10 w-[6px] rounded-full bg-orange-500"></span>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              قيمنا
            </h2>

            <span className="h-10 w-[6px] rounded-full bg-orange-500"></span>
          </div>

          <p className="text-base text-gray-400 md:text-xl">
            المبادئ التي توجه كل ما نقوم بإنشائه
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="group flex min-h-[197px] flex-col items-center justify-center rounded-[20px] border border-zinc-800 bg-[#171717] px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-500"
              >
                <Icon className="mb-5 h-12 w-12 text-orange-500 transition-transform duration-300 group-hover:scale-110" />

                <h3 className="mb-4 text-xl font-bold text-white">
                  {value.title}
                </h3>

                <p className="text-sm leading-7 text-gray-400">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
