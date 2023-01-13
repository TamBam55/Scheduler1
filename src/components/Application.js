import React, { useState } from "react";

import DayList from "./DayList";
import InterviewerList from "./InterviewerList";
import Appointment from "components/Appointment";

import "components/Application.scss";

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Xanthadar Brillimazig",
      interviewer: {
        id: 1,
        name: "Guppy Guilderson",
        avatar: "https://i.imgur.com/twYrpay.jpg",
      }
    }
  },
  {
    id: 5,
    time: "4pm",
    interview: {
      student: "Alice Liddell",
      interviewer: {
        id: 1,
        name: "Fran Drescher",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  }
];

export default function Application(props) {
  const [getDay, setDay] = useState("Monday");
  const [value, onChange] = useState(1)

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {dailyAppointments}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
