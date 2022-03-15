/*
We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript Object or Python Dict setting the 'value' key on the new Object or Dict to the passed-in value.

So, for example, if we execute the following code:

wrapper_obj = wrap("my_wrapped_string"); 
 # wrapper_obj should be  {"value":"my_wrapped_string"}

*/

//One solution
function wrap(value) {
  return { value };
}

//Another solution

function wrap(value) {
  return {
    value: value,
  };
}
