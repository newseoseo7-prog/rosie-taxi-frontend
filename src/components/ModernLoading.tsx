import { motion } from "framer-motion";

const ModernLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      {/* Animated Taxi Icon
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-8"
      >
        Taxi Body
        <motion.div
          animate={{ 
            x: [-20, 20, -20],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-10 bg-yellow-400 rounded-lg relative"
        >
          Taxi Top
          <div className="absolute -top-4 left-2 w-16 h-4 bg-yellow-500 rounded-t-lg"></div>
          
          Windows
          <div className="absolute top-1 left-2 w-6 h-3 bg-blue-300 rounded"></div>
          <div className="absolute top-1 right-2 w-6 h-3 bg-blue-300 rounded"></div>
          
          Wheels
          <div className="absolute -bottom-2 left-3 w-4 h-4 bg-gray-800 rounded-full"></div>
          <div className="absolute -bottom-2 right-3 w-4 h-4 bg-gray-800 rounded-full"></div>
        </motion.div>
        
        Moving Road Lines
        <motion.div
          animate={{ x: [-100, 100] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-4 left-0 right-0 flex gap-4"
        >
          <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
        </motion.div>
      </motion.div> */}

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center space-y-4"
      >
        <motion.h2 
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Rosie Taxi Cab
        </motion.h2>
        
        <motion.p
          className="text-gray-600 dark:text-gray-400 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Preparing your ride experience...
        </motion.p>

        {/* Dots Animation */}
        <motion.div className="flex justify-center gap-1">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-blue-500 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-4">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Floating Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 text-6xl opacity-5"
        >
          🚗
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 text-6xl opacity-5"
        >
          🚕
        </motion.div>
      </div> */}
    </div>
  );
};

export default ModernLoading;