"use client";

//import { Authenticator } from '@aws-amplify/ui-react'
//import '@aws-amplify/ui-react/styles.css'
//import { useState, useEffect } from "react";
//import { generateClient } from "aws-amplify/data";
//import type { Schema } from "@/amplify/data/resource";
//import "./../app/app.css";
// import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";
// import "@aws-amplify/ui-react/styles.css";

//Amplify.configure(outputs);

//const client = generateClient<Schema>();

import Navbar from "../app/components/Navbar";

export default function App() {
  
  return (
        
    //<Authenticator>
      //{({ signOut, user }) => (
      <main>
          <Navbar/>
          <h1>Hello World</h1>
        </main>
      //)}
      //</Authenticator>
  )
}
