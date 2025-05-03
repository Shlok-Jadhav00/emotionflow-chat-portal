import { useEffect, useRef } from 'react';

// This component is no longer used by default since we've switched to ThreeDBackground
// Keeping it for reference
const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();

    // Arrays for triangular shapes and light bars
    const triangles: Array<{
      x: number;
      y: number;
      height: number;
      width: number;
      color: string;
    }> = [];

    const lightBars: Array<{
      x: number;
      y: number;
      width: number;
      height: number;
      color: string;
      speed: number;
    }> = [];

    // Create triangular shapes (spikes)
    const triangleCount = 30;
    for (let i = 0; i < triangleCount; i++) {
      triangles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 50,
        height: 100 + Math.random() * 300,
        width: 20 + Math.random() * 60,
        color: `rgba(120, 180, 255, ${0.1 + Math.random() * 0.3})`,
      });
    }

    // Create light bars
    const lightBarCount = 15;
    for (let i = 0; i < lightBarCount; i++) {
      lightBars.push({
        x: Math.random() * canvas.width,
        y: -100 - Math.random() * 200,
        width: 100 + Math.random() * 300,
        height: 5 + Math.random() * 15,
        color: `rgba(255, 255, 255, ${0.4 + Math.random() * 0.4})`,
        speed: 0.5 + Math.random() * 2
      });
    }

    // Create main light source (sun/moon)
    const mainLight = {
      x: canvas.width / 2,
      y: canvas.height * 0.2,
      radius: 50,
      glow: 100
    };

    const animate = () => {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#1a3c6e');
      gradient.addColorStop(1, '#0A192F');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw main light
      const lightGradient = ctx.createRadialGradient(
        mainLight.x, mainLight.y, 0,
        mainLight.x, mainLight.y, mainLight.radius + mainLight.glow
      );
      lightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      lightGradient.addColorStop(0.5, 'rgba(200, 220, 255, 0.5)');
      lightGradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
      
      ctx.fillStyle = lightGradient;
      ctx.beginPath();
      ctx.arc(mainLight.x, mainLight.y, mainLight.radius + mainLight.glow, 0, Math.PI * 2);
      ctx.fill();

      // Animate and draw light bars
      lightBars.forEach((bar, index) => {
        // Move bars down
        bar.y += bar.speed;
        
        // Reset position when off screen
        if (bar.y > canvas.height + 100) {
          bar.y = -100 - Math.random() * 200;
          bar.x = Math.random() * canvas.width;
          bar.width = 100 + Math.random() * 300;
        }

        // Draw the light bar
        ctx.fillStyle = bar.color;
        ctx.fillRect(bar.x, bar.y, bar.width, bar.height);
      });

      // Draw triangular shapes
      triangles.forEach((triangle) => {
        ctx.fillStyle = triangle.color;
        ctx.beginPath();
        ctx.moveTo(triangle.x, triangle.y);
        ctx.lineTo(triangle.x + triangle.width / 2, triangle.y - triangle.height);
        ctx.lineTo(triangle.x + triangle.width, triangle.y);
        ctx.closePath();
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
};

export default Background;
