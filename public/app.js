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
        document.getElementById("passive_img").src = champion_details.image.sprite;
        document.getElementById("passive_name").textContent = champion_details.passive.name;
        document.getElementById("passive_description").textContent = champion_details.passive.description;
        document.getElementById("ability_1_img").src = champion_details.spells[0].image.sprite;
        document.getElementById("ability_1_name").textContent = champion_details.spells[0].name;
        document.getElementById("abiltiy_1_description").textContent = champion_details.spells[0].tooltip;
        document.getElementById("ability_2_img").src = champion_details.spells[1].image.sprite;
        document.getElementById("ability_2_name").textContent = champion_details.spells[1].name;
        document.getElementById("abiltiy_2_description").textContent = champion_details.spells[1].tooltip;
        document.getElementById("ability_3_img").src = champion_details.spells[2].image.sprite;
        document.getElementById("ability_3_name").textContent = champion_details.spells[2].name;
        document.getElementById("abiltiy_3_description").textContent = champion_details.spells[2].tooltip;
        document.getElementById("ability_4_img").src = champion_details.spells[3].image.spritel;
        document.getElementById("ability_4_name").textContent = champion_details.spells[3].name;
        document.getElementById("abiltiy_4_description").textContent = champion_details.spells[3].tooltip;
        details.classList.remove("hidden");
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("champion").addEventListener("keypress", (e) => {
    if (e.key === "Enter"){
        loadChampion();
    }
});

document.getElementById("championForm").addEventListener('submit', loadChampion())