var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};

exports.addRSVP = function(request, response) {
var rsvpEmail = request.body.rsvpEmail;
	//print to console the PST request made
	console.log(rsvpEmail);

	data.rsvp.push(rsvpEmail); //add to current data

	//send back data to know it worked
	response.send(rsvpEmail);
};