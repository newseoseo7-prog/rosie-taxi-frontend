import { motion } from "framer-motion";

const ErrorComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-white dark:from-red-900/20 dark:via-pink-900/20 dark:to-gray-900 p-6"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        className="text-red-500 dark:text-red-400 text-6xl mb-6"
      >
        ⚠️
      </motion.div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl sm:text-3xl font-bold text-red-700 dark:text-red-300 mb-4 text-center"
      >
        Oops! Something went wrong.
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md text-lg"
      >
        We couldn't fetch the pages right now. Please refresh or try again
        later.
      </motion.p>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        onClick={() => window.location.reload()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-2xl hover:shadow-lg transition-all duration-300 shadow-md"
      >
        Retry Now
      </motion.button>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity 
          }}
          className="absolute top-20 left-10 text-4xl"
        >
          🚗
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            delay: 1
          }}
          className="absolute bottom-20 right-10 text-4xl"
        >
          🚕
        </motion.div> */}
      </div>
    </motion.div>
  );
};

export default ErrorComponent;
