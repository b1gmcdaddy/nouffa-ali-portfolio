import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";
import {Heart, Users, MessageCircle, Star} from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-100px"});

  const stats = [
    {icon: Users, value: "500+", label: "Happy Customers"},
    {icon: MessageCircle, value: "5000+", label: "Support Tickets"},
    {icon: Star, value: "4.9/5", label: "Customer Rating"},
    {icon: Heart, value: "100%", label: "Dedication"},
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8}}
          className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-playfair gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating meaningful connections between businesses
            and their customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{opacity: 0, x: -100}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.8, delay: 0.2}}
            className="space-y-8">
            <div className="glass-effect rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-bold font-playfair text-gray-800">
                My Journey
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With years of experience in customer service and email support,
                I've developed a deep understanding of what it takes to create
                exceptional customer experiences. My approach combines empathy,
                technical expertise, and strategic thinking to solve complex
                customer challenges.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I’ve worked with companies like Sharemoney®, Qwest BPO, and
                Alorica, where I handled administrative tasks, customer
                inquiries, and content review to ensure quality and compliance.
                My skills include time management, problem-solving, and
                delivering exceptional customer support. I am passionate about
                efficiency, teamwork, and consistently exceeding expectations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 100}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.8, delay: 0.4}}
            className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{opacity: 0, scale: 0.5}}
                  animate={isInView ? {opacity: 1, scale: 1} : {}}
                  transition={{duration: 0.6, delay: 0.6 + index * 0.1}}
                  className="glass-effect rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <motion.div
                    whileHover={{rotate: 360}}
                    transition={{duration: 0.6}}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 group-hover:shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </h4>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Floating quote */}
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8, delay: 1}}
          className="mt-20 text-center">
          <div className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto">
            <motion.blockquote
              className="text-2xl font-playfair text-gray-700 italic mb-4"
              animate={{opacity: [0.7, 1, 0.7]}}
              transition={{duration: 4, repeat: Infinity}}>
              "Excellence in customer service isn't just about solving
              problems—it's about creating experiences that customers remember
              and value."
            </motion.blockquote>
            <cite className="text-purple-600 font-medium">— My Philosophy</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
