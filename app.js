document.getElementById("button-2").addEventListener("click", getJson);

function getJson() {
  fetch("db.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "";

      data.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });

      document.getElementById("output").innerHTML = output;
    })
    .catch((error) => {
      console.log(error);
    });
}
