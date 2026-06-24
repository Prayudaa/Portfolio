/* =============================================================
   byprayuda — Main Script
   - Cursor ring follower
   - Mobile hamburger menu
   - Scroll reveal (IntersectionObserver)
   - Nav scroll effect
   ============================================================= */

    // Mobile menu
    const hamburger = document.getElementById('navHamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    // Nav scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        nav.style.borderBottomColor = 'rgba(124,58,237,0.15)';
      } else {
        nav.style.borderBottomColor = 'rgba(255,255,255,0.06)';
      }
    }, { passive: true });