    function addMe(){
        var button = document.getElementById('a')
        // console.log('a')
        // button.addEventListener('click', myfun(event))
        getData()
    }

        var t = 0;
        // var a=0
        function getData(){
        var buttonClicked = event.target;
        var z = buttonClicked.parentElement
        // console.log(z)
        
        // Getting Needed Things
        
        var name = z.getElementsByClassName('title')[0].innerText;
        console.log(name)
        var img = z.getElementsByTagName('img')[0].src
        console.log(img);
        var price=z.getElementsByClassName('price')[0].innerText
        console.log(price)
        // // Saving This Info<
    
        
        localStorage.setItem('names'+t, name)
        localStorage.setItem('images'+t, img)
        localStorage.setItem('prices'+t, price)
        localStorage.setItem('quantity'+t, 1)
        // console.log('save')
        t=t+1
        
    }
        
    
    
    
    
    
    
