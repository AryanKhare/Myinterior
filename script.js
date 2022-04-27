const navi = document.getElementsByClassName("navi")[0];

const showNav = () => {
    navi.style.display = 'block';
    
    document.getElementsByClassName("open")[0].style.display = "none";
    document.getElementsByClassName("close")[0].style.display = "block";
}

const closeNav = () => {
    navi.style.display = 'none';
    
    document.getElementsByClassName("open")[0].style.display = "block";
    document.getElementsByClassName("close")[0].style.display = "none";
}