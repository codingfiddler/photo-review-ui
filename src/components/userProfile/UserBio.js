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
      {/* <h3> {full_name} </h3>
      <p> {email} </p>
      <p> {username} </p>
      <p> {location} </p>
      <p> {bio} </p> */}
      <h3> John Doe</h3>
      <p> @johnyodalover </p>
      <p> New York City, US</p>
      <br /><br />
      <p> I am very passionate about photography</p>
      <p> and I love baby Yoda </p>
    </div>
  );
}
