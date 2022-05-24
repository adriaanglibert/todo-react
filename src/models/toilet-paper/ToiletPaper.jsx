import React, { useRef } from 'react'

import { useGLTF } from '@react-three/drei'

export default function ToiletPaper({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, -1.93]}>
              <mesh geometry={nodes.ToiletPaperRoll_ToiletPaperRoll_0.geometry} material={materials.ToiletPaperRoll} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
