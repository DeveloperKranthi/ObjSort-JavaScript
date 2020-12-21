const list = document.querySelector(".list");

const sort_name_btn = document.querySelector(".sort-options .sort-name");
const sort_name_meta = document.querySelector(".sort-options .sort-meta");
const sort_name_age = document.querySelector(".sort-options .sort-age");

console.log(sort_name_btn);

let list_items = [
  { name: "BatMan", meta: "Black", age: "57" },
  { name: "Superman", meta: "Red & Blue", age: "32" },
  { name: "wounder Woman", meta: "Gold, Red & Blue", age: "34" },
  { name: "The Flash", meta: "Red & Yellow", age: "24" },
  { name: "Cyborg", meta: "Silver", age: "24" },
  { name: "Green Arrow", meta: "Green", age: "38" },
  { name: "Nightwing", meta: "Blue & Black", age: "30" },
];

let desc = false;
sort_name_btn.addEventListener("click", () => {
  // sort_array_by is a function name
  let array = sort_array_by(list_items, "name", desc);
  displayList(array);

  desc = !desc;
});

function sort_array_by(array, sort, desc) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) {
      return -1;
    }

    if (a[sort] > b[sort]) {
      return 1;
    }

    return 0;
  });
  if (desc) array.reverse();
  //i made a mistake to Keep the return array in Block Scope
  return array;
}

sort_name_meta.addEventListener("click", () => {
  let array = sort_array_by(list_items, "meta", desc);
  displayList(array);

  desc = !desc;
});

function sort_array_by(array, sort, desc) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) {
      return -1;
    }
    if (a[sort] > b[sort]) {
      return 1;
    }
    return 0;
  });

  if (desc) array.reverse();
  return array;
}

sort_name_age.addEventListener("click", () => {
  let array = sort_array_by(list_items, "age", desc);
  displayList(array);

  desc = !desc;
});

function sort_array_by(array, sort, desc) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) {
      return -1;
    }

    if (a[sort] > b[sort]) {
      return 1;
    }
    return 0;
  });
  if (desc) return array.reverse();
  return array;
}

function displayList(array = []) {
  list.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    let item_element = document.createElement("div");
    item_element.classList.add("list-item");

    let title = document.createElement("div");
    title.classList.add("item-title");
    title.innerText = item.name;

    item_element.appendChild(title);

    let Meta = document.createElement("div");
    Meta.classList.add("item-meta");
    Meta.innerText = item.meta;

    item_element.appendChild(Meta);

    let Age = document.createElement("div");
    Age.classList.add("item-age");
    Age.innerText = item.age;

    item_element.appendChild(Age);

    list.appendChild(item_element);
  }
}
displayList(list_items);

// let desc = false;
// function sortByName(list_items,'name',desc) {
//   displayList(list_items)
// }
