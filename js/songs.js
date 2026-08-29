// Song list rendering and filtering for songs.html

// Track active filters
let activeFilters = {
  instruments: new Set(),
  decades: new Set(),
  styles: new Set(),
  search: ''
};

// Format label text from filter values
function formatLabel(text) {
  return text
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Build filter chips
function buildFilterChips() {
  if (typeof songs === 'undefined' || songs.length === 0) return;
  
  const allInstruments = new Set();
  const allDecades = new Set();
  const allStyles = new Set();
  
  // Collect all unique filters
  songs.forEach(song => {
    song.instruments.forEach(inst => allInstruments.add(inst));
    allDecades.add(song.decade);
    song.tags.forEach(tag => allStyles.add(tag));
  });
  
  // Build Instrument Chips
  const instrumentContainer = document.getElementById('instrument-filters');
  if (instrumentContainer) {
    instrumentContainer.innerHTML = Array.from(allInstruments)
      .sort()
      .map(inst => `
        <button class="songs-filter-chip" data-filter-type="instruments" data-filter-value="${inst}" aria-pressed="false">
          ${formatLabel(inst)}
        </button>
      `)
      .join('');
  }
  
  // Build Decade Chips
  const decadeContainer = document.getElementById('decade-filters');
  if (decadeContainer) {
    decadeContainer.innerHTML = Array.from(allDecades)
      .sort()
      .map(decade => `
        <button class="songs-filter-chip" data-filter-type="decades" data-filter-value="${decade}" aria-pressed="false">
          ${decade}
        </button>
      `)
      .join('');
  }
  
  // Build Style/Tag Chips
  const styleContainer = document.getElementById('style-filters');
  if (styleContainer) {
    styleContainer.innerHTML = Array.from(allStyles)
      .sort()
      .map(tag => `
        <button class="songs-filter-chip" data-filter-type="styles" data-filter-value="${tag}" aria-pressed="false">
          ${formatLabel(tag)}
        </button>
      `)
      .join('');
  }
  
  // Attach event listeners to all chips
  document.querySelectorAll('.songs-filter-chip').forEach(chip => {
    chip.addEventListener('click', handleFilterChipClick);
  });
}

// Handle filter chip click
function handleFilterChipClick(e) {
  const filterType = e.target.dataset.filterType;
  const filterValue = e.target.dataset.filterValue;
  const isActive = activeFilters[filterType].has(filterValue);
  
  if (isActive) {
    activeFilters[filterType].delete(filterValue);
    e.target.classList.remove('active');
    e.target.setAttribute('aria-pressed', 'false');
  } else {
    activeFilters[filterType].add(filterValue);
    e.target.classList.add('active');
    e.target.setAttribute('aria-pressed', 'true');
  }
  
  updateClearFiltersButton();
  renderFilteredSongs();
}

// Update clear filters button visibility
function updateClearFiltersButton() {
  const hasFilters = activeFilters.instruments.size > 0 ||
                     activeFilters.decades.size > 0 ||
                     activeFilters.styles.size > 0;
  
  const clearBtn = document.getElementById('clear-filters-btn');
  if (clearBtn) {
    clearBtn.style.display = hasFilters ? 'inline-block' : 'none';
  }
}

// Clear all filters
function clearAllFilters() {
  activeFilters.instruments.clear();
  activeFilters.decades.clear();
  activeFilters.styles.clear();
  activeFilters.search = '';
  
  document.getElementById('song-search').value = '';
  
  document.querySelectorAll('.songs-filter-chip').forEach(chip => {
    chip.classList.remove('active');
    chip.setAttribute('aria-pressed', 'false');
  });
  
  updateClearFiltersButton();
  renderFilteredSongs();
}

// Filter songs based on active filters and search
function getFilteredSongs() {
  if (typeof songs === 'undefined') return [];
  
  const searchTerm = activeFilters.search.toLowerCase();
  
  return songs.filter(song => {
    // Check search
    if (searchTerm) {
      const matchesSearch = 
        song.title.toLowerCase().includes(searchTerm) ||
        song.artist.toLowerCase().includes(searchTerm);
      if (!matchesSearch) return false;
    }
    
    // Check instrument filter
    if (activeFilters.instruments.size > 0) {
      const hasInstrument = song.instruments.some(inst => 
        activeFilters.instruments.has(inst)
      );
      if (!hasInstrument) return false;
    }
    
    // Check decade filter
    if (activeFilters.decades.size > 0) {
      if (!activeFilters.decades.has(song.decade)) return false;
    }
    
    // Check style filter
    if (activeFilters.styles.size > 0) {
      const hasTag = song.tags.some(tag => 
        activeFilters.styles.has(tag)
      );
      if (!hasTag) return false;
    }
    
    return true;
  });
}

// Render filtered songs
function renderFilteredSongs() {
  const filtered = getFilteredSongs();
  const tableBody = document.getElementById('song-table-body');
  const emptyState = document.getElementById('empty-state');
  const resultsCounter = document.getElementById('results-count');
  const listContainer = document.getElementById('song-list-container');
  
  if (!tableBody || !emptyState || !resultsCounter) return;
  
  // Update results counter
  const count = filtered.length;
  if (count === 0) {
    resultsCounter.textContent = 'No songs found.';
  } else if (count === 1) {
    resultsCounter.textContent = '1 song';
  } else {
    resultsCounter.textContent = `${count} songs`;
  }
  
  // Render table or empty state
  if (filtered.length === 0) {
    listContainer.style.display = 'none';
    emptyState.style.display = 'block';
  } else {
    listContainer.style.display = 'block';
    emptyState.style.display = 'none';
    
    tableBody.innerHTML = filtered.map(song => {
      const instrumentBadges = song.instruments
        .map(inst => `<span class="song-instrument-badge">${formatLabel(inst)}</span>`)
        .join('');
      
      return `
        <tr>
          <td class="song-title">${song.title}</td>
          <td class="song-artist">${song.artist}</td>
          <td>${instrumentBadges}</td>
          <td>${song.decade}</td>
        </tr>
      `;
    }).join('');
  }
}

// Handle search input
function handleSearch(e) {
  activeFilters.search = e.target.value;
  updateClearFiltersButton();
  renderFilteredSongs();
}

// Initialize the song list
function initSongList() {
  if (typeof songs === 'undefined' || songs.length === 0) {
    const container = document.getElementById('song-list-container');
    if (container) {
      container.innerHTML = `
        <div class="songs-empty-state">
          <div class="songs-empty-state-icon">♪</div>
          <h3>No songs available</h3>
          <p>The repertoire is being built. Check back soon!</p>
        </div>
      `;
    }
    return;
  }
  
  // Build filter chips
  buildFilterChips();
  
  // Attach search handler
  const searchInput = document.getElementById('song-search');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }
  
  // Attach clear filters button handler
  const clearBtn = document.getElementById('clear-filters-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearAllFilters);
  }
  
  // Attach empty state clear button handler
  const emptyStateClearBtn = document.getElementById('empty-state-clear-btn');
  if (emptyStateClearBtn) {
    emptyStateClearBtn.addEventListener('click', clearAllFilters);
  }
  
  // Initial render
  renderFilteredSongs();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initSongList);
