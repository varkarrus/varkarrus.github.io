function addRace(_name,_height,_weight,_hashair,_haslegs,_hashorns,_haswings,_arms,_tag,_randweight){
	races.push({
name:_name,
height:_height,
weight:_weight,
hashair:_hashair,
hashorns:_hashorns,
haslegs:_haslegs,
haswings:_haswings,
arms:_arms,
tag:_tag,
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

	addRace("human",66,134,true,true,false,false,2,"mundane",0);
	addRace("elf",70,135,true,true,false,false,2,"fantasy,DND",1);
	addRace("dwarf",54,105,true,true,false,false,2,"fantasy,DND",1);
	addRace("orc",70,180,true,true,false,false,2,"fantasy,DND",1);
	addRace("fairy",3,0.0122,true,true,false,true,2,"fantasy",1);
	addRace("clone of hollywood superstar Nicholas Cage",72,150,true,true,false,false,2,"joke",0.005);
	addRace("cyclops",267,8580,true,true,false,false,2,"fantasy",0.5);
	addRace("troll",113,632,true,true,true,false,2,"fantasy",0.5);
	addRace("gnome",41,40,true,true,false,false,2,"fantasy",1);
	addRace("catfolk",66,134,true,true,false,false,2,"anthro",0.5);
	addRace("wolffolk",66,134,true,true,false,false,2,"anthro",0.5);
	addRace("merfolk",78,184,true,false,false,false,2,"fantasy,anthro",0.5);
	addRace("octofolk",66,154,true,false,false,false,2,"fantasy",0.2);
	addRace("harpy",65,124,true,true,false,true,2,"fantasy,DND",0.5);
	addRace("centaur",80,1160,true,true,false,false,2,"fantasy,DND",0.5);
	addRace("dullahan",66,134,true,true,false,false,2,"fantasy",0.5);
	addRace("drider",78,250,true,true,false,false,2,"DND",0.2);
	addRace("angel",66,144,true,true,false,true,2,"fantasy",0.5);
	addRace("reaper",66,64,true,true,false,false,2,"fantasy",0.2);
	addRace("demon",70,180,true,true,true,true,2,"fantasy",1);
	addRace("oni",90,314,true,true,true,false,2,"fantasy",0.5);
	addRace("alien",66,134,true,true,false,false,2,"scifi",0.5);
	addRace("robot",66,154,false,true,false,false,2,"scifi",0.5);
	addRace("golem",66,194,false,true,false,false,2,"fantasy",0.5);
	addRace("deep one",66,134,true,true,false,false,2,"fantasy",0.2);
	addRace("mothman",66,114,true,true,false,true,2,"fantasy",0.5);
	addRace("dragonborn",76,185,true,true,true,true,2,"anthro,fantasy,DND",0.5);
	addRace("giant",315,14378,true,true,false,false,2,"fantasy,DND",0.5);
	addRace("titan",660,130000,true,true,false,false,2,"fantasy",0.2);
	addRace("kitsune",66,134,true,true,false,false,2,"fantasy,anthro",0.5);
	addRace("ettin",182,2860,true,true,false,false,2,"fantasy",0.5);
	addRace("homunculus",12,2,true,true,false,false,2,"fantasy",0.2);
	addRace("gorgon",66,134,true,false,false,false,2,"fantasy",0.5);
	addRace("lizardfolk",66,134,false,true,false,false,2,"anthro,DND",0.5);
	addRace("naga",74,790,true,true,false,false,2,"fantasy",0.5); //276 inches long
	addRace("imp",41,40,true,true,true,true,2,"fantasy",0.5);
	addRace("bearfolk",76,185,true,true,false,false,2,"anthro",0.5);
	addRace("dryad",63,124,true,true,false,false,2,"fantasy",0.5);
	addRace("naiad",63,124,true,true,false,false,2,"fantasy",0.5);
	addRace("sylph",63,8.5,true,true,false,true,2,"fantasy",0.5);
	addRace("alraune",66,234,true,false,false,false,2,"fantasy",0.5);
	addRace("slime",66,134,true,true,false,false,2,"fantasy",0.5);
	addRace("goblin",41,40,true,true,false,false,2,"fantasy,DND",1);
	addRace("<a href='https://en.wikipedia.org/wiki/Tardigrade'>tardigradekin</a>",66,150,true,false,false,false,6,"anthro",0.2);
	addRace("futakuchi-onna",66,130,true,true,false,false,2,"fantasy",0.5);
	addRace("yuki-onna",66,130,true,true,false,false,2,"fantasy",0.5);
	addRace("hyakume",70,180,true,true,false,false,2,"fantasy",0.5);
	addRace("foocubus",66,134,true,true,false,true,2,"fantasy",0.5);
	addRace("<a href='https://www.youtube.com/watch?v=dtER80sOjX4'>globglogabgalab</a>",66,300,false,false,false,false,2,"joke",0.005);
	addRace("moleman",41,40,true,true,false,false,2,"anthro",0.2);
	addRace("ogre",96,520,true,true,true,false,2,"fantasy",0.75);
	addRace("antfolk",66,134,false,true,false,false,4,"anthro",0.5);
	addRace("beefolk",66,134,true,true,false,true,4,"anthro",0.5);
	addRace("tiefling",70,135,true,true,true,false,2,"DND",1);
	addRace("aasimar",73,200,true,true,false,false,2,"DND",0.5);
	addRace("goliath",90,310,true,true,false,false,2,"DND",0.5);
	addRace("aarakocra",60,90,false,true,false,true,2,"DND",0.5);
	addRace("bugbear",84,275,true,true,false,false,2,"DND",0.5);
	addRace("firbolg",90,270,true,true,false,false,2,"DND",0.5);
	addRace("genasi",66,134,true,true,false,false,2,"DND",0.5);
	addRace("gith",60,100,true,true,false,false,2,"DND",0.5);
	addRace("halfling",36,40,true,true,false,false,2,"fantasy,DND",0.5);
	addRace("hobgoblin",66,134,true,true,false,false,2,"DND",0.5);
	addRace("kenku",60,75,false,true,false,false,2,"DND,anthro",0.5);
	addRace("kobold",26,40,false,true,false,false,2,"DND",0.5);
	addRace("minotaur",78,185,true,true,true,false,2,"DND,anthro",0.5);
	addRace("tortle",66,450,false,true,false,false,2,"DND,anthro",0.25);
	addRace("triton",64,130,true,true,false,false,2,"DND",0.25);
	addRace("yuan-ti pureblood",66,134,true,true,false,false,2,"DND",0.25);


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
	if(race.name!="human"){features.push({name:"disguised as a human",randweight:0.5,vis:1,unnatural:false});}
	if(race.haswings==true){
		features.push({name:getRandom(["missing wing","extra wings","big wings","small wings"]),randweight:0.5,vis:0,unnatural:false});
	}
	else{
		features.push({name:"has wings",randweight:0.25,vis:0,unnatural:true});
	}
	
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
	features.push({name:"weightless",randweight:0.1,vis:0,unnatural:true})
}

function loadAddedDetails(){
	details.push({name:"magic user",randweight:1,unnatural:true,combat:true,tag:"fantasy"});
	details.push({name:"cyborg",randweight:0.8,unnatural:false,combat:false,tag:"scifi"});
	details.push({name:"ghost",randweight:0.8,unnatural:false,combat:false,tag:"fantasy"});
	details.push({name:"undead",randweight:0.8,unnatural:false,combat:false,tag:"fantasy"});
	details.push({name:"lich",randweight:0.2,unnatural:false,combat:true,tag:"fantasy"});
	details.push({name:"vampire",randweight:0.5,unnatural:false,combat:true,tag:"fantasy"});
	details.push({name:"psionic",randweight:0.2,unnatural:false,combat:true,tag:""});
	details.push({name:"mutant",randweight:0.8,unnatural:true,combat:false,tag:"scifi"});
	details.push({name:"genetic experiment",randweight:0.2,unnatural:false,combat:true,tag:"scifi"});
	details.push({name:"cursed",randweight:0.4,unnatural:true,combat:false,tag:"fantasy"});
	details.push({name:"has a demon pact",randweight:0.4,unnatural:true,combat:false,tag:"fantasy"});
	details.push({name:"immortal",randweight:0.4,unnatural:false,combat:false,tag:""});
	details.push({name:"demigod",randweight:0.2,unnatural:true,combat:true,tag:"fantasy"});
	details.push({name:"clairvoyant",randweight:0.2,unnatural:false,combat:false,tag:"fantasy"});
	details.push({name:"possessed",randweight:0.2,unnatural:true,combat:false,tag:"fantasy"});
	details.push({name:"famous",randweight:1,unnatural:false,combat:false,tag:"mundane"});
	details.push({name:"royalty",randweight:1,unnatural:false,combat:false,tag:"mundane"});
	details.push({name:"superpowered",randweight:1,unnatural:true,combat:true,tag:""});
	details.push({name:"infected",randweight:0.2,unnatural:true,combat:true,tag:""});
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
	jobs.push({name:"knight",randweight:0.3,combat:true});
	jobs.push({name:"gameshow host",randweight:0.1,combat:false});
	jobs.push({name:"biostatistician",randweight:0.1,combat:false});


	
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
	hobbies.push({name:"magic tricks",randweight:0.1,combat:false,jobname:"magician"});
	hobbies.push({name:"writing webcomics",randweight:0.1,combat:false,jobname:"webcomic writer"});

	
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
	if(age.cat>=3){traits.push({name1:"flirty",name2:"chaste",randweight:1})}
	traits.push({name1:"joyful",name2:"depressed",randweight:1})
}

function loadCombat(){
	weapons.push({name:["a pistol","pistols"],hands:1,randweight:2,})
	weapons.push({name:["a sword","swords"],hands:1,randweight:2})
	weapons.push({name:["a two-handed sword","two-handed swords"],hands:2,randweight:1})
	weapons.push({name:["a battleaxe","battleaxes"],hands:2,randweight:0.5})
	weapons.push({name:["a shovel",""],hands:2,randweight:0.2})
	weapons.push({name:["a scythe",""],hands:2,randweight:0.2})
	weapons.push({name:["a sickle","sickles"],hands:1,randweight:0.1})
	weapons.push({name:["a crossbow","crossbows"],hands:1,randweight:1})
	weapons.push({name:["a shortbow",""],hands:2,randweight:0.5})
	weapons.push({name:["a longbow",""],hands:2,randweight:0.5})
	weapons.push({name:["a knife","knives"],randweight:1})
	weapons.push({name:["throwing knives",""],hands:0,randweight:1})
	weapons.push({name:["a rapier","rapiers"],hands:1,randweight:0.5})
	weapons.push({name:["a shotgun","shotguns"],hands:1,randweight:0.5})
	weapons.push({name:["an assault rifle","assault rifles"],hands:1,randweight:0.5})
	weapons.push({name:["a rocket launcher",""],hands:2,randweight:0.2})
	weapons.push({name:["a sniper rifle",""],hands:2,randweight:0.5})
	weapons.push({name:["a railgun",""],hands:2,randweight:0.2})
	weapons.push({name:getRandom([["<a href='https://www.youtube.com/watch?v=uhW67MBO8M8'>a meteor hammer</a>",""],["<a href='https://www.youtube.com/watch?v=uhW67MBO8M8'>a rope dart</a>",""]]),randweight:0.2})
	weapons.push({name:["martial arts",""],hands:0,randweight:2})
	weapons.push({name:["a laser gun","laser guns"],hands:1,randweight:0.5})
	weapons.push({name:getRandom([["an odachi",""],["a naginata",""]]),hands:2,randweight:1})
	weapons.push({name:getRandom([["a katana","katanas"],["a wakizashi","wakizashis"]]),hands:1,randweight:1})
	weapons.push({name:getRandom([["a spear",""],["a polearm",""],["a javelin",""]]),hands:1,randweight:0.5})
	weapons.push({name:["a hammer","hammers"],hands:2,randweight:0.5})
	weapons.push({name:["a shield",""],hands:1,randweight:0.5})
	
	if(featurestring.includes("magic user")){
	weapons.push({name:["a staff",""],hands:1,randweight:4})
	weapons.push({name:["a wand",""],hands:1,randweight:4})
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
		weapons.push({name:["an arm laser",""],hands:1,randweight:2})
		weapons.push({name:["a shoulder mounted rocket launcher",""],hands:0,randweight:2})
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
	weapons.push({name:["a staff",""],hands:1,randweight:4})
	weapons.push({name:["a wand",""],hands:1,randweight:4})
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
		abilities.push({name:"cloning",randweight:0.3})
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
		abilities.push({name:"cloning",randweight:0.3})
	}
	if(featurestring.includes("infected")){
		abilities.push({name:"super strength",randweight:1})
		abilities.push({name:"insect control",randweight:1})
		abilities.push({name:"shapeshifting",randweight:1})
		abilities.push({name:"rapid regeneration",randweight:1})
		abilities.push({name:"berserk rage",randweight:1})
		abilities.push({name:"poison",randweight:1})
		abilities.push({name:"cloning",randweight:0.3})
	}
	
		if(occupationstring.includes("farmer")||occupationstring.includes("garden")){
			weapons.push({name:["a hoe",""],hands:1,randweight:2})
			weapons.push({name:["a rake",""],hands:1,randweight:2})
			weapons.push({name:["a spade","spades"],hands:1,randweight:2})
		}
		if(occupationstring.includes("chef")||occupationstring.includes("cook")){
			weapons.push({name:["a frying pan",""],hands:1,randweight:0.5})
			weapons.push({name:["cutlery",""],hands:2,randweight:0.5})
			weapons.push({name:["a kitchen knife","kitchen knives"],hands:1,randweight:0.5})
			weapons.push({name:["a rolling pin",""],hands:1,randweight:0.5})
		}
		if(occupationstring.includes("scientist")||occupationstring.includes("science")){
			weapons.push({name:["an experimental gun","experimental guns"],hands:1,randweight:2})
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
		weapons.push({name:["a scythe",""],hands:2,randweight:10})
	}
	if(race.name.includes("demon")){
		abilities.push({name:"dark magic",randweight:5})
		abilities.push({name:"demonic strength",randweight:5})
		abilities.push({name:"demonic speed",randweight:5})
	}
	if(race.name.includes("oni")){
		weapons.push({name:["an oni club","oni clubs"],hands:2,randweight:3})
		if(Math.random()*100>70){
		abilities.push({name:"storm magic",randweight:5})
		}
	}
	if(race.name.includes("alien")){
		weapons.push({name:["a raygun","rayguns"],hands:1,randweight:10})
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
	weapons.push({name:["prehensile hair",""],hands:0,randweight:5})
	}
	if(race.name.includes("yuki-onna")&&Math.random()*100>50){
	abilities.push({name:"ice magic",randweight:5})}
	
	if(race.name.includes("globglogabgalab")&&Math.random()*100>50){
	weapons.push({name:["shwibbly glib a kind",""],hands:0,randweight:5})
	abilities.push({name:"yeast of thoughts and minds",randweight:5})
	}
	
	if(Math.random()*100>98){
		abilities.push({name:"unusually good luck",randweight:1})
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

function getRace(){
	var temprace;

	var ok=false;
	do{
	ok=false;
	temprace=getArrayRandom(races)
	if(temprace.tag.includes("fantasy") && (raceValue == "fantasy" || raceValue == "fanthro" || raceValue == "fantasyNoDND"|| raceValue == "fanthroNoDND")){ok=true}
	if(temprace.tag.includes("DND") && (raceValue == "DND" || raceValue == "fantasy" || raceValue=="fanthro")){ok=true}
	if(temprace.tag.includes("scifi") && raceValue == "scifi"){ok=true}
	if(temprace.tag.includes("anthro") && (raceValue == "anthro" || raceValue == "fanthro" || raceValue == "fanthroNoDND")){ok=true}
	if(temprace.tag.includes("joke")){ok=true}
	if(raceValue=="all"){ok=true}
	}while(ok==false)
		
	return temprace;
}

function generateBloodType(){
	var rn = race.name
	var bloodtypes=[];
	if(rn.includes("antfolk")||rn.includes("beefolk")||rn.includes("fairy")||rn.includes("tardigradekin")){
	bloodtypes.push({name:"ichor",randweight:1})
		}
	if(rn.includes("robot")){
		bloodtypes.push({name:"battery power",randweight:3})
		bloodtypes.push({name:"uranium",randweight:1})
		bloodtypes.push({name:"oil",randweight:1})
		bloodtypes.push({name:"diesel",randweight:1})
		bloodtypes.push({name:"nanites",randweight:0.25})
		bloodtypes.push({name:"solar power",randweight:0.25})
		bloodtypes.push({name:"steam power",randweight:0.25})
	}
	if(rn.includes("alien")){
		bloodtypes.push({name:"acid",randweight:2})
		bloodtypes.push({name:"ichor",randweight:1})
		bloodtypes.push({name:"green",randweight:1})
		bloodtypes.push({name:"plasma",randweight:1})
		bloodtypes.push({name:"goo",randweight:1})
	}
	if(rn.includes("golem")){
		bloodtypes.push({name:"none",randweight:1})
	}
	if(bloodtypes.length==0){
		bloodtypes.push({name:"A+",randweight:4})
		bloodtypes.push({name:"A-",randweight:4})
		bloodtypes.push({name:"AB+",randweight:3})
		bloodtypes.push({name:"AB-",randweight:3})
		bloodtypes.push({name:"B+",randweight:2})
		bloodtypes.push({name:"B-",randweight:2})
		bloodtypes.push({name:"O+",randweight:0.5})
		bloodtypes.push({name:"O-",randweight:0.5})
	}
	var tempbt = getArrayRandom(bloodtypes)
	return tempbt.name
}

function generateRace(){
	if ((Math.random() < 0.5 || document.getElementById("raceMenuDiv").style.display=="none" || raceValue=="humanOnly") && raceValue !="anthro") {
  race = races[0];
} else {
	
	if(Math.random()<0.8 || document.getElementById("noHybrids").checked){
	race = getRace()
  
	}
	else{
		var race1 = getRace();
		var race2;
		if(Math.random()>0.75 || raceValue =="anthro"){
		do{race2 = getRace()}while(race2==race1)
		}else{race2 = races[0];}
	
		race.name = "half-"+race1.name; if(race2.name!="human"){race.name+=" half-"+race2.name}
		race.height = (race1.height+race2.height)/2
		race.weight = (race1.weight+race2.weight)/2
		race.haslegs = (race1.haslegs && race2.haslegs)
		race.hashair = (race1.hashair || race2.hashair)
		race.hashorns = (race1.hashorns || race2.hashorns)
		race.harwings = (race1.haswings || race2.haswings)
		if(Math.random()>0.5){race.arms = race1.arms}else{race.arms=race2.arms}
	}
	
  }
	if (race.name.includes("demon")||race.name.includes("alien")){unnatural=true;}
}

function stringnumber(num){
	switch (num){
	case 0: return "zero"; break;
	case 1: return "one"; break;
	case 2: return "two"; break;
	case 3: return "three"; break;
	case 4: return "four"; break;
	case 5: return "five"; break;
	case 6: return "six"; break;
	case 7: return "seven"; break;
	case 8: return "eight"; break;
	case 9: return "nine"; break;
	case 10: return "ten"; break;
	}
}

function generateCombat(){
	string=""
	if(document.getElementById("alwaysCombat").checked){combat=true;}
	if (combat==true || Math.random()*100>70){
		if(age.cat>=3){
		string="uses "
		if(Math.random()*100>65 || abilities.length==0){
		
		/*
		if(Math.random()*100>70){
			var t1 = getArrayRandom(weapons)
			var t2 = getArrayRandom(weapons)
			do{t2 = getArrayRandom(weapons)}while(t2.name[0]==t1.name[0])
			string+=" "+t1.name+" and "+t2.name
		}else{
			string+=" "+getArrayRandom(weapons).name[0]
		}
			if(featurestring.includes("extra arms")){
			string=string.replace(/two/g,"four")
			}
		*/
		
		var value = Math.random()*100
		
		if(value>0 && value <= 50 || arms==1){
			var t1 = getArrayRandom(weapons)
			do{t1 = getArrayRandom(weapons)}while(t1.name[0]=="a shield" || t1.hands>arms)
			string+=" "+t1.name[0];
		}
		else if(value>50 && value < 751){
			var t1 = getArrayRandom(weapons)
			var t2 = getArrayRandom(weapons)
			do{t2 = getArrayRandom(weapons)}while(t2.name[0]==t1.name[0] || t2.hands+t1.hands > arms)
			string+=" "+t1.name[0]+" and "+t2.name[0]
		}
		else{
			var t1 = getArrayRandom(weapons)
			do{t1=getArrayRandom(weapons)}while(t1.name[1]=="")
			string+=" "+stringnumber(arms/t1.hands)+" "+t1.name[1]
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
	if (document.getElementById("MBTI").checked){
		string+=" ("+generateMBTI()+")"
	}
	return string;
}

function generateFeatures(){
	var string = ""
	var hair = ""
	var vis = 0;
	var addedDetail = ""
	var featurecount = Math.round(randomRange(1,2));
	if (nounnatural==false){
	if(Math.random()*100>60){
		var t = getArrayRandom(details)
		addedDetail=t.name
		if(t.unnatural==true){unnatural=true}
		if(t.combat==true){combat=true}
		}
	}
	else{
		unnatural=false;
		if(Math.random()*100>95){
			var t;
			do {t = getArrayRandom(details)}while(t.tag.includes("mundane")==false)
			addedDetail=t.name
			if(t.combat==true){combat=true}
		}
	}
	
		if(race.name.includes("futakuchi-onna")==false){
	if(Math.random()*100>70 && race.hashair==true){featurecount--;hair=generateHair(true);}
		if(Math.random()*100>90 && race.hashair==false){featurecount--;hair=generateHair(false)+ " (wig)"}}
	
	for(i=0;i<featurecount;i++){
		
		do{
		var tempfeature = getArrayRandomUnnatural(features);}while(vis!=0 && tempfeature.vis!=0 && vis!=tempfeature.vis || (addedDetail.name=="ghost" && tempfeature.name=="weightless") )
		if(tempfeature.vis!=0){vis=tempfeature.vis}
		if(tempfeature.name.includes("extra arms")){
			if(Math.random()*100>80 && race.arms < 6){arms+=4}
			else{arms+=2}
			tempfeature.name= stringnumber(arms)+" arms"
		}
		if(tempfeature.name.includes("hair")==false || race.hashair==true){
		if(string!=""){string+=", ";}
		string+=tempfeature.name;
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
	if (Math.random()*100 > 60 || age.cat>=4){
	var JobHobbyList = [];
	if(age.cat>=4){
		if(age.cat==4){
			JobHobbyList.push({name:"college student",combat:false,randweight:2.5});
			JobHobbyList.push({name:"university student",combat:false,randweight:2.5});}
		if(age.cat>6){
			JobHobbyList.push({name:"pensioner",combat:false,randweight:5});}
			
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
		if(age.cat==0){JobHobbyList.push({name:"preschooler",combat:false,randweight:1})};
		if(age.cat==1 || age.cat==2){JobHobbyList.push({name:"grade schooler",combat:false,randweight:1})};
		if(age.cat==3){
			JobHobbyList.push({name:"high schooler",combat:false,randweight:1})
			JobHobbyList.push({name:"truant",combat:false,randweight:0.05})};
		JobHobbyList.push({name:"homeschooled",combat:false,randweight:0.15})
		jobTemp = getArrayRandom(JobHobbyList);
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
else if(pounds>0){
	pounds*=16;
	return Math.round(pounds*100)/100 + " ounces";
}
else if(pounds==0){
	return("weightless");
}
}

function randBodyType(){

if(featurestring.includes("lich")||featurestring.includes("undead")){
weighttypes.push({name:"skeletal",minmult:0.45,maxmult:0.55,randweight:2,unnatural:false});
}

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
	
	var cis = "";
	if(document.getElementById("genderDetails").checked){
	if(Math.random()*100>50){cis="trans "}else{cis="cis "}
	
	}
	
	
	if(Math.random()*100>50){return cis+"male";}
	else{return cis+"female";}
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

function generateAge(){
	var ages=[];
	ages.push({name:"toddler",cat:0,randweight:0.2})
	ages.push({name:"child",cat:1,randweight:0.5})
	ages.push({name:"pre-teen",cat:2,randweight:0.7})
	ages.push({name:"teenager",cat:3,randweight:1})
	ages.push({name:"young adult",cat:4,randweight:2})
	ages.push({name:"middle-aged",cat:5,randweight:1.5})
	ages.push({name:"old",cat:6,randweight:0.5})
	ages.push({name:"elderly",cat:7,randweight:0.2})
	
	var tempage = getArrayRandom(ages)
	return tempage
}

function generateSummary(){
	var string="Your character is a "+sorient+" "+gender+" "+race.name;
	string+=gendHas()+featurestring
	document.getElementById("Summary").innerHTML = string;
}
function randOrientation(){
	if(age.cat<3){return"--"}
	if (gender=="nonbinary"){return getRandom(["androsexual","gynosexual","bi","ace"]);}
	else{return getRandom(["straight","gay","bi","ace"]);}
}

function generateMBTI(){
	var MBTI =""
	if(Math.random()*100>50){MBTI+="E"}else{MBTI+="I"}
	if(Math.random()*100>50){MBTI+="S"}else{MBTI+="N"}
	if(Math.random()*100>50){MBTI+="T"}else{MBTI+="F"}
	if(Math.random()*100>50){MBTI+="J"}else{MBTI+="P"}
	return MBTI;
}

function Hide(value){
	document.getElementById(value).parentElement.style.display="none"
	document.getElementById("show"+value).style.display="inline"
	if(value=="Race"){
		document.getElementById("raceMenuDiv").style.display="none"
		document.getElementById("noHybridsDiv").style.display="none"
	}
	if(value=="Gender"){
		document.getElementById("genderDetailsDiv").style.display="none"
	}
	if(value=="Features"){
		document.getElementById("noUnnaturalDiv").style.display="none"
	}
	if(value=="Personality"){
		document.getElementById("MBTIDiv").style.display="none"
	}
	if(value=="Combat"){
		document.getElementById("alwaysCombatDiv").style.display="none"
	}
}
function Show(value){
	document.getElementById(value).parentElement.style.display="block"
	document.getElementById("show"+value).style.display="none"
	if(value=="Race"){
		document.getElementById("raceMenuDiv").style.display="inline"
		document.getElementById("noHybridsDiv").style.display="inline"
	}
	if(value=="Gender"){
		document.getElementById("genderDetailsDiv").style.display="inline"
	}
		if(value=="Features"){
		document.getElementById("noUnnaturalDiv").style.display="inline"
	}
	if(value=="Personality"){
		document.getElementById("MBTIDiv").style.display="inline"
	}
	if(value=="Combat"){
		document.getElementById("alwaysCombatDiv").style.display="inline"
	}
}

function generateStarSign(){
	if(Math.random()*100>99){return "ophiuchus"}
	return getRandom(["aries","taurus","gemini","cancer","leo","virgo","scorpio","saggitarius","capricorn","aquarius","pisces"])
	
}

var unnatural = false;
var combat = false;
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
var race=({name:"",height:0,weight:0,haslegs:false,hashair:false,hashorns:false,randweight:0});
var featurestring;
var sorient;
var arms = 2;
var nocombat = false;
var noorient = false;
var humanonly = false;
var nounnatural = false;
var raceValue="";
var age = "";

function Init(){

}

function generateChar(){
	//do{
		
	var e = document.getElementById("raceMenu")
	raceValue = e.options[e.selectedIndex].value
	
arms=2;
unnatural = false;
combat = false;
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

featurestring="";

nounnatural = document.getElementById("noUnnatural").checked


loadHobbies();

loadRaces();


generateRace();
loadFeatures();

featurestring = generateFeatures();
loadJobs();
loadTraits();
randBodyType();




document.getElementById("Race").innerHTML = race.name;

if(document.getElementById("showAge").style.display=="none"){
age=generateAge();
document.getElementById("Age").innerHTML = age.name;}
else{age={name:"young adult",cat:4,randweight:1};document.getElementById("Age").innerHTML = age.name;}

sorient=randOrientation();
occupationstring = generateOccupation();
loadCombat();


document.getElementById("StarSign").innerHTML = generateStarSign();
document.getElementById("Gender").innerHTML = gender;

document.getElementById("Orientation").innerHTML = sorient;


var combatstring = generateCombat();
document.getElementById("Features").innerHTML = featurestring;
document.getElementById("Interests").innerHTML = occupationstring;

if(age.cat==0){heightmult*=randomRange(0.48,0.66)}
if(age.cat==1){heightmult*=randomRange(0.66,0.82)}
if(age.cat==2){heightmult*=randomRange(0.82,0.93)}
if(age.cat==3){heightmult*=randomRange(0.93,1)}
weightmult *= Math.pow(heightmult,2.7);

if(featurestring.includes("ghost")||featurestring.includes("weightless")){weightmult=0;}
document.getElementById("BType").innerHTML = bodytype+" ("+stringHeight(race.height*heightmult)+", "+stringWeight(race.weight*weightmult)+((combatstring.includes("sizeshifting") || combatstring.includes("shapeshifting"))?", variable":"")+")";

document.getElementById("Personality").innerHTML = generatePersonality();
document.getElementById("BloodType").innerHTML = generateBloodType();
document.getElementById("Combat").innerHTML = combatstring;
//}while(document.getElementById("BType").innerHTML.includes("variable")==false)
//generateSummary();
}

document.getElementById("generate").addEventListener("load",generateChar());
document.getElementById("generate").onclick = function() {generateChar()};

var hideArray = document.getElementsByClassName("hide")
for (index = 0; index < hideArray.length; ++index) {
	hideArray[index].onclick = function(){Hide(this.getAttribute("data-type"))};
}

var showArray = document.getElementsByClassName("show")
for (index = 0; index < showArray.length; ++index) {

	showArray[index].onclick = function(){Show(this.getAttribute("data-type"))};
}

Hide("BloodType")
Hide("Age")
Hide("StarSign")
/*document.getElementById("hideRace").onclick = function() {Hide("Race")};
document.getElementById("hideGender").onclick = function() {hideGender()};
document.getElementById("hideAge").onclick = function() {hideAge()};


document.getElementById("showRace").onclick = function() {showRace()};
document.getElementById("showGender").onclick = function() {showGender()};
document.getElementById("showAge").onclick = function() {showAge()};*/