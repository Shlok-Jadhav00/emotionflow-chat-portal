
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeDBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [renderingFailed, setRenderingFailed] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Try-catch to handle WebGL initialization errors
    try {
      // Set up scene
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x1a1f2c, 0.035);
      
      // Set up camera
      const camera = new THREE.PerspectiveCamera(
        60, 
        window.innerWidth / window.innerHeight, 
        0.1, 
        1000
      );
      camera.position.z = 5;
      camera.position.y = 2;

      // Set up renderer with error handling
      let renderer: THREE.WebGLRenderer;
      
      try {
        // Try to create the renderer with a check for WebGL support
        renderer = new THREE.WebGLRenderer({ 
          antialias: true, 
          alpha: true,
          powerPreference: 'default',
          failIfMajorPerformanceCaveat: false
        });
        
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for better performance
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x1a1f2c);
        containerRef.current.appendChild(renderer.domElement);
      } catch (error) {
        console.error("WebGL renderer creation failed:", error);
        setRenderingFailed(true);
        return; // Exit early if renderer creation fails
      }

      // Create gradient background
      const topColor = new THREE.Color(0xe5deff); // Purple
      const middleColor = new THREE.Color(0xffdee2); // Pink
      const bottomColor = new THREE.Color(0xfec6a1); // Orange
      
      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffdee2, 0.4);
      scene.add(ambientLight);
      
      // Add directional light (sunlight effect)
      const directionalLight = new THREE.DirectionalLight(0xffdee2, 0.8);
      directionalLight.position.set(1, 3, 2);
      scene.add(directionalLight);

      // Create a grid of pillars
      const pillars: THREE.Mesh[] = [];
      const pillarGeometry = new THREE.BoxGeometry(1, 1, 1);
      const pillarMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xffdee2,
        emissive: 0xfec6a1,
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.9,
        shininess: 90
      });
      
      // Create grid layout
      const gridSize = 20;
      const spacing = 3;
      
      for (let x = -gridSize/2; x < gridSize/2; x++) {
        for (let z = -gridSize/2; z < gridSize/2; z++) {
          // Randomly skip some positions for variety
          if (Math.random() > 0.7) continue;
          
          const height = Math.random() * 5 + 0.5;
          const posX = x * spacing;
          const posZ = z * spacing;
          
          // Create pillar
          const adjustedGeometry = new THREE.BoxGeometry(1, height, 1);
          const pillar = new THREE.Mesh(adjustedGeometry, pillarMaterial);
          
          pillar.position.set(posX, height/2, posZ);
          
          // Add glowing top to each pillar
          const topGeometry = new THREE.BoxGeometry(1.1, 0.1, 1.1);
          const topMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xfec6a1,
            emissive: 0xfec6a1,
            emissiveIntensity: 0.7,
            transparent: true,
            opacity: 0.9
          });
          
          const topCube = new THREE.Mesh(topGeometry, topMaterial);
          topCube.position.y = height/2 + 0.05;
          pillar.add(topCube);
          
          // Add point light on top of some pillars
          if (Math.random() > 0.7) {
            const pointLight = new THREE.PointLight(0xffdee2, 1, 4);
            pointLight.position.set(0, height/2 + 0.5, 0);
            pillar.add(pointLight);
          }
          
          scene.add(pillar);
          pillars.push(pillar);
        }
      }
      
      // Add floating cube (central object)
      const floatingCubeGeometry = new THREE.BoxGeometry(2, 2, 2);
      const floatingCubeMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xe5deff,
        emissive: 0xffdee2,
        emissiveIntensity: 0.6,
        transparent: true,
        opacity: 0.8,
        shininess: 100,
      });
      
      const floatingCube = new THREE.Mesh(floatingCubeGeometry, floatingCubeMaterial);
      floatingCube.position.set(0, 6, 0);
      scene.add(floatingCube);
      
      // Add a point light inside the floating cube
      const cubeLight = new THREE.PointLight(0xffdee2, 2, 10);
      floatingCube.add(cubeLight);
      
      // Handle window resize
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Animation variables
      let time = 0;
      const speed = 0.2;
      const initialCameraZ = camera.position.z;
      
      // Animation loop
      const animate = () => {
        time += 0.01;
        
        // Move camera forward
        camera.position.z -= speed * 0.05;
        
        // Reset camera position when moved too far
        if (camera.position.z < -gridSize * spacing / 2) {
          camera.position.z = initialCameraZ;
        }
        
        // Rotate floating cube
        floatingCube.rotation.x += 0.003;
        floatingCube.rotation.y += 0.002;
        
        // Animate pillar heights for subtle movement
        pillars.forEach((pillar, index) => {
          const originalHeight = pillar.scale.y;
          pillar.scale.y = originalHeight + Math.sin(time + index) * 0.03;
        });
        
        renderer.render(scene, camera);
        
        requestAnimationFrame(animate);
      };
      
      animate();
      
      return () => {
        window.removeEventListener('resize', handleResize);
        
        // Clean up Three.js resources
        scene.clear();
        renderer.dispose();
        if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
        }
      };
    } catch (err) {
      // Handle any errors during WebGL setup
      console.error("Error setting up 3D background:", err);
      setRenderingFailed(true);
    }
  }, []);
  
  // Fallback gradient background when 3D rendering fails
  if (renderingFailed) {
    return (
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1a1f2c] via-[#2a2f3c] to-[#1a1f2c]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,222,226,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated light bars */}
          <div className="absolute h-1 w-40 bg-[#FFDEE2]/50 blur-md animate-float-slow left-[20%] top-[30%]"></div>
          <div className="absolute h-1 w-60 bg-[#E5DEFF]/50 blur-md animate-float-medium left-[60%] top-[60%]"></div>
          <div className="absolute h-1 w-32 bg-[#FEC6A1]/50 blur-md animate-float-fast left-[40%] top-[80%]"></div>
          
          {/* Glowing center */}
          <div className="absolute w-32 h-32 rounded-full bg-[#E5DEFF]/20 blur-xl left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    );
  }
  
  return <div ref={containerRef} className="absolute inset-0 -z-10" />;
};

export default ThreeDBackground;
