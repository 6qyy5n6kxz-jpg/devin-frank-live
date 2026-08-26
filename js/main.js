// Devin Frank Live - Main Script

// Mobile Menu Toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (!menuToggle || !navMenu) return;
  
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
  
  // Close menu when a link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
      navMenu.classList.remove('active');
    }
  });
}

// Set active nav link based on current page
function setActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Format date for display
function formatDate(dateString) {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

// Extract month and day for card display
function getDateParts(dateString) {
  const date = new Date(dateString + 'T00:00:00');
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const day = date.getDate();
  return { month, day };
}

// Format performer name for badge display
function formatPerformerBadge(performer) {
  if (!performer) return null;
  return performer.toUpperCase();
}

// Compare dates (for sorting events)
function compareDates(dateString1, dateString2) {
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);
  return date1 - date2;
}

// Load and render events
function renderEvents() {
  const eventsContainer = document.getElementById('events-list');
  if (!eventsContainer) return;
  
  if (typeof events === 'undefined' || events.length === 0) {
    eventsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">♪</div>
        <h3>No Upcoming Shows</h3>
        <p>Check back soon for upcoming performances. Contact Devin to book an event.</p>
      </div>
    `;
    return;
  }
  
  // Get today's date in YYYY-MM-DD format for comparison
  const today = new Date();
  const todayString = today.getFullYear() + '-' + 
                      String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                      String(today.getDate()).padStart(2, '0');
  
  // Filter public events, exclude past events, and sort by date
  const publicEvents = events
    .filter(event => event.isPublic !== false && event.date >= todayString)
    .sort((a, b) => compareDates(a.date, b.date));
  
  if (publicEvents.length === 0) {
    eventsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">♪</div>
        <h3>No Upcoming Shows</h3>
        <p>Check back soon for upcoming performances. Contact Devin to book an event.</p>
      </div>
    `;
    return;
  }
  
  eventsContainer.innerHTML = publicEvents.map(event => {
    const { month, day } = getDateParts(event.date);
    
    // Build performer badge HTML
    let performerBadgeHtml = '';
    if (event.performer) {
      const performerDisplay = formatPerformerBadge(event.performer);
      performerBadgeHtml = `<div class="event-performer-badge">${performerDisplay}</div>`;
    }
    
    // Build venue HTML (with optional link)
    let venueHtml = `<span class="event-venue-title">${event.venue}</span>`;
    if (event.venueUrl) {
      venueHtml = `<a href="${event.venueUrl}" target="_blank" rel="noopener noreferrer" class="event-venue-title event-venue-link">${event.venue}</a>`;
    }
    
    // Build tickets button
    let ticketsHtml = '';
    if (event.ticketsUrl) {
      ticketsHtml = `<a href="${event.ticketsUrl}" target="_blank" rel="noopener noreferrer" class="event-action-link">Get Tickets →</a>`;
    }
    
    return `
      <div class="event-card">
        <div class="event-card-container">
          <div class="event-date-column">
            <div class="event-date-month">${month}</div>
            <div class="event-date-day">${day}</div>
          </div>
          <div class="event-content-column">
            ${performerBadgeHtml}
            <div class="event-venue-section">
              ${venueHtml}
            </div>
            <div class="event-meta">
              <span class="event-time">${event.time}</span>
              <span class="event-separator">·</span>
              <span class="event-city">${event.city}</span>
            </div>
            ${event.description ? `<p class="event-description">${event.description}</p>` : ''}
            <div class="event-actions">
              ${ticketsHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Song list filtering
function initSongFilters() {
  const filterCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
  const clearFiltersBtn = document.querySelector('.clear-filters');
  
  if (filterCheckboxes.length === 0) return;
  
  function filterSongs() {
    const checkedFilters = Array.from(filterCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    
    const songTableBody = document.querySelector('.song-table tbody');
    if (!songTableBody) return;
    
    const rows = songTableBody.querySelectorAll('tr');
    let visibleCount = 0;
    
    rows.forEach(row => {
      if (checkedFilters.length === 0) {
        row.style.display = '';
        visibleCount++;
      } else {
        const rowData = row.dataset.filters ? row.dataset.filters.split(',') : [];
        const isMatch = checkedFilters.some(filter => rowData.includes(filter));
        row.style.display = isMatch ? '' : 'none';
        if (isMatch) visibleCount++;
      }
    });
    
    // Show empty state if no results
    if (visibleCount === 0) {
      let existingEmpty = document.getElementById('songs-empty-state');
      if (!existingEmpty) {
        existingEmpty = document.createElement('tr');
        existingEmpty.id = 'songs-empty-state';
        existingEmpty.innerHTML = `
          <td colspan="5" class="empty-state" style="text-align: center; padding: var(--spacing-lg); color: var(--color-text-secondary);">
            No songs match the selected filters.
          </td>
        `;
        songTableBody.appendChild(existingEmpty);
      }
      existingEmpty.style.display = '';
    } else {
      const existingEmpty = document.getElementById('songs-empty-state');
      if (existingEmpty) {
        existingEmpty.style.display = 'none';
      }
    }
  }
  
  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterSongs);
  });
  
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      filterCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      filterSongs();
    });
  }
}

// Search songs
function initSongSearch() {
  const searchInput = document.getElementById('song-search');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const songTableBody = document.querySelector('.song-table tbody');
    const rows = songTableBody.querySelectorAll('tr');
    let visibleCount = 0;
    
    rows.forEach(row => {
      if (row.id === 'songs-empty-state') return;
      
      const title = row.cells[0]?.textContent.toLowerCase() || '';
      const artist = row.cells[1]?.textContent.toLowerCase() || '';
      
      const isMatch = title.includes(query) || artist.includes(query);
      row.style.display = isMatch ? '' : 'none';
      if (isMatch) visibleCount++;
    });
    
    if (visibleCount === 0) {
      let existingEmpty = document.getElementById('songs-empty-state');
      if (!existingEmpty) {
        existingEmpty = document.createElement('tr');
        existingEmpty.id = 'songs-empty-state';
        existingEmpty.innerHTML = `
          <td colspan="5" class="empty-state" style="text-align: center; padding: var(--spacing-lg); color: var(--color-text-secondary);">
            No songs found.
          </td>
        `;
        songTableBody.appendChild(existingEmpty);
      }
      existingEmpty.style.display = '';
    } else {
      const existingEmpty = document.getElementById('songs-empty-state');
      if (existingEmpty) {
        existingEmpty.style.display = 'none';
      }
    }
  });
}

// Initialize contact form
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  const submitBtn = form.querySelector('button[type="submit"]');
  const formMessage = document.getElementById('form-message');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Basic validation
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const eventDate = form.querySelector('[name="event-date"]').value.trim();
    const venue = form.querySelector('[name="venue"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    
    if (!name || !email || !eventDate || !venue || !message) {
      if (formMessage) {
        formMessage.innerHTML = '<div class="form-error">Please fill in all required fields.</div>';
      }
      return;
    }
    
    // Check honeypot field
    const honeypot = form.querySelector('[name="website"]')?.value;
    if (honeypot) {
      console.log('Spam detected');
      return;
    }
    
    // Disable button during submission
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        if (formMessage) {
          formMessage.innerHTML = '<div class="form-success">Thank you! Your message has been sent. Devin will be in touch soon.</div>';
        }
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      if (formMessage) {
        formMessage.innerHTML = '<div class="form-error">There was an error sending your message. Please try the direct email option.</div>';
      }
      console.error('Form submission error:', error);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Inquiry';
      }
    }
  });
}

// Initialize all
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  setActiveNavLink();
  renderEvents();
  initSongFilters();
  initSongSearch();
  initContactForm();
});
