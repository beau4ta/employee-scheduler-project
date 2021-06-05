
const deselectBtn = document.getElementById('deselect');
const blockContainer = document.querySelector('.blockContainer');
const scheduleContainer = document.querySelector('.schedule_container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up__container');
const noBtn = document.getElementById('btn_no');
const yesBtn = document.getElementById('btn_yes');

let selectedColor, active;

//Event Listeners
scheduleContainer.addEventListener('click', setColors);
deselectBtn.addEventListener('click', resetblocks);
resetBtn.addEventListener('click',openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteblocks);

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