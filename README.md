# Challenge 1: TV remote

My TV remote control has arrow buttons and an OK button.  I can use these to move a "cursor" on a logical screen keyboard to type "words"

The screen "keyboard" layout looks like this:

    a	b	c	d	e	1	2	3
    f	g	h	i	j	4	5	6
    k	l	m	n	o	7	8	9
    p	q	r	s	t	.	@	0
    u	v	w	x	y	z	_	/

How many button presses on my remote are required to type a given word?

Notes:
    - The cursor always starts on the letter a (top left)
    - Remember to also press OK to "accept" each character.
    - Take a direct route from one character to the next
    - The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)
    - A "word" (for the purpose of this challenge) is any sequence of characters available on my virtual "keyboard"



# Challenge 2: TV remote (shift and space)

The screen "keyboard" layout looks like this:

    a	b	c	d	e	1	2	3
    f	g	h	i	j	4	5	6
    k	l	m	n	o	7	8	9
    p	q	r	s	t	.	@	0
    u	v	w	x	y	z	_	/
    aA  SP          			

aA is the SHIFT key. Pressing this key toggles alpha characters between UPPERCASE and lowercase

SP is the space character

The other blank keys after SP in the bottom row have no function

How many button presses on my remote are required to type the given words?

Notes:
- The cursor always starts on the letter a (top left)
- The alpha characters are initially lowercase (as shown above)
- Remember to also press OK to "accept" each letter
- Take a direct route from one letter to the next
- The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)
- Although the blank keys have no function, you may navigate through them if you want to
- Spaces may occur anywhere in the words string.
- Do not press the SHIFT key until you need to. For example, with the word e.Z, the SHIFT change happens after the . is pressed (not before)		



# Challenge 3: TV remote (wrap)

The screen "keyboard" layout looks like this:

    a	b	c	d	e	1	2	3
    f	g	h	i	j	4	5	6
    k	l	m	n	o	7	8	9
    p	q	r	s	t	.	@	0
    u	v	w	x	y	z	_	/
    aA  SP

aA is the SHIFT key. Pressing this key toggles alpha characters between UPPERCASE and lowercase
SP is the space character
The other blank keys in the bottom row have no function

How many button presses on my remote are required to type the given words?

Notes: 
- The cursor always starts on the letter a (top left)
- The alpha characters are initially lowercase (as shown above)
- Remember to also press OK to "accept" each letter
- Take the shortest route from one letter to the next
- The cursor wraps, so as it moves off one edge it will reappear on the opposite edge
- Although the blank keys have no function, you may navigate through them if you want to
- Spaces may occur anywhere in the words string
- Do not press the SHIFT key until you need to. For example, with the word e.Z, the SHIFT change happens after the . is pressed (not before)

# Directions reversal

You will be given directions and the task will be to find your way back.

# Hourglass

Given a  2D Array :

    1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0

An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

    a b c
      d
    e f g

There are  hourglasses in. An hourglass sum is the sum of an hourglass' values. 
Calculate the hourglass sum for every hourglass in, then print the maximum hourglass sum.
