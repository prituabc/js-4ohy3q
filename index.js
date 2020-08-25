

// Import stylesheets
import "./style.css";

// Write Javascript code!

const sendHttpRequest = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = response => {
    var data = response.target;
    debugger;
    if (data.readyState == 4 && data.status == 200) {
      console.log(data.responseText);
      const userData=JSON.parse(data.responseText).data;
      userData.forEach(item => {
       userDataGenerator(item);
});
    }
  };
  xhttp.open("GET", "https://reqres.in/api/users?page=1");
  xhttp.send();
};

sendHttpRequest();


const main=document.querySelector("main");

const userDataGenerator = item => {
const div=document.createElement("div");
const name=document.createElement("h3");
const email=document.createElement("h3");
const img=document.createElement("img");

main.append(div);
div.append(name);
div.append(email);
div.append(img);
name.innerHTML=item.first_name+ " "+item.last_name;
email.innerHTML=item.email;
img.setAttribute(
    "src",
    item.avatar
  );
};
