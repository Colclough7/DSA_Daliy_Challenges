# Challenge: Calculator

## Instructions

##Write a function called `calculator` that takes in 2 numbers and an operator and returns the result of the calculation.

'''
Parameters - number num1 (first number), number num2 (second number), string operator('+','-','*','/')
Returns - integer
Example - Fn(1,3,'+') => 4
Pseduo code - function calculator(num1:number,num2:number,operator:string): number 
'''


##CODE

def calculator(num1,num2,opertor):
  if opertor == "+":
    return num1 + num2
  elif opertor == "-":
    return num1 - num2
  elif opertor == "*":
    return num1 * num2
  elif opertor == "/":
    return num1 / num2
  else:
    return "Invalid operator"



