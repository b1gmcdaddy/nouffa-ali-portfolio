import {useEffect, useRef} from "react";
import {motion} from "framer-motion";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<
    Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      color: string;
    }>
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles with more fluid movement
    const colors = [
      "#667eea",
      "#764ba2",
      "#f093fb",
      "#f5576c",
      "#4facfe",
      "#00f2fe",
      "#ff9a9e",
      "#fad0c4",
    ];
    particles.current = Array.from({length: 60}, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 0.8,
      dy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 4 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle, index) => {
        // More fluid sine wave movement
        particle.x += particle.dx + Math.sin(time + index * 0.1) * 0.3;
        particle.y += particle.dy + Math.cos(time + index * 0.15) * 0.2;

        // Wrap around edges instead of bouncing for smoother flow
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Draw particle with pulsing effect
        ctx.beginPath();
        const pulseSize = particle.size + Math.sin(time * 2 + index) * 0.5;
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.4 + Math.sin(time + index * 0.2) * 0.2;
        ctx.fill();

        // Enhanced connections with flowing effect
        particles.current.slice(index + 1).forEach((otherParticle) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (1 - distance / 120) * 0.15;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Enhanced flowing gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 pointer-events-none z-0" />

      {/* Animated Wave Effects - Made faster */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          animate={{
            transform: [
              "translateX(-100px)",
              "translateX(100px)",
              "translateX(-100px)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}>
          <path
            d="M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z"
            fill="url(#wave1)"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#667eea" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#764ba2" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f093fb" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </motion.svg>

        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          animate={{
            transform: [
              "translateX(50px)",
              "translateX(-150px)",
              "translateX(50px)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}>
          <path
            d="M0,500 Q400,350 800,500 T1600,500 L1600,800 L0,800 Z"
            fill="url(#wave2)"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4facfe" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#00f2fe" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ff9a9e" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </motion.svg>

        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          animate={{
            transform: [
              "translateX(-75px)",
              "translateX(125px)",
              "translateX(-75px)",
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}>
          <path
            d="M0,600 Q200,450 400,600 Q600,750 800,600 Q1000,450 1200,600 L1200,800 L0,800 Z"
            fill="url(#wave3)"
            opacity="0.15"
          />
          <defs>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fad0c4" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ffd1ff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ff9a9e" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      {/* Multiple flowing gradient overlays - Made faster */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 60% 80%, rgba(255, 182, 193, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Additional flowing wave overlay - Made faster */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%, rgba(219, 39, 119, 0.1) 100%)",
            "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(147, 51, 234, 0.1) 100%)",
            "linear-gradient(225deg, rgba(219, 39, 119, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)",
          ],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Cute Jigglypuff elements */}
      <motion.div
        className="fixed top-20 right-20 w-8 h-8 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 opacity-60 pointer-events-none z-0"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}>
        <div className="absolute inset-1 rounded-full bg-pink-100">
          <div className="absolute top-1 left-2 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute top-1 right-2 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-pink-400 rounded-full"></div>
        </div>
      </motion.div>

      <motion.div
        className="fixed bottom-32 left-16 w-6 h-6 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 opacity-50 pointer-events-none z-0"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}>
        <div className="absolute inset-0.5 rounded-full bg-pink-100">
          <div className="absolute top-0.5 left-1 w-0.5 h-0.5 bg-black rounded-full"></div>
          <div className="absolute top-0.5 right-1 w-0.5 h-0.5 bg-black rounded-full"></div>
        </div>
      </motion.div>

      <motion.div
        className="fixed top-1/2 left-8 w-5 h-5 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 opacity-40 pointer-events-none z-0"
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 20, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}>
        <div className="absolute inset-0.5 rounded-full bg-pink-100"></div>
      </motion.div>

      {/* Floating sparkles for extra cuteness */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-1 h-1 bg-pink-300 rounded-full opacity-60 pointer-events-none z-0"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 8}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}
    </>
  );
};

export default AnimatedBackground;
