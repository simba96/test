function myFunction(){document.getElementById("list").classList.toggle("show")}function insertValue(){var e=document.getElementById("list"),t=document.getElementById("txt").value,n=document.createElement("li a"),i=document.createTextNode(t);n.appendChild(i),e.insertBefore(n,e.firstChild)}window.onclick=function(e){if(!e.target.matches(".main__dropbtn")){var t,n=document.getElementsByClassName("main__dropdown-content");for(t=0;t<n.length;t++){var i=n[t];i.classList.contains("show")&&i.classList.remove("show")}}};for(var menuItems=document.getElementsByClassName("main__item"),onClick=function(e){e.preventDefault();for(var t=0;t<menuItems.length;t++)menuItems[t].classList.remove("active");e.currentTarget.classList.add("active")},i=0;i<menuItems.length;i++)menuItems[i].addEventListener("click",onClick,!1);for(var items=document.querySelectorAll("#list a"),i=0;i<items.length;i++)items[i].onclick=function(){document.getElementById("txt").value=this.innerHTML};