"use client"

import React, { ReactNode } from "react"

import Navbar from "../comps/navbar"

export default function PageLayout(props: { children: ReactNode }) {
  return (
    <div className={"bg-background"}>
      <Navbar />
      <div className={``}> {props.children}</div>
    </div>
  )
}
