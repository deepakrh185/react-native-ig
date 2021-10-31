import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500x`",

    user: USERS[0].user,
    likes: 651465,
    caption: "you can do deepak s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "elon musk",
        comment: "wow wht the fucking post!!!!pecimen book. It has survived not only five centuries, but also the leap into electronic typesetand m",
      },
      {
        user: "jeffry",
        comment: "fkaqejalkdff",
      },
      {
        user: "jeffry",
        comment: "fkaqejalkdff",
      },
    ],
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    user: USERS[1].user,
    likes: 1585,
    caption: "fuck the fucking",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "robert",
        comment: "wow wht the fucking post!!!!1",
      },
      {
        user: "shawn",
        comment: "fkaqejalkdff",
      },
    ],
  },
];
