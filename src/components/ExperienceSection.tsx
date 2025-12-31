import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Calendar,
  MapPin,
  Zap,
  TrendingUp,
  ChevronDown,
  Sparkles,
  Star,
} from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showMore, setShowMore] = useState(false);

  const mainExperiences = [
    {
      title: "Customer Service Assistant",
      company: "Sharemoney®",
      period: "May 2023 - Aug 2025",
      location: "Remote",
      description:
        "Responsible for a variety of admin work such as chat support and sending e-mails.  Provided customer support by taking inbound and outbound calls to client of Sharemoney",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Content Moderator",
      company: "Alorica",
      period: "Sept 2022 - April 2023",
      location: "Hybrid",
      description:
        "Reviewed user-generated content about businesses and brands, making sure they adhered to a predetermined format, and checked for accuracy and other brand standards",
      achievements: [
        "Handled 200+ tickets per week",
        "Created 50+ knowledge base articles",
        "Improved first-contact resolution by 40%",
      ],
      color: "from-blue-500 to-purple-500",
    },
  ];

  const additionalExperiences = [
    {
      title: "Content Moderator",
      company: "TELUS International",
      period: "Jul 2022 - Sept 2022",
      location: "Remote (Contractual)",
      description:
        "Performed image annotation and captioning to enhance search engine optimization (SEO) efforts, adhering to established quotas and maintaining high-quality standards. Analyzed and provided feedback on text, web pages, images, and other types of information for leading search engines, using an online tool.",
      color: "from-teal-500 to-blue-500",
    },
    {
      title: "Customer Service Representative",
      company: "Wipro",
      period: "Sept 2021 - Aug 2022",
      location: "Remote",
      description:
        " Communicated with physicians, pharmacists, and other healthcare providers on behalf of patients; additionally, Performed daily customer-service-related tasks such as calling and sending e-mails.",
      color: "from-green-500 to-teal-500",
    },
  ];

  const allExperiences = showMore
    ? [...mainExperiences, ...additionalExperiences]
    : mainExperiences;

  const burstParticles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.1,
    angle: (360 / 8) * i,
  }));

  return (
    <section
      id="experience"
      className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated burst particles */}
      <AnimatePresence>
        {isInView &&
          burstParticles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{
                opacity: 0,
                scale: 0,
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x:
                  window.innerWidth / 2 +
                  Math.cos((particle.angle * Math.PI) / 180) * 300,
                y:
                  window.innerHeight / 2 +
                  Math.sin((particle.angle * Math.PI) / 180) * 300,
              }}
              transition={{
                duration: 2,
                delay: particle.delay,
                ease: "easeOut",
              }}
              className="fixed w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full pointer-events-none z-10"
            />
          ))}
      </AnimatePresence>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative">
          {/* Sparkle animations around title */}
          <motion.div
            className="absolute -top-4 left-1/2 transform -translate-x-1/2"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
            <Sparkles className="w-8 h-8 text-purple-500" />
          </motion.div>

          <motion.h2
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
              type: "spring",
              bounce: 0.6,
              duration: 1.2,
              delay: 0.3,
            }}
            className="text-5xl md:text-6xl font-bold font-playfair gradient-text mb-6">
            Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of growth, learning, and making meaningful impact in
            customer service
          </motion.p>

          {/* Floating stars */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 12}%`,
                top: `${10 + (i % 2) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}>
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </motion.div>
          ))}
        </motion.div>

        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {allExperiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                layout
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                  scale: 0.8,
                }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  bounce: 0.4,
                }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } relative`}>
                {/* Burst effect on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  whileHover="hover"
                  variants={{
                    hover: {
                      scale: 1.05,
                    },
                  }}>
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      variants={{
                        hover: {
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: Math.cos(((360 / 12) * i * Math.PI) / 180) * 100,
                          y: Math.sin(((360 / 12) * i * Math.PI) / 180) * 100,
                          transition: {
                            duration: 0.6,
                            delay: i * 0.05,
                          },
                        },
                      }}
                    />
                  ))}
                </motion.div>

                {/* Timeline indicator with enhanced animation */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", bounce: 0.6 }}>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2 + 0.4,
                      type: "spring",
                      bounce: 0.8,
                    }}
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-xl relative overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 0] }}
                      transition={{
                        duration: 1,
                        delay: index * 0.2 + 0.6,
                        ease: "easeOut",
                      }}
                    />
                    <Calendar className="w-10 h-10 text-white relative z-10" />

                    {/* Rotating ring */}
                    <motion.div
                      className="absolute inset-0 border-4 border-white border-opacity-30 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>

                  {index < allExperiences.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={isInView ? { height: "100px" } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                      className="absolute top-20 left-1/2 w-1 bg-gradient-to-b from-purple-400 to-transparent transform -translate-x-1/2"
                    />
                  )}
                </motion.div>

                {/* Content with enhanced animations */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  className="glass-effect rounded-3xl p-8 flex-1 max-w-2xl relative overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-5`}
                    animate={{
                      x: [-100, window.innerWidth + 100],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <motion.h3
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold font-playfair text-gray-800">
                        {exp.title}
                      </motion.h3>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className={`px-4 py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-medium`}>
                        {exp.company}
                      </motion.span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* <div className="space-y-3"> */}
                    {/* <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        Key Achievements
                      </h4> */}
                    {/* <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{opacity: 0, x: -20}}
                            animate={isInView ? {opacity: 1, x: 0} : {}}
                            transition={{
                              duration: 0.6,
                              delay: index * 0.2 + 0.8 + achIndex * 0.1,
                            }}
                            whileHover={{x: 10, scale: 1.02}}
                            className="flex items-center gap-3 text-gray-600 cursor-default">
                            <motion.div
                              whileHover={{rotate: 180, scale: 1.2}}
                              transition={{type: "spring", bounce: 0.6}}>
                              <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                            </motion.div>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul> */}
                    {/* </div> */}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          className="text-center mt-16">
          <motion.button
            onClick={() => setShowMore(!showMore)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="glass-effect px-8 py-4 rounded-full font-medium text-gray-700 hover:text-gray-900 transition-colors relative overflow-hidden group">
            {/* Button background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10"
              transition={{ duration: 0.3 }}
            />

            <span className="relative z-10 flex items-center gap-3">
              {showMore ? "Show Less Experience" : "Show More Experience"}
              <motion.div
                animate={{ rotate: showMore ? 180 : 0 }}
                transition={{ duration: 0.3 }}>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </span>

            {/* Burst effect on click */}
            <motion.div
              className="absolute inset-0"
              whileTap={{
                background: [
                  "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(168,85,247,0) 0%, transparent 70%)",
                ],
              }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
