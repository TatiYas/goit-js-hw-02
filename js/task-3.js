function getElementWidth(content, padding, border) {
    const contentWidth = parseInt(content.slice(0, -2));
    const paddingWidth = parseInt(padding.slice(0, -2)) * 2;
    const borderWidth = parseInt(border.slice(0, -2)) * 2;
    return contentWidth + paddingWidth + borderWidth;
  }
  
  console.log(getElementWidth("50px", "8px", "4px")); // 74
  console.log(getElementWidth("60px", "12px", "8.5px")); // 101
  console.log(getElementWidth("200px", "0px", "0px")); // 200