document.addEventListener("DOMContentLoaded", function(){
    const memeGenerator = document.getElementById("memeGenerator");
    const imgSrc = document.getElementById("imgSrc");

    memeGenerator.addEventListener('submit', function(e) {
        e.preventDefault();

        let container = document.createElement('container');
         imgSrc.appendChild(container);
        
         let meme = document.createElement('img');
         meme.src = document.getElementById('URL').value;
         container.append(meme);     
    
         let topText = document.getElementById("top").value;
         let topCap = document.createElement("topcaption");
         topCap.append(topText);
         container.appendChild(topCap);

         let botText = document.getElementById('bottom').value;
         let botCap = document.createElement("botcaption");
         botCap.append(botText);
         container.appendChild(botCap);
      
         memeGenerator.reset()

         meme.addEventListener('click', function() {
         imgSrc.removeChild(container);
         topCap.remove();
         botCap.remove();
        });
    });
});
