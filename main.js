(function(){

  const XMLNS = "http://www.w3.org/2000/svg";
  const BBOX_CLASS = "bbox";

  const vis = {
    bbox: {
      x: 0.0,
      y: 0.0,
      width: 300.0,
      height: 150.0,
    },
    confidence: 92
  };

  const create_svg = vis => {

    let svg = document.createElementNS(XMLNS, "svg");
    svg.setAttribute("width",vis.bbox.width);
    svg.setAttribute("height",vis.bbox.height);

    let rect = document.createElementNS(XMLNS, "rect");
    rect.setAttribute("x",vis.bbox.x);
    rect.setAttribute("y",vis.bbox.y);
    rect.setAttribute("width",vis.bbox.width);
    rect.setAttribute("height",vis.bbox.height);
    rect.setAttribute("class",BBOX_CLASS);

    const space = 8;
    let text = document.createElementNS(XMLNS, "text");
    text.setAttribute("x",vis.bbox.x + space);
    text.setAttribute("y",vis.bbox.y + vis.bbox.height - space);
    text.innerHTML = vis.confidence.toString();

    svg.append(rect);
    svg.append(text);

    return svg;
  };

  const canvas = document.getElementById("canvas");
  let svg = create_svg(vis);
  canvas.append(svg);

  const debug_el = document.getElementById("debug");
  debug_el.innerHTML = JSON.stringify(vis);

})();
