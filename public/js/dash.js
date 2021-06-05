const viewCalendar = () => {
    document.location.replace('/calendar');
    console.log('hi')
};

$('.view-btn').on('click', viewCalendar);

const viewScheduler = () => {
    document.location.replace('/schedule');
    console.log('hi')
};

$('.edit-btn').on('click', viewScheduler);