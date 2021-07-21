  
// Global
app.global = {
    init: function(){ // Load all global functions here
        console.log("load global functions");
        app.global.loadHeader();


    },
    loadHeader: function(){ // Some specific function
        console.log("loadHeader()");
    },
    bookmarker: function(){
        if (bookmark.classList.contains("bookmarked")) {
            bookmark.classList.remove("bookmarked");
            bookmarking.innerHTML = "Bookmark";
        } else {
            bookmark.classList.add("bookmarked");
            bookmarking.innerHTML = "Bookmarked";
        }
    },
    mobleMenueSwitcher: function () {
        if (mobileMenueLinks.classList.contains("flexer")) {
            // mobileMenueLinks.style.opacity = "0";
            mobileMenueLinks.classList.remove("flexer");
            $(mobileMenueLinks).fadeOut(700,"linear",function() {
                
                $(nav).animate(
                    {
                        height: "50px"
                    },500,"linear",function(){ 
                       
                    }
                );
            });
            body.style.overflow = "auto";
            nav.style.height = "auto";
            nav.style.boxShadow = "none";
            mobileMenue.style.content = "url(images/icon-hamburger.svg)"
        } else {
            mobileMenueLinks.classList.add("flexer");
            // mobileMenueLinks.style.opacity = "1";
            $(mobileMenueLinks).hide().fadeIn(200,"linear",function() {
 
            });
            
            body.style.overflow = "hidden";
            nav.style.height = "200vh";
            nav.style.boxShadow = "inset 0px 500px 338px -127px black";
            mobileMenue.style.content = "url(images/icon-close-menu.svg)"
        }
    },
    checker: function (rb) {

        for (let index = 0; index < rewards.length; index++) {
            rewards[index].classList.remove("selected");
            
        }
        switch (rb) {
            case "none":
                rewards[0].classList.add("selected");
                break;
            case "bamboo":
                rewards[1].classList.add("selected");
                break;
            case "black":
                rewards[2].classList.add("selected");
                break;
            case "Mahogany":
                rewards[3].classList.add("selected");
                break;
            default:
                break;
        }
    },
    thanks : function () {
        $(selcont).fadeOut(200,"linear",function () {
            thanksCard.style.display = "flex";
            $(thanksCard).hide().fadeIn(100,"linear",function () {
                
            });
        });
    },
    closeOverlays: function () {
        $(pledgeContainer).fadeOut(200,"linear",function () {

            thanksCard.style.display = "none";
            selcont.style.display = "block";


        });
    },
    formatNumber: function (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
    valueSelected: function (type) {
        let value; 

        switch (type) {
            case "none":
                value = parseInt(amount[0].value , 10); 

                break;
            case "bamboo":
                value = parseInt(amount[1].value , 10); 
                tickleft[1].innerHTML = (tickleft[1].innerHTML - 1);
                tickslift[0].innerHTML = (tickslift[0].innerHTML - 1);
                break;
            case "black":
                value = parseInt(amount[2].value , 10); 
                tickleft[2].innerHTML = (tickleft[2].innerHTML - 1);
                tickslift[1].innerHTML = (tickslift[1].innerHTML - 1);
                break;
            default:
                value = 0; 
                break;
        }

        return value;
    },
    valuePusher: function (pushed,packnum) {


        moneyCount.innerHTML = app.global.formatNumber(pushed); 
        numOfBackers.innerHTML = app.global.formatNumber(packnum);
        progressbar.value = packValue; 


    },
    inputValidation: function (type) {
        let value; 
        switch (type) {
            case "none":
                value = parseInt(amount[0].value , 10); 

                return true;
            case "bamboo":
                value = parseInt(amount[1].value , 10); 
                if (value > 24 ) {
                    return true;    
                }else return false; 

            case "black":
                value = parseInt(amount[2].value , 10); 
                if (value > 74 ) {
                    return true;    
                }else return false; 

            default:
                value = 0; 
                break;
        }

        
    }, 
    typeSelected: function () {
        let type;
        for (let index = 0; index < radio.length; index++) {

            if (radio[index].checked) {
                type = radio[index].value; 
            }

        }
        return type; 
    }
}

// Run the global stuff
app.global.init();



// nav constants & main project card constants
const body = document.body;
const nav = document.getElementsByTagName("nav")[0];
const bookmark = document.getElementsByClassName("bookmark_button")[0];
const mobileMenue = document.getElementsByClassName("mobileBurger")[0];
const mobileMenueLinks = document.getElementsByClassName("links")[0];
const progressbar = document.getElementById("file");
const moneyCount = document.getElementsByClassName("moneyBacked")[0];
const numOfBackers = document.getElementsByClassName("numOfBackers")[0];
const tickslift = document.getElementsByClassName("ticketsLeft");
const bookmarking = document.getElementById("bookmarking");
// pledge pannale constants 
const radio = document.getElementsByName("pledger");
const rewards = document.getElementsByClassName("rewards");
const pledgeContainer = document.getElementsByClassName("selectionContainer_background")[0];
const pledgeCloseIcon = document.getElementById("icon_close_modal");
const pledgeBtn = document.getElementsByClassName("pbtn");
const contbtn = document.getElementsByClassName("contbtn");
const gotItbtn = document.getElementById("gotItbtn");
const selcont = document.getElementsByClassName("selectionContainer")[0];
const thanksCard = document.getElementsByClassName("thanks")[0];
const amount = document.getElementsByName("moneyAmount");
const tickleft = document.getElementsByClassName("tickLeft");
const mic = document.getElementsByClassName("moneyInputContainer"); 




var packValue = 10914; 
var packNum = 2007;
// bookmark activation
bookmark.addEventListener('click', function(){
    app.global.bookmarker();
});

mobileMenue.addEventListener('click', function () {
    app.global.mobleMenueSwitcher();
});

for (let index = 0; index < radio.length; index++) {
    
    radio[index].addEventListener('change', function() {
        app.global.checker(this.value);
    });
    
}

for (let index = 0; index < pledgeBtn.length; index++) {
    
    pledgeBtn[index].addEventListener('click',function () {
        // pledgeContainer.style.display = "unset";
        $(pledgeContainer).hide().fadeIn(200,"linear",function () {

        });
    });
    
}


pledgeCloseIcon.addEventListener('click',function () {

    app.global.closeOverlays();
});

for (let index = 0; index < contbtn.length; index++) {
    
    contbtn[index].addEventListener('click',function () {

        if (app.global.inputValidation(app.global.typeSelected())) {
            for (let index = 0; index < mic.length; index++) {
                mic[index].classList.remove("border_red");
                
            }
            let valSel = app.global.valueSelected(app.global.typeSelected());
            packValue += valSel;
            packNum += 1; 
            


            app.global.valuePusher(packValue,packNum);
            
            
            
            
            app.global.thanks();
        }else {
            console.log("nope");
            console.log(app.global.typeSelected());
            switch (app.global.typeSelected()) {
                case "none":
                    mic[0].classList.add("border_red");
    
                    break;
                case "bamboo":
                    mic[1].classList.add("border_red");
                    
                    break;
                case "black":
                    mic[2].classList.add("border_red");
                    
                    break;
                default:
                    value = 0; 
                    break;
            }
        }
        

    });
    
}

gotItbtn.addEventListener('click',function () {
    app.global.closeOverlays();
});

