/*
This is empty on purpose! Your code to build the resume will go here.
 */

var firstName = "Marc Codera";
var role = "Web developer";
var skills = ["awesomeness", "programming", "sysadmin", "JS"];
var contact = "marc.codera@gmail.com";
var image = "images/me.jpeg";

var work = {};
work.position = "Sysadmin";
work.employer = "AXA Assistance";
work.years = 2.5;
work.city = "Barcelona";

var education = {
	"schools" : [
		{
			"name" : "UOC",
			"city" : "On-Line",
			"degree" : "BA",
			"major" : ["CompSci", "AndroidDev"]
		},
		{
			"name" : "Coursera",
			"city" : "On-Line",
			"degree" : "NanoDegree",
			"major" : "CompSci"
		}
	]	
};
education["name"] = "UOC";
education["years"] = "2001-2012";
education["city"] = "on-line";

/*
var awesomeThoughts = "I am Marc and I'm AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

console.log(awesomeThoughts);
console.log(funThoughts);
*/

var formattedName = HTMLheaderName.replace("%data%", firstName);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedSkills = HTMLskills.replace("%data%", skills[0]);
var formattedEmail = HTMLemail.replace("%data%", contact);
var formattedImage = HTMLprojectImage.replace("%data%", image);

var bio = {
	"name" : formattedName,
	"role" : formattedRole,
	"contacts" : {
		"mobile" : "+34645806007",
		"email" : formattedEmail,
		"github" : "marccodera",
		"twitter" : "@marccodera"
		"location" : Terrassa
	},
	"welcomeMessage" : "Hi All!",
	"picture" : formattedImage,
	"skills" : formattedSkills
};




// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

$("#main").append(work["position"]);
//$("#main").append(education.name);

$("#header").prepend(bio.role);
$("#header").prepend(bio.name);
$("#header").prepend(bio.picture);
$("#lets-connect").append(bio.contact);
$("#workExperience").append(bio.skills);


// $("#main").append(skills[0]);
// $("#main").append(skills.length);
