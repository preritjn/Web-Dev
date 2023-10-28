const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-items')


// Select tab content item
function selectItem(e) {
    removeBorder();
    removeContent()
    // Add border to current tab
    this.classList.add('tab-border');
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show')
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeContent() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

// Listen for tab click
tabItems.forEach(item=> item.addEventListener('click',selectItem))