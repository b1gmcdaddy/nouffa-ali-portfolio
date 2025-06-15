import {motion} from "framer-motion";
import {useInView} from "framer-motion";
import {useRef, useState} from "react";
import {Mail, Phone, MapPin, Send, CheckCircle} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-100px"});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nouffa.ali@email.com",
      href: "mailto:nouffa.ali@email.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Remotely",
      href: "#",
      color: "from-teal-500 to-blue-500",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8}}
          className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-playfair gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to create exceptional customer experiences together? I'd love
            to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{opacity: 0, x: -100}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.8, delay: 0.2}}
            className="space-y-8">
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold font-playfair text-gray-800 mb-8">
                Get In Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      initial={{opacity: 0, y: 30}}
                      animate={isInView ? {opacity: 1, y: 0} : {}}
                      transition={{duration: 0.6, delay: 0.4 + index * 0.1}}
                      whileHover={{scale: 1.05, x: 10}}
                      className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:bg-opacity-50 transition-all duration-300 group">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wide">
                          {contact.label}
                        </p>
                        <p className="text-gray-800 font-medium">
                          {contact.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <motion.div
                initial={{opacity: 0}}
                animate={isInView ? {opacity: 1} : {}}
                transition={{duration: 0.8, delay: 0.8}}
                className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                <p className="text-gray-700 italic">
                  "I'm always excited to discuss new opportunities and how I can
                  help your team deliver outstanding customer experiences."
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{opacity: 0, x: 100}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.8, delay: 0.4}}>
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold font-playfair text-gray-800 mb-8">
                Send a Message
              </h3>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{opacity: 0, y: 20}}
                      animate={isInView ? {opacity: 1, y: 0} : {}}
                      transition={{duration: 0.6, delay: 0.6}}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        type="text"
                        required
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your first name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{opacity: 0, y: 20}}
                      animate={isInView ? {opacity: 1, y: 0} : {}}
                      transition={{duration: 0.6, delay: 0.7}}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        required
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your last name"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6, delay: 0.8}}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      required
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6, delay: 0.9}}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      required
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </motion.div>

                  <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6, delay: 1}}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              ) : (
                <motion.div
                  initial={{opacity: 0, scale: 0.8}}
                  animate={{opacity: 1, scale: 1}}
                  className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
