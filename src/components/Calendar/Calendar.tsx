import React, { useEffect } from 'react';
import { tabs } from './cal-tabs';
import { generateMonthComponents } from './Months';

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




