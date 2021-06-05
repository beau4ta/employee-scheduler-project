const breakblock = document.getElementById('break');
// const gymblock = document.getElementById('gym');
// const studyblock = document.getElementById('study');
// const tvblock = document.getElementById('tv');
// const friendsblock = document.getElementById('friends');
const workblock = document.getElementById('work');
const deselectBtn = document.getElementById('deselect');
const blockContainer = document.querySelector('.block__container');
const scheduleContainer = document.querySelector('.schedule__container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up__container');
const noBtn = document.getElementById('btn__no');
const yesBtn = document.getElementById('btn__yes');

let selectedColor, active;

//Event Listeners
blockContainer.addEventListener('click', selectblock);
scheduleContainer.addEventListener('click', setColors);
deselectBtn.addEventListener('click', resetblocks);
resetBtn.addEventListener('click',openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteblocks);

// blocks click  (3)
function selectblock (e){
    resetblocks()

    blockColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'break':
            activeblock(breakblock, blockColor);
            icon = '<i class="fas fa-couch"></i>';
            break
        case 'gym':
            activeblock(gymblock, blockColor);
            icon = '<i class="fas fa-dumbbell"></i>';
            break
        case 'study':
            activeblock(studyblock, blockColor);
            icon = '<i class="fas fa-book"></i>';
            break
        case 'tv':
            activeblock(tvblock, blockColor);
            icon = '<i class="fas fa-tv"></i>';
            break
        case 'friends':
            activeblock(friendsblock, blockColor);
            icon = '<i class="fas fa-users"></i>';
            break
        case 'work':
            activeblock(workblock, blockColor);
            icon = '<i class="fas fa-briefcase"></i>';
            break
    }

};

// Set colors for schedule (4)
function setColors (e){
    if(e.target.classList.contains('block') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon;
    }else if(e.target.classList.contains('fas') && active === true){
        e.target.parentElement.style.backgroundColor = selectedColor;
        e.target.parentElement.innerHTML = icon;
    }
};

// Active block (1)
function activeblock(block, color){
    block.classList.toggle('selected');

    if(block.classList.contains('selected')){
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
}

// Reset blocks (2)
function resetblocks(){
    const allblocks = document.querySelectorAll('.block__name');

    allblocks.forEach((item)=>{
        item.className = 'block__name';
    })
}

// Delete blocks
function deleteblocks(){
    const blocks = document.querySelectorAll('.block');

    blocks.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
    })

    closePopup();
}

// Open Pop-up
function openPopup(){
    popUp.style.display = 'flex';
}

// Close Pop-up
function closePopup(){
    popUp.style.display = 'none';
}