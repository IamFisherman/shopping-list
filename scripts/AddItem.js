const budget = document.querySelector("#budget");
const itemAdded = document.querySelector("#itemAdded");
const button = document.querySelector("#itemAddButton");
const list = document.querySelector("#listItems");

button.addEventListener("click", function() {

    if (itemAdded.value != "") {
        // li
        const li = document.createElement("li");

        // div
        const div = document.createElement("div");
        // check
        const inputCheck = document.createElement("input");
        inputCheck.setAttribute("type", "checkbox");
        inputCheck.setAttribute("class", "check");
        // p item
        const p = document.createElement("p");
        p.innerHTML = itemAdded.value;
        // input price
        const inputPrice = document.createElement("input");
        inputPrice.setAttribute("type", "number");
        inputPrice.setAttribute("class", "price");
        inputPrice.setAttribute("placeholder", "0.00");

        // delete button
        const deleteButton = document.createElement("button");
        // svg x
        const SVG_NS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(SVG_NS, "svg");
        svg.setAttributeNS(null, "version", "1.1");
        svg.setAttributeNS(null, "class", "deleteIcon");
        svg.setAttributeNS(null, "x", "0px");
        svg.setAttributeNS(null, "y", "0px");
        svg.setAttributeNS(null, "width", "16");
        svg.setAttributeNS(null, "height", "16");
        svg.setAttributeNS(null, "viewBox", "0 0 122.879 122.879");
        svg.setAttributeNS(null, "enable-background", "new 0 0 122.879 122.879");
        // g
        const g = document.createElementNS(SVG_NS, "g");
        // path
        const path = document.createElementNS(SVG_NS, "path");
        path.setAttributeNS(null, "fill-rule", "evenodd");
        path.setAttributeNS(null, "clip-rule", "evenodd");
        path.setAttributeNS(null, "fill", "#FF4141");
        path.setAttributeNS(null, "d", "M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z");

        // create svg
        g.append(path);
        svg.append(g);
        deleteButton.append(svg);

        div.append(inputCheck);
        div.append(p);
        div.append(inputPrice);

        li.append(div);
        li.append(deleteButton);

        list.append(li);
    }

});