

document.body.onload = function(){
	document.getElementById("create").onclick = function(){
		var title = document.getElementById("title").value;
		var category = document.getElementById("categories").value;
		var content = document.getElementById("content").value;
		var fileupload = document.getElementById("fileupload").value;
				var obj = {
			title: title,
			category: category,
			content: content,
			fileupload: fileupload,
			date : new Date().toDateString(),
			time: new Date().toLocaleTimeString()
		};
		var Story;
		if (localStorage.getItem("Story") == null){
			Story = [];
		}
		else {
			Story = JSON.parse(localStorage.getItem("Story"));
		}
		Story.push(obj);
		localStorage.setItem("Story", JSON.stringify(Story));

	};
};