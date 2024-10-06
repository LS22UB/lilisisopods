import React from "react";
import { tabs } from './cal-tabs';


export function generateMonthComponents(year: number): JSX.Element[] {
    const months = [
      { name: "January", days: 31 },
      { name: "February", days: isLeapYear(year) ? 29 : 28 },  // Adjust for leap years
      { name: "March", days: 31 },
      { name: "April", days: 30 },
      { name: "May", days: 31 },
      { name: "June", days: 30 },
      { name: "July", days: 31 },
      { name: "August", days: 31 },
      { name: "September", days: 30 },
      { name: "October", days: 31 },
      { name: "November", days: 30 },
      { name: "December", days: 31 },
    ];
  
    const monthComponents = [];
  
    for (let i = 0; i < months.length; i++) {
      const month = months[i];
      const startDay = new Date(year, i, 1).getDay(); // Find the day of the week the month starts on
  
      monthComponents.push(
        <ul key={month.name} id={`${month.name}-dates`} className="days hideable" style={{ display: "none" }}>
          {generateMonthDays(month.name, year, (startDay + 6) % 7, month.days)} {/* Adjust startDay to match Mon-Sun */}
        </ul>
      );
    }
  
    return monthComponents;
  }



  function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }



function generateMonthDays(month: string, year: number, startDay: number, numDays: number) {
  let days: JSX.Element[] = [];

  // Add empty elements to represent days before the start of the month
  for (let i = 0; i < startDay; i++) {
      days.push(<li key={`empty-${i}`}></li>);
  }

  // Add actual days of the month
  for (let day = 1; day <= numDays; day++) {
      const { isActive, cssname } = isDateInDataset(month, day);
      if (isActive && cssname) {
          days.push(
              <li key={`${month}-${day}`}>
                  <a onClick={showEntry(cssname)}>
                      <span className="active">{day}</span>
                  </a>
              </li>
          );
      } else {
          days.push(<li key={`${month}-${day}`}>{day}</li>);
      }
  }

  return days;
}



function showEntry(entry: string) {
  return (_event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      let elementsToHide = document.getElementsByClassName("cal-entry");
      for (let index = 0; index < elementsToHide.length; index++) {
          (elementsToHide[index] as HTMLElement).style.display = "none";
      }

      let entryBlock = document.getElementById(entry);
      if (entryBlock) {
          (entryBlock as HTMLElement).style.display = "block";
      }
  };
}


function isDateInDataset(month: string, day: number): { isActive: boolean, cssname?: string } {
  let dateKey = `${month.toLowerCase()}${day}`;
  let tab = tabs.find(t => t.cssname === dateKey);

  if (tab) {
      return { isActive: true, cssname: tab.cssname };
  }
  return { isActive: false };
}