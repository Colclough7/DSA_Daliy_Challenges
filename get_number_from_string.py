#Write a function which removes from string all non-digit characters and parse the remaining to number.

#Parameter - integer
#Return - number
#Example - "hell5o wor6ld" -> 56
#Pseduo Code - write a function the excepts a string argument, inside said function create a empyt list and creat a variable that splits the string in a list. loop through that list and if the string chaaracter is a digit appened the number into empty list. join the new list together wrap the string in a int function before you return it.



def get_number_from_string(st):
    new_list = []
    new_word = list(st)
    for x in new_word:
        if x.isdigit():
            new_list.append(x)
    return int("".join(new_list))

