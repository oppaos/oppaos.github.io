jQuery(function ($) {
	$(document).ajaxComplete(function () {

		if ($('li[class*="payment_method_wc_chailease_payment_gateway"] input').length > 0) {

			if ($('li.payment_method_chailease').length === 0) {
				var wwcl_payment_btn = `
				<li class="wc_payment_method payment_method_chailease">
					<input id="payment_method_chailease" value="" type="radio" class="input-radio chailease_input">
					<label for="payment_method_chailease">無卡分期 0 利率</label>
					<div class="x-payment_box payment_method_chailease chailease_items" style="position: relative;
					box-sizing: border-box;
					width: 100%;
					padding: 1em;
					margin: 1em 0;
					font-size: .92em;
					border-radius: 2px;
					line-height: 1.5;
					background-color: #efefef;
					color: #515151;">
					<span style="
					display: block;
					border: 1em solid #efefef;
					border-right-color: transparent;
					border-left-color: transparent;
					border-top-color: transparent;
					position: absolute;
					top: -.75em;
					left: 0;
					margin: -1em 0 0 2em;"></span></div>
				</li>
				`;
				$('ul.wc_payment_methods').append(wwcl_payment_btn);

				$('li[class*="payment_method_wc_chailease_payment_gateway"] input').each(function () {
					$(this).prependTo($(this).next());
				})
				$('li[class*="payment_method_wc_chailease_payment_gateway"] label').appendTo('div.payment_method_chailease')
			}

			$('#payment_method_chailease').prop('checked', false);

			$('#payment_method_chailease').on('change', function () {
				$('li.wc_payment_method input[name="payment_method"]').prop('checked', false)
				//$('div.payment_method_chailease').slideDown();
				//$('.payment_box:not(.payment_method_chailease)').slideUp();
			})

			$('.wc_payment_method:not(.payment_method_chailease)').on('change',function(){
				//$('div.payment_method_chailease').slideUp();
				$('#payment_method_chailease').prop('checked',false)
			})

			if ($('input[id*=payment_method_wc_chailease_payment_gateway]').is(':checked')) {
				$('#payment_method_chailease').prop('checked', true);
				$('div.payment_method_chailease').show();
			}
		}

	})

})
