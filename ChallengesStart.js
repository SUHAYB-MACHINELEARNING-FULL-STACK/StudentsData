let H1ANDIMG=document.querySelector("o")
const Data='<button id="StartButton" onClick="SHOW()">Start</button><div id="StartDIV" algin="center"><br /><br /><br /><br /><br /><h1>Click on Start Button to SHOW Program Data</h1></div></div><script>let StudentsNames=[];let ProgramData=`<br /><br /><br /><br /><br /><textarea placeholder="Students Names" id="textarea"></textarea><button onClick="NextOrder(0)">Submit</button>`;let Random=0;const SHOW=()=>{StartDIV.innerHTML=ProgramData;console.log("Done");}const NextOrder=(a)=>{if(a==0) {StudentsNames=document.querySelector("textarea").value.split("\n")/*.join(" ").split(" ")*/;}console.log(StudentsNames);if(StudentsNames.length===0){SHOW();}else{StartDIV.innerHTML="<br /><br /><br /><br /><br /><button onClick=\"RandomStudent()">Random Student</button>\";}}const RandomStudent=()=>{Random=parseInt(Math.random()*(StudentsNames.length));StartDIV.innerHTML=`<br /><br /><br /><br /><br /><h1 onClick="NextOrder(1)">${StudentsNames[Random]}</h1>`;console.log(StudentsNames);StudentsNames=StudentsNames.filter((value,index,arr)=>value!==StudentsNames[Random]);}</script>'
const Start = () => {
	document.querySelector("html").innerHTML=`

		<!DOCTYPE html>
<html>
<head>
	<title>Challenges</title>
	<link rel="stylesheet" href="Challenges2.css" />
</head>
<header>
	<div class="container">
		<h1>Challenges</h1>
	</div>
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Contact us</a></li>
	</ul>
	<button id="Start"><a href="ChallengesStart.html">Start Now</a></button>
</header>
<body>
<div id="o_o" align="center">
<style>
	body {
		font-family: sans-serif;
	}
		#StartButton {
			background-color: #e6b31e;
			width: 350px;
			border: 1px solid #e6b31e;
			border-radius: 10px;
			padding: 10px;
			font-size: 35px;
			cursor: pointer;
		}
		#StartDIV {
			border: 1px solid black;
			margin-top: 5%;
			height: 300px;
		}

	</style>
${document.getElementById("o_o").innerHTML}
</div>
</body>
</html>

	`
}
setTimeout(()=>{
	H1ANDIMG.textContent='wait... 2'
	setTimeout(()=>{
	H1ANDIMG.textContent='wait... 1'
	},1000)
},1000)
setTimeout(()=>{
	H1ANDIMG.textContent='wait... 0'
	Start()
},3000)