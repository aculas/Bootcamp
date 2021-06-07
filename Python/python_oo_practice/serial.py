"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start=0):
        """Makes a new serial generator starting at start. Both self values equal start """
        self.start = self.next = start

    def __repr__(self):
        """Shows representation of the generator"""
        return f"(Serial Generator start = {self.start} next = {self.next})"

    def generate(self):
        """Returns the next serial number"""
        self.next += 1
        return self.next - 1

    def reset(self):
        """Resets number to the original start value"""
        
        self.next = self.start
