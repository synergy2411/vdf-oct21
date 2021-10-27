$(document).ready(() => {
  $("#btnShow").on("click", (event) => {
    event.preventDefault();
    const location = $("#location").val();
    if (location === "") {
      return alert("Please enter location");
    }
    fetch("http://localhost:9000/location?location=" + location)
      .then((response) => response.json())
      .then((result) => {
        $("#message").html(`
                  Right now, Temperature is ${result.temperature} at the location ${result.placeName}
                  It is anticipated that ${result.summary}!!
                  `);
      })
      .catch((err) => console.log(err));
  });
});
