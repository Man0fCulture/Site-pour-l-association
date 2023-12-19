import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          title: 'Meeting',
          start: '2023-12-01 00:00',
          end: '2023-12-02 12:00',
        },
      ],
    };
  }

  // Méthode pour gérer le déplacement d'événements
  handleEventDrop = (eventInfo) => {
    if(window.confirm("Are you sure you want to change the event date?")){
      console.log('change confirmed')

      // update
      //this.props.updateAppointment({...info.event.extendedProps, start: info.event.start, end: info.event.end})

  } else {
      console.log('change aborted')
  }
    console.log('Event dropped', eventInfo);
    // Mettez à jour les données
  }

  // Méthode pour gérer le clic sur un événement
  handleEventClick = (eventClickInfo) => {
    this.props.openAppointment(event.extendedProps)
    console.log('Event clicked', eventClickInfo);
    // Effectuez des actions en fonction du clic sur l'événement
  }

  // Méthode pour gérer le clic sur le calendrier pour créer un nouvel événement
  handleDateClick = (arg) => {
    let title = prompt("Nom de l'évenment:");
    if (title) {

      let dateStr = prompt("Date de l'événement: Année:");
      let monthStr = prompt("Date de l'événement: Mois:");
      let jour = prompt("Date de l'événement: jour:");
      let date = dateStr.concat("-", monthStr, "-", jour, " ");

      console.log(date)

      let timeStr = prompt("Heure de l'événement (Heure):");
      let beg = date.concat(timeStr, ":00")
      dateStr = prompt("Date de fin: Année:");
      monthStr = prompt("Date de fin: Mois:");
      jour = prompt("Date de fin : jour:");
      date = dateStr.concat("-", monthStr, "-", jour, " ");

      console.log(date)
      timeStr = prompt("Heure de fin (Heure):");
      let end = date.concat(timeStr, ":00");
      const newEvent = { title, start: beg, end: end};
      this.setState({ events: [...this.state.events, newEvent] });
      console.log(newEvent)
    }
  }

  render() {
    return (
      <FullCalendar 
        //defaultView="dayGridMonth" 
        plugins={[dayGridPlugin, interactionPlugin]}
        editable={true}
        eventDrop={this.handleEventDrop}
        eventClick={this.handleEventClick}
        events={this.state.events}
        dateClick={this.handleDateClick} // Ajoutez cette ligne pour gérer le clic sur le calendrier
      />
    );
  }
}




// lib : full calendar, react-select