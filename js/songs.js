// Song list rendering for songs.html

function renderSongList() {
  const songTableBody = document.querySelector('.song-table tbody');
  if (!songTableBody || typeof songs === 'undefined') return;
  
  if (songs.length === 0) {
    document.querySelector('.song-list-section').innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">♪</div>
        <h3>No Songs Available</h3>
        <p>The repertoire is being built. Check back soon!</p>
      </div>
    `;
    return;
  }
  
  songTableBody.innerHTML = songs.map(song => {
    const instruments = song.instruments.map(inst => 
      inst.replace('-', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    ).join(', ');
    
    const tagsHtml = song.tags.map(tag => 
      `<span class="tag">${tag.replace('-', ' ')}</span>`
    ).join('');
    
    const filterValues = [
      ...song.instruments,
      song.decade,
      ...song.tags
    ].join(',');
    
    return `
      <tr data-filters="${filterValues}">
        <td>${song.title}</td>
        <td>${song.artist}</td>
        <td>${instruments}</td>
        <td>${song.decade}</td>
        <td>
          ${tagsHtml}
          <span class="status-badge">${song.status === 'solo-ready' ? 'Solo Ready' : song.status.replace('-', ' ')}</span>
        </td>
      </tr>
    `;
  }).join('');
  
  // Build filter checkboxes dynamically
  const filterContainer = document.getElementById('filter-checkboxes');
  if (filterContainer) {
    const allInstruments = new Set();
    const allDecades = new Set();
    const allTags = new Set();
    
    songs.forEach(song => {
      song.instruments.forEach(inst => allInstruments.add(inst));
      allDecades.add(song.decade);
      song.tags.forEach(tag => allTags.add(tag));
    });
    
    let filterHtml = '<h3>Filter By:</h3><div class="filters">';
    
    // Instruments
    filterHtml += '<div class="filter-group"><strong>Instruments:</strong></div>';
    Array.from(allInstruments).sort().forEach(inst => {
      const id = `filter-${inst}`;
      const label = inst.replace('-', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      filterHtml += `
        <div class="filter-group">
          <input type="checkbox" id="${id}" value="${inst}" class="filter-checkbox">
          <label for="${id}">${label}</label>
        </div>
      `;
    });
    
    // Decades
    filterHtml += '<div class="filter-group"><strong>Decade:</strong></div>';
    Array.from(allDecades).sort().forEach(decade => {
      const id = `filter-${decade}`;
      filterHtml += `
        <div class="filter-group">
          <input type="checkbox" id="${id}" value="${decade}" class="filter-checkbox">
          <label for="${id}">${decade}</label>
        </div>
      `;
    });
    
    // Tags
    filterHtml += '<div class="filter-group"><strong>Category:</strong></div>';
    Array.from(allTags).sort().forEach(tag => {
      const id = `filter-${tag}`;
      const label = tag.replace('-', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      filterHtml += `
        <div class="filter-group">
          <input type="checkbox" id="${id}" value="${tag}" class="filter-checkbox">
          <label for="${id}">${label}</label>
        </div>
      `;
    });
    
    filterHtml += '<div class="filter-group"><a href="#" class="clear-filters" onclick="event.preventDefault(); document.querySelectorAll(\'.filter-checkbox\').forEach(cb => cb.checked = false); document.querySelector(\'.song-table tbody\').querySelectorAll(\'tr\').forEach(r => r.style.display = \'\'); document.getElementById(\'songs-empty-state\')?.remove();">Clear All</a></div></div>';
    
    filterContainer.innerHTML = filterHtml;
    
    // Re-initialize filters
    initSongFilters();
  }
}

document.addEventListener('DOMContentLoaded', renderSongList);
