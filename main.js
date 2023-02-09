// menu bitton
const menuBtn = document.querySelector("#menuBtn");
const ulele = document.querySelector("#ultag");
menuBtn.addEventListener("click", menuSlid);
function menuSlid() {
  if (ulele.className === "s-d-none") {
    ulele.classList.remove("s-d-none");
    ulele.classList.add("s-d-block");
  } else {
    ulele.classList.add("s-d-none");
    ulele.classList.remove("s-d-block");
  }
}
/// movies data
const movies = [
  {
    imgLnk:
      "https://upload.wikimedia.org/wikipedia/en/b/b3/Emancipation_Release_Poster.jpg",
    title: "Emancipation",
    dateRel: "December 9, 2022",
    shDesc:
      " Peter, a slave, flees a plantation in Louisiana after he was whipped within an inch of his life. He has to outwit cold-blooded hunters and the unforgiving swamps of Louisiana on a torturous journey north.",
  },
  {
    imgLnk:
      "https://lumiere-a.akamaihd.net/v1/images/image_9e35a739.jpeg?region=0,0,540,810",
    title: "Aladdin",
    dateRel: "May 24, 2019",
    shDesc:
      " Aladdin, a kind thief, woos Jasmine, the princess of Agrabah, with" +
      "the help of Genie. When Jafar, the grand vizier, tries to usurp" +
      "the king, Jasmine, Aladdin and Genie must stop him from" +
      "succeeding.",
  },
  {
    imgLnk:
      "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/thepursuitofhappyness_onesheet_1400x2100.png?itok=BSpvsOsJ",
    title: "The Pursuit of Happyness",
    dateRel: "December 15, 2006",
    shDesc:
      " Tired of Chris's professional failures, his wife decides to separate, leaving him financially broke with an unpaid internship in a brokerage firm and his son's custody to deal with",
  },
  {
    imgLnk: "https://flxt.tmsimg.com/assets/p170977_p_v7_ae.jpg",
    title: "I Am Legend",
    dateRel: "December 14, 2007",
    shDesc:
      "Robert Neville, a scientist, is the last human survivor of a plague in the whole of New York. He attempts to find a way to reverse the effects of the man-made virus by using his own immune blood. they are after the coaching from their father Richard Williams.",
  },
];
const sect = document.querySelector(".sec-card");
function sendMovieData() {
  for (let i = 0; i < movies.length; i++) {
    const article = document.createElement("article");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    if (i % 2 === 0) {
      article.className = "card over-flow border-radius-5px one";
    } else {
      article.className = "card over-flow border-radius-5px tow";
    }
    div.className = "img-div over-flow";
    h1.className = "title m font-matt";
    h1.textContent = movies[i].title;
    h4.className = "m font-matt";
    h4.textContent = movies[i].dateRel;
    p.className = "m font-matt";
    p.textContent = movies[i].shDesc;
    img.src = movies[i].imgLnk;
    div.appendChild(img);
    article.appendChild(div);
    article.appendChild(h1);
    article.appendChild(h4);
    article.appendChild(p);
    sect.appendChild(article);
  }
}
sendMovieData();
