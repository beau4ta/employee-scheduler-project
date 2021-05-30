var p = MindFusion.Scheduling;
// create a new instance of the calendar
calendar = new p.Calendar(document.getElementById("calendar"));

calendar.render();

// set the view to WeekRange
calendar.currentView = CalendarView.WeekRange;

// renders a single week
calendar.weekRangeSettings.weekStyle = p.WeekRangeViewStyle.SingleWeek;
calendar.weekRangeSettings.headerStyle = p.HorizontalHeaderStyle.None;
calendar.weekRangeSettings.visibleRows = 5;
 
