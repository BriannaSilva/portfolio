const body = document.querySelector("body");


const nav = construct(`
<div class="nav">
    <ul>
        <li><a href="./index.html"><i class="fa-solid fa-home text"></i></a></li>
        <li><a class="text" href="./Assets/Silva_CV_EN.pdf" download>CV</a></li>
        <li> <a class="text" href="./about.html">ABOUT</a></li>
    </ul>
</div>
`);


const tabs = construct(`
    <div class="project-tabs">
        <ul class="project-tabs-list">
            <li><a class="text" href="./art.html">ART</a></li>
            <li><a class="text" href="./ux-ui.html">UX/UI</a></li>
            <li><a class="text" href="./graphic.html">GRAPHIC</a></li>
            <li><a class="text" href="./illustrations.html">ILLUSTRATIONS</a></li>
        </ul>
    </div>
`);

const email = construct(`
    <div class="wrapper">
        <div class="button-mail">
            <div class="icon-mail"><i class="fa-regular fa-envelope"></i></div>
            <span class="text web-mail"><a href="mailto:brianna.designwork@gmail.com" style="color: #e07a5f;">BRIANNA.DESIGNWORK@GMAIL.COM</a></span>
        </div>
    </div>
`);

body.prepend(nav,tabs,email);

function construct(htmlString) {
    parser = new DOMParser();
    return parser.parseFromString(htmlString, "text/html").body.firstChild;
}