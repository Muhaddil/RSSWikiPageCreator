function generateGalleryArray() {
	const array = [
		'',
		'Landscape',
		'Night View',
		'Cave System',
		'Analysis Visor',
		'Moon Exploration Guide',
		'Moon Page',
		'Planet Page',
		'System Page',
		'Galaxy Map'
	];

	pageData.galleryArray = array;
}

function galleryExplanationExternal() {
	return `There is a preferred order of pictures:
	<div class='dialog-center'>
		<ol class='dialog-list'>
			<li>Landscape</li>
			<li>Night View</li>
			<li>Cave System</li>
			<li>Analysis Visor</li>
			<li>Moon Exploration Guide</li>
			<li>Moon Page</li>
			<li>Planet Page</li>
			<li>System Page</li>
			<li>Galaxy Map</li>
		</ol>
	</div>`
}