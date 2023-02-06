jQuery(function ($) {
	$(document).ready(function () {
		$('.woocommerce-form-login label[for="password"]').append('<span style="padding-left:5px;color:red">預設為您的手機密碼</span>');

		var queryString = window.location.search;
		var urlParams = new URLSearchParams(queryString);
		var bot_params = urlParams.get('bot_params')
		if (bot_params) {
			$('.woocommerce-form-login input[name="username"]').val(JSON.parse(atob(bot_params)).email)
		}
	})
})