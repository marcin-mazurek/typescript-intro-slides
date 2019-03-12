// explicit conversion
Boolean(0)
Number('1')
String(123)

// implicit conversion
!!0
+'1'
123 + ''

// conversion errors
2 / "WTF" // NaN (Not a Number)
['non-empty array'] == true // true
[] == true // also true - any object converted to a boolean is true