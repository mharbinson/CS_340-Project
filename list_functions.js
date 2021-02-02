//*****************************************
//***Person, Place, Event list functions***
//*****************************************

function loadList(listBodyID, targetPageName)
{
	//set event listeners and pointer style for each dynamically populated Person row
	var currentRow = document.getElementById(listBodyID).firstElementChild;
	while (currentRow)
	{
		currentRow.addEventListener("mouseenter", highlightListItem.bind(currentRow));
		currentRow.addEventListener("click", navigateToListItem.bind(currentRow, targetPageName));	
		currentRow.style.cursor = "pointer";
		currentRow = currentRow.nextElementSibling;
	}
}

function highlightListItem()
{
	//highlight the current list item
	var currentRow = this
	currentRow.style.backgroundColor = "yellow";

	//remove any highlight from all other rows
	currentRow = currentRow.nextElementSibling;
	while (currentRow)
	{	
		currentRow.style.backgroundColor = "white";
		currentRow = currentRow.nextElementSibling;
	}
	currentRow = this.previousElementSibling;
	while (currentRow)
	{
		currentRow.style.backgroundColor = "white";
		currentRow = currentRow.previousElementSibling;
	}
}

function navigateToListItem(targetPageName, evnt)
{	
	if (evnt.target.tagName != "BUTTON") //only execute if the column being clicked is not a button column
		document.location.href = targetPageName;
}

//*****************************
//***photo gallery functions***
//*****************************

function loadGallery(galleryParentID)
{
	//set event listeners and pointer style for each dynamically populated Person row
	var currentImage = document.getElementById(galleryParentID).firstElementChild;
	while (currentImage)
	{
		currentImage.addEventListener("mouseenter", highlightGalleryImage.bind(currentImage));
		currentImage.addEventListener("click", navigateToGalleryImage.bind(currentImage));	
		currentImage.style.cursor = "pointer";
		currentImage = currentImage.nextElementSibling;
	}	
}

function highlightGalleryImage()
{
	//highlight the current list item
	var currentImage = this
	currentImage.style.borderStyle = "solid";

	//remove any highlight from all other rows
	currentImage = currentImage.nextElementSibling;
	while (currentImage)
	{	
		currentImage.style.borderStyle = "none";
		currentImage = currentImage.nextElementSibling;
	}
	currentImage = this.previousElementSibling;
	while (currentImage)
	{
		currentImage.style.borderStyle = "none";
		currentImage = currentImage.previousElementSibling;
	}
}

function navigateToGalleryImage()
{
	document.location.href = "photo_profile.html";
}