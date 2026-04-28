async function loadChampion(){
    const championSelector = document.getElementById("champion").value;
    const details = document.getElementById("champion_details");

    try {
        details.classList.add("hidden");
        const response = await fetch(`/champion/${championSelector}.json`);
        if (!response.ok){
            throw new Error("champion not found");
        }
        const champion_details = await response.json();
        document.getElementById("champion_portrait").src = `https://ddragon.leagueoflegends.com/cdn/16.8.1/img/champion/${championSelector}.png`;
        document.getElementById("championName").textContent = champion_details.name;
        //champ passive
        const championPassive = champion_details.data[championSelector].passive.image.full;
        document.getElementById("passive_img").src = `https://ddragon.leagueoflegends.com/cdn/16.8.1/img/passive/${championPassive}`;
        document.getElementById("passive_name").textContent = champion_details.data[championSelector].passive.name;
        document.getElementById("passive_description").textContent = champion_details.data[championSelector].passive.description;
        //champ ability 1
        const championAbility_1 = champion_details.data[championSelector].spells[0].image.full;
        document.getElementById("ability_1_img").src = `https://ddragon.leagueoflegends.com/cdn/16.8.1/img/spell/${championAbility_1}`;
        document.getElementById("ability_1_name").textContent = champion_details.data[championSelector].spells[0].name;
        document.getElementById("ability_1_description").textContent = champion_details.data[championSelector].spells[0].description;
        //champ ability 2
        const championAbility_2 = champion_details.data[championSelector].spells[1].image.full;
        document.getElementById("ability_2_img").src = `https://ddragon.leagueoflegends.com/cdn/16.8.1/img/spell/${championAbility_2}`;
        document.getElementById("ability_2_name").textContent = champion_details.data[championSelector].spells[1].name;
        document.getElementById("ability_2_description").textContent = champion_details.data[championSelector].spells[1].description;
        //champ ability 3
        const championAbility_3 = champion_details.data[championSelector].spells[2].image.full;
        document.getElementById("ability_3_img").src = `https://ddragon.leagueoflegends.com/cdn/16.8.1/img/spell/${championAbility_3}`;
        document.getElementById("ability_3_name").textContent = champion_details.data[championSelector].spells[2].name;
        document.getElementById("ability_3_description").textContent = champion_details.data[championSelector].spells[2].description;
        //champ ability 4
        const championAbility_4 = champion_details.data[championSelector].spells[3].image.full;
        document.getElementById("ability_4_img").src = `https://ddragon.leagueoflegends.com/cdn/16.8.1/img/spell/${championAbility_4}`;
        document.getElementById("ability_4_name").textContent = champion_details.data[championSelector].spells[3].name;
        document.getElementById("ability_4_description").textContent = champion_details.data[championSelector].spells[3].description;
        //remove the hidden tag
        details.classList.remove("hidden");
    } catch (error) {
        console.log(error);
    }
}

//document.getElementById("champion").addEventListener("keypress", (e) => {
//    if (e.key === "Enter"){
//       loadChampion();
//    }
//});

document.getElementById("championForm").addEventListener('submit', (e) => {
    e.preventDefault();
    loadChampion();
})