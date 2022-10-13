let counter = 0;

while ((counter = 1)) {
	console.log(counter);
	counter += 1;

	if (counter > 2) {
		break;
	}
}

// The following code causes an infinite loop (a loop that never stops iterating). Why?

// on line 3, we are assigning 1 to counter variable inside the conditional of the loop. Condition is always set to true and never reaches condition on line 7 to break the loop.
