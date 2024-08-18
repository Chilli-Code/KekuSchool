import { defineConfig } from "astro/config";
import lottie from "astro-integration-lottie";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [lottie() // <-- add integration
  , react()]
});