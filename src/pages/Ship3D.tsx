import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

export default function Ship3D() {
  const shipRef = useRef<any>();
  
  const { position } = useSpring({
    from: { position: [-20, 0, 0] },
    to: { position: [20, 0, 0] },
    config: { duration: 10000 },
    loop: true,
  });

  useFrame(({ clock }) => {
    if (shipRef.current) {
      shipRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
      shipRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <animated.mesh ref={shipRef} position={position}>
      <boxGeometry args={[2, 1, 4]} />
      <meshStandardMaterial color="#0284c7"/>
    </animated.mesh>
  );
}