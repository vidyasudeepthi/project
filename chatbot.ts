export function getResponse(message: string): string {
  switch (message.toLowerCase()) {
    case 'hello':
      return 'Hello! How can I help you today?';
    case 'bye':
      return 'Goodbye! Have a great day!';
    default:
      return 'I am not sure how to respond to that.';
  }
}
