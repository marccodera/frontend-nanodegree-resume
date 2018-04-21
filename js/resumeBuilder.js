/*
This is empty on purpose! Your code to build the resume will go here.
 */

/* 	Work variable, here it describes all the Work details. 
	This var is declared as a container of different items. Where it's been used a table called 
	jobs and every single item is a container of details.  */
var work = {
	"jobs" : [
		{
			"title" : "Sysadmin",
			"employer" : "AXA Assistance",
			"dates" : "november 2014 - Now",
			"location" : "Barcelona",
			"description" : " As a senior sysadmin, I'm doing lots of things there, owner for the backup solution, CPD server side environment solution and Auto Application infrastructure."
		},
		{
			"title" : "Sysadmin",
			"employer" : "Moventia",
			"dates" : "april 2005 - november 2014",
			"location" : "Sant Cugat del Vallès",
			"description" : "Starting as a Service desk technician, developed my career after one year as a junior Sysadmin and ended as a senior Sysadmin. Some projects done there like virtualization process, backup process, file server upgrade, distributed sites network upgrade, datacenter migration, bus customisation with GPS and navigation solution form other companies in coordination with other companies"
		},
		{
			"title" : "Systechnician",
			"employer" : "Fundació UPC",
			"dates" : "september 2002 - april 2005",
			"location" : "Terrassa",
			"description" : "Started as a Service desk technician earned the skills to be a System Operator and developed other skills as client orientation, servers deployment, infrastructure improvements and adminitration."
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Centre Psicologic Caldes",
			"dates" : "2014",
			"description" : "It's a website based on Wordpress, it is responsive and beautiful. The URL where you can find it is: http://www.centrepsicologiccaldes.com",
			"images" : ["images/projectCCCaldes.png"]
		},
		{
			"title" : "Unitat d'Obesitat i Transtorns Alimentaris",
			"dates" : "2014",
			"description" : "This is another website based on Wordpress, it is also responsive and I like it very much: http://www.uota.es",
			"images" : ["images/projectUOTA.png"]
		}
	]
};

var bio = {
	"name" : "Marc Codera",
	"role" : "System Administrator",
	"contacts" : {
		"mobile" : "+34645806007",
		"email" : "marc.codera@gmail.com",
		"github" : "marccodera",
		"twitter" : "@marccodera",
		"location" : "Terrassa"
	},
	"welcomeMessage" : "Hi All!",
	"biopic" : "images/me.jpeg",
	"skills" : ["Python", "JavaScript", "VMware", "Hyperconvergence", "Windows Server infrastructure", "Linux Server infrastructure"]
};

var education = {
	"schools" : [
		{
			"name" : "UOC",
			"location" : "Barcelona",
			"degree" : "Computer Science BA",
			"dates" : "2002 - 2012",
			"url" : "http://www.uoc.edu/portal/en/index.html",
			"major" : ["CompSci","English"]
		}
	],
	"onlineCourses" : [
		{
			"school" : "UOC",
			"dates" : "2013",
			"title" : "Introduction to Android Dev CrashCourse",
			"url" : "http://www.uoc.edu/portal/en/index.html"
		},
		{
			"school" : "UOC",
			"dates" : "2014",
			"title" : "HTML5 and CSS CrashCourse",
			"url" : "http://www.uoc.edu/portal/en/index.html"
		},
		{
			"school" : "Coursera - University of California, Irvine",
			"dates" : "2016",
			"tittle" : "An Introduction to Programming the Internet of Things Specialization",
			"url" : "https://www.coursera.org/learn/iot/home/welcome"
		}
	]	
};

var navigationBar = {
	"menu" : [
		{
			"name" : "Home",
			"link" : "#"
		},
		{
			"name" : "Work Experience",
			"link" : "#workExperience"
		},
		{
			"name" : "Projects",
			"link" : "#projects"
		},
		{
			"name" : "Education",
			"link" : "#education"
		},
		{
			"name" : "Where I lived and worked",
			"link" : "#mapDiv"
		}
	]
}

bio.display = function(){
	/* Quiz ** IF!! */
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);

	var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedImage);

	//HTMLContacts = '<dl id="bioContacts"></dl>';
	//$("#header").append(HTMLContacts);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#header").append(formattedMobile);
	
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#header").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#header").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#header").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#header").append(formattedLocation);

	

	if (bio.skills.length > 0) {
		
		$("#header").append(HTMLskillsStart);

		for (i=0; i < bio.skills.length; i++){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}	
	}
}

//function displaywork(){
work.display = function() {
	/* Quiz ** FOR IN !!! ** 
		Migrated to normal for, because of best practices */
	if (work.jobs.length > 0) {
		for (i = 0; i < work.jobs.length; i++) {
			$("#workExperience").append(HTMLworkStart);

			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkEmployerTitle = "";
			formattedWorkEmployerTitle = formattedWorkEmployerTitle.concat(formattedWorkEmployer, formattedWorkTitle);
			
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			//$("#workExperience").append(formattedWorkEmployer " - " formattedWorkTitle);
			//$("#workExperience").append(formattedWorkEmployerTitle);
			//$("#workExperience").append(formattedWorkTitle);
			$(".work-entry:last").append(formattedWorkEmployerTitle);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
}

projects.display = function() {

	if (projects.projects.length > 0){
		for (i = 0; i < projects.projects.length; i++){
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTittle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTittle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			if (projects.projects[i].images.length > 0){
				for (j = 0; j < projects.projects[i].images.length; j++){
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}
	}
}

/* EDUCATION: This Function displays the education var declared before */
education.display = function() {
	/*  Displays Schools information inside the education div in "index.html", 
		in case the education.schools var has something inside */
	if (education.schools.length > 0) {
		$("#education").append(HTMLschoolStart);

		for (i = 0; i < education.schools.length; i++) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);

			var formattedSchoolNameDegree = "";
			formattedSchoolNameDegree = formattedSchoolNameDegree.concat(formattedSchoolName, formattedSchoolDegree);
			// console.log(formattedSchoolNameDegree);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			// var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[i].URL);

			$(".education-entry:last").append(formattedSchoolNameDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			

			if (education.schools[i].major.length > 0) {
				var schoolMajor = "";
				for (n = 0; n < education.schools[i].major.length; n++) {
					schoolMajor = schoolMajor.concat(education.schools[i].major[n]+" ")
				}
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schoolMajor);
					$(".education-entry:last").append(formattedSchoolMajor);
			}
		}
	}

	if (education.onlineCourses.length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);

		for (i = 0; i < education.onlineCourses.length; i++) {
			var formattedOnLineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			var formattedOnLineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);

			var formattedOnlineCourseTitleSchool = "";
			formattedOnlineCourseTitleSchool = formattedOnlineCourseTitleSchool.concat(formattedOnLineCourseTitle, formattedOnLineCourseSchool);

			var formattedOnLineCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
			var formattedOnLineCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
			var formattedOnLineCourseURL = formattedOnLineCourseURL.replace("#", education.onlineCourses[i].url);

			$(".education-entry:last").append(formattedOnlineCourseTitleSchool);
			$(".education-entry:last").append(formattedOnLineCourseDates);
			$(".education-entry:last").append(formattedOnLineCourseURL);

		};
	}
}

navigationBar.display = function () {
	if (navigationBar.menu.length > 0){
		$("#navBar").append(HTMLmenuStart);
		for (i = 0; i < navigationBar.menu.length; i++){
			var formattedMenuItem = HTMLmenuItem.replace("%data%", navigationBar.menu[i].name)
			var formattedMenuItem = formattedMenuItem.replace("%url%", navigationBar.menu[i].link)
			$(".menu-entry:last").append(formattedMenuItem);
		}
	}
}

/* LOCATIONIZER!!!! 
function locationizer(work_obj){
	//var workGiven = work_obj; 
	var locationsArray = [];

	//console.log(work_obj));


	if (work_obj.jobs.length > 0){
		for (job in work_obj.jobs){
			var newLocation = work_obj.jobs[job].location;
			locationsArray.push(newLocation);
		}
		return locationsArray;
	}
	
}
*/

// test locationizer function: 
// console.log(locationizer(work));

function inName(name_obj){
	console.log(name_obj);
	var myArray = name_obj.split(" ");
	var str1 = myArray[0];
	var str2 = myArray[1];

	console.log(str1);
	console.log(str2);

	str2 = str2.toUpperCase();
	var newName = "";
	newName = newName.concat(str1, str2);
	console.log(newName);

	return newName;
}


navigationBar.display();
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

/* Trying to make a smooth scroll for the navigation bar :) */
$('.smooth').on('click', function(){
	$.smoothSchroll({
		scrollElement: $('body'),
		scrollTarget: '#' + this.id
	});
	return false;
});

/* INTERNATIONALIZE BUTTON!!!
$("#main").append(internationalizeButton);
*/

/* LOG Clicks, it shows the location of the clicks on the console if you can see it :)

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);		//Function declared in helper.js
});

*/
