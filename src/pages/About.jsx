import { Canvas } from '@react-three/fiber'
import Center from '../components/Center';
import { Environment } from '@react-three/drei'
import Heading from '../components/Heading';
import Model from '../models/tp/Scene';
import React from 'react'
import { Suspense } from 'react'
import { sizes } from '../constants/styles';

const About = () => {
  return (
    <Center padding={`${sizes.xl} ${sizes.base}`}>
      <Heading margin={`0 auto ${sizes.xl} auto`}>Don't write it on toilet paper, write it digitally!</Heading>
      <p>
        Quisque rhoncus ex ut odio fermentum, et iaculis massa tempus.
      </p>
    </Center>
  )
}

export default About