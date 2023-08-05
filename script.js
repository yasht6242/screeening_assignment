 // JavaScript to change the color of the ellipse when the SVG is clicked
 const svgElement = document.getElementById('mySVG');
 const ellipseElement = document.getElementById('myEllipse');
 const svgElement2 = document.getElementById('mySVG2');
 const ellipseElement2 = document.getElementById('myEllipse2');
 const svgElement3 = document.getElementById('mySVG3');
 const ellipseElement3 = document.getElementById('myEllipse3');
 const product2Table = document.querySelector('.product2_table');
 let isDefaultColor = true;
 let isTableVisible = false;
 const product2Container = document.querySelector('.product2');
 const defaultStrokeColor = '#DADADA';
 const defaultFillColor = 'none';
 const changedStrokeColor = '#007F61';
 const changedFillColor = '#007F61';

  product2Container.style.height = '74px'; 

 svgElement.addEventListener('click', function () {
   if (isDefaultColor) {

     ellipseElement.setAttribute('stroke', changedStrokeColor);
     ellipseElement.setAttribute('fill', changedFillColor);
    
   } else {
     ellipseElement.setAttribute('stroke', defaultStrokeColor);
     ellipseElement.setAttribute('fill', defaultFillColor);
     
   }

   // Toggle the flag for the next click
   isDefaultColor = !isDefaultColor;
 });
 svgElement2.addEventListener('click', function () {
   if (isDefaultColor) {

     ellipseElement2.setAttribute('stroke', changedStrokeColor);
     ellipseElement2.setAttribute('fill', changedFillColor);
     if (!isTableVisible) {
      product2Table.style.display = 'block';
      product2Container.style.height = 'auto';
      isTableVisible = true;
    } else {
      product2Table.style.display = 'none';
          product2Container.style.height = '74px';
          isTableVisible = false;
    }
   } else {
     ellipseElement2.setAttribute('stroke', defaultStrokeColor);
     ellipseElement2.setAttribute('fill', defaultFillColor);
     product2Table.style.display = 'none';
     product2Container.style.height = '74px';
     isTableVisible = false;
     
   }
   

   // Toggle the flag for the next click
   isDefaultColor = !isDefaultColor;
 });
 
 svgElement3.addEventListener('click', function () {
   if (isDefaultColor) {

     ellipseElement3.setAttribute('stroke', changedStrokeColor);
     ellipseElement3.setAttribute('fill', changedFillColor);
   } else {
     ellipseElement3.setAttribute('stroke', defaultStrokeColor);
     ellipseElement3.setAttribute('fill', defaultFillColor);
   }
   

   // Toggle the flag for the next click
   isDefaultColor = !isDefaultColor;
 });
 