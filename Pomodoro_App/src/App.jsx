import React, { useState } from "react";
import MyTimer from "./MyTimer"
import "./App.css";

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1500); // 25 minutes timer for pomodoro app

  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
