/*Could you help John with a program that, given the lines of his phone book and a phone number num returns a string for this number : "Phone => num, Name => name, Address => adress"

Examples:
s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."
It can happen that there are many people for a phone number num, then return : "Error => Too many people: num"

or it can happen that the number num is not in the phone book, in that case return: "Error => Not found: num"*/




/*JS*/



function phone(strng, num) {
  const lines = strng.split('\n').filter(Boolean);
  const matches = lines.filter(line => line.includes(num));

  if (matches.length === 0) return `Error => Not found: ${num}`;
  if (matches.length > 1) return `Error => Too many people: ${num}`;

  const line = matches[0];

  // Extract name
  const nameMatch = line.match(/<([^>]+)>/);
  const name = nameMatch ? nameMatch[1] : "";

  // Clean address
  let address = line
    .replace(nameMatch[0], "")     // remove name
    .replace("+" + num, "")        // remove phone number with plus
    .replace(num, "")              // remove phone number without plus
    .replace(/[^a-zA-Z0-9\.\-\s_]/g, " ") // remove special chars
    .replace(/_/g, " ")            // replace underscores with spaces
    .replace(/\s+/g, " ")          // collapse spaces
    .trim();

  return `Phone => ${num}, Name => ${name}, Address => ${address}`;
}
