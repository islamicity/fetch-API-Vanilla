import "./styles.css";

fetch("https://pie.dev/post",{
  method: "POST",
  headers: {
    authentication: "Bearer qe50235wrkqwtifk",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Benn Al Islamicity",
    age: 15
  })
})
.then(function(res) {
  if (res.ok === false) {
    return console.log("request gagal");
  }
  return res.json();
}) 
.then(function(res) {
  console.log(res);
});

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
