* Units - Absolute Vs Relative Units
1. Absolute -> 
   - px
   - Not scalable ( not responsive )
2. Relative -> 
   - rem, em, vh, vw, %
   - Scalable ( responsive )
   - Suppose, default font size of window is 16px for html document

rem- is raltive to html doc.   
   - single div has font size 1rem then, How browser will manipulate 1rem ?
   - 1rem = 1 * 1rem = 16px , 2rem = 2 * 16px = 32px
   - so, rem is relative to the html element. 

em - is relative to itself (every element has default font size) 
   - em is relative to itself, then with whom em will compare and modify itself.
   - If there is 2 div outer div and inner dive then, inner div compare itself with outer/parent div to modify itself.
   - suppose outer div (10px) and inner div(1em) then, 
   - 1em = 1 * 10px = 10px , 2em = 2 * 10px = 20px (if default)
   - 1em = 1 * 16px (html) = 16px (if not default)

vh - relative to viewport height 
   - default height of html window = 100% and there is div inside html window is of 10vh then,
   - 10% of viewport height

vw - relative to viewport width 
   - 20% of viewport width

%  - relative to parent element
   - suppose inner div (div2) has width = 20% and div2 is dependent on parent div (div1) has width = 10px
   - div2 (child) ---> div1 (parent)
   - width of div2 = 10% of 10px
   - div1 is dependent on html document 
   - div1 (child )---> html doc (parent = 16 px by default) 
   - 20% of 16px