import React from "react"
import Header from "../components/header" // imports header as a component

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText='About Page'/>
      <p>Such wow. Very React.</p>
    </div>
  )
}