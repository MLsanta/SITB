document.addEventListener('DOMContentLoaded', function () {
            
            const topBtn = document.getElementById('scroll__Tbtn');
            const scrollT = 300; 

            window.addEventListener('scroll', function() {
                if (window.scrollY > scrollThreshold || document.documentElement.scrollTop > scrollT) {
                    topBtn.classList.add('show');
                } else {
                    topBtn.classList.remove('show');
                }
            });

            
            topBtn.addEventListener('click', function() {
                window.scrollT({
                    top: 0,
                    behavior: 'smooth' 
                });
            });
            

        });