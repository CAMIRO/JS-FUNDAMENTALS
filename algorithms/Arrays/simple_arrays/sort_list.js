const sortIt = (list, n) => list.split(', ').sort((a,b) => a[n - 1].toLowerCase().localeCompare(b[n - 1].toLowerCase())).join(', ')


  console.log(sortIt('Cornelius Lutz, Helmut Rennenkampf, Reinhard von Lohengramm, Hildegard von Mariendorf, Anton Ferner, Paul von Oberstein, Adalbert von Fahrenheit, Arthur von Streit, Ernst von Eisenach, Oskar von Reuenthal, Siegfried Kircheis, August Samuel Wahlen', 7));