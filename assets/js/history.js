function adjustHistoryLayout() {
    const historySection = document.querySelector('.history-section');
    if (window.innerWidth <= 600) {
        historySection.classList.add('mobile-view');
    } else {
        historySection.classList.remove('mobile-view');
    }
}

// Adjust on load
window.addEventListener('load', adjustHistoryLayout);

// Adjust on resize
window.addEventListener('resize', adjustHistoryLayout);