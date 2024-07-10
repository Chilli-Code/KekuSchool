import { defineConfig } from "astro/config";
import lottie from "astro-integration-lottie";

export default defineConfig({
  integrations: [
    lottie(), // <-- add integration
  ]
});