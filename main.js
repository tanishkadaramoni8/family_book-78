var images=[
    "grandpa.jpeg",
    "grandma.jpg",
    "dad.jpeg",
    "mom.jpeg",
    "sister.jpg",
    "me.jpeg"
  ];


  var i = 0;
function nextslide(){
   if(i == 6)
     {
       i=0;
     }
   
    document.getElementById("album").src = images[i];
  i++;
}