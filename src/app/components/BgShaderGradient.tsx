"use client";

import React from "react";

import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";

import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";


export default function BgShaderGradient() {
  return (
    <ShaderGradientCanvas
      importedfiber={{ ...fiber, ...drei, ...reactSpring }}
      style={{
        position: "absolute",
        top: 0,
      }}
      className="pointer-events-none -z-10"
    >
      <ShaderGradient
        control="query"
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%235606FF&color2=%23FE8989&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=off&lightType=3d&pixelDensity=1&positionX=-0.5&positionY=0.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.1&uFrequency=5.5&uSpeed=0.025&uStrength=2.4&uTime=0.2&wireframe=false"
      />
    </ShaderGradientCanvas>
  );
}
