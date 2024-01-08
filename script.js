/** @format */
let admin = false;
let pollList = [
	{
		title: 'Kysely asioista',
		description: 'Oletko samaa mieltä?',
		votes: { juu: 0, jaa: 0 },
	},
	{
		title: 'Asioista kyselyjä',
		description: 'Miellätkö samoin?',
		votes: { juu: 0, jaa: 0 },
	},
];

// If password "nimda", reveal admin view
function login() {
	let pswrd = document.getElementById('password').value;

	if (pswrd == 'nimda') {
		admin = true;
	}
	viewToggle();
}

// logout and return view to default
function logout() {
	admin = false;
	viewToggle();
}

// Toggles view between User and Admin
function viewToggle() {
	const stylesheet = document.styleSheets[0];
	let elementRules;

	// Find deleteBtn class from CSS, which is later edited to show or hide style
	for (let i = 0; i < stylesheet.cssRules.length; i++) {
		if (stylesheet.cssRules[i].selectorText === '.deleteBtn') {
			elementRules = stylesheet.cssRules[i];
		}
	}

	if (admin == true) {
		document.getElementById('pollControls').style.display = 'flex';
		document.getElementById('loginBtn').style.display = 'none';
		document.getElementById('logoutBtn').style.display = 'flex';

		elementRules.style.setProperty('display', 'flex');
	} else {
		document.getElementById('pollControls').style.display = 'none';
		document.getElementById('loginBtn').style.display = 'flex';
		document.getElementById('logoutBtn').style.display = 'none';
		document.getElementById('pollCreate').style.display = 'none';

		elementRules.style.setProperty('display', 'none');
	}
}

// reveal add poll creation form
function pollCreate() {
	document.getElementById('pollCreate').style.display = 'block';
	document.getElementById('createBtn').style.display = 'none';

	const node = document.createElement('li');
	const pollNode = document.create;
}

// Checks validity of input from poll creation form, adds it to database, and closes poll creation form
function pollFinalize() {
	let title = document.getElementById('pollTitle').value;
	let description = document.getElementById('pollDescription').value;

	// check that poll name or description is not empty
	if (title == '' || description == '') {
		console.log('Error, empty values');
		document.getElementById('pollNptError').style.display = 'block';
		// Check that poll name is unique
	} else if (!!document.getElementById(title) == true) {
		alert('Äänestys on jo olemassa!');
	} else {
		document.getElementById('pollCreate').style.display = 'none';
		document.getElementById('createBtn').style.display = 'block';

		// Create object and add to array
		let poll = {
			title: title,
			description: description,
			votes: { juu: 0, jaa: 0 },
		};

		pollList.push(poll);
		console.log(pollList);

		// Clean poll form
		document.getElementById('pollTitle').value = '';
		document.getElementById('pollDescription').value = '';
		document.getElementById('pollNptError').style.display = 'none';
		console.log('Äänestys lisätty');
		pollsUpdate();
	}
}

// Delete poll node
function pollDelete(poll_id) {
	pollList.splice(poll_id, 1);
	poll_id.parentNode.remove();
}

function addVote(poll_id) {
	// Find parent element id
	parentID = poll_id.parentNode.id;
	vote = document.querySelector('input[name="' + parentID + '"]:checked');

	if (vote == null) {
		alert('Valitse vaihtoehto!');
	} else {
		// Find correct object from array
		find = pollList.find((poll) => poll.title === parentID);

		if (vote.value == 'juu') {
			find.votes.juu += 1;
		} else if (vote.value == 'jaa') {
			find.votes.jaa += 1;
		}
	}
	// Update visible vote result
	document.getElementById('voteStat' + parentID).textContent =
		'Juu:' + find.votes.juu + ' Jaa:' + find.votes.jaa;
}

function pollsUpdate() {
	const template = document.querySelector('#template');
	const clone = template.content.cloneNode(true);
	const descriptionElement = clone.querySelector('.template-card');

	let polls = document.querySelector('#polls');

	pollList.forEach((i) => {
		console.log(i.title);

		// If elementID not in DOM, create element
		if (!!document.getElementById(i.title) == false) {
			let newClone = descriptionElement.cloneNode(true);
			newClone.querySelector('.template-title').textContent = i.title;
			newClone.querySelector('.template-description').textContent =
				i.description;
			newClone.querySelector('.template-title').textContent = i.title;

			newClone.setAttribute('id', i.title);

			newClone.querySelectorAll('input[type=radio]').forEach((radio) => {
				radio.setAttribute(
					'name',
					radio.getAttribute('name') + i.title
				);
			});
			newClone.querySelector('.template-voteResults').textContent =
				'Juu:' + i.votes.juu + ' Jaa:' + i.votes.jaa;
			newClone.querySelector('.template-voteResults').id =
				'voteStat' + i.title;

			polls.append(newClone);
		}
	});
}
