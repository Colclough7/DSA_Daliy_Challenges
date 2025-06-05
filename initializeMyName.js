/*Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'*/




/*JS*/



function initializeNames(name) {
  const parts = name.split(' ');

  // If the name has 2 or fewer parts, return it as is
  if (parts.length <= 2) {
    return name;
  }

  // Initialize middle names
  const first = parts[0];
  const last = parts[parts.length - 1];
  const middleInitials = parts.slice(1, -1).map(n => n[0] + '.').join(' ');

  return `${first} ${middleInitials} ${last}`;
}
