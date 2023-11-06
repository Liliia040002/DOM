const list = document.getElementById("list");

const items = list.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
      alert(items[i].innerHTML);
    };
    