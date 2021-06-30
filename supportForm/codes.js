submit_data_without_check = async function () {
	if (!confirm('آیا صحت اطلاعات را تایید می کنید؟')) return
	var username = document.getElementById('username').value;
	var subject = document.getElementById('subject').value;
	var content = document.getElementById('content').value;

	user_does_exist = await fetch('../api/requests.php' + object_to_query({
		func_name: 'does_user_exist',
		username
	})).then(r => r.text()) == "true"? true:false

	if(!user_does_exist){
		alert('you have to register first')
		//get data from user and register him instantly
		return 
	}
	fetch('../api/requests.php'+object_to_query({
		func_name: 'new_support_message',
		subject,
		content,
		username
	}))
	.then(res => res.text())
	.then(res => {
		if (res == "true") {
			alert('با موفقیت انجام شد');
		}
	})


}
window.onload = function () {
	document.getElementById('submit_data').onclick = submit_data_without_check
}
