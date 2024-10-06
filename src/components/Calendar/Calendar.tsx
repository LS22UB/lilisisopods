import React, { useEffect } from 'react';
let tabs = [
    {   
        cssname: "october7", 
        node: <>
            <h1>Team Meeting</h1>
            <h2>Organisation</h2>
            <p>The team discussed important deadlines...</p>
        </>
    },
    {
        cssname: "march7",
        node: <>
            <h1>Project Planning</h1>
            <h2>Project Scope</h2>
            <p>The team discussed the project scope...</p>
        </>
    },
    // Add more entries as needed...
];


export function Calendar({ year }: { year: number }) {
    useEffect(() => {
      showCurrentMonth();  // This shows the current month on page load
    }, []);
  
    // This function generates the components for each month
    const months = generateMonthComponents(year);  // Adjust this function to include 'generateMonthDays'
    const arrows: JSX.Element[] = Arrows();  // Your navigation arrows
  
    return (
      <div className="cal">
        {arrows}
        <ul className="weekdays">
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
          <li>Su</li>
        </ul>
        {months} {/* This will display the months */}
        <CalTabs /> {/* Render the tabs for information */}
      </div>
    );
  }

  function generateMonthComponents(year: number): JSX.Element[] {
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


function Arrows() {
    const months = ["February", "March", "April", "May", "June", "July", "August", "September", "October"];
    let arrows: JSX.Element[] = [];
    for (let index = 0; index < months.length; index++) {
      arrows.push(
        <div className="month hideable" id={`${months[index]}-head`} style={{ display: "none" }}>
          <ul>
            <span>
              {index > 0 && (
                <li className="prev">
                  <a onClick={switchTo(months[index - 1])}>
                    <div>&#10094;</div>
                  </a>
                </li>
              )}
              {index < months.length - 1 && (
                <li className="next">
                  <a onClick={switchTo(months[index + 1])}>
                    <div>&#10095;</div>
                  </a>
                </li>
              )}
            </span>
            <li>
              {months[index]}
              <br />
              <span style={{ fontSize: "18px" }}>2024</span>
            </li>
          </ul>
        </div>
      );
    }
    return arrows;
  }

function switchTo(month: string) {
  return (_event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    let elementsToHide = document.getElementsByClassName("hideable");
    for (let index = 0; index < elementsToHide.length; index++) {
      (elementsToHide[index] as HTMLElement).style.display = "none";
    }

    let newdates = document.getElementById(`${month}-dates`);
    if (newdates) (newdates as HTMLElement).style.display = "block";

    let newArrows = document.getElementById(`${month}-head`);
    if (newArrows) (newArrows as HTMLElement).style.display = "block";
  };
}

// Function to show the current month on page load
function showCurrentMonth() {
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });

  const datesElement = document.getElementById(`${currentMonth}-dates`);
  const arrowsElement = document.getElementById(`${currentMonth}-head`);

  if (datesElement) datesElement.style.display = 'block';
  if (arrowsElement) arrowsElement.style.display = 'block';
}

function isDateInDataset(month: string, day: number): { isActive: boolean, cssname?: string } {
    let dateKey = `${month.toLowerCase()}${day}`;
    let tab = tabs.find(t => t.cssname === dateKey);

    if (tab) {
        return { isActive: true, cssname: tab.cssname };
    }
    return { isActive: false };
}


export function CalTabs() {
    let tablist: JSX.Element[] = []; 
    for (let index = 0; index < tabs.length; index++) {
        tablist.push(
            <div className="cal-entry" id={tabs[index].cssname} style={{display: "none"}}>
                <div className="entry-header">
                    <h5>{parseDateFromCode(tabs[index].cssname)}</h5>
                </div>
                <div className="entry-body">
                    {tabs[index].node}
                </div>
            </div>
        );
    }
    return tablist; 
}

function parseDateFromCode(cssname: string): string {
    let [month, day] = cssname.match(/[a-zA-Z]+|[0-9]+/g) || ["", ""];
    return `${capitalize(month)} ${day}, 2024`;  // Example: February 27, 2024
}

function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
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



  function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }