if(Shopify.checkout != undefined){
	
		function include(filename, onload) {
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.src = filename;
			script.type = 'text/javascript';
			script.onload = script.onreadystatechange = function() {
				if (script.readyState) {
					if (script.readyState === 'complete' || script.readyState === 'loaded') {
						script.onreadystatechange = null;                                                  
						onload();
					}
				} 
				else {
					onload();          
				}
			};
			head.appendChild(script);
		}

		/* var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://api.ipify.org?format=jsonp&callback=getIP";
		document.getElementsByTagName("head")[0].appendChild(script);
		function getIP(json) {
				var d = new Date();
				d.setTime(d.getTime() + (30*24*60*60*1000));
				var expires = "expires="+ d.toUTCString();
				var cookiepath = "/"; // accessible from every web page of the domain
			document.cookie = "CURRENTIPADDRESS= "+json.ip+";" + expires + ";path=" + cookiepath;
		} */

	if ((typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 1.7)) {
		  include('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function() {
				$(document).ready(function() {
				var htm = `	<script language="JavaScript" src="https://www.affilo.io/libs/popup/script.js"></script>
							<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
							<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
							<link rel="stylesheet" type="text/css" href="https://www.affilo.io/libs/popup/style.css">
							<div class="hover_bkgr_fricc" style="display:none;">
								<span class="helper"></span>
								<div>
									<div class="popupCloseButton"><img src="https://affilo.io/libs/popup/close.png" alt="close"></div>
									<div id="ex1" class="my_modal">
										<div class="text_centered BannerImg">
											<img src="" alt="">
										</div>
										<div class="modal-content">
											<h1 class="text_centered" id="heading_text_sect">Get <span class="highlight">15%</span> when friends or followers buy</h1>
										</div>
										<div class="with-shadow">
											<div class="modal-content1">
												<p class="instruction" id="textbox_title_text_sect">This is your referral link. We\'ve also emailed you the instructions!</p>
												<div class="form">
													<div class="my_link"><input type="text" value="https://globalresumes.myshopify.com?ref:MTMuNzAuNzguVA" style="width:100%;font-size: 14px;" id="affiliate_link_sect" readonly></div>
													<button onclick="copyLink();">Copy Link</button>
												</div>
											</div>
										</div>	
										<div class="modal-content">
											<p class="text_centered" id="sharing_text_sect">Start sharing and earning!</p>
											<div class="social-panel" id="shareBtn">
												<div class="social-icon facebook"><a href="" target="_blank" class="btn-facebook"><i class="fa fa-facebook fa-stack-1x"></i></a></div>
												<div class="social-icon twitter"><a href="" target="_blank" class="btn-twitter"><i class="fa fa-twitter fa-stack-1x"></i></a></div>
												<div class="social-icon google"><a href="" target="_blank" class="btn-googleplus"><i class="fa fa-google-plus fa-stack-1x"></i></a>	</div>
												<div class="social-icon linkedin"><a href="" target="_blank" class="btn-linkedin"><i class="fa fa-linkedin fa-stack-1x"></i></a></div>
												<div class="social-icon pinterest"><a href="" target="_blank" class="btn-pinterest"><i class="fa fa-pinterest fa-stack-1x"></i></a></div>
											</div>
										</div>
										
									</div>
								</div>
							</div><script>function copyLink(){ var copyText = document.getElementById("affiliate_link_sect");copyText.select(); document.execCommand("copy"); alert("Affiliate link copied!!"); }</script>`;

				// var htm = '<script src="https://www.affilo.io/libs/popup/jquery.min.js"></script><script language="JavaScript" src="https://www.affilo.io/libs/popup/script.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" href="https://affilo.io/libs/post_purchase_popup.css"><link rel="stylesheet" type="text/css" href="https://www.affilo.io/libs/popup/style.css"><div class="hover_bkgr_fricc" style="display:none;"><span class="helper"></span><div><div class="popupCloseButton">X</div><div id="ex1" class="modal my_modal"><div class="image-panel text_centered BannerImg"></div><div class="modal-content"><h1 class="text_centered" id="heading_text_sect">Get <span class="highlight">15%</span> when friends or followers buy</h1></div><div class="with-shadow"><div class="modal-content"><p class="instruction" id="textbox_title_text_sect">This is your referral link. We\'ve also emailed you the instructions!</p><div class="form"><div class="my_link" id="affiliate_link_sect">https://yourwebsite.com/ref:aues4589</div><button onclick="copyLink();">Copy Link</button></div></div></div><div class="modal-content"><p class="text_centered" id="sharing_text_sect">Start sharing and earning!</p><div class="social-panel" id="shareBtn"><div class="social-icon facebook"><a href="" target="_blank" class="btn-facebook"><i class="fa fa-facebook fa-stack-1x"></i></a></div><div class="social-icon twitter"><a href="" target="_blank" class="btn-twitter"><i class="fa fa-twitter fa-stack-1x"></i></a></div><div class="social-icon google"><a href="" target="_blank" class="btn-googleplus"><i class="fa fa-google-plus fa-stack-1x"></i></a>	</div><div class="social-icon linkedin"><a href="" target="_blank" class="btn-linkedin"><i class="fa fa-linkedin fa-stack-1x"></i></a></div><div class="social-icon pinterest"><a href="" target="_blank" class="btn-pinterest"><i class="fa fa-pinterest fa-stack-1x"></i></a></div></div></div></div>';
			
			$('.content').prepend(htm);
						
			$('.popupCloseButton').click(function(){
				$('.hover_bkgr_fricc').hide();
			});
		
			var order_number = (jQuery(".os-order-number").text()).match(/\d+/)[0];
			var rc = "";
			var cu = "";
			var lrf = ""; 
			var lcu = "";
			var ci = "";
			//console.log(Shopify);
			var amount = Shopify.checkout.total_price;
			var imgAsset = "";
			var order_id = Shopify.checkout.order_id;
			var created = Shopify.checkout.created_at;
			var email = Shopify.checkout.email;
			var fname = Shopify.checkout.billing_address.first_name;
			var lname = Shopify.checkout.billing_address.last_name;
			var customer_email = Shopify.checkout.email;
			var customer_phone = Shopify.checkout.phone; 
			var CURRENCY = Shopify.checkout.currency;
			var total_price_usd = ""; 
			var total_line_items_price = Shopify.checkout.total_price;
			var browser_ip = ""; 
			var OID = order_number;
			//console.log(Shopify.checkout.shipping_rate);
			
			var shipping_price = 0;
			if(Shopify.checkout.shipping_rate != undefined){
				var shipping_price = Shopify.checkout.shipping_rate.price;
			}else{
				$('span').each(function(){
					if (typeof ($(this).attr('data-checkout-total-shipping-target'))  !== "undefined"){
						shipping_price = parseFloat($(this).attr('data-checkout-total-shipping-target'))/100;			
					}
				});
			}
			
			var tax_price = Shopify.checkout.total_tax;
			var TAX_TITLE1 = "";
			var tax_price1 = "";
			var Tax_RATE1 = "";
			var ITEM1 = "";
			var prodID1 = "";
			var IMAGE1 = "";
			var AMT1 = "";
			var QTY1 = "";
			var TAX1 = ""; 
			var disCode1 = ""; 
			var disAmt1 = ""; 
			var disSaving1 = "";
			var disTitle1 = ""; 
			var disTotAmt1 = ""; 
			if (Shopify.checkout.discount != null){
				var disCode1 = Shopify.checkout.discount.code; 
				var disAmt1 = Shopify.checkout.discount.amount; 
				var disSaving1 = "";
				var disTitle1 = Shopify.checkout.discount.code; 
				var disTotAmt1 = Shopify.checkout.discount.amount; 
			}
			var disTotSaving1 = "";
			var disType1 = "PercentageDiscount";
			var ProductList = Shopify.checkout.line_items; 
			
		/* var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://api.ipify.org?format=jsonp&callback=getIP";
		document.getElementsByTagName("head")[0].appendChild(script); */
		
		function getCookie(cname){
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for(var i = 0; i <ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}

		var getcookie = getCookie("refApp");
			var lastOrdId = getCookie("lastOrderIdGlobal");
			var lastrefAppCode = getCookie("lastrefAppCode");
			var getcookieRefUrl = getCookie("refAppUrl");
			var lastOrderWebsite = getCookie("lastOrderWebsite");
			var lastOrderId = getCookie("lastOrderId");
			var getcookieLastUrl =  getCookie("lastCurrentUrl");
			var currentUrl = window.location.href;
			var currentIp = getCookie("CURRENTIPADDRESS");
			var ORDID = order_number;
			var APICALLSTATUS = true;
			if((lastOrderId != undefined)&&(lastOrderId==ORDID)){
				APICALLSTATUS = false;
			}
			
			//var xhttp1 = new XMLHttpRequest();
			 var RequestUrl = "https://affilo.io/track_order?rc="+ getcookie +"&cu="+ currentUrl +"&lrc="+ lastrefAppCode +"&lrf="+ getcookieRefUrl +"&lcu="+ getcookieLastUrl +"&ci="+ currentIp +"&lOW="+ lastOrderWebsite +"&LOI="+ lastOrderId;
			 RequestUrl += "&amount="+amount+"+&imgAsset=&order-id="+order_id+"&created="+created+"&email="+email+"&fname="+fname+"&lname="+lname+"&customer_email="+customer_email+"&customer_phone="+customer_email+"&CURRENCY="+CURRENCY+"&total_price_usd=&total_line_items_price="+total_line_items_price+"&browser_ip=&OID="+OID+"&shipping_price="+shipping_price+"&tax_price="+tax_price;
	 
			$.each(ProductList, function(key, val){
				RequestUrl += "&ITEM"+key+"="+val.title;
				RequestUrl += "&prodID"+key+"="+val.product_id;
				RequestUrl += "&variantID"+key+"="+val.variant_id;
				RequestUrl += "&variantTitle"+key+"="+val.variant_title;
				RequestUrl += "&IMAGE"+key+"="+val.image_url;
				RequestUrl += "&AMT"+key+"="+val.price;
				RequestUrl += "&QTY"+key+"="+val.quantity;
				RequestUrl += "&TAX"+key+"=";
				//console.log(key + val.product_id + val.title + val.quantity + val.image_url);
			});
			RequestUrl += "&disCode1="+disCode1+"&disAmt1="+disAmt1+"&disTotAmt1="+disTotAmt1+"&disType1="+disType1;
			//console.log(RequestUrl);
			/* xhttp1.open("GET", RequestUrl, true);
			if(APICALLSTATUS){
				xhttp1.send();			
			} */
			
			$.ajax({
					url: RequestUrl,                       
					type: 'get',
					success: function(response){
					}
				 });
			
			
			
			if(ORDID!=""){			
				var d = new Date();
				d.setTime(d.getTime() + (30*24*60*60*1000));
				var expires = "expires="+ d.toUTCString();
				var cookiepath = "/"; // accessible from every web page of the domain
				document.cookie = "lastOrderWebsite = " + window.location.hostname + ";" + expires + ";path=" + cookiepath;
				document.cookie = "lastOrderId = "+ORDID+";" + expires + ";path=" + cookiepath;
				document.cookie = "lastOrderIdGlobal = "+ORDID+";" + expires + ";path=" + cookiepath;
				document.cookie = "lastrefAppCode = "+getcookie+";" + expires + ";path=" + cookiepath;
			}
			var RequestUrl1 = "https://affilo.io/pages/check_popup?rc="+ getcookie +"&cu="+ currentUrl +"&lrf="+ getcookieRefUrl +"&lcu="+ getcookieLastUrl +"&ci="+ currentIp +"&lOW="+ lastOrderWebsite +"&LOI="+ lastOrderId;
			 RequestUrl1 += "&amount="+amount+"+&imgAsset=&order-id="+order_id+"&created="+created+"&email="+email+"&fname="+fname+"&lname="+lname+"&customer_email="+customer_email+"&customer_phone="+customer_email+"&CURRENCY="+CURRENCY+"&total_price_usd=&total_line_items_price="+total_line_items_price+"&browser_ip=&OID="+OID+"&shipping_price="+shipping_price+"&tax_price="+tax_price;
	 
			$.each(ProductList, function(key, val){
				RequestUrl1 += "&ITEM"+key+"="+val.title;
				RequestUrl1 += "&prodID"+key+"="+val.product_id;
				RequestUrl += "&variantID"+key+"="+val.variant_id;
				RequestUrl += "&variantTitle"+key+"="+val.variant_title;
				RequestUrl1 += "&IMAGE"+key+"="+val.image_url;
				RequestUrl1 += "&AMT"+key+"="+val.price;
				RequestUrl1 += "&QTY"+key+"="+val.quantity;
				RequestUrl1 += "&TAX"+key+"=";
				//console.log(key + val.product_id + val.title + val.quantity + val.image_url);
			});
			RequestUrl1 += "&disCode1="+disCode1+"&disAmt1="+disAmt1+"&disTotAmt1="+disTotAmt1+"&disType1="+disType1;
			$.ajax({
					url: RequestUrl1,                       
					type: 'get',
					success: function(response){
						var res = (atob(response)).split("___");
						//console.log(res);
						if(res[0]==1){
							jQuery("#heading_text_sect").html(res[1]);
							jQuery("#sharing_text_sect").html(res[2]);
							jQuery("#textbox_title_text_sect").html(res[3]);
							jQuery("#affiliate_link_sect").val(res[4]);
							// jQuery(".image-panel").css('background-image','url('+ res[5] +') !IMPORTANT;');
							// jQuery(".image-panel").css('background-size','cover !IMPORTANT;');
							jQuery(".BannerImg").html('<div class="img-holder" style="background-image:url('+ res[5] +') !IMPORTANT;background-size: cover;">   </div>   ');
							jQuery("#shareBtn").attr("data-url", res[4]);
							jQuery("#shareBtn").attr("data-title", res[6]);
							
							jQuery(".btn-facebook").attr("href", res[7]);
							jQuery(".btn-twitter").attr("href", res[8]);
							jQuery(".btn-googleplus").attr("href", res[9]);
							jQuery(".btn-linkedin").attr("href", res[10]);
							//jQuery(".btn-instagram").attr("href", res[11]);
							jQuery(".btn-pinterest").attr("href", res[12]);
							//jQuery("#ShowPopup").trigger("click");
							$('.hover_bkgr_fricc').show();
						}
					}
				 });
					
				});
			});
	}else{
		
		$(document).ready(function() {
				var htm = `	<script language="JavaScript" src="https://www.affilo.io/libs/popup/script.js"></script>
							<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
							<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
							<link rel="stylesheet" type="text/css" href="https://www.affilo.io/libs/popup/style.css">
							<div class="hover_bkgr_fricc" style="display:none;">
								<span class="helper"></span>
								<div>
									<div class="popupCloseButton"><img src="https://affilo.io/libs/popup/close.png" alt="close"></div>
									<div id="ex1" class="my_modal">
										<div class="text_centered BannerImg">
											<img src="" alt="">
										</div>
										<div class="modal-content">
											<h1 class="text_centered" id="heading_text_sect">Get <span class="highlight">15%</span> when friends or followers buy</h1>
										</div>
										<div class="with-shadow">
											<div class="modal-content1">
												<p class="instruction" id="textbox_title_text_sect">This is your referral link. We\'ve also emailed you the instructions!</p>
												<div class="form">
													<div class="my_link"><input type="text" value="https://globalresumes.myshopify.com?ref:MTMuNzAuNzguVA" style="width:100%;font-size: 14px;" id="affiliate_link_sect" readonly></div>
													<button onclick="copyLink();">Copy Link</button>
												</div>
											</div>
										</div>	
										<div class="modal-content">
											<p class="text_centered" id="sharing_text_sect">Start sharing and earning!</p>
											<div class="social-panel" id="shareBtn">
												<div class="social-icon facebook"><a href="" target="_blank" class="btn-facebook"><i class="fa fa-facebook fa-stack-1x"></i></a></div>
												<div class="social-icon twitter"><a href="" target="_blank" class="btn-twitter"><i class="fa fa-twitter fa-stack-1x"></i></a></div>
												<div class="social-icon google"><a href="" target="_blank" class="btn-googleplus"><i class="fa fa-google-plus fa-stack-1x"></i></a>	</div>
												<div class="social-icon linkedin"><a href="" target="_blank" class="btn-linkedin"><i class="fa fa-linkedin fa-stack-1x"></i></a></div>
												<div class="social-icon pinterest"><a href="" target="_blank" class="btn-pinterest"><i class="fa fa-pinterest fa-stack-1x"></i></a></div>
											</div>
										</div>
										
									</div>
								</div>
							</div><script>function copyLink(){ var copyText = document.getElementById("affiliate_link_sect");copyText.select(); document.execCommand("copy"); alert("Affiliate link copied!!"); }</script>`;

				// var htm = '<script src="https://www.affilo.io/libs/popup/jquery.min.js"></script><script language="JavaScript" src="https://www.affilo.io/libs/popup/script.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" href="https://affilo.io/libs/post_purchase_popup.css"><link rel="stylesheet" type="text/css" href="https://www.affilo.io/libs/popup/style.css"><div class="hover_bkgr_fricc" style="display:none;"><span class="helper"></span><div><div class="popupCloseButton">X</div><div id="ex1" class="modal my_modal"><div class="image-panel text_centered BannerImg"></div><div class="modal-content"><h1 class="text_centered" id="heading_text_sect">Get <span class="highlight">15%</span> when friends or followers buy</h1></div><div class="with-shadow"><div class="modal-content"><p class="instruction" id="textbox_title_text_sect">This is your referral link. We\'ve also emailed you the instructions!</p><div class="form"><div class="my_link" id="affiliate_link_sect">https://yourwebsite.com/ref:aues4589</div><button onclick="copyLink();">Copy Link</button></div></div></div><div class="modal-content"><p class="text_centered" id="sharing_text_sect">Start sharing and earning!</p><div class="social-panel" id="shareBtn"><div class="social-icon facebook"><a href="" target="_blank" class="btn-facebook"><i class="fa fa-facebook fa-stack-1x"></i></a></div><div class="social-icon twitter"><a href="" target="_blank" class="btn-twitter"><i class="fa fa-twitter fa-stack-1x"></i></a></div><div class="social-icon google"><a href="" target="_blank" class="btn-googleplus"><i class="fa fa-google-plus fa-stack-1x"></i></a>	</div><div class="social-icon linkedin"><a href="" target="_blank" class="btn-linkedin"><i class="fa fa-linkedin fa-stack-1x"></i></a></div><div class="social-icon pinterest"><a href="" target="_blank" class="btn-pinterest"><i class="fa fa-pinterest fa-stack-1x"></i></a></div></div></div></div>';
			
			$('.content').prepend(htm);
						
			$('.popupCloseButton').click(function(){
				$('.hover_bkgr_fricc').hide();
			});
		
			var order_number = (jQuery(".os-order-number").text()).match(/\d+/)[0];
			var rc = "";
			var cu = "";
			var lrf = ""; 
			var lcu = "";
			var ci = "";
			//console.log(Shopify);
			var amount = Shopify.checkout.total_price;
			var imgAsset = "";
			var order_id = Shopify.checkout.order_id;
			var created = Shopify.checkout.created_at;
			var email = Shopify.checkout.email;
			var fname = Shopify.checkout.billing_address.first_name;
			var lname = Shopify.checkout.billing_address.last_name;
			var customer_email = Shopify.checkout.email;
			var customer_phone = Shopify.checkout.phone; 
			var CURRENCY = Shopify.checkout.currency;
			var total_price_usd = ""; 
			var total_line_items_price = Shopify.checkout.total_price;
			var browser_ip = ""; 
			var OID = order_number;
			//console.log(Shopify.checkout.shipping_rate);
			
			var shipping_price = 0;
			if(Shopify.checkout.shipping_rate != undefined){
				var shipping_price = Shopify.checkout.shipping_rate.price;
			}else{
				$('span').each(function(){
					if (typeof ($(this).attr('data-checkout-total-shipping-target'))  !== "undefined"){
						shipping_price = parseFloat($(this).attr('data-checkout-total-shipping-target'))/100;			
					}
				});
			}
			
			var tax_price = Shopify.checkout.total_tax;
			var TAX_TITLE1 = "";
			var tax_price1 = "";
			var Tax_RATE1 = "";
			var ITEM1 = "";
			var prodID1 = "";
			var IMAGE1 = "";
			var AMT1 = "";
			var QTY1 = "";
			var TAX1 = ""; 
			var disCode1 = ""; 
			var disAmt1 = ""; 
			var disSaving1 = "";
			var disTitle1 = ""; 
			var disTotAmt1 = ""; 
			if (Shopify.checkout.discount != null){
				var disCode1 = Shopify.checkout.discount.code; 
				var disAmt1 = Shopify.checkout.discount.amount; 
				var disSaving1 = "";
				var disTitle1 = Shopify.checkout.discount.code; 
				var disTotAmt1 = Shopify.checkout.discount.amount; 
			}
			var disTotSaving1 = "";
			var disType1 = "PercentageDiscount";
			var ProductList = Shopify.checkout.line_items; 
			
		/* var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://api.ipify.org?format=jsonp&callback=getIP";
		document.getElementsByTagName("head")[0].appendChild(script); */
		
		function getCookie(cname){
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for(var i = 0; i <ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}

		var getcookie = getCookie("refApp");
			var lastOrdId = getCookie("lastOrderIdGlobal");
			var lastrefAppCode = getCookie("lastrefAppCode");
			var getcookieRefUrl = getCookie("refAppUrl");
			var lastOrderWebsite = getCookie("lastOrderWebsite");
			var lastOrderId = getCookie("lastOrderId");
			var getcookieLastUrl =  getCookie("lastCurrentUrl");
			var currentUrl = window.location.href;
			var currentIp = getCookie("CURRENTIPADDRESS");
			var ORDID = order_number;
			var APICALLSTATUS = true;
			if((lastOrderId != undefined)&&(lastOrderId==ORDID)){
				APICALLSTATUS = false;
			}
			
			//var xhttp1 = new XMLHttpRequest();
			 var RequestUrl = "https://affilo.io/track_order?rc="+ getcookie +"&cu="+ currentUrl +"&lrc="+ lastrefAppCode +"&lrf="+ getcookieRefUrl +"&lcu="+ getcookieLastUrl +"&ci="+ currentIp +"&lOW="+ lastOrderWebsite +"&LOI="+ lastOrderId;
			 RequestUrl += "&amount="+amount+"+&imgAsset=&order-id="+order_id+"&created="+created+"&email="+email+"&fname="+fname+"&lname="+lname+"&customer_email="+customer_email+"&customer_phone="+customer_email+"&CURRENCY="+CURRENCY+"&total_price_usd=&total_line_items_price="+total_line_items_price+"&browser_ip=&OID="+OID+"&shipping_price="+shipping_price+"&tax_price="+tax_price;
	 
			$.each(ProductList, function(key, val){
				RequestUrl += "&ITEM"+key+"="+val.title;
				RequestUrl += "&prodID"+key+"="+val.product_id;
				RequestUrl += "&variantID"+key+"="+val.variant_id;
				RequestUrl += "&variantTitle"+key+"="+val.variant_title;
				RequestUrl += "&IMAGE"+key+"="+val.image_url;
				RequestUrl += "&AMT"+key+"="+val.price;
				RequestUrl += "&QTY"+key+"="+val.quantity;
				RequestUrl += "&TAX"+key+"=";
				//console.log(key + val.product_id + val.title + val.quantity + val.image_url);
			});
			RequestUrl += "&disCode1="+disCode1+"&disAmt1="+disAmt1+"&disTotAmt1="+disTotAmt1+"&disType1="+disType1;
			//console.log(RequestUrl);
			/* xhttp1.open("GET", RequestUrl, true);
			if(APICALLSTATUS){
				xhttp1.send();			
			} */
			
			$.ajax({
					url: RequestUrl,                       
					type: 'get',
					success: function(response){
					}
				 });
			
			
			
			if(ORDID!=""){			
				var d = new Date();
				d.setTime(d.getTime() + (30*24*60*60*1000));
				var expires = "expires="+ d.toUTCString();
				var cookiepath = "/"; // accessible from every web page of the domain
				document.cookie = "lastOrderWebsite = " + window.location.hostname + ";" + expires + ";path=" + cookiepath;
				document.cookie = "lastOrderId = "+ORDID+";" + expires + ";path=" + cookiepath;
				document.cookie = "lastOrderIdGlobal = "+ORDID+";" + expires + ";path=" + cookiepath;
				document.cookie = "lastrefAppCode = "+getcookie+";" + expires + ";path=" + cookiepath;
			}
			var RequestUrl1 = "https://affilo.io/pages/check_popup?rc="+ getcookie +"&cu="+ currentUrl +"&lrf="+ getcookieRefUrl +"&lcu="+ getcookieLastUrl +"&ci="+ currentIp +"&lOW="+ lastOrderWebsite +"&LOI="+ lastOrderId;
			 RequestUrl1 += "&amount="+amount+"+&imgAsset=&order-id="+order_id+"&created="+created+"&email="+email+"&fname="+fname+"&lname="+lname+"&customer_email="+customer_email+"&customer_phone="+customer_email+"&CURRENCY="+CURRENCY+"&total_price_usd=&total_line_items_price="+total_line_items_price+"&browser_ip=&OID="+OID+"&shipping_price="+shipping_price+"&tax_price="+tax_price;
	 
			$.each(ProductList, function(key, val){
				RequestUrl1 += "&ITEM"+key+"="+val.title;
				RequestUrl1 += "&prodID"+key+"="+val.product_id;
				RequestUrl += "&variantID"+key+"="+val.variant_id;
				RequestUrl += "&variantTitle"+key+"="+val.variant_title;
				RequestUrl1 += "&IMAGE"+key+"="+val.image_url;
				RequestUrl1 += "&AMT"+key+"="+val.price;
				RequestUrl1 += "&QTY"+key+"="+val.quantity;
				RequestUrl1 += "&TAX"+key+"=";
				//console.log(key + val.product_id + val.title + val.quantity + val.image_url);
			});
			RequestUrl1 += "&disCode1="+disCode1+"&disAmt1="+disAmt1+"&disTotAmt1="+disTotAmt1+"&disType1="+disType1;
			$.ajax({
					url: RequestUrl1,                       
					type: 'get',
					success: function(response){
						var res = (atob(response)).split("___");
						//console.log(res);
						if(res[0]==1){
							jQuery("#heading_text_sect").html(res[1]);
							jQuery("#sharing_text_sect").html(res[2]);
							jQuery("#textbox_title_text_sect").html(res[3]);
							jQuery("#affiliate_link_sect").val(res[4]);
							// jQuery(".image-panel").css('background-image','url('+ res[5] +') !IMPORTANT;');
							// jQuery(".image-panel").css('background-size','cover !IMPORTANT;');
							jQuery(".BannerImg").html('<div class="img-holder" style="background-image:url('+ res[5] +') !IMPORTANT;background-size: cover;">   </div>   ');
							jQuery("#shareBtn").attr("data-url", res[4]);
							jQuery("#shareBtn").attr("data-title", res[6]);
							
							jQuery(".btn-facebook").attr("href", res[7]);
							jQuery(".btn-twitter").attr("href", res[8]);
							jQuery(".btn-googleplus").attr("href", res[9]);
							jQuery(".btn-linkedin").attr("href", res[10]);
							//jQuery(".btn-instagram").attr("href", res[11]);
							jQuery(".btn-pinterest").attr("href", res[12]);
							//jQuery("#ShowPopup").trigger("click");
							$('.hover_bkgr_fricc').show();
						}
					}
				 });
					
				});
			
	}

}