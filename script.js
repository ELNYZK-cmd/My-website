// basic interactions for the template
document.addEventListener('DOMContentLoaded', function () {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle && navToggle.addEventListener('click', () => {
    mainNav.style.display = (mainNav.style.display === 'block') ? 'none' : 'block';
  });

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
        // hide mobile nav after click
        if(window.innerWidth <= 900 && mainNav) mainNav.style.display = 'none';
      }
    });
  });

  // contact form: example using Formspree or fallback to mailto
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  // === Option A: Formspree endpoint ===
  // If you have a Formspree endpoint, set it here:
  // const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xxxxxxx';
  // Uncomment the two lines below and set your endpoint to enable AJAX submit:
  // form.setAttribute('action', FORMSPREE_ENDPOINT);
  // form.setAttribute('method','POST');

  // Fallback behavior: show friendly message and open mail client
  form.addEventListener('submit', function (e) {
    // if using Formspree or server endpoint, let it submit normally
    const action = form.getAttribute('action') || '';
    if(action && action.includes('formspree.io')) {
      // allow default submit (or implement fetch)
      formMsg.textContent = 'جاري الإرسال…';
      return;
    }

    // else, prevent default and open mailto as fallback
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('cname').value || '');
    const email = encodeURIComponent(document.getElementById('cemail').value || '');
    const message = encodeURIComponent(document.getElementById('cmessage').value || '');
    const subject = encodeURIComponent('طلب مشروع من ' + (name || email));
    const body = الاسم: ${gerges}%0D%0Aالبريد: ${geroalkeng961@gmail.com}%0D%0A%0D%0A${message};

    // open mail client
    window.location.href = mailto:you@example.com?subject=${subject}&body=${body};
    formMsg.textContent = 'تم فتح برنامج البريد — أكمل الإرسال من هناك.';
  });
});