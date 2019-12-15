let db = {
  users: [
    {
      userId: "e8PRyDS0w8cbQ8sx8hnkPrPh0fE3",
      email: "new@email.com",
      handle: "new3",
      createdAt: "2019-12-01T01:27:48.010Z",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/socialapp-e7f03.appspot.com/0/32940421.jpg?alt=media",
      bio: "Hello, my name is new3, nice to meet you",
      website: "https://new3.com",
      location: "Stockholm, Sweden"
    }
  ],
  screams: [
    {
      userHandle: "user",
      body: "this is the scream body",
      createdAt: "2019-11-30T13:11:45.523Z",
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "12snjadi1293",
      body: "nice one mate!",
      createdAt: "2019-03-15T10:50:52.798Z"
    }
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "iudhnisofhnkwfn",
      type: "like | comment",
      createdAt: "2019-03-15T10:59:52.798Z"
    }
  ]
};
const userDetails = {
  //Redux
  credentials: {
    uderId: "NDNAKDDNID",
    email: "new3@email.com",
    handle: "new3",
    createdAt: "2019-03-15T10:70:52.798Z",
    imageUrl: "image/naisoda/dasiufn",
    bio: "Hello, my name is new3, nice to meet you",
    website: "https://user.com",
    location: "Stockholm, Sweden"
  },
  likes: [
    {
      userHandle: "user",
      screamId: "hhqwdjn217012"
    },
    {
      userHandle: "user",
      screamId: "insabdan12897"
    }
  ]
};
