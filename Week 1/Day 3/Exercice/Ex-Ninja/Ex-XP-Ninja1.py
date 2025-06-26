class Phone:
    def __init__(self, phone_number):
        # Initialize phone number, call history, and messages
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        # This method simulates calling another phone
        call_message = f"Phone {self.phone_number} called Phone {other_phone.phone_number}"
        self.call_history.append(call_message)
        print(call_message)

    def show_call_history(self):
        # This method shows the call history of the phone
        print(f"Call history for Phone {self.phone_number}:")
        for call in self.call_history:
            print(call)

    def send_message(self, other_phone, content):
        # This method simulates sending a message to another phone
        message = {
            'to': other_phone.phone_number,
            'from': self.phone_number,
            'content': content
        }
        self.messages.append(message)
        print(f"Message sent from Phone {self.phone_number} to Phone {other_phone.phone_number}: {content}")

    def show_outgoing_messages(self):
        # This method shows the outgoing messages sent by this phone
        print(f"Outgoing messages from Phone {self.phone_number}:")
        for message in self.messages:
            if message['from'] == self.phone_number:
                print(f"To: {message['to']}, Content: {message['content']}")

    def show_incoming_messages(self):
        # This method shows the incoming messages received by this phone
        print(f"Incoming messages for Phone {self.phone_number}:")
        for message in self.messages:
            if message['to'] == self.phone_number:
                print(f"From: {message['from']}, Content: {message['content']}")

    def show_messages_from(self, other_phone):
        # This method shows messages from a specific phone number
        print(f"Messages from Phone {other_phone.phone_number} to Phone {self.phone_number}:")
        for message in self.messages:
            if message['from'] == other_phone.phone_number:
                print(f"Content: {message['content']}")


# Example usage:

# Create phone objects
phone1 = Phone("123-456-7890")
phone2 = Phone("987-654-3210")

# Call simulation
phone1.call(phone2)
phone2.call(phone1)

# Show call history
phone1.show_call_history()
phone2.show_call_history()

# Send messages
phone1.send_message(phone2, "Hello! How are you?")
phone2.send_message(phone1, "I'm good, thanks! And you?")

# Show message history
phone1.show_outgoing_messages()
phone1.show_incoming_messages()
phone2.show_outgoing_messages()
phone2.show_incoming_messages()

# Show messages from a specific phone
phone1.show_messages_from(phone2)
