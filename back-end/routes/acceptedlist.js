var express = require('express');
var router = express.Router();
console.log('inside accepted list');
var minNoOfInstagramFollowers = 3000;
var minNoOfPosts = 50;
var minAvgLikes = 250;
var minAvgComments = 20;

var jsonFileName = './dummyacceptedlist.json'
router.get('/', function(req, res) {
	var fs = require("fs");
	// This has to come from APIs in the future.
	// Hardcoded file being used for now.
	fs.readFile(jsonFileName, 'utf8', onFileRead);
	
	// Object to store the applicants who meet the minimum qualifications
	var obj = {
		influencers: []
	};
	// Object to store the influencers who are exceptional
	var objExceptional = {
		exceptionalinfluencers: []
	}
	function onFileRead(err, data) {
		if(err) {
			console.error(err);
		} else {
			var currentPackage = JSON.parse(data);
			console.log(currentPackage.categoryName);
			// Checking for influencers in applicants
			for(var applicants in currentPackage.applicants) {
				var currApplicant = currentPackage.applicants[applicants];
				console.log(applicants + ":" + currApplicant.applicantusername);
				if(minQualification(currApplicant)) {
					obj.influencers.push(currApplicant);
				}
			}

			// Putting the list of accepted influencers into a JSON file to be sent back to API.
			var json = JSON.stringify(obj);
			fs.writeFile('./acceptedlist.json', json, 'utf8', function(err) {
				if(err) {
					return console.error(err);
				}
			});

			// Checking for exceptional influencers in accepted influencers list
			for(var influencers in obj.influencers) {
				var currInfluencer = obj.influencers[influencers];
				if(isExceptional(currInfluencer)) {
					objExceptional.exceptionalinfluencers.push(currInfluencer);	
				}				
			}
			// Putting the list of exceptional influencers into a JSON file to be sent back to API.
			var json = JSON.stringify(objExceptional);
			fs.writeFile('./exceptionallist.json', json, 'utf8', function(err) {
				if(err) {
					return console.error(err);
				}
			});

		}
	}
	console.log("Let\'s go to the webpage now");
	res.render('acceptedlist', { title: 'Here\'s your list of Influencers', json: obj });
});


// Function to check if the applicant meets the minimum qualifications required to become an Influencer.
// data holds the applicant object currently being checked.
// Following checks done:
// Does applicant meet:
// 1. Minimum no of instagram followers?
// 2. Minimum no of post?
// 3. Average likes per post?
// 4. Average comments per post?
function minQualification(data) {
	if(data.noofinstagramfollowers > minNoOfInstagramFollowers && data.noofposts > minNoOfPosts) {
		if(data.averagenooflikes > minAvgLikes && data.averagenoofcomments > minAvgComments) {
			return true;	
		} else {
			return false;
		}		
	} else {
		return false;
	}
}

function isExceptional(data) {
	if(data.commenttofollowerratio > 0.5 && data.liketofollowerratio > 4) {
		return true;
	} else {
		return false;
	}

}
module.exports = router;
