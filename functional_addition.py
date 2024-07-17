#Create a function add(n)/Add(n) which returns a function that always adds n to any number

#Parameter - integer
#Returns - returns a function that adds n to any number
#Example - n + n = integer
#Pseudo code - f(n)=>f2(m)=>n+m=>f2

def add(n):
  def add_helper(m):
    return n+m
  return add_helper
