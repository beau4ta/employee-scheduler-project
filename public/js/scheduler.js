const schedulerForm = async(event) => {
    event.preventDefault();

    const date = $('#date').val().trim();
    const start_time = $('#start_time').val().trim();
    const end_time = $('#end_time').val().trim();
    const notes = $('#notes').val().trim();
    const work_type = $('#work_type').val().trim();
    const user_id = $('#user_id').val().trim();


    if (date && start_time && end_time && work_type) {
        const response = await fetch('/api/work/', {
            method: 'POST',
            body: JSON.stringify({ date: date, start_time: start_time, end_time: end_time, work_type: work_type, notes: notes, user_id: user_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

$('.scheduler-btn').on('click', schedulerForm);