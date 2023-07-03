import { useEffect, useState, useRef } from 'react'
import './App.css'
export function Calculate({stack}) {
    const passed_stack = useRef([...stack]) //Needed as popping prop causes too many re-render and breaks the last result
    if (passed_stack.current.toString() !== stack.toString())
     { 
      passed_stack.current = [...stack]
    }
    const finalResult = useRef(0) // Result needs to be persistant too, otherwise it will become undefined or won't add future results.
        useEffect(() => {
          if(stack.length > 0) {
            console.log('Calculating...')
            console.log(passed_stack)
          }
          }, [passed_stack])

        useEffect(() => {
          console.log('Current Result is ' + finalResult.counter)
          }, [finalResult])

    function calculate_result() {
        let length = passed_stack.current.length
        let popped_element = ''
        let current_operator = ''
        let current_result = 0
        let operators = ['+','-'] //What operations we want to execute for this pemdas calulator
        console.log('length of stack received: ' + passed_stack.current.length)
        for (let i = 0; i < length; i++) { //For every element in the stack, grab the next element in end of array
          popped_element = passed_stack.current.pop()

         if (!isNaN(popped_element)){ //if the element grabbed is not a number, it must be a operator or a parenthesis.
         current_result = parseInt(popped_element)
        }
        if (current_operator === '') {
          for (let i = 0; i < operators.length && isNaN(popped_element); i++) {
            if (popped_element === operators[i]) { //If the grabbed element is one of the operators, assign it to be the current operator we're executing.
              /* 
              TODO: match symbols, if a certain operator do math expression.
              */
              current_operator = operators[i]
              break;
            }
          }
          if (current_operator !== '') {
            continue //If there was a operator found, continue to next element to find next number to calculate.
          }
        }
         if(current_operator !== '') { //If a operator is found, execute calculation and store it as the current result.
          if (current_operator === '+') current_result = current_result + parseInt(popped_element)
          if (current_operator === '-') current_result = current_result - parseInt(popped_element)
          current_operator = ''
         } 

        }
        if (current_result > 0) finalResult.current = finalResult.current + current_result //Add the result to the persistant variable so we can return it.

      }
      if(passed_stack.current.length > 0) { //If there is still a stack/array left, calculate.
        calculate_result()
      }

    return (
        <h3>{finalResult.current > 0 && finalResult.current}</h3>
    )
}