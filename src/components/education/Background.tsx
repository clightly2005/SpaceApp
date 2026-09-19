"use client"

import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";

export default function Background() {
  useEffect(() => {
    initParticlesEngine(async (engine) => { await loadStarsPreset(engine); });
  }, []);

  const options = useMemo(() => ({ preset: "stars",}), []);

  return (
    <Particles id="tsparticles" options={options}/>
  );
}