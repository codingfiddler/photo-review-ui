import React from "react";

export default function writeBio({
  full_name,
  email,
  location,
  username,
  bio,
}) {
  return (
    <div class="container" style={{ textAlign: "center", lineHeight: "2px" }}>
      <h3> {full_name} </h3>
      <p> {email} </p>
      <p> {username} </p>
      <p> {location} </p>
      <p> {bio} </p>
    </div>
  );
}
