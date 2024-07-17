const delay = (delayInms: number) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

export async function GET(request: Request) {
  // await delay(2000);
  return Response.json([
    {
      img: "https://picsum.photos/id/250/100/100",
      watched: false,
      stories: [
        "https://picsum.photos/id/237/270/480",
        "https://picsum.photos/id/238/270/480",
        "https://picsum.photos/id/239/270/480",
      ],
    },
    {
      img: "https://picsum.photos/id/251/100/100",
      watched: false,
      stories: [
        "https://picsum.photos/id/240/270/480",
        "https://picsum.photos/id/241/270/480",
        "https://picsum.photos/id/242/270/480",
        "https://picsum.photos/id/243/270/480",
      ],
    },
    {
      img: "https://picsum.photos/id/252/100/100",
      watched: false,
      stories: ["https://picsum.photos/id/244/270/480"],
    },
    {
      img: "https://picsum.photos/id/253/100/100",
      watched: false,
      stories: [
        "https://picsum.photos/id/200/270/480",
        "https://picsum.photos/id/201/270/480",
        "https://picsum.photos/id/202/270/480",
        "https://picsum.photos/id/203/270/480",
      ],
    },
    {
      img: "https://picsum.photos/id/254/100/100",
      watched: false,
      stories: [
        "https://picsum.photos/id/255/270/480",
        "https://picsum.photos/id/256/270/480",
      ],
    },
  ]);
}
