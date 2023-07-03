import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "cktzaq6d",
    dataset: "production",
    title: "Personal Site Tutorial",
    apiVersion: "2023-07-04",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config