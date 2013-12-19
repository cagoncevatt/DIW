function createStars() {
	var i;
	var starsElements;
	var starsImg;
	var found;
	
	for (i = 0; i < 5; i++)
	{
		starsImg = 'starsRank'+(i+1);
		$('.'+starsImg).attr('src', 'Resources/Images/'+starsImg+'.png');
	}
}


function changeModalTitle(sendingBtn) {
	if (sendingBtn.id == "createRequestBtn")
	{
		document.getElementById("offerRequestTitle").innerHTML = "Create a New Request";
		document.getElementById("offerReqCreateBtn").setAttribute('class', 'btn btn-warning');
		document.getElementById("offerReqCreateBtn").setAttribute('value', 'Create Request'); 
	}
	else
	{
		document.getElementById("offerRequestTitle").innerHTML = "Create a New Offer";
		document.getElementById("offerReqCreateBtn").setAttribute('class', 'btn btn-success');
		document.getElementById("offerReqCreateBtn").setAttribute('value', 'Create Offer');
	}
}
