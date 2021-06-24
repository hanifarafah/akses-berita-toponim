document.getElementById("submit-google").onclick = function() {goToGoogle()};
document.getElementById("submit-youtube").onclick = function() {goToYouTube()};
document.getElementById("submit-facebook").onclick = function() {goToFacebook()};
document.getElementById("submit-instagram").onclick = function() {goToInstagram()};
document.getElementById("submit-twitter").onclick = function() {goToTwitter()};
    
function goToGoogle() {
    var getClassification = document.getElementById("klasifikasi-toponim").value;
    var replaceSpaceClassification = getClassification.replace(" ", "+");
    var getElement = document.getElementById("nama-unsur").value;
    var replaceSpaceElement = getElement.replace(" ", "+");
    if (getClassification === "" && getElement === "") {
        alert("Pilih kelas toponim dan/atau nama unsur!");
    } else if (getElement === "") {
        var dynamicLink =  '"' + replaceSpaceClassification + '"';
        var encodeDynamicLink =  encodeURI(dynamicLink);
        window.open("https://www.google.com/search?q=" + encodeDynamicLink + "&tbm=nws");
    } else {
        var dynamicLink = '"' + replaceSpaceClassification + '"' + " OR " + '"' + "Nama " + replaceSpaceElement + '"';
        var encodeDynamicLink =  encodeURI(dynamicLink);
        window.open("https://www.google.com/search?q=" + encodeDynamicLink + "&tbm=nws");
    }
};

function goToYouTube() {
    var getClassification = document.getElementById("klasifikasi-toponim").value;
    var replaceSpaceClassification = getClassification.replace(" ", "+");
    var getElement = document.getElementById("nama-unsur").value;
    var replaceSpaceElement = getElement.replace(" ", "+");
    if (getClassification === "" && getElement === "") {
        alert("Pilih kelas toponim dan/atau nama unsur!");  
    } else if (getElement === "") {
        var dynamicLink =  '"' + replaceSpaceClassification + '"';
        var encodeDynamicLink =  encodeURI(dynamicLink);
        window.open("https://www.youtube.com/results?search_query=" + encodeDynamicLink);  
    } else {
        var dynamicLink =  '"' + replaceSpaceClassification + '"' + " OR " + '"' + "Nama " + replaceSpaceElement + '"';
        var encodeDynamicLink =  encodeURI(dynamicLink);
        window.open("https://www.youtube.com/results?search_query=" + encodeDynamicLink);
    }
};

function goToFacebook() {
    var getClassification = document.getElementById("klasifikasi-toponim").value;
    var getElement = document.getElementById("nama-unsur").value;
    if (getClassification === "" && getElement === "") {
        alert("Pilih kelas toponim dan/atau nama unsur!");  
    } else if (getElement === "") {
        var dynamicLink =  '"' + getClassification + '"';
        var encodeDynamicLink =  encodeURI(dynamicLink);
        window.open("https://www.facebook.com/search/posts/?q=" + encodeDynamicLink, "&epa=FILTERS&filters=e30");  
    } else {
        var dynamicLink =  '"' + getClassification + '"' + " OR " + '"' + "Nama " + getElement + '"';
        var encodeDynamicLink =  encodeURI(dynamicLink);
        window.open("https://www.facebook.com/search/posts/?q=" + encodeDynamicLink, "&epa=FILTERS&filters=e30");
    }
};

function goToInstagram() {
    var getClassification = document.getElementById("klasifikasi-toponim").value;
    var getElement = document.getElementById("nama-unsur").value;
    var dynamicLink =  "nama" + getElement.toLowerCase().replace(/\s+/g, "") + "/";
    if (getClassification === "" && getElement === "") {
        alert("Pilih kelas toponim dan/atau nama unsur!");
    } else if (getElement === "") {
        alert("Pilih nama unsur!")
    } else {
        var encodeDynamicLink =  encodeURI(dynamicLink);
        window.open("https://www.instagram.com/explore/tags/" + encodeDynamicLink);
    }
};

function goToTwitter() {
    var getClassification = document.getElementById("klasifikasi-toponim").value;
    var getElement = document.getElementById("nama-unsur").value;
    if (getClassification === "" && getElement === "") {
        alert("Pilih kelas toponim dan/atau nama unsur!");
    } else if (getElement === "") {
        var dynamicLink =  '"' + getClassification + '"';
        var encodeDynamicLink =  encodeURI(dynamicLink);
        window.open("https://twitter.com/search?q=" + encodeDynamicLink, "&src=typed_query");  
    } else {
        var dynamicLink =  '"' + getClassification + '"' + " OR " + '"' + "Nama " + getElement + '"';
        var encodeDynamicLink =  encodeURI(dynamicLink);
        window.open("https://twitter.com/search?q=" + encodeDynamicLink, "&src=typed_query");
    }
};