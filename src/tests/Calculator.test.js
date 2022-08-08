import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const addOperator = container.getByTestId('operator-add');
    fireEvent.click(addOperator);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const equalsOperator = container.getByTestId('operator-equals');
    fireEvent.click(equalsOperator);
    const runningTotal = container.getByTestId('running-total');   
  })

  it('should subtract 4 from 7 and get 3', () => {
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const subtractOperator = container.getByTestId('operator-subtract');
    fireEvent.click(subtractOperator);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equalsOperator = container.getByTestId('operator-equals');
    fireEvent.click(equalsOperator);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const multiplyOperator = container.getByTestId('operator-multiply');
    fireEvent.click(multiplyOperator);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const equalsOperator = container.getByTestId('operator-equals');
    fireEvent.click(equalsOperator);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');
  })

  it('divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const divideOperator = container.getByTestId('operator-divide');
    fireEvent.click(divideOperator);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const equalsOperator = container.getByTestId('operator-equals');
    fireEvent.click(equalsOperator);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('shows the number 21', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const equalsOperator = container.getByTestId('operator-equals');
    fireEvent.click(equalsOperator);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('21');
  })

  it('adds the numbers 2 and 3, then multiples them by 4 to show 20', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const addOperator = container.getByTestId('operator-add');
    fireEvent.click(addOperator);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const multiplyOperator = container.getByTestId('operator-multiply');
    fireEvent.click(multiplyOperator);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equalsOperator = container.getByTestId('operator-equals');
    fireEvent.click(equalsOperator);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('20');
  })

  it('adds the numbers 2 and 3, then clears the running total to show 0', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const addOperator = container.getByTestId('operator-add');
    fireEvent.click(addOperator);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const clearButton = container.getByTestId('clear');
    fireEvent.click(clearButton);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('0');
  })

})

