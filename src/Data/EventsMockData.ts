type Event = {
  eventId: String;
  eventName: String;
  eventDate: Date;
  organizingCompanies: String[];
  intrestedPeople: String[];
  notIntrestedPeople: String[];
  GoingPeople: String[];
  eventDescription: String;
};

type User = {
  userId: String;
  userName: String;
  password: String;
  age: number;
  company: String | null;
  intrestedEventsId: String[];
  notIntrestedEventsId: String[];
  goingEventsId: String[];
  sharedEventIds: String[];
};

const events: Event[] = [
  {
    eventId: "1234",
    eventName: "Painting Competition",
    eventDate: new Date("2022-03-25"),
    organizingCompanies: ["company1", "company2", "company3"],
    intrestedPeople: ["abdullah"],
    notIntrestedPeople: [],
    GoingPeople: [],
    eventDescription: "adsadasdadasdasd",
  },
  {
    eventId: "123456",
    eventName: "Writing Competition",
    eventDate: new Date("2022-04-26"),
    organizingCompanies: ["company11", "company22", "company33"],
    intrestedPeople: [],
    notIntrestedPeople: ["abdullah"],
    GoingPeople: [],
    eventDescription: "adsadasdadasdasd",
  },
  {
    eventId: "12345678",
    eventName: "Running Competition",
    eventDate: new Date("2022-05-27"),
    organizingCompanies: ["company111", "company222", "company333"],
    intrestedPeople: [],
    notIntrestedPeople: [],
    GoingPeople: ["abdullah"],
    eventDescription: "adsadasdadasdasd",
  },
];

const user: User = {
  userId: "1234",
  userName: "abdullah",
  password: "1234",
  age: 23,
  company: "connectia",
  intrestedEventsId: [],
  notIntrestedEventsId: [],
  goingEventsId: [],
  sharedEventIds: [],
};

const status = {
  intrested: 'intrested',
  notIntrested: 'notIntrested',
  going: 'going'
}
export type { Event, User };
export { events, user, status };
