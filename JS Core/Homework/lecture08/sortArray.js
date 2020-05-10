function sortArray(input) {
   input.sort((a,b)=>{
       return a.length - b.length || a.localeCompare(b);
   });
   input.forEach((x)=>{
       console.log(x);
   });
}

sortArray(['alpha',
    'beta',
    'gamma']
);