import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { transform } from "esbuild";
import pkg from "./package.json";

const bundleComponents = process.env.BUNDLE_COMPONENTS ?? true;

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
    minifyEs(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: "src/lib/index.ts",
      formats: bundleComponents ? (["es", "esm", "umd"] as any) : ["es"],
      name: pkg.name.replace(/-./g, (char) => char[1].toUpperCase()),
      fileName: (format) =>
        ({
          es: `${pkg.name}.js`,
          esm: `${pkg.name}.min.js`,
          umd: `${pkg.name}.umd.js`,
        }[format]),
    },
    rollupOptions: {
      output: bundleComponents
        ? {}
        : {
            inlineDynamicImports: false,
            chunkFileNames: "[name].js",
            manualChunks: { svelte: ["svelte"] },
          },
    },
  },
});

function minifyEs() {
  return {
    name: "minifyEs",
    renderChunk: {
      order: "post" as const,
      async handler(code, chunk, outputOptions) {
        if (
          outputOptions.format === "es" &&
          (!bundleComponents || chunk.fileName.endsWith(".min.js"))
        ) {
          return await transform(code, { minify: true });
        }
        return code;
      },
    },
  };
}
