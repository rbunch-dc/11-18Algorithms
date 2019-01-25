var str = "The rain in SPAIN stays mainly in the plain"; 
x = str.replace(/[^r]ain/g, 'snow');
console.log(x);