function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService()

	function updateImage(img){
		var imgUrl = img.url;
		document.body.style.backgroundImage = `url('${imgUrl}')`;
	}


	imageService.getImage(updateImage)
}


