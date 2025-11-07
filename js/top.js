document.addEventListener('DOMContentLoaded', function () {
    const topBtn = document.getElementById('scroll__Tbtn');
    
    const footer = document.querySelector('footer'); 

    const scrollThreshold = 300; 
    const baseBottomPercent = 10; 
    
    function updateTopButton() {
        const scrollY = window.scrollY; 

        if (scrollY > scrollThreshold) {
            topBtn.classList.add('show');
        } else {
            topBtn.classList.remove('show');
        }
        
        if (footer) { 
            const totalHeight = document.documentElement.scrollHeight; 
            const scrollBottom = scrollY + window.innerHeight; 
            const footerTop = totalHeight - footer.offsetHeight; 

            const baseBottomPx = (window.innerHeight * baseBottomPercent) / 100;

            if (scrollBottom > footerTop) {
                const overlap = scrollBottom - footerTop; 
                topBtn.style.bottom = (baseBottomPx + overlap) + 'px';
            } else {
                topBtn.style.bottom = baseBottomPercent + '%';
            }
        }
    }


    window.addEventListener('scroll', updateTopButton);

    topBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
        });
    });


    updateTopButton(); 
});