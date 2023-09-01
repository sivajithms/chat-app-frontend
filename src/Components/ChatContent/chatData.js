// const data = [
//     {
//       text: "Hi, how's it going?",
//       received: true,
//     },
//     {
//       text: "Hi, how's it going?",
//       received: false,
//     },
//     {
//       text: "Hi, how's it going?",
//       received: true,
//     },
//     {
//       text: "Hi, how's it going?",
//       received: false,
//     },
//     {
//       text: "Hello!",
//       received: true,
//     },
//     {
//       text: "Hey there!",
//       received: false,
//     },
//     {
//       text: "What's up?",
//       received: true,
//     },
//     {
//       text: "Not much, just chilling.",
//       received: false,
//     },
//     {
//       text: "How was your day?",
//       received: true,
//     },
//     {
//       text: "It was good, thanks!",
//       received: false,
//     },
//     {
//       text: "Any plans for the weekend?",
//       received: true,
//     },
//     {
//       text: "I'm thinking of going hiking.",
//       received: false,
//     },
//     {
//       text: "Sounds fun! I might watch a movie.",
//       received: true,
//     },
//     {
//       text: "That's a great idea!",
//       received: false,
//     },
//   ];

const data = [{
  id: 'chat_123', // Unique identifier for the chat
  participants: ['user1', 'user2'], // IDs or usernames of participants
  messages: [
    {
      id: 'msg_1',
      sender: 'user1',
      content: 'Hey there!',
      timestamp: 1669027200000, // Unix timestamp in milliseconds
      isDelivered: true,
      timeOfDelivery: 1669027220000,
      isSeen: true
    },
    {
      id: 'msg_2',
      sender: 'user2',
      content: 'Hi! How are you?',
      timestamp: 1669027240000,
      isDelivered: true,
      timeOfDelivery: 1669027280000,
      isSeen: false
    },
  ]
}]


  export default data;
