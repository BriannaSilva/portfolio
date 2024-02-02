const body = document.querySelector("body");


const nav = construct(`
<div class="nav">
    <ul>
        <li><a href="./index.html"><i class="fa-solid fa-bolt text"></i></a></li>
        <li><a class="text" href="./Assets/Silva_CV_EN.pdf" download>CV</a></li>
        <li> <a class="text" href="./about.html">ABOUT</a></li>
    </ul>
</div>
`);


const tabs = construct(`
    <div class="project-tabs">
        <ul class="project-tabs-list">
            <li><a class="text" href="./ux-ui.html">UX/UI</a></li>
            <li><a class="text" href="./graphic.html">GRAPHIC DESIGN</a></li>
            <li><a class="text" href="./illustrations.html">ILLUSTRATIONS</a></li>
            <li><a class="text" href="./art.html">ART</a></li>
        </ul>
    </div>
`);

body.prepend(nav,tabs);

function construct(htmlString) {
    parser = new DOMParser();
    return parser.parseFromString(htmlString, "text/html").body.firstChild;
}