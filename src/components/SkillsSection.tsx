import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef} from "react";
import {MessageSquare, Users, Headphones, Search, BarChart} from "lucide-react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-100px"});

  const skillCategories = [
    {
      title: "Communication",
      icon: MessageSquare,
      skills: [
        {name: "Written Communication", level: 95},
        {name: "Active Listening", level: 90},
        {name: "Conflict Resolution", level: 88},
        {name: "Multilingual Support", level: 85},
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Technical Skills",
      icon: Search,
      skills: [
        {name: "Email Management Systems", level: 92},
        {name: "CRM Platforms", level: 89},
        {name: "Knowledge Base Creation", level: 87},
        {name: "Data Analysis", level: 85},
      ],
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Customer Relations",
      icon: Users,
      skills: [
        {name: "Customer Retention", level: 93},
        {name: "Relationship Building", level: 91},
        {name: "Problem Solving", level: 90},
        {name: "Empathy & Understanding", level: 96},
      ],
      color: "from-teal-500 to-blue-500",
    },
  ];

  const tools = [
    "Zendesk",
    "Salesforce",
    "Intercom",
    "Help Scout",
    "Slack",
    "Microsoft Office",
    "Google Workspace",
    "Jira",
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8}}
          className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-playfair gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for delivering exceptional customer
            experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{opacity: 0, y: 100}}
                animate={isInView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.8, delay: categoryIndex * 0.2}}
                className="glass-effect rounded-3xl p-8 group hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{rotate: 360, scale: 1.1}}
                    transition={{duration: 0.6}}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-4 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold font-playfair text-gray-800">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{width: 0}}
                          animate={isInView ? {width: `${skill.level}%`} : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut",
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}>
                          <motion.div
                            animate={{x: [0, 10, 0]}}
                            transition={{duration: 2, repeat: Infinity}}
                            className="absolute right-0 top-0 h-full w-4 bg-white bg-opacity-30 rounded-full"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools & Software */}
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8, delay: 0.8}}
          className="text-center">
          <h3 className="text-3xl font-bold font-playfair text-gray-800 mb-8">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{opacity: 0, scale: 0}}
                animate={isInView ? {opacity: 1, scale: 1} : {}}
                transition={{duration: 0.6, delay: 1 + index * 0.1}}
                whileHover={{scale: 1.1, y: -5}}
                className="px-6 py-3 glass-effect rounded-full font-medium text-gray-700 hover:shadow-lg transition-shadow duration-300">
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 opacity-10"
          animate={{rotate: 360}}
          transition={{duration: 20, repeat: Infinity, ease: "linear"}}>
          <BarChart className="w-full h-full text-purple-500" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 opacity-10"
          animate={{y: [0, -20, 0]}}
          transition={{duration: 4, repeat: Infinity}}>
          <Headphones className="w-full h-full text-blue-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
