function myTotal(){
    var p = document.getElementsByClassName('cart-item-price')
    var total = 0;
    for (var i=0; i < p.length; i++ ){
    
        // getting prices 
        var a = p[i].innerText.replace('Rs.', '')
        a = parseFloat(a);
        
        // getting quntities
        var q = document.getElementsByClassName('cart-item-quantity')[i].childNodes[3].innerText
        var w = a*q
        total = total + w 
        
        // updating total
        var d = document.getElementsByClassName('total')[0].innerHTML = `<h4>Rs.${total}</h4>`
    }
}

// // GETTING DATA 
for(var i=0;i<=100;i++){
    if (localStorage.getItem("names"+i) === null) {
    }

    else{
        myFunction()
        }
}
        
    function myFunction(){
        
        var title = localStorage.getItem('names'+i)
        var img = localStorage.getItem('images'+i)
        var price = localStorage.getItem('prices'+i)
        var quan = localStorage.getItem('quantity'+i)  
        // var zz = localStorage.getItem('zz')
        var cartItems = document.createElement('div');
        var cartCont = document.getElementsByClassName('cart-container')[0];
        var cartMaal = `
        <div class="row cart-item">
        <span class="cart-item-img col-lg-4 col-md-4 col-sm-4 col-4">
            <img src="${img}" class="item-img"><br/>
            <span class="aa"style="font-size: 19px;">${title}(4GB,64GB)</span>
            </span>
        <span class="cart-item-price col-lg-4 col-md-4 col-sm-4 col-4"><span>${price}</span></span>
        <span class="cart-item-quantity col-lg-4 col-md-4 col-sm-4 col-4">
        <button type="button" class="btn btn-secondary " onclick="increaseMe()">+</button>
        <span class="q">${quan}</span>
        <button type="button" class="btn btn-secondary" onclick="decreaseMe()">-</button>
        <button type="button" name="${i}"class="btn btn-danger">REMOVE</button>
        </span>
        </div>`
        cartItems.innerHTML = cartMaal
        cartCont.append(cartItems)
    }
    
        
        
    
    // // PLUS BUTTON FUNCTION
    function increaseMe(){
            var a = event.target.parentElement
        var b = a.getElementsByTagName('span')[0].innerText
        var b = parseFloat(b)
        // console.log(b)
        var plus = b+1
        var x = a.getElementsByTagName('span')[0].innerHTML ='<span class="q" id="Q">'+plus+'</span>'
        var zz=a.getElementsByTagName('span')[0]
        // console.log(zz)  
        myTotal()  
    }
    
    
    // // MINUS BUTTON FUNCTION
    function decreaseMe(){
        var a = event.target.parentElement
        var b = a.getElementsByTagName('span')[0].innerText
        var b = parseFloat(b)
        // console.log(b)
        var minus = b-1
        if(minus <= 0){
            minus=0;
            alert('You have to select atleast one quantity, or else you can remove it then.')
        }else{
            var x = a.getElementsByTagName('span')[0].innerHTML ='<span class="q" id="Q">'+minus+'</span>'
        }
        myTotal()
    }
    
    
    
    

    //  // REMOVE ALL DATA BUTTON 
    function removeAll(){
        var a = document.getElementsByClassName('cart-item')
        // console.log(a)
        for (var i=0; i < 100; i++){
            localStorage.removeItem('names'+i)
            localStorage.removeItem('images'+i)
            localStorage.removeItem('prices'+i)
            localStorage.removeItem('quantity'+i)
        } 
        location.reload();
    }
    
    
    // // REMOVE BUTTON 
    var removeCartItemsButton = document.getElementsByClassName('btn-danger')
    for (var i=0; i < removeCartItemsButton.length;i++){
    var button = removeCartItemsButton[i];
    button.addEventListener('click', function(event){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        
        var a = buttonClicked.parentElement.parentElement
        var b = a.getElementsByTagName('button')[2].name
        localStorage.removeItem('names'+b)
        localStorage.removeItem('images'+b)
        localStorage.removeItem('prices'+b)
        localStorage.removeItem('quantity'+b)
        location.reload();
    })
    }