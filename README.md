# Algorithm : Caesar Cipher

This algorithm encrypts each letter in the text by shifting it a certain number of places on the alphabet with a specified shift value.

- Forward Encryption: Shifts letters forward in alphabet order. For example, encrypting the text "abc" with a shift value of 3 returns "def".

- Backward Encryption: Shifts the letters backwards in the alphabet order. For example, encrypting the text "def" with a shift value of 3 returns "abc".

- Alphabet Limit: Returning to A after Z or moving to Z before A. That is, the alphabet is used cyclically.

## React Component: CaesarCipher
This component implements the Caesar Cipher algorithm mentioned above by receiving text, scroll value, and encryption direction from the user. The user interface contains a form element and contains input and select elements to receive user input.

- Text Input: The part where the user enters the text to be encrypted.
- Shift Value (shift): Numerical value specifying how much to shift the text.
- Direction Selection: Option to specify whether encryption will be done in forward or reverse direction.
- Result Display: The section where the text obtained as a result of the encryption process is displayed.


## Function: cipherFunctions

Breaking functionality into smaller pieces makes unit tests easier to write and manage. Keeping the handleCipher function separate allowed this function to be tested in isolation.

## Test Principle: cipherFunctions.test.ts

The test file written using Jest checks whether the handleCipher function works correctly. The tests include various scenarios:

- Correct Operation in Forward and Reverse Directions: The function scrolls correctly according to the given direction.
- Correct Processing of Alphabet Border: Correct cyclic transition when reaching the end or beginning of the alphabet.
- Correct Handling of Capital Letters: Correct encoding of capital letters in the text.
