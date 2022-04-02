const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Answer 1
const cat = {
  complain: () => console.log("Meow!"),
};

cat.complain();

//Answer 2,3,4
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading"; // Q2
heading.style.fontSize = "2em"; // Q3
heading.classList.add("subheading"); // Q4

//Answer 5
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph) => {
  paragraph.style.color = "red";
});

// Answer 6
const resultsContainer = document.querySelector("div.results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Answer 7
function logNames(list) {
  list.forEach((item) => {
    console.log(item.name);
  });
}

logNames(cats);

// Answer 8
function createCats(cats) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    const cat = cats[i];

    const wrapper = document.createElement("div");
    const name = document.createElement("h5");
    const age = document.createElement("p");

    name.innerText = cat.name;

    if (cat.age) age.innerText = cat.age;
    else age.innerText = "Age unknown";

    wrapper.append(name, age);
    html += wrapper.outerHTML;
  }

  return html;
}

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);
