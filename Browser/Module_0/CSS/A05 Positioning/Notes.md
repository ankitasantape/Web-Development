* Positioning 
   -> static  
   -> relative  
   -> absolute  
   -> fixed  
   -> sticky  
* Static
   -> div, h1..h6, p, ..etc all are static by default
   -> top, left, bottom, right we can apply this properties
   -> we can't modify the position of an element
* relative
   -> top, left, bottom, right we can apply this properties
   -> we can actually adjust the position of an element but natural flow remains(document)
* absolute
   -> top, left, bottom, right we can apply this properties
   -> element is positioned                
   -> natural flow is not maintained
   -> after scrolling document, element also scrolls up n down as well
* fixed
   -> top, left, bottom, right we can apply this properties
   -> element is positioned 
   -> natural flow is not maintained 
   -> after scrolling document, element doesn't  scrolls 
* sticky
   -> Hybrid of (relative + fixed) 
   -> relative -> natural flow is maintained 
   -> fixed -> element doesn't scrolls
   -> Element is positioned 
   -> top, left, bottom, right we can apply this properties 
           parent -> html doc -> sticky container 
           - - - - - - - - - - - - - - - - - - - - 
          |        div -> sticky element           | 
          |     - - - - - - - - - - - - - -        |
          |    |                           |       | 
          |     - - - - - - - - - - - - - -        |
          |                                        |
           - - - - - - - - - - - - - - - - - - - -  
 * Container -> only within container
 * element -> ( works ) functions only within sticky containers 
 * never get out of containers          