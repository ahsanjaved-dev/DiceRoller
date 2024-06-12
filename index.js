function rolldice(){
    const numOfdice = document.getElementById("numOfdice").value;
    const Diceresult = document.getElementById("Diceresult");
    const Diceimages = document.getElementById("Diceimages");      
    const values = [];
    const images = [];

    for (let i =0 ; i < numOfdice; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_imgs/${value}.png">`);
      
    }
    Diceresult.textContent =  `Dice : ${values.join(", ")} `;
    Diceimages.innerHTML = images.join("")
   
}