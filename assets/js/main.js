var nestOptions = {
    acceptWidgets: '.grid-stack-item.sub', // only pink sub items can be inserted, otherwise grid-items causes all sort of issues
    dragOut: true // let us drag them out!
  };

  GridStack.init(null, '.grid-stack.top');

  var grid0 = GridStack.init(nestOptions, '.grid-stack.nested0');  
  var grid1 = GridStack.init(nestOptions, '.grid-stack.nested1');
  var grid2 = GridStack.init(nestOptions, '.grid-stack.nested2');

 