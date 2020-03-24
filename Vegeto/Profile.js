if(localStorage.getItem('email0') == null){
    window.location.href='./Log In.html'
}

document.addEventListener("DOMContentLoaded", function check(){
    if(localStorage.getItem('pics') !== null){
    updatePic()}})
    
    function updatePic(){
        console.log(document.getElementsByTagName('img')[1].src = localStorage.getItem('pics'))
    }

// CHANGING PICTURE BUT NOT WORKING 
function changePic(){
    var a = 0
    if (a === 0){
        alert('You cannot change image by your own' )
    }
     
}

// UPDATING DATA    
function updatingData(){
    document.getElementsByClassName('name')[0].innerText = " " + localStorage.getItem('username0')
    document.getElementsByClassName('email')[0].innerText =  localStorage.getItem('email0')
    document.getElementsByClassName('address')[0].innerText = localStorage.getItem('address0')
    checkGender()
    checkBirthday()
}

// CHECKING GENDER
function checkGender(){
    if(localStorage.getItem('gender') === null){
    } else {
        document.getElementsByClassName('gender')[0].innerText = localStorage.getItem('gender')
    }
}

// CHECKING BIRTHDAY
function checkBirthday(){
    if(localStorage.getItem('date1') === null || localStorage.getItem('month1') === null || localStorage.getItem('year1') === null){
    } else {
        var dd = localStorage.getItem('date1')
        var mm = localStorage.getItem('month1')
        var yy = localStorage.getItem('year1')
        var birthDay = dd+" - "+mm+" - "+yy
        document.getElementsByClassName('birthday')[0].innerText = birthDay
    }
}

// LOGGING OUT
function logOut(){
    localStorage.removeItem('email0');
    localStorage.removeItem('password0');
    // localStorage.removeItem('userName0');
    location.reload()
    window.location.href='./Log In.html'
}


function changePassword(){
    var b=1
    if( b===1 ){
            alert('Password cannot be changed')
    }
}
