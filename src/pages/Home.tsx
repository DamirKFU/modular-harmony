import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Создавайте веб-приложения с помощью{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            AI
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Lovable - это AI редактор, который помогает создавать современные веб-приложения через простой чат-интерфейс.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const features = [
  {
    title: "Простой интерфейс",
    description: "Создавайте приложения через чат с AI, который понимает ваши идеи и превращает их в код."
  },
  {
    title: "Современный стек",
    description: "React, Vite, Tailwind CSS, TypeScript и другие современные технологии уже настроены."
  },
  {
    title: "Мгновенный предпросмотр",
    description: "Видите изменения в реальном времени прямо в браузере."
  }
];

export default Home;