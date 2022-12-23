const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2c1f31e216mshbcc7d4817f90aecp1039e2jsnde40d3cb2896",
    "X-RapidAPI-Host": "scraptik.p.rapidapi.com",
  },
};

document.getElementById("refresh").addEventListener("click", () => {
  fetch(
    "https://scraptik.p.rapidapi.com/music-posts?music_id=7180057321811249925&count=18&cursor=0",
    options
  ).then(function (response) {
    response
      .json()
      .then((response) => {
        tbody.innerHTML = "";
        response.aweme_list.sort((a, b) => {
          return parseFloat(b.statistics.digg_count) - parseFloat(a.statistics.digg_count)          
          }
        );
        response.aweme_list.forEach((post) => {
          let row = document.createElement("tr");
          let tbody = document.getElementById("tbody");
          let th = document.createElement("th");
          let uniqueId = document.createElement("td");
          let desc = document.createElement("td");
          let like = document.createElement("td");
          th.setAttribute("scope", "row");
          th.innerText = post.author.nickname;
          uniqueId.innerText = post.author.unique_id;
          desc.innerText = post.desc;
          like.innerText = post.statistics.digg_count;
          row.appendChild(th);
          row.appendChild(uniqueId);
          row.appendChild(desc);
          row.appendChild(like);
          tbody.appendChild(row);
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  });
});

