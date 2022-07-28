/* override functions api.jquery.js */
Shopify.onItemAdded = function(line_item) {
  Shopify.getCart();
};

Shopify.onCartUpdate = function(cart) {
  Shopify.cartUpdateInfo(cart, '.single-cart-item-loop');
  
  const totalQty = cart.items.reduce((totalQt,lineItem) => {
    if(typeof lineItem.quantity == 'number');
    {
      return totalQt = totalQt + lineItem.quantity;  
    }
    return totalQt;
  },0);
  
  
  if(totalQty >= 8)
  {
    if(jQuery('.order-online-text > p').length > 0)
    {
      jQuery('.order-online-text > p').html('<p>Congratulations! You are eligible for Free Shipping!')
    }
    else
    {
      jQuery('.order-online-text').append('<p>Congratulations! You are eligible for Free Shipping!</p>')
    } 
    
  }
  else
  {
    if(jQuery('.order-online-text > p').length > 0)
    {
      jQuery('.order-online-text > p').html('Free Shipping on <span style="color: red;">'+ Math.abs(8-totalQty) + '</span> items or more.');
    }
    else
    {
      jQuery('.order-online-text').append('<p>Free Shipping on <span style="color: red;">'+ Math.abs(8-totalQty) + '</span> items or more.</p>');
    } 
  }

};

Shopify.onError = function(XMLHttpRequest, textStatus) {
  var data = eval('(' + XMLHttpRequest.responseText + ')');
  if (!!data.message) {
    var str = data.description;
  } else {
   	var str = 'Error : ' + Shopify.fullMessagesFromErrors(data).join('; ') + '.';
  }
  jQuery('.error_message').text(str);
  jQuery('#modalAddToCartError').modal("toggle");
  setTimeout(function () {
  	jQuery('.shopping__cart').removeClass("shopping__cart__on");
    jQuery('.body__overlay').removeClass("is-visible");
  },2000);
}

Shopify.addItem = function(variant_id, quantity, callback) {
  var quantity = quantity || 1;
  var params = {
    type: 'POST',
    url: '/cart/add.js',
    data: 'quantity=' + quantity + '&id=' + variant_id,
    dataType: 'json',
    success: function(line_item) {
      if ((typeof callback) === 'function') {
        callback(line_item);
      }
      else {
        Shopify.cartPopap(variant_id);
        Shopify.onItemAdded(line_item);
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      Shopify.onError(XMLHttpRequest, textStatus);
    }
  };
  jQuery.ajax(params);
};

Shopify.addItemFromForm = function(form_id, variant_id,callback) {
    var params = {
      type: 'POST',
      url: '/cart/add.js',
      beforeSend: function(){
        if(form_id == "add-item-qv") {
          jQuery('#' + form_id).find(".addtocartqv").html(jQuery(".quickViewModal_info .button_wait").html());
        }
      },
      data: jQuery('#' + form_id).serialize(),
      dataType: 'json',
      success: function(line_item) {
        if ((typeof callback) === 'function') {
          callback(line_item);
        }
        else {
          if(form_id != "add-item-qv") {
            Shopify.cartPopapForm(variant_id);
          } else {
          	jQuery('#' + form_id).find(".addtocartqv").html(jQuery(".quickViewModal_info .button_added").html());
            jQuery('#' + form_id).find(".addtocartqv").addClass("added_in_cart");
            setTimeout(function(){
              	jQuery('#' + form_id).find(".addtocartqv").removeClass("added_in_cart");
            	jQuery('#' + form_id).find(".addtocartqv").html(jQuery(".quickViewModal_info .button").html());
            }, 2000);
          }
          Shopify.onItemAdded(line_item);
        }
      },
      error: function(XMLHttpRequest, textStatus) {
        if(form_id != "add-item-qv") {
          Shopify.onError(XMLHttpRequest, textStatus);
        } else {
          jQuery('#' + form_id).find(".addtocartqv").html(jQuery(".quickViewModal_info .button_error").html());
          jQuery('#' + form_id).find(".addtocartqv").addClass("error_in_cart");
          setTimeout(function(){
            jQuery('#' + form_id).find(".addtocartqv").removeClass("error_in_cart");
            jQuery('#' + form_id).find(".addtocartqv").html(jQuery(".quickViewModal_info .button").html());
          }, 2000);
        }
        Shopify.onItemAdded(line_item);
      }
    };
    jQuery.ajax(params);
};

/* user functions */

Shopify.addItemFromFormStart = function(form, product_id) {
  Shopify.addItemFromForm(form, product_id);
}

Shopify.cartPopap = function(variant_id) {
	// Disable popup and enable the side drawer.
    jQuery('#cart-overlay').addClass('active-cart-overlay');
	jQuery('.cart-overlay-close').addClass('active').removeClass('inactive');
	jQuery('body').addClass('active-body-search-overlay');
  	/*
  	var image = jQuery('.'+variant_id+':first .popup_cart_image').attr("src");
  	var title = jQuery('.'+variant_id+':first .popup_cart_title').text();
   // var propPrice = jQuery('#product_current_price').text();
  	jQuery('.popupimage').attr("src",''+image+'');
  	jQuery('.productmsg').text(''+title+'');  
    //jQuery('.pop_current_price').text('"'+ propPrice +'"');
  	jQuery('#modalAddToCart').modal("toggle");
  setTimeout(function(){
  $('#modalAddToCart').modal('hide')
}, 3000);
   */
}
Shopify.cartPopapForm = function(variant_id) {
  	var image = jQuery('.product_variant_image').attr("src");
  	var title = jQuery('#popup_cart_title').text();
  	jQuery('.popupimage').attr("src",''+image+'');
	jQuery('.productmsg').text('"'+title+'"');
	jQuery('#modalAddToCart').modal("toggle");
  setTimeout(function(){
  $('#modalAddToCart').modal('hide')
}, 3000);
}

Shopify.cartUpdateInfo = function(cart, cart_cell_id) {
  
if(typeof window.BOLD !== 'undefined'
       && typeof window.BOLD.common !== 'undefined'
       && typeof window.BOLD.common.cartDoctor !== 'undefined') {
      // NOTE: "cart" should be the variable containing the cart json data
      cart = window.BOLD.common.cartDoctor.fix(cart);
    }
  var formatMoney = "<span class='money'>${{amount}}</span>";
  if ((typeof cart_cell_id) === 'string') {
    var cart_cell = jQuery(cart_cell_id);
    if (cart_cell.length) {

      cart_cell.empty();

  
      jQuery.each(cart, function(key, value) {
        
        if (key === 'items') {
          
          if (value.length) {
            jQuery(".single-product-cart, .item-multiple-item-count,.cart-product-wrapper").css({"display": "block"});
            jQuery(".single-cart-product.empty , .item-single-item-count").css({"display": "none"});
            
            var table = jQuery(cart_cell_id);
            jQuery.each(value, function(i, item) {
              var recurring_desc = "";
          if(item.properties_all  && item.properties_all .frequency_num){
           recurring_desc = "<span> Delivered Every " + item.properties_all.frequency_num + " " + item.properties_all.frequency_type_text + " " + item.properties_all.discounted_price + " each" + "</span>"; 
          }


              if(i > 19){
                  return false;
              }
              jQuery('<div class="single-cart-product cart_rows" idss="'+item.variant_id+'"> <span class="cart-close-icon product-remove"> <a href="javascript:void(0);" onclick="Shopify.removeItem(' + item.variant_id + ')"><i class="ti-close"></i></a> </span><div class="image"> <a href="' + item.url + '"> <img src="' + item.image + '" class="img-fluid" alt=""> </a></div><div class="content"><h5><a href="' + item.url + '">' + item.title + recurring_desc +'</a></h5><p><span class="cart-count"><span class="qtyyyyyy">' + item.quantity + ' </span> x </span> <span class="discounted-price">' + Shopify.formatMoney(item.price, formatMoney) + '</span><div class="pro-qty d-inline-block mx-0 product-quantity"><a href="#" class="dec qty-btn">-</a> <input type="text" value="'+item.quantity+'" name="updates[]"> <a href="#" class="inc qty-btn">+</a></div></p></div></div>').appendTo(table);
            });  
          }
          else {
            jQuery(".single-product-cart, .item-single-item-count,.cart-product-wrapper").css({"display": "none"});
            jQuery(".single-cart-product.empty").css({"display": "block"});
          }
        }
      });

      
    }
  }

  changeHtmlValue(".shopping-cart__total", Shopify.formatMoney(cart.total_price, formatMoney));
  changeHtmlValue(".bigcounter", cart.item_count);

  jQuery('.currency .active').trigger('click');
  

  $('.qty-btn').on('click', function() {
    var $button = $(this);
    var oldValue = $button.parent().find('input').val();
    
    if ($button.hasClass('inc')) {
      var newVal = parseFloat(oldValue) + 1;
 
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find('input').val(newVal);
    $button.parent().find('input').attr('value',newVal);
  });
  
  
}

//Utils
function changeHtmlValue (cell, value) {
  var $cartLinkText = jQuery(cell);
  $cartLinkText.html(value);
};

jQuery(document).ready(function(){
  checkCartItems();
});

/*

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
}

jQuery(document).ready(function(){

  checkCartItems();
});

function updateDiscountCode()
{
  console.log('Coming here');
  $discountInput = jQuery("input.js-form-discount");

  $discountCode = getCookie('discountCode');

  if ($discountInput.length > 0) { 
    if($discountCode){
      
        // if cookie is set and discount input field is on page set its value to cookie val 
      $discountInput.val( $discountCode );
      console.log('Updating');
    }
    else
    {
     $discountInput.val( '' ); 
     console.log('Removing');
    }
  }

  $minicartCheckoutUrl = jQuery('#mini-cart-checkout-url');

  if ($minicartCheckoutUrl.length > 0) { 
    if($discountCode){
      
        // if cookie is set and discount input field is on page set its value to cookie val 
      $minicartCheckoutUrl.attr( 'href', '/checkout?discount='+$discountCode);
      console.log('Updating');
    }
    else
    {
     $minicartCheckoutUrl.attr( 'href', '/checkout'); 
     console.log('Removing');
    }
  }
}
*/

function checkCartItems()
{
  
  jQuery.getJSON('/cart.js', 
        function (cart, textStatus) 
        {
          var totalQty = cart.item_count;
          if(totalQty >= 8)
          {
            if(jQuery('.order-online-text > p').length > 0)
            {
              jQuery('.order-online-text > p').html('<p>Congratulations! You are eligible for Free Shipping!')
            }
            else
            {
              jQuery('.order-online-text').append('<p>Congratulations! You are eligible for Free Shipping!</p>')
            } 
            
          }
          else
          {
            if(jQuery('.order-online-text > p').length > 0)
            {
              jQuery('.order-online-text > p').html('Free Shipping on <span style="color: red;">'+ Math.abs(8-totalQty) + '</span> items or more.');
            }
            else
            {
              jQuery('.order-online-text').append('<p>Free Shipping on <span style="color: red;">'+ Math.abs(8-totalQty) + '</span> items or more.</p>');
            } 
          }
        }
      );
}

