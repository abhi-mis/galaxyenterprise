import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Ocean from './Ocean';
import Ship3D from './Ship3D';

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 10, 100], fov: 55 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[100, 100, 100]} intensity={2} />
        <Ship3D />
        <Ocean />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}