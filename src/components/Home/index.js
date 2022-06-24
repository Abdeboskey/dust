import { useState, useEffect, useCallback } from "react";

import Event from '../Event';

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [calEvents, setCalEvents] = useState([]);

  const getMonth = (month) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month];
  const getDayOfWeek = (weekday) => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][weekday];
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
        // end: endDate,
        // dateRange,
        link: event.htmlLink,
      }
    });
  },[processDate]);

  useEffect(() => {
    fetch("./.netlify/functions/calFetch")
      .then((res) => res.json())
      .then(
        (data) => {
          setTimeout(setIsLoaded, 800, true);
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
      <div className="text-center text-4xl font-special font-bold m-8">
        Something went wrong 😕: {error.message}
      </div>
    );
  } else if (!isLoaded) {
    return <div className="text-center text-4xl font-special font-bold m-8">Loading...</div>;
  } else {
    return (
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium italic m-8 drop-shadow-md">Denver Urban Skate Troop</h1>
        <p className="-mt-4 mb-6">~ A weekly inline/roller skating community in Denver, Colorado USA~</p>
        <p className="text-3xl mb-5">Join us for our next meetup:</p>
        <ul>
          {calEvents.map((event) => (
            <Event 
              key={event.id}
              weekday={event.start.weekday}
              month={event.start.month}
              date={event.start.date}
              time={event.start.time}
              title={event.title}
              color={event.description}
              location={event.location}
              htmlLink={event.link}
            />
          ))}
        </ul>
      </div>
    );
  }
};

export default Home;

// https://www.google.com/maps/search/?api=1&query=Parfet+Park%2C+Golden%2C+CO+80401%2C+USA