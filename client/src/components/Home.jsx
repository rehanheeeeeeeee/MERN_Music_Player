import React from "react";
import Header from "./Header";

const styles = {
  container:
    "bg-primary flex w-full flex-col h-auto justify-center items-center",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}
