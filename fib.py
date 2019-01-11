from datetime import datetime

def fib(num):
	if(num <= 1):
		return num;
	return fib(num - 2) + fib(num - 1);

startTime = datetime.now()
print fib(37)
print datetime.now() - startTime