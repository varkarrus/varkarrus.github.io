function addRace(_name,_height,_weight,_hashair,_haslegs,_hashorns,_randweight){
	races.push({
name:_name,
height:_height,
weight:_weight,
hashair:_hashair,
hashorns:_hashorns,
haslegs:_haslegs,
	randweight:_randweight});	
}
function getArrayRandom(array) {
  var arrayweight = 0;
  for (var i = 0; i < array.length; i++) {
    arrayweight += array[i].randweight;
  }

  var arrayvalue = Math.random() * arrayweight;

  for (var i = 0; i < array.length; i++) {
    arrayvalue -= array[i].randweight;

    if (arrayvalue < 0) {
      return array[i];
    }
  }
}

function getArrayRandomUnnatural(array) {
  var arrayweight = 0;
  for (var i = 0; i < array.length; i++) {
	  if(unnatural==true||array[i].unnatural==false){
    arrayweight += array[i].randweight;
	  }
  }

  var arrayvalue = Math.random() * arrayweight;

  for (var i = 0; i < array.length; i++) {
	  	  if(unnatural==true||array[i].unnatural==false){
    arrayvalue -= array[i].randweight;
		  }
    if (arrayvalue < 0) {
      return array[i];
    }
  }
}


function getRandom(array){
	return array[Math.floor(Math.random() * array.length)]

}

function randomRange(minmult,maxmult){
	var value = Math.random()*(maxmult-minmult);
	return value+minmult;
}

function loadRaces() {

	addRace("human",66,134,true,true,false,0);
	addRace("elf",70,135,true,true,false,1);
	addRace("dwarf",54,105,true,true,false,1);
	addRace("orc",70,180,true,true,false,1);
	addRace("fairy",3,0.0122,true,true,false,1);
	addRace("clone of hollywood superstar Nicholas Cage",72,150,true,true,false,0.025);
	addRace("cyclops",267,8580,true,true,false,0.5);
	addRace("troll",113,632,true,true,true,0.5);
	addRace("gnome",41,40,true,true,false,1);
	addRace("catfolk",66,134,true,true,false,0.5);
	addRace("wolffolk",66,134,true,true,false,0.5);
	addRace("merfolk",78,154,true,false,false,0.5);
	addRace("octofolk",66,154,true,false,false,0.2);
	addRace("harpy",65,124,true,true,false,0.5);
	addRace("centaur",80,1160,true,true,false,0.5);
	addRace("dullahan",66,134,true,true,false,0.5);
	addRace("drider",78,250,true,true,false,0.2);
	addRace("angel",66,144,true,true,false,0.5);
	addRace("reaper",66,64,true,true,false,0.2);
	addRace("demon",70,180,true,true,true,1);
	addRace("oni",90,314,true,true,true,0.5);
	addRace("alien",66,134,true,true,false,0.5);
	addRace("robot",66,154,false,true,false,0.5);
	addRace("golem",66,194,false,true,false,0.5);
	addRace("deep one",66,134,true,true,false,0.2);
	addRace("mothman",66,114,true,true,false,0.5);
	addRace("dragonfolk",76,185,true,true,true,0.5);
	addRace("giant",315,14378,true,true,false,0.5);
	addRace("titan",660,130000,true,true,false,0.2);
	addRace("kitsune",66,134,true,true,false,0.5);
	addRace("ettin",182,2860,true,true,false,0.5);
	addRace("homunculus",12,2,true,true,false,0.2);
	addRace("gorgon",66,134,true,false,false,0.5);
	addRace("lizardfolk",66,134,false,true,false,0.5);
	addRace("naga",92,1543,true,true,false,0.5); //276 inches long
	addRace("imp",41,40,true,true,true,0.5);
	addRace("bearfolk",76,185,true,true,false,0.5);
	addRace("dryad",63,124,true,true,false,0.5);
	addRace("naiad",63,124,true,true,false,0.5);
	addRace("sylph",63,8.5,true,true,false,0.5);
	addRace("alraune",66,234,true,false,false,0.5);
	addRace("slime",66,134,true,true,false,0.5);
	addRace("goblin",41,40,true,true,false,1);
	addRace("tardigradefolk",66,160,true,false,false,0.2);
	addRace("futakuchi-onna",66,130,true,true,false,0.5);
	addRace("yuki-onna",66,130,true,true,false,0.5);
	addRace("hyakume",70,180,true,true,false,0.5);
	addRace("foocubus",66,134,true,true,false,0.5);
	addRace("globglogabgalab",66,300,false,false,false,0.025);
	addRace("tiefling",70,135,true,true,true,1);
	addRace("moleman",41,40,true,true,false,0.2);
	addRace("ogre",96,520,true,true,true,0.75);
}
function generateHair(includeBald){

	var hairs = ["short hair","long hair","curly hair","afro","ponytail","undercut","mohawk"]
	if(includeBald){
		hairs.push("bald","shaved hair");
	}
	if(Math.random()*100>60 && unnatural==true)
	{
		
		hairs.push("tentacle hair","prehensile hair","flaming hair","crystalline hair","spikes for hair");
	}
	hair = getRandom(hairs);
	
	if (hair!="bald" && hair!="shaved hair"){
	var colors = ["red", "green", "blue", "pink", "black", "silver", "white", "purple"]
	var color1 = getRandom(colors);
	var color2;
	do {color2 = getRandom(colors);}while(color2==color1);
	var value = Math.random()*100
	if (value>95){hair+= " dyed "+color1+" and "+color2;}
	else if(value>85){hair+=" dyed "+color1;}
	}
	return hair;
}
function loadHeightWeightTypes(){
	heighttypes.push({name:"",minmult:0.97,maxmult:1.03,randweight:2,unnatural:false});
	heighttypes.push({name:"short",minmult:0.93,maxmult:0.97,randweight:0.8,unnatural:false});
	heighttypes.push({name:"very short",minmult:0.80,maxmult:0.93,randweight:0.4,unnatural:false});
	heighttypes.push({name:"tall",minmult:1.03,maxmult:1.10,randweight:0.8,unnatural:false});
	heighttypes.push({name:"very tall",minmult:1.10,maxmult:1.3,randweight:0.4,unnatural:false});
	heighttypes.push({name:"unnaturally short",minmult:0.2,maxmult:0.8,randweight:0.35,unnatural:true});
	heighttypes.push({name:"unnaturally tall",minmult:1.3,maxmult:1.85,randweight:0.35,unnatural:true});
	heighttypes.push({name:"miniscule",minmult:0,maxmult:randomRange(0,0.2),randweight:0.2,unnatural:true});
	heighttypes.push({name:"colossal",minmult:1.85,maxmult:10,randweight:0.2,unnatural:true});
	
	
	weighttypes.push({name:"",minmult:0.94,maxmult:1.06,randweight:3,unnatural:false});
	weighttypes.push({name:"chubby",minmult:1.06,maxmult:1.12,randweight:0.8,unnatural:false});
	weighttypes.push({name:"fat",minmult:1.12,maxmult:1.24,randweight:0.4,unnatural:false});	
	weighttypes.push({name:"toned",minmult:1.06,maxmult:1.12,randweight:0.8,unnatural:false});
	weighttypes.push({name:"muscular",minmult:1.12,maxmult:1.24,randweight:0.4,unnatural:false});	
	weighttypes.push({name:"obese",minmult:1.24,maxmult:1.5,randweight:0.4,unnatural:false});
	weighttypes.push({name:"thin",minmult:0.88,maxmult:0.94,randweight:1.6,unnatural:false});
	weighttypes.push({name:"very thin",minmult:0.74,maxmult:0.88,randweight:0.5,unnatural:false});
}

function loadFeatures(){
	features.push({name:getRandom(["facial scar","scars","heavily scarred","burn marks","lightning scars"]),randweight:1,vis:1,unnatural:false});
	features.push({name:getRandom(["old","young"]),randweight:2,vis:0,unnatural:false});
	if(race.haslegs==true){
	features.push({name:getRandom(["missing arm","missing leg","uses a wheelchair","uses a cane"]),randweight:0.2,vis:0,unnatural:false});}
	else{
		features.push({name:"missing arm",randweight:1,vis:0,unnatural:false});
	}
	features.push({name:"missing a head",randweight:0.3,vis:0,unnatural:true});
	features.push({name:"extra arms",randweight:0.75,vis:0,unnatural:true});
	features.push({name:getRandom(["shoulder tattoo","face tattoo","tattoo sleeve","back tattoo"]),randweight:1,vis:1,unnatural:false});
	features.push({name:getRandom(["prosthetic arm","prosthetic leg"]),randweight:0.3,vis:0,unnatural:false});
	features.push({name:getRandom(["albino","vitiligo","freckled"]),randweight:1,vis:1,unnatural:false});
	features.push({name:getRandom(["glasses","sunglasses"]),randweight:1,vis:0,unnatural:false});
	features.push({name:getRandom(["blind","deaf","missing an eye","mute"]),randweight:0.3,vis:0,unnatural:false});
	features.push({name:getRandom(["multiple piercings","pierced lip","earrings","nose ring","tongue piercing"]),randweight:1,vis:1,unnatural:false});
	features.push({name:"heavy makeup",randweight:1,vis:1,unnatural:false});
	features.push({name:"invisible",randweight:0.75,vis:-1,unnatural:true});
	features.push({name:getRandom(["dresses fancy","dresses punk","dresses goth","does not wear a shirt","wears armor"]),randweight:2,vis:0,unnatural:false});
	features.push({name:"heterochromia",randweight:0.6,vis:1,unnatural:false});
	features.push({name:getRandom(["completely hairless","hairy"]),randweight:0.6,vis:0,unnatural:false});
	features.push({name:"androgynous",randweight:1,vis:1,unnatural:false});
	features.push({name:"mouth stomach",randweight:0.5,vis:0,unnatural:true});
	features.push({name:"large claws",randweight:1,vis:0,unnatural:true});
	if(race.hashorns==false){
	features.push({name:getRandom(["big horns","small horns","curly horns","four horns"]),randweight:0.75,vis:0,unnatural:true});}
	else{
	features.push({name:getRandom(["missing horn","big horns","small horns","curly horns","four horns"]),randweight:4,vis:0,unnatural:false});
	}
	if(race.name.includes("cyclops")==false){
		features.push({name:"extra eye",randweight:0.5,vis:0,unnatural:true})
		features.push({name:"glowing eyes",randweight:0.5,vis:1,unnatural:true})
		}
		else{
			features.push({name:"glowing eye",randweight:0.5,vis:1,unnatural:true})
		}
	features.push({name:"glowing skin",randweight:0.6,vis:1,unnatural:true})
	features.push({name:getRandom([""]),randweight:0.6,vis:0,unnatural:false})
}

function loadAddedDetails(){
	details.push({name:"magic user",randweight:1,unnatural:true,combat:true});
	details.push({name:"cyborg",randweight:0.8,unnatural:false,combat:false});
	details.push({name:"ghost",randweight:0.8,unnatural:false,combat:false});
	details.push({name:"undead",randweight:0.8,unnatural:false,combat:false});
	details.push({name:"lich",randweight:0.2,unnatural:false,combat:true});
	details.push({name:"vampire",randweight:0.5,unnatural:false,combat:true});
	details.push({name:"psionic",randweight:0.2,unnatural:false,combat:true});
	details.push({name:"mutant",randweight:0.8,unnatural:true,combat:false});
	details.push({name:"genetic experiment",randweight:0.2,unnatural:false,combat:true});
	details.push({name:"cursed",randweight:0.4,unnatural:true,combat:false});
	details.push({name:"has a demon pact",randweight:0.4,unnatural:true,combat:false});
	details.push({name:"immortal",randweight:0.4,unnatural:false,combat:false});
	details.push({name:"demigod",randweight:0.2,unnatural:true,combat:true});
	details.push({name:"clairvoyant",randweight:0.2,unnatural:false,combat:false});
	details.push({name:"possessed",randweight:0.2,unnatural:true,combat:false});
	details.push({name:"famous",randweight:1,unnatural:false,combat:false});
	details.push({name:"royalty",randweight:1,unnatural:false,combat:false});
	details.push({name:"superpowered",randweight:1,unnatural:true,combat:true});
	details.push({name:"infested",randweight:0.2,unnatural:true,combat:true});
}

function loadJobs(){
	
	jobs.push({name:"soldier",randweight:1,combat:true});
	jobs.push({name:"mercenary",randweight:1,combat:true});
	jobs.push({name:"doctor",randweight:1,combat:false});
	jobs.push({name:"accountant",randweight:0.3,combat:false});
	jobs.push({name:"dentist",randweight:0.3,combat:false});
	jobs.push({name:"therapist",randweight:0.3,combat:false});
	jobs.push({name:"zoologist",randweight:0.3,combat:false});
	jobs.push({name:"web developer",randweight:1,combat:false});
	jobs.push({name:"programmer",randweight:1,combat:false});
	jobs.push({name:"video game designer",randweight:1,combat:false});
	jobs.push({name:"farmer",randweight:1,combat:false});
	jobs.push({name:"blacksmith",randweight:0.3,combat:false});
	jobs.push({name:"weapons dealer",randweight:0.3,combat:false});
	jobs.push({name:"automechanic",randweight:0.3,combat:false});
	jobs.push({name:"criminal",randweight:1,combat:false});
	jobs.push({name:"hitman",randweight:0.3,combat:false});
	jobs.push({name:"police officer",randweight:1,combat:true});
	jobs.push({name:"detective",randweight:0.3,combat:false});
	jobs.push({name:"journalist",randweight:1,combat:false});
	jobs.push({name:"paralegal",randweight:0.3,combat:false});
	jobs.push({name:"nurse",randweight:1,combat:false});
	jobs.push({name:"teacher",randweight:1,combat:false});
	jobs.push({name:"miner",randweight:0.3,combat:false});
	jobs.push({name:"architect",randweight:0.3,combat:false});
	jobs.push({name:"bartender",randweight:1,combat:false});
	jobs.push({name:"waiter",randweight:1,combat:false});
	jobs.push({name:"plumber",randweight:0.3,combat:false});
	jobs.push({name:"construction worker",randweight:0.3,combat:false});
	jobs.push({name:"hunter",randweight:1,combat:true});
	jobs.push({name:"gladiator",randweight:1,combat:true});
	jobs.push({name:"NEET",randweight:0.1,combat:false});
	jobs.push({name:"judge",randweight:0.3,combat:false});
	jobs.push({name:"lawyer",randweight:1,combat:false});
	jobs.push({name:"biostatistician",randweight:0.1,combat:false}); //hi mom
	jobs.push({name:"comedian",randweight:1,combat:false});
	jobs.push({name:"convenience store clerk",randweight:0.3,combat:false});
	jobs.push({name:"astronaut",randweight:0.3,combat:false});
	jobs.push({name:"librarian",randweight:1,combat:false});
	jobs.push({name:"barista",randweight:1,combat:false});
	jobs.push({name:"news reporter",randweight:0.3,combat:false});
	jobs.push({name:"model",randweight:0.3,combat:false});
	jobs.push({name:"college student",randweight:1.5,combat:false});
	jobs.push({name:"university student",randweight:1.5,combat:false});
	jobs.push({name:"innkeeper",randweight:1,combat:false});
	jobs.push({name:"shopkeeper",randweight:1,combat:false});
	jobs.push({name:"priest",randweight:1,combat:true});
	jobs.push({name:"fireman",randweight:0.3,combat:false});
	jobs.push({name:"pirate",randweight:0.3,combat:true});
	jobs.push({name:"minecraft youtuber",randweight:0.1,combat:false});
	
	if(featurestring.includes("old")){
		jobs.push({name:"pensioner",randweight:6,combat:false});
	}
	
}

function loadHobbies(){
	hobbies.push({name:"writing",randweight:1,combat:false,jobname:"writer"});
	hobbies.push({name:"serial killing",randweight:0.3,combat:true,jobname:"serial killer"});
	hobbies.push({name:"art",randweight:1,combat:false,jobname:"artist"});
	hobbies.push({name:"indie game developing",randweight:1,combat:false,jobname:"indie game developer"});
	hobbies.push({name:"athletics",randweight:1,combat:false,jobname:"athlete"});
	hobbies.push({name:"vigilante justice",randweight:1,combat:true,jobname:"vigilante"});
	hobbies.push({name:"playing music",randweight:1,combat:false,jobname:"musician"});
	hobbies.push({name:"photography",randweight:1,combat:false,jobname:"photographer"});
	hobbies.push({name:"cooking",randweight:1,combat:false,jobname:"chef"});
	hobbies.push({name:"engineering",randweight:1,combat:false,jobname:"engineer"});
	hobbies.push({name:"dancing",randweight:1,combat:false,jobname:"dancer"});
	hobbies.push({name:"fishing",randweight:0.3,combat:false,jobname:"fisherman"});
	hobbies.push({name:"science",randweight:1,combat:false,jobname:"scientist"});
	hobbies.push({name:"history",randweight:1,combat:false,jobname:"historian"});
	
	hobbies.push({name:"model trains",randweight:0.3,combat:false,jobname:""});
	hobbies.push({name:"video games",randweight:1,combat:false,jobname:""});
	hobbies.push({name:"anime",randweight:1,combat:false,jobname:""});
	hobbies.push({name:"relaxing",randweight:1,combat:false,jobname:""});
	hobbies.push({name:"hiking",randweight:1,combat:false,jobname:""});
	hobbies.push({name:"gardening",randweight:1,combat:false,jobname:""});
	hobbies.push({name:"reading",randweight:1,combat:false,jobname:""});
	hobbies.push({name:"tinkering",randweight:1,combat:false,jobname:""});
	hobbies.push({name:"relaxing",randweight:1,combat:false,jobname:""});
	hobbies.push({name:"homestuck",randweight:0.05,combat:false,jobname:""});
	hobbies.push({name:"memes",randweight:0.3,combat:false,jobname:""});
	hobbies.push({name:"jogging",randweight:1,combat:false,jobname:""});
	hobbies.push({name:"camping",randweight:1,combat:false,jobname:""});
	hobbies.push({name:"fishing",randweight:0.3,combat:false,jobname:""});
	hobbies.push({name:"meeting new people",randweight:0.3,combat:false,jobname:""});
	hobbies.push({name:"partying",randweight:0.3,combat:false,jobname:""});
	hobbies.push({name:"seeking vengeance",randweight:1,combat:true,jobname:""});
	hobbies.push({name:"cartoons",randweight:1,combat:false,jobname:""});
	hobbies.push({name:"sports",randweight:1,combat:false,jobname:""});
	
}

function loadTraits(){
	
	traits.push({name1:"kind",name2:"mean",randweight:1})
	traits.push({name1:"outgoing",name2:"shy",randweight:1})
	traits.push({name1:"generous",name2:"selfish",randweight:1})
	traits.push({name1:"peaceful",name2:"violent",randweight:1})
	traits.push({name1:"smart",name2:"dumb",randweight:1})
	traits.push({name1:"warm",name2:"cold",randweight:1})
	traits.push({name1:"funny",name2:"humorless",randweight:1})
	traits.push({name1:"emotional",name2:"stoic",randweight:1})
	traits.push({name1:"",name2:"sarcastic",randweight:1})
	traits.push({name1:"responsible",name2:"flighty",randweight:1})
	traits.push({name1:"",name2:"mercurial",randweight:1})
	traits.push({name1:"level-headed",name2:"",randweight:1})
	traits.push({name1:"calm",name2:"anxious",randweight:1})
	traits.push({name1:"brave",name2:"cowardly",randweight:1})
	traits.push({name1:"charismatic",name2:"awkward",randweight:1})
	traits.push({name1:"",name2:"nerdy",randweight:1})
	traits.push({name1:"logical",name2:"superstitious",randweight:1})
	traits.push({name1:"perceptive",name2:"naive",randweight:1})
	traits.push({name1:"trusting",name2:"distrustful",randweight:1})
	traits.push({name1:"loyal",name2:"untrustworthy",randweight:1})
	traits.push({name1:"romantic",name2:"indifferent",randweight:1})
	if(young==false){traits.push({name1:"flirty",name2:"chaste",randweight:1})}
	traits.push({name1:"joyful",name2:"depressed",randweight:1})
}

function loadCombat(){
	weapons.push({name:getRandom(["a pistol","two pistols"]),randweight:2})
	weapons.push({name:getRandom(["a sword","two swords","a two-handed sword"]),randweight:2})
	weapons.push({name:getRandom(["a handaxe","two handaxes","a battleaxe"]),randweight:0.5})
	weapons.push({name:"a shovel",randweight:0.2})
	weapons.push({name:"a scythe",randweight:0.2})
	weapons.push({name:getRandom(["a crossbow","two crossbows"]),randweight:1})
	weapons.push({name:getRandom(["a shortbow","a longbow"]),randweight:0.5})
	weapons.push({name:getRandom(["a knife","two knives","throwing knives"]),randweight:1})
	weapons.push({name:"a rapier",randweight:0.5})
	weapons.push({name:"a shotgun",randweight:0.5})
	weapons.push({name:"an assault rifle",randweight:0.5})
	weapons.push({name:"a rocket launcher",randweight:0.2})
	weapons.push({name:"a sniper rifle",randweight:0.5})
	weapons.push({name:"a rapier",randweight:0.5})
	weapons.push({name:"a railgun",randweight:0.2})
	weapons.push({name:getRandom(["a meteor hammer","a rope dart"]),randweight:1})
	weapons.push({name:"martial arts",randweight:2})
	weapons.push({name:"a laser gun",randweight:0.5})
	weapons.push({name:getRandom(["a katana","an odachi","a naginata","a wakizashi"]),randweight:1})
	weapons.push({name:getRandom(["a spear","a polearm","a javelin"]),randweight:0.5})
	weapons.push({name:getRandom(["a hammer","a warhammer","a club"]),randweight:0.5})
	weapons.push({name:"a shield",randweight:0.5})
	
	if(featurestring.includes("magic user")){
	weapons.push({name:getRandom(["a staff","a wand"]),randweight:10})
	abilities.push({name:"fire magic",randweight:1})
	abilities.push({name:"ice magic",randweight:1})
	abilities.push({name:"earth magic",randweight:1})
	abilities.push({name:"air magic",randweight:1})
	abilities.push({name:"lightning magic",randweight:1})
	abilities.push({name:"dark magic",randweight:1})
	abilities.push({name:"blood magic",randweight:0.5})
	abilities.push({name:"holy magic",randweight:1})
	abilities.push({name:"poison magic",randweight:0.5})
	abilities.push({name:"sound magic",randweight:0.5})
	abilities.push({name:"chaos magic",randweight:0.5})
	abilities.push({name:"illusion magic",randweight:0.5})
	abilities.push({name:"time magic",randweight:0.5})
	abilities.push({name:"space magic",randweight:0.5})
	}
	if(featurestring.includes("cyborg")){
		weapons.push({name:"an arm laser",randweight:2})
		weapons.push({name:"a shoulder mounted rocket launcher",randweight:2})
	}
	if(featurestring.includes("ghost")){
		abilities.push({name:"possession",randweight:1})
		abilities.push({name:"telekinesis",randweight:1})
		abilities.push({name:"invisibility",randweight:1})
		abilities.push({name:"life drain",randweight:0.5})
	}
	if(featurestring.includes("undead")){
		abilities.push({name:"unholy strength",randweight:1})
		abilities.push({name:"unholy constitution",randweight:1})
		abilities.push({name:"life drain",randweight:0.5})
	}
	if(featurestring.includes("lich")){
	weapons.push({name:getRandom(["a staff","a wand"]),randweight:10})
	abilities.push({name:"fire magic",randweight:1})
	abilities.push({name:"ice magic",randweight:1})
	abilities.push({name:"earth magic",randweight:1})
	abilities.push({name:"air magic",randweight:1})
	abilities.push({name:"lightning magic",randweight:1})
	abilities.push({name:"dark magic",randweight:1})
	abilities.push({name:"blood magic",randweight:0.5})
	abilities.push({name:"holy magic",randweight:0.1})
	abilities.push({name:"poison magic",randweight:0.5})
	abilities.push({name:"sound magic",randweight:0.5})
	abilities.push({name:"chaos magic",randweight:0.5})
	abilities.push({name:"illusion magic",randweight:0.5})
	abilities.push({name:"time magic",randweight:0.5})
	abilities.push({name:"space magic",randweight:0.5})
	abilities.push({name:"unholy strength",randweight:3})
	abilities.push({name:"unholy constitution",randweight:3})
	abilities.push({name:"possession",randweight:1})
	abilities.push({name:"telekinesis",randweight:1})
	abilities.push({name:"life drain",randweight:3})
	}
	if(featurestring.includes("vampire")){
	abilities.push({name:"telekinesis",randweight:1})
	abilities.push({name:"hypnosis",randweight:1})
	abilities.push({name:"time stop",randweight:0.5})
	abilities.push({name:"life drain",randweight:3})
	abilities.push({name:"dark magic",randweight:0.5})
	abilities.push({name:"blood magic",randweight:0.5})
	abilities.push({name:"illusion magic",randweight:0.2})
	abilities.push({name:getRandom(["turning into a bat","turning into a wolf","turning into mist"]),randweight:4})
	}
	if(featurestring.includes("psionic")){
		abilities.push({name:"telekinesis",randweight:4})
		abilities.push({name:"clairvoyance",randweight:2})
		abilities.push({name:"mind control",randweight:4})
		abilities.push({name:"pyrokinesis",randweight:1})
		abilities.push({name:"time stop",randweight:0.2})
		abilities.push({name:"psychic strength",randweight:1})
		abilities.push({name:"empathy",randweight:1})
		abilities.push({name:"future vision",randweight:1})
		abilities.push({name:"hypnosis",randweight:1})
		abilities.push({name:"spoon bending",randweight:0.2})
		abilities.push({name:"enhanced perception",randweight:1})
		abilities.push({name:"reality warping",randweight:0.5})
		abilities.push({name:"planeshifting",randweight:1})
	}
	if(featurestring.includes("mutant")){
		abilities.push({name:"rapid healing",randweight:3})
		abilities.push({name:"mutant strength",randweight:4})
		abilities.push({name:"mutant speed",randweight:4})
		abilities.push({name:"invulnerability",randweight:1})
		abilities.push({name:"camoflauge",randweight:1})
		abilities.push({name:"sizeshifting",randweight:0.3})
		abilities.push({name:"shapeshifting",randweight:1})
		abilities.push({name:"teleportation",randweight:1})
		abilities.push({name:"berserk rage",randweight:1})
	}
	if(featurestring.includes("genetic experiment")){
		abilities.push({name:"enhanced strength",randweight:2})
		abilities.push({name:"enhanced speed",randweight:2})
		abilities.push({name:"rapid healing",randweight:1})
		abilities.push({name:"enhanced perception",randweight:1})
		abilities.push({name:"invulnerability",randweight:1})
		abilities.push({name:"rapid thought",randweight:1})
		abilities.push({name:"berserk rage",randweight:1})
	}
	if(featurestring.includes("cursed") && Math.random()*100>70){
		abilities.push({name:"life drain",randweight:1})
		abilities.push({name:"killing touch",randweight:1})
		abilities.push({name:"turning into a wolf",randweight:1})
		abilities.push({name:"cursed strength",randweight:1})
		abilities.push({name:"berserk rage",randweight:2})
		abilities.push({name:"rapid regeneration",randweight:1})
	}
	if(featurestring.includes("has a demon pact")){
		abilities.push({name:"supernatural charisma",randweight:5})
		abilities.push({name:"demonic strength",randweight:5})
		abilities.push({name:"demonic speed",randweight:5})
		abilities.push({name:"rapid regeneration",randweight:5})
		abilities.push({name:"fire magic",randweight:1})
		abilities.push({name:"ice magic",randweight:1})
		abilities.push({name:"lightning magic",randweight:1})
		abilities.push({name:"dark magic",randweight:1})
		abilities.push({name:"blood magic",randweight:0.5})
		abilities.push({name:"chaos magic",randweight:0.5})
	}
	if(featurestring.includes("immortal")){
		if(Math.random()*100>50){
		abilities.push({name:"rapid regeneration",randweight:1})}
		else{
		abilities.push({name:"invulnerability",randweight:1})
		}
	}
	if(featurestring.includes("demigod")){
		abilities.push({name:"reality warping",randweight:1})
		abilities.push({name:"divine voice",randweight:1})
		abilities.push({name:"planeshifting",randweight:1})
		abilities.push({name:"holy magic",randweight:1})
		abilities.push({name:"dark magic",randweight:1})
		abilities.push({name:"invulnerability",randweight:1})
		abilities.push({name:"rapid regeneration",randweight:1})
		abilities.push({name:"superhuman strength",randweight:4})
		abilities.push({name:"superhuman speed",randweight:4})
		abilities.push({name:"invulnerability",randweight:1})
	}
	if(featurestring.includes("clairvoyant")){
		abilities.push({name:"clairvoyance",randweight:2})
	}
	if(featurestring.includes("possessed")){
		abilities.push({name:"levitation",randweight:1})
		abilities.push({name:"cursed strength",randweight:1})
		abilities.push({name:"cursed speed",randweight:1})
		abilities.push({name:"berserk rage",randweight:1})
		abilities.push({name:"life drain",randweight:1})
	}
	
	if(featurestring.includes("superpowered")){
		abilities.push({name:"super strength",randweight:5})
		abilities.push({name:"levitation",randweight:5})
		abilities.push({name:"super speed",randweight:2})
		abilities.push({name:"rapid regeneration",randweight:1})
		abilities.push({name:"energy beams",randweight:1})
		abilities.push({name:"teleportation",randweight:1})
		abilities.push({name:"mind control",randweight:1})
		abilities.push({name:"telekinesis",randweight:1})
		abilities.push({name:"pyrokinesis",randweight:1})
		abilities.push({name:"cryokinesis",randweight:1})
		abilities.push({name:"plant control",randweight:1})
		abilities.push({name:"invulnerability",randweight:4})
		abilities.push({name:"shapeshifting",randweight:1})
		abilities.push({name:"enhanced perception",randweight:1})
		abilities.push({name:"insect control",randweight:1})
		abilities.push({name:"invisibility",randweight:1})
	}
	if(featurestring.includes("infested")){
		abilities.push({name:"super strength",randweight:1})
		abilities.push({name:"insect control",randweight:1})
		abilities.push({name:"shapeshifting",randweight:1})
		abilities.push({name:"rapid regeneration",randweight:1})
		abilities.push({name:"berserk rage",randweight:1})
		abilities.push({name:"poison",randweight:1})
	}
	
		if(occupationstring.includes("farmer")||occupationstring.includes("garden")){
			weapons.push({name:"a hoe",randweight:2})
			weapons.push({name:"a rake",randweight:2})
			weapons.push({name:"",randweight:2})
		}
		if(occupationstring.includes("chef")||occupationstring.includes("cook")){
			weapons.push({name:"a frying pan",randweight:0.5})
			weapons.push({name:"cutlery",randweight:0.5})
			weapons.push({name:"a kitchen knife",randweight:0.5})
			weapons.push({name:"a rolling pin",randweight:0.5})
		}
		if(occupationstring.includes("scientist")||occupationstring.includes("science")){
			weapons.push({name:"an experimental gun",randweight:2})
		}
		
	if(race.name.includes("gorgon")){
	abilities.push({name:"petrification",randweight:10})
	}
	if(race.name.includes("cyclops") && Math.random()*100>50){
	abilities.push({name:"enhanced perception",randweight:10})
	abilities.push({name:"future vision",randweight:10})
	}
	if(race.name.includes("angel") && Math.random()*100>50){
		abilities.push({name:"holy magic",randweight:5})
		abilities.push({name:"angelic strength",randweight:5})
		abilities.push({name:"angelic speed",randweight:5})
	}
	if(race.name.includes("reaper")){
		weapons.push({name:"a scythe",randweight:10})
	}
	if(race.name.includes("demon")){
		abilities.push({name:"dark magic",randweight:5})
		abilities.push({name:"demonic strength",randweight:5})
		abilities.push({name:"demonic speed",randweight:5})
	}
	if(race.name.includes("oni")){
		weapons.push({name:"an oni club",randweight:3})
		if(Math.random()*100>70){
		abilities.push({name:"storm magic",randweight:5})
		}
	}
	if(race.name.includes("alien")){
		weapons.push({name:"a raygun",randweight:10})
	}
	if(race.name.includes("dragonfolk")&&Math.random()*100>60){
		abilities.push({name:getRandom(["fire breath","ice breath","lightning breath","acid breath","poison breath"]),randweight:2})
	}
	if(race.name.includes("kitsune")&&Math.random()*100>60){
		abilities.push({name:"illusion magic",randweight:3})
	}
	if(race.name.includes("dryad")&&Math.random()*100>80){
		abilities.push({name:"earth magic",randweight:1})
		abilities.push({name:"poison magic",randweight:0.2})
		abilities.push({name:"plant control",randweight:1})
		abilities.push({name:"camouflage",randweight:0.5})
	}
	if(race.name.includes("naiad")&&Math.random()*100>80){
		abilities.push({name:"water magic",randweight:1})
		abilities.push({name:"ice magic",randweight:0.2})
	}
	if(race.name.includes("sylph")&&Math.random()*100>80){
		abilities.push({name:"air magic",randweight:4})
		abilities.push({name:"lightning magic",randweight:1})
		abilities.push({name:"ice magic",randweight:1})
		abilities.push({name:"sound magic",randweight:0.2})
	}
	if(race.name.includes("alraune")&&Math.random()*100>60){
		abilities.push({name:"poison magic",randweight:0.2})
		abilities.push({name:"plant control",randweight:4})
		abilities.push({name:"camouflage",randweight:0.2})
	}
	if(race.name.includes("futakuchi-onna")&&Math.random()*100>50){
	weapons.push({name:"prehensile hair",randweight:5})
	}
	if(race.name.includes("yuki-onna")&&Math.random()*100>50){
	abilities.push({name:"ice magic",randweight:5})}
	
	if(race.name.includes("globglogabgalab")&&Math.random()*100>50){
	weapons.push({name:"shwibbly glib a kind",randweight:5})
	abilities.push({name:"yeast of thoughts and minds",randweight:5})
	}
	
		}

function substrCount(string, substr){
	var lastIndex = 0;
	var count = 0;

while (lastIndex != -1) {

    lastIndex = string.indexOf(substr, lastIndex);

    if (lastIndex != -1) {
        count++;
        lastIndex += substr.length;
    }
}
return count;
}
		
function listFixer(string){
	if(substrCount(string," and ")>1){
		do{
			string = string.replace(" and ",", ")
		}while(substrCount(string," and ")>1)
		string = string.replace(" and ",", and ")
	}
return string;
}

function generateRace(){
	if (Math.random() < 0.5) {
  race = races[0];
} else {
	
	if(Math.random()<0.8){
  race = getArrayRandom(races);
  
	}
	else{
		var race1 = getArrayRandom(races);
		var race2;
		if(Math.random()>0.75){
		do{race2 = getArrayRandom(races)}while(race2==race1)
		}else{race2 = races[0];}
	
		race.name = "half-"+race1.name; if(race2.name!="human"){race.name+=" half-"+race2.name}
		race.height = (race1.height+race2.height)/2
		race.weight = (race1.weight+race2.weight)/2
		race.haslegs = (race1.haslegs && race2.haslegs)
		race.hashair = (race1.hashair || race2.hashair)
		race.hashorns = (race1.hashorns || race2.hashorns)
	}
	
  };
	if (race.name.includes("demon")){unnatural=true;}
}

function generateCombat(){
	string=""
	if (combat==true || Math.random()*100>70){
		if(occupationstring.includes("grade schooler")==false && occupationstring.includes("preschooler")==false){
		string="uses "
		if(Math.random()*100>65 || abilities.length==0){
		
		if(Math.random()*100>70){
			var t1 = getArrayRandom(weapons)
			var t2 = getArrayRandom(weapons)
			do{t2 = getArrayRandom(weapons)}while(t2.name==t1.name)
			string+=" "+t1.name+" and "+t2.name
		}else{
			string+=" "+getArrayRandom(weapons).name
		}
			if(featurestring.includes("extra arms")){
			string=string.replace(/two/g,"four")
			}
		}
		if(abilities.length>0){
			var t3 = getArrayRandom(abilities)
			var t4 = null;
			abilities.splice(abilities.indexOf(t3),1);
			
			if(abilities.length>0){
			do{
				t4 = getArrayRandom(abilities)
				abilities.splice(abilities.indexOf(t4),1)
			}while(t4.name==t3.name || abilities.count > 0)
			
			}
			
			if(string=="uses "){string+=t3.name}else{string+=" and "+t3.name}
			if(t4!=null){
				string+=" and "+t4.name
			}
			
		}
		
		
	}
	}
	else{string="--"}
	return listFixer(string);
}
		
function generatePersonality(){
	var string = "is ";
	
	do{t = getArrayRandom(traits)}while(t.name1=="")
	string+=t.name1 + " but ";
	traits.splice(traits.indexOf(t),1);
	
	do{t = getArrayRandom(traits)}while(t.name2=="")
	string+=t.name2;

	return string;
}

function generateFeatures(){
	var string = ""
	var hair = ""
	var vis = 0;
	var addedDetail = ""
	var featurecount = Math.round(randomRange(1,2));
	if(Math.random()*100>60){
		var t = getArrayRandom(details)
		addedDetail=t.name
		unnatural=t.unnatural
		if(t.combat==true){combat=true}
		}
		if(race.name.includes("futakuchi-onna")==false){
	if(Math.random()*100>70 && race.hashair==true){featurecount--;hair=generateHair(true);}
		if(Math.random()*100>90 && race.hashair==false){featurecount--;hair=generateHair(false)+ " (wig)"}}
	
	for(i=0;i<featurecount;i++){
		
		do{
		var tempfeature = getArrayRandomUnnatural(features);}while(vis!=0 && tempfeature.vis!=0 && vis!=tempfeature.vis)
		if(tempfeature.vis!=0){vis=tempfeature.vis}
		if(tempfeature.name.includes("hair")==false || race.hashair==true){
		if(string!=""){string+=", ";}
		string+=tempfeature.name;
		if(tempfeature.name == "young"){young=true;}
		features.splice(features.indexOf(tempfeature),1);
		}else{i--;}
	}
	if(string.includes("hairless") && hair!=""){
		if(hair=="bald" || hair=="shaved hair"){hair==""}else{
		hair+=" (wig)";}
	}
	if (string.includes("invisible")==false && string.includes("missing a head")==false && hair!=""){
		if(string==""){string=hair}
		else{string = hair+", "+string;}
	}
	
	if(addedDetail!=""){
		string+=", "+addedDetail
	}
	
	return string;
}

function generateOccupation(){
	var string="";
	var jobtemp;
	var hobbytemp;
	if (Math.random()*100 > 60 || young==true){
	var JobHobbyList = [];
	if(young==false){
	for (var i =0;i<jobs.length;i++){
		JobHobbyList.push({name:jobs[i].name,combat:jobs[i].combat,randweight:jobs[i].randweight});
	}
	for (var i =0;i<hobbies.length;i++){
			if(hobbies[i].jobname!=""){
		JobHobbyList.push({name:hobbies[i].jobname,combat:hobbies[i].combat,randweight:hobbies[i].randweight});
		}
	}
			jobTemp = getArrayRandom(JobHobbyList);
			if(jobTemp.combat==true){combat=true}
	}
	else{
		JobHobbyList.push({name:"university student",combat:false,randweight:1});
		JobHobbyList.push({name:"college student",combat:false,randweight:1});
		JobHobbyList.push({name:"high schooler",combat:false,randweight:1});
		JobHobbyList.push({name:"grade schooler",combat:false,randweight:1});
		JobHobbyList.push({name:"preschooler",combat:false,randweight:1});
			jobTemp = getArrayRandom(JobHobbyList);
		switch (jobTemp.name){
			case "university student": heightmult*=0.95; break;
			case "college student": heightmult*=0.95; break;
			case "highschooler": heightmult*=randomRange(0.82,0.95); break;
			case "grade schooler": heightmult*=randomRange(0.75,0.85); orientation = "-"; break;
			case "preschooler": heightmult*=0.6; orientation = "-"; break;
		}
	}


	do{hobbyTemp = getArrayRandom(hobbies);}while(jobTemp.name == hobbyTemp.jobname)
		if(hobbyTemp.combat==true){combat=true}
		var starchar = jobTemp.name.charAt(0);
	if (starchar === 'a' || starchar === 'e' || starchar === 'i' || starchar === 'o' || starchar === 'u'){
	string = "is an "
	}else{string = "is a "}
		string +=jobTemp.name+" and also enjoys "+hobbyTemp.name;
	}else{	
	hobbyTemp = getArrayRandom(hobbies)
	if(hobbyTemp.combat==true){combat=true}
	string= "enjoys "+hobbyTemp.name;
}

return string;
}
function nagaHeight(inches){
	var feet = 0;
    inches = Math.round(inches*randomRange(0.95,1.05)*3);
	for(feet = 0;inches>=12;feet++){
		inches-=12;
	}
	return " ("+feet+"'"+inches+'"'+" long)";
  

}
function stringHeight(inches) {
	var feet = 0;
  if (inches > 12 || race.name.includes("naga")) {
    inches = Math.round(inches);
	for(feet = 0;inches>=12;feet++){
		inches-=12;
	}
	if(race.name.includes("naga")){
		return feet+"'"+inches+'"'+nagaHeight(feet*12+inches);
	}
	else{
	return feet+"'"+inches+'"';
	}
  }
  else{
	  return (Math.round(inches * 100) / 100)+" inches";
  }
  
  

}
function stringWeight(pounds){
	if(pounds>2000){pounds*=0.0005;return Math.round(pounds*100)/100 +" tons";}
	if(pounds>10){return Math.round(pounds)+" lbs";}
else{
	pounds*=16;
	return Math.round(pounds*100)/100 + " ounces";
}
}

function randBodyType(){

var heighttype = getArrayRandomUnnatural(heighttypes);
var weighttype = getArrayRandomUnnatural(weighttypes);

if(heighttype.name=="" && weighttype.name==""){bodytype="average";}
else if(heighttype.name==""){bodytype=weighttype.name;}
else if(weighttype.name==""){bodytype=heighttype.name;}
else{bodytype = heighttype.name+" and "+weighttype.name};

	heightmult = randomRange(heighttype.minmult,heighttype.maxmult);
	weightmult = randomRange(weighttype.minmult,weighttype.maxmult);

	
}
function randGender(){
	var value = Math.random()*100;
	if (value > 90){return "nonbinary";}
	
	var tempgender="";
	if(Math.random()*100>75){tempgender="trans ";}
	
	
	value = Math.random()*100;
	if(value > 50){tempgender+="male";}
	else{tempgender+="female";}
	
	return tempgender;
}
function gendIs(){
	if(gender.includes("male")){return "he is";}
	if(gender.includes("female")){return "she is";}
	return "they are";
}
function gendHas(){
	if(gender.includes("male")){return "he has";}
	if(gender.includes("female")){return "she has";}
	return "they have";
}

function generateSummary(){
	var string="Your character is a "+orientation+" "+gender+" "+race.name;
	string+=gendHas()+featurestring
	document.getElementById("Summary").innerHTML = string;
}
function randOrientation(){
	if (gender=="nonbinary"){return getRandom(["androsexual","gynosexual","bi","ace"]);}
	else{return getRandom(["straight","gay","bi","ace"]);}
}
var unnatural = false;
var combat = false;
var young = false;
var heighttypes=[];
var weighttypes=[];
var features=[];
var weapons=[];
var abilities=[];
var details=[];
var races = [];
var jobs=[];
var hobbies=[];
var traits=[];
var race;
var featurestring;
function generateChar(){

unnatural = false;
combat = false;
young = false;
heighttypes=[];
weighttypes=[];
features=[];
weapons=[];
abilities=[];
details=[];
races = [];
jobs=[];
hobbies=[];
traits=[];
loadAddedDetails();
heightmult=1;
weightmult=1;
bodytype="";
loadHeightWeightTypes();

gender=randGender();
orientation=randOrientation();
featurestring="";


loadHobbies();

loadRaces();


generateRace();
loadFeatures();

featurestring = generateFeatures();
loadJobs();
loadTraits();
randBodyType();
occupationstring = generateOccupation();
loadCombat();

document.getElementById("Race").innerHTML = "Race: "+race.name;
document.getElementById("Gender").innerHTML = "Gender: "+gender;
document.getElementById("Orientation").innerHTML = "Orientation: "+orientation;



document.getElementById("Features").innerHTML = "Features: "+featurestring;
document.getElementById("Occupation").innerHTML = "Occupation: "+occupationstring;
weightmult *= Math.pow(heightmult,2.9);
document.getElementById("BType").innerHTML = "Body Type: "+bodytype+" ("+stringHeight(race.height*heightmult)+", "+stringWeight(race.weight*weightmult)+")";
document.getElementById("Personality").innerHTML = "Personality: "+generatePersonality();
document.getElementById("Combat").innerHTML = "Combat: "+generateCombat();

//generateSummary();
}

document.getElementById("Summary").addEventListener("load", generateChar());
document.getElementById("generate").onclick = function() {generateChar()};