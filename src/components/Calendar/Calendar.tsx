import React, { useEffect } from 'react';

export function Calendar({ year }: { year: number }) {
  useEffect(() => {
    showCurrentMonth();
  }, []);

  const months = generateMonthComponents(year);
  const arrows: JSX.Element[] = Arrows();

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
      {months}
    </div>
  );
}

function generateMonthComponents(year: number): JSX.Element[] {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return months.map((month, index) => {
    const { daysInMonth, startDay } = getMonthInfo(year, index);
    return (
      <ul key={month} id={`${month}-dates`} className="days hideable" style={{ display: 'none' }}>
        {generateDaysForMonth(daysInMonth, startDay)}
      </ul>
    );
  });
}

function getMonthInfo(year: number, monthIndex: number) {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const startDay = new Date(year, monthIndex, 1).getDay();
  return { daysInMonth, startDay };
}

function generateDaysForMonth(daysInMonth: number, startDay: number) {
  let days: JSX.Element[] = [];

  const adjustedStartDay = startDay === 0 ? 6 : startDay - 1;

  for (let i = 0; i < adjustedStartDay; i++) {
    days.push(<li key={`empty-${i}`}></li>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(<li key={day}>{day}</li>);
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
