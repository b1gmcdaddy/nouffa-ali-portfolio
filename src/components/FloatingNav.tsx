import {motion} from "framer-motion";
import {Home, User, Briefcase, Mail, Award} from "lucide-react";

interface FloatingNavProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const FloatingNav = ({activeSection, onSectionClick}: FloatingNavProps) => {
  const navItems = [
    {id: "hero", icon: Home, label: "Home"},
    {id: "about", icon: User, label: "About"},
    {id: "experience", icon: Briefcase, label: "Experience"},
    {id: "skills", icon: Award, label: "Skills"},
    {id: "contact", icon: Mail, label: "Contact"},
  ];

  return (
    <motion.nav
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 1}}
      className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-2 sm:px-4">
      <div className="glass-effect rounded-full px-2 sm:px-6 py-2 sm:py-3 flex justify-center">
        <div className="flex items-center space-x-2 sm:space-x-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={`relative p-2 sm:p-3 rounded-full transition-all duration-300 ${
                  isActive ? "text-white" : "text-gray-600 hover:text-gray-800"
                }`}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}>
                {isActive && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                    transition={{type: "spring", bounce: 0.2, duration: 0.6}}
                  />
                )}
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />

                <motion.span
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-gray-800 text-white px-2 py-1 rounded opacity-0 pointer-events-none"
                  whileHover={{opacity: 1}}>
                  {item.label}
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default FloatingNav;
