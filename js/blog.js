//using jquery
/*$(document).ready(function(){
	$("#create").click(function(){
		var title = $("#title").val();
		var category = $("#categories").val();
		var content = $("#content").val();
		var obj = {
			title: title,
			category: category,
			content: content
			date : new Date().toDateString(),
			time: new Date().toLocaleTimeString()
		};
		var posts;
		if (localStorage.getItem("posts") == null){
			posts = [];
		}
		else {
			posts = JSON.parse(localStorage.getItem("posts"));
		}
		posts.push(obj);
		localStorage.setItem("posts", JSON.stringify(posts));
	});
});*/

// Using Vanilla JavaScript

document.body.onload = function(){
	document.getElementById("create").onclick = function(){
		var title = document.getElementById("title").value;
		var category = document.getElementById("categories").value;
		var content = document.getElementById("content").value;
				var obj = {
			title: title,
			category: category,
			content: content,
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