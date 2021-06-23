import { StatusBar } from "expo-status-bar";
import React from "react";

import { BlogPost } from "./src/features/blogPost/screens/blog-post.screen";

export default function App() {
  return (
    <>
      <BlogPost />
      <StatusBar style="auto" />
    </>
  );
}
