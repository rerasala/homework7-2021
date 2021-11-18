var vid = document.getElementsByClassName("video")[0];

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	vid.play();

	var volume = document.querySelector("#slider").value;
	document.querySelector("#volume").innerHTML = volume + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	vid.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	vid.playbackRate = vid.playbackRate * 0.95;
	console.log("New speed is " + vid.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	vid.playbackRate = vid.playbackRate * 1.05;
	console.log("New speed is " + vid.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {

	console.log("Original location " + vid.currentTime);

	if((vid.currentTime + 15) >= vid.duration){
		vid.currentTime = 0;
		console.log("Going back to beginning");
	} else {
		vid.currentTime = vid.currentTime + 15;
	}
	
	console.log("New location " + vid.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	
	if(vid.muted == true){
		vid.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		vid.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}

});

document.querySelector("#slider").addEventListener("change", function() {
	
	var volume = document.querySelector("#slider").value;
	document.querySelector("#volume").innerHTML = volume + "%";
	vid.volume = (volume/100);

});

document.querySelector("#vintage").addEventListener("click", function() {
	
	vid.classList.add("oldSchool");

});

document.querySelector("#orig").addEventListener("click", function() {
	
	vid.classList.remove("oldSchool");

});


