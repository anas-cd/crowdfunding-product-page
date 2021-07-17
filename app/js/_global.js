  
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
        } else {
            bookmark.classList.add("bookmarked");
        }
    },
    mobleMenueSwitcher: function () {
        if (mobileMenueLinks.classList.contains("flexer")) {
            // mobileMenueLinks.style.opacity = "0";
            mobileMenueLinks.classList.remove("flexer");
            $(mobileMenueLinks).fadeOut(700,"linear",function() {
                console.log("animation finished");
                $(nav).animate(
                    {
                        height: "50px"
                    },500,"linear",function(){ 
                        console.log("sec anim completed");
                    }
                );
            });
            body.style.overflow = "auto";
            nav.style.height = "auto";
            nav.style.boxShadow = "none";
            mobileMenue.style.content = "url(../../images/icon-hamburger.svg)"
        } else {
            mobileMenueLinks.classList.add("flexer");
            // mobileMenueLinks.style.opacity = "1";
            $(mobileMenueLinks).hide().fadeIn(200,"linear",function() {
                console.log("animation finished");
            });
            
            body.style.overflow = "hidden";
            nav.style.height = "200vh";
            nav.style.boxShadow = "inset 0px 500px 338px -127px black";
            mobileMenue.style.content = "url(../../images/icon-close-menu.svg)"
        }
    }
}

// Run the global stuff
app.global.init();

const body = document.body;
const nav = document.getElementsByTagName("nav")[0];
const bookmark = document.getElementsByClassName("bookmark_button")[0];
const mobileMenue = document.getElementsByClassName("mobileBurger")[0];
const mobileMenueLinks = document.getElementsByClassName("links")[0];
const progressbar = document.getElementById("file");
const moneyCount = document.getElementsByClassName("moneyBacked")[0];

// bookmark activation
bookmark.addEventListener('click', function(){
    app.global.bookmarker();
});

mobileMenue.addEventListener('click', function () {
    app.global.mobleMenueSwitcher();
})
