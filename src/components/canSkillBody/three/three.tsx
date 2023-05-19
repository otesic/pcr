"use client";
import { navValue } from "@/app/GlobalState/Features/CanSkillNav/CanSkillNavSilce";
import {
  Canvas,
  extend,
  useFrame,
  useThree,
  useLoader,
  ReactThreeFiber,
} from "@react-three/fiber";
import { useRouter } from "next/navigation";
import { Suspense, useRef } from "react";
import { useDispatch } from "react-redux";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Node<OrbitControls, typeof OrbitControls>;
    }
  }
}

type ControlProps = {
  isControl: boolean;
};

export const Controls: React.FC<ControlProps> = (props) => {
  const controlsRef = useRef<any>();
  const { camera, gl } = useThree();

  useFrame(() => {
    controlsRef.current?.update();
  });

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enabled={props.isControl}
      enableZoom={true}
      zoomSpeed={1.0}
      enableRotate={true}
      rotateSpeed={1.0}
      enablePan={true}
      panSpeed={2.0}
      minDistance={0}
      maxDistance={Infinity}
      minPolarAngle={0}
      maxPolarAngle={Math.PI}
    />
  );
};

const Box = (props: any) => {
  const ref = useRef<any>();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  const router = useRouter();
  const dispatch = useDispatch();

  // 3d 매쉬 클릭으로 이동 시킴 리덕스 값 초기화 시키고 디폴트 페이지로 이동
  const handlePointerClick = () => {
    router.push("/canSkills");
    dispatch(navValue(""));
  };
  return (
    <mesh ref={ref} {...props} castShadow onClick={handlePointerClick}>
      <boxGeometry />
      <meshPhysicalMaterial color="blue" opacity={1} transparent wireframe />
    </mesh>
  );
};
const BackGround = () => {
  const texture = useLoader(THREE.TextureLoader, `/threejsImg/강릉.jpg`);
  const { gl } = useThree();
  const formatted = new THREE.WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture);
  return <primitive attach="background" object={formatted.texture} />;
};

const Three = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        style={{ background: "black", cursor: "pointer" }}
        camera={{ position: [6, 6, 6] }}
      >
        <Suspense fallback={null}>
          <Box position={[0, 1, 0]} />
        </Suspense>
        <BackGround></BackGround>
        <pointLight />
        <Controls isControl={true} />
      </Canvas>
    </div>
  );
};
export default Three;
