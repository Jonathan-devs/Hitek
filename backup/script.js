
const search_index = {
    "kontorpakke": document.getElementById("kontorpakke"),
    "gamingpakke": document.getElementById("gamingpakke"),
    "podkastpakke": document.getElementById("podkastpakke")
};
function search(search_value) {
    let pakke = [];
    for(let i in search_index){
        if(i.includes(search_value.toLowerCase())){

            pakke.push(i);
        }
        console.log(pakke);
    }
}