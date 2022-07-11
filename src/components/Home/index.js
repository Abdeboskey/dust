import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import Event from '../Event';
import Hero from "../Hero";

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [calEvents, setCalEvents] = useState([]);
  const [seeMultipleEvents, setSeeMultipleEvents] = useState(false);

  const getMonth = (month) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month];
  const getDayOfWeek = (weekday) => ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'][weekday];
  const isAM = (hour) => hour < 12;
  const getHour = (hour) => (hour <= 12 ? hour : hour - 12);
  const getMinute = (minute) => minute === 0 ? '00' : minute;

  const processDate = useCallback((date) => {
    const hour = getHour(date.getHours()) === 0
      ? false
      : getHour(date.getHours());
    const minute = getMinute(date.getMinutes());
    const timeSuffix = `${isAM(date.getHours())
      ? 'AM'
      : 'PM'
    }`;
    const time = hour && `${hour}:${minute}${timeSuffix}`;

    return {
      month: getMonth(date.getMonth()),
      weekday: getDayOfWeek(date.getDay()),
      time,
      date: date.getDate(),
    }
  },[]);
  
  const massageEventData = useCallback((events) => {
    return events.map((event) => {
      const startDate = event.start.dateTime
        ? processDate(new Date(event.start.dateTime)) 
        : processDate(new Date(`${event.start.date}T00:00:00`));
      
      return {
        id: event.id,
        title: event.summary,
        description: event.description,
        location: event.location,
        start: startDate,
      }
    });
  },[processDate]);

  useEffect(() => {
    fetch("./.netlify/functions/calFetch")
      .then((res) => res.json())
      .then(
        (data) => {
          setTimeout(setIsLoaded, 600, true);
          setCalEvents(massageEventData(data));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [massageEventData]);

  if (error) {
    return (
      <div>
        <Hero />
        <div className="text-center text-4xl font-special font-bold m-8">
          It is Br0ken 😕: {error.message}
        </div>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div>
        <Hero />
        <div className="text-center">
          <p className="text-2xl md:text-5xl m-8">
            Join us for our next meetup:
          </p>
          <div className="text-center text-4xl font-special font-bold m-16">
            Loading...
          </div>
          <p className="text-lg my-8 mx-2 md:mx-auto max-w-prose">
            Check out our{" "}
            <Link to="/welcome" className="text-sky-500 underline font-medium">
              Welcome/FAQ
            </Link>{" "}
            and{" "}
            <Link
              to="/resources"
              className="text-sky-500 underline font-medium"
            >
              Resources
            </Link>{" "}
            sections to learn more about DUST, or get some sweet merch from our{" "}
            <a
              href="https://denverurbanskatetroop.bigcartel.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-500 underline font-medium"
            >
              Shop!
            </a>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Hero />
        <div className="text-center">
          <p className="text-2xl md:text-5xl m-8">
            Join us for our next skate:
          </p>
          <ul>
            {!seeMultipleEvents &&
              calEvents.map((event) => (
                <Event
                  key={event.id}
                  weekday={event.start.weekday}
                  month={event.start.month}
                  date={event.start.date}
                  time={event.start.time}
                  title={event.title}
                  color={event.description}
                  location={event.location}
                />
              ))[0]}
            {seeMultipleEvents &&
              calEvents
                .map((event) => (
                  <Event
                    key={event.id}
                    weekday={event.start.weekday}
                    month={event.start.month}
                    date={event.start.date}
                    time={event.start.time}
                    title={event.title}
                    color={event.description}
                    location={event.location}
                  />
                ))
                .slice(0, 7)}
          </ul>
          <button
            className="block mx-auto m-8 bg-gray-200 border-2 border-dusteal rounded-lg shadow-lg text-gray-900 w-52 p-2"
            onClick={() => setSeeMultipleEvents(!seeMultipleEvents)}
          >
            {!seeMultipleEvents ? "See More Skates..." : "See Less Skates"}
          </button>
          <a
            className="text-sky-500 underline font-medium"
            href="https://calendar.google.com/calendar/u/5?cid=ZGVudmVydXJiYW5za2F0ZXRyb29wQGdtYWlsLmNvbQ"
            target="_blank"
            rel="noreferrer"
          >
            Add DUST to your Google Calendar
          </a>
          <p className="text-lg my-8 mx-2 md:mx-auto max-w-prose">
            Check out our{" "}
            <Link to="/welcome" className="text-sky-500 underline font-medium">
              Welcome/FAQ
            </Link>{" "}
            and{" "}
            <Link
              to="/resources"
              className="text-sky-500 underline font-medium"
            >
              Resources
            </Link>{" "}
            sections to learn more about DUST, or get some sweet merch from our{" "}
            <a
              href="https://denverurbanskatetroop.bigcartel.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-500 underline font-medium"
            >
              Shop!
            </a>
          </p>
        </div>
      </div>
    );
  }
};

export default Home;
