import { extend } from '@react-three/fiber';
import { Water } from 'three/examples/jsm/objects/Water.js';


extend({ Water });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      water: any;
    }
  }
}