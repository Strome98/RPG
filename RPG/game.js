let stats = {
    "life": 1000,
    "mana": 500,
    "armor": 30,
    "magicresist": 30,
    "experience": 0 
}

let available_points = 0;

let lvl = 0;

let lvl_description = [
    ["A szurdok leggyengébb zsoldosa vagy!", "Zed_0.jpg"],
    ["Kiváló vagy a párbajokban!","Zed_1.jpg"],
    ["A csapatharcok megfordítója vagy!","Zed_2.jpg"],
    ["Splitpush 1v9 GG EZ NOOBS", "Zed_3.jpg"]
];

let profile_stats = {
    "pics": document.getElementById("profile_pics"),
    "description": document.getElementById("description"),
    "life": document.getElementById("profile_life"),
    "mana": document.getElementById("profile_mana"),
    "armor": document.getElementById("profile_armor"),
    "magicresist": document.getElementById("profile_magicresist"),
    "experience": document.getElementById("profile_experience"),
    "next_level": document.getElementById("next_lvl")
}

function refreshProfileStats(){
    profile_stats.pics.src = lvl_description[lvl][1]
    profile_stats.life.innerHTML = stats.life;
    profile_stats.mana.innerHTML = stats.mana;
    profile_stats.armor.innerHTML = stats.armor;
    profile_stats.magicresist.innerHTML = stats.magicresist;
    profile_stats.experience.innerHTML = stats.experience;
    profile_stats.description.innerHTML = lvl_description[lvl][0];
    profile_stats.next_level.innerHTML = 10;
    display_addBtns();
}

refreshProfileStats();

function update_mana(){
    if(available_points > 0){
        available_points--;
        stats.mana += 10;
        refreshProfileStats();
    }
}
function update_armor(){
    if(available_points > 0){
        available_points--;
        stats.armor += 1;
        refreshProfileStats();
    }
}
function update_magicresist(){
    if(available_points > 0){
        available_points--;
        stats.magicresist += 1;
        refreshProfileStats();
    }
}

function display_addBtns(){
    let btns = document.getElementsByClassName("addButtons");
    if(available_points > 0){
        for (let i = 0; i < btns.length; i++) {
            const element = btns[i];
            element.style.display="inline";
        }
    } else{
        for (let i = 0; i < btns.length; i++) {
            const element = btns[i];
            element.style.display="none";
        }
    }
}

function lvl_up(){
    if(lvl < lvl_description.length - 1){
        available_points += 10;
        lvl++;
        refreshProfileStats();
    }
}