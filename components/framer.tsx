"use client";

import React, { useState } from "react";
import Sidebar from "./sidebar";
import Footer from "./footer";

interface Props {
  tid: string;
  children: React.ReactNode;
}

export default function Framer({ tid, children }: Props) {
  const [expandState, setExpandState] = useState(true);
  const [expanded, setExpanded] = useState(true);

  function asideBtnClick() {
    if (expandState) {
      setExpanded(false);
      setExpandState(false);
      document.getElementById("framer")?.classList.remove("expanded");
    } else {
      setExpanded(true);
      setExpandState(true);
      document.getElementById("framer")?.classList.add("expanded");
    }
  }

  function asideHover() {
    if (expandState) return;
    setExpanded(true);
  }

  function asideOut() {
    if (expandState) return;
    setExpanded(false);
  }

  return (
    <div id="framer" className="mt-16 expanded">
      <Sidebar
        //
        tid={tid}
        expanded={expanded}
        onExpand={asideBtnClick}
        onHover={asideHover}
        onOut={asideOut}
      />
      {/* <div id="container" className={`flex flex-col ${expandState ? "ml-48" : "ml-14"}`} style={{ minHeight: "calc(-64px + 100vh)" }}> */}
      <div
        id="container"
        className={`flex flex-col ${expandState ? "ml-48" : "ml-14"}`}
        style={{ minHeight: "calc(-64px + 100vh)" }}>
        <div className=""></div>
        <main className="flex py-8 mb-6 min-h-[450px]">
          <div className="w-[90%] max-w-6xl mx-auto">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
