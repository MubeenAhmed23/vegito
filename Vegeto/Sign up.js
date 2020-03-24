function saveData(){
    var a = document.getElementsByClassName('email')[0].value
    console.log(a)
    var b = document.getElementsByClassName('password')[0].value 
    console.log(b)
    var c = document.getElementsByClassName('address')[0].value
    console.log(c) 
    var d = document.getElementsByClassName('user-name')[0].value
    console.log(d) 
    var e = document.getElementsByClassName('contact')[0].value
    console.log(e) 
    var f = document.getElementsByClassName('gender')[0].value
    console.log(f)
    if(a !== '' && b !== '' && c !== '' && d !== '' && e !== ''  ){
        alert('Your account has been Registered. Please log in to continue ...')
        localStorage.setItem('email0', a)
        localStorage.setItem('password0', b)
        localStorage.setItem('address0', c)
        localStorage.setItem('username0', d)
        localStorage.setItem('contact0', e);
    
    } else{
        alert('Look like still any field is empty.')
    }
}

 