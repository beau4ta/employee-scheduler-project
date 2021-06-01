const viewCalendar = () => {
    document.location.replace('/calendar');
};

$('.viewbtn').on('click', viewCalendar);

const viewScheduler = () => {
    document.location.replace('/scheduler');
};

$('.editbtn').on('click', viewScheduler);