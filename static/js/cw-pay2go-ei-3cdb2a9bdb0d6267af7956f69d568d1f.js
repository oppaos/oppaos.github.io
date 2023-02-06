if(typeof window.CWP2GEI=='undefined')var CWP2GEI={};

(function($){

	CWP2GEI.main={

		HandlerID	:CWP2GEI_vars.handler_id, 
		Display		:{}, 

		Init:function(){

			var DIV=$('#'+this.HandlerID+'_fields');

			if(DIV.length===0)return;

			this.LoadCommon(function(){
				DIV.on('change', '#'+CWP2GEI.main.HandlerID+'_billing-invoice-flag', function(e){
					var SEL=e.target;
					CWP2GEI.main.SwitchFlag(SEL);
				});

				CWP2GEI.main.DefineDisplay(DIV);
			});

		}, 

		SwitchFlag:function(SEL){
			//var self=e.target;
			var DIV=$('#'+CWP2GEI.main.HandlerID+'_fields'), 
					P=CWP2GEI.main.Display[SEL.value];

			if(DIV.find('div.active').length>0){
				DIV.find('div.active').removeClass('active');
			}

			if(typeof P=='undefined')return;
			P.parent().addClass('active');

		}, 

		DefineDisplay:function(DIV){

			var self=this;
			var I, SEL=document.getElementById(this.HandlerID+'_billing-invoice-flag');

			DIV.find('*[data-display]').each(function(){
				I=this;
				[].forEach.call($(I).data('display'), function(node, index){
					self.Display[node]=$(I).parents('p');
				});
			});

			this.SwitchFlag(SEL);
		},  

		LoadCommon:function(callback){
			var script=document.createElement('script');
			script.onload=function(){
				if(typeof callback=='function')callback();
			};
			script.src=CWP2GEI_vars.common;
			document.head.appendChild(script);
		}, 

	};

	$(document).ready(function(){
		CWP2GEI.main.Init();
	});

}(jQuery));