async function favoriteEvents() {
    let idData = $(this).attr("value")
    console.log(idData);
    let event_id = JSON.parse(idData);
  
    const responseData = await fetch('/api/favorites', {
      method: 'POST',
      body: JSON.stringify({ event_id: event_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(responseData);

    const favoritesData = await fetch('/api/favorites', {
        method: 'GET',
        body: JSON.stringify({ event_id: event_id }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(favoritesData);
}
  
//   $('button id').on("click", "favorites", favoriteEvents)