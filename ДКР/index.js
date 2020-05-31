const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


const f_name = document.getElementById("Name");
const f_number = document.getElementById("Number");
f_name.name.value = ((!localStorage.getItem("name"))?"":localStorage.getItem("name"));
f_number.number.value = ((!localStorage.getItem("number"))?"":localStorage.getItem("number"));

function save(me)
{
	localStorage.setItem(me.id,me.value);
}
f_name.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Saved");
 	localStorage.setItem(name.id,name.value);
});
f_number.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Saved");
  localStorage.setItem(number.id,number.value);
});