ANIMAL GROUPS — FUN CARD VERSION

Features
- 112 animal cards
- Tap-to-flip collectible-card style
- Animal → collective noun and reverse quiz modes
- All Animals mode = one full 112-card round
- Every other deck = up to 20 cards per round
- Score and streak counter
- Weirdness rating
- Category badges
- Confetti on correct answers
- Missed cards automatically go into Hard Cards
- Manually add/remove Hard Cards
- Category-specific decks
- Swipe left for next card; swipe right to flip
- Offline support after first load
- iPhone Home Screen support

TO UPDATE AN EXISTING GITHUB PAGES VERSION
1. Unzip this package.
2. In your existing GitHub repository, replace:
   index.html
   styles.css
   app.js
   manifest.webmanifest
   sw.js
   icon-192.png
   icon-512.png
3. Commit the changes.
4. Wait about a minute, then reload the site.
5. If the old design remains on iPhone, close the Home Screen app completely and reopen it.


ROUND LOGIC
- All animals: 112 cards in one round, shown as Card 1 / 112 through 112 / 112.
- Mammals, Birds, Reptiles, Sea life, Invertebrates, and Hard Cards: maximum 20 cards per round.
- Practice Missed uses only the missed cards from the previous round.


FAVORITES
- Tap ♡ Favorite to save any card you simply like.
- Favorites are separate from Hard Cards.
- Favorites are saved on the device using local storage.
- Deck menu now includes Favorites — up to 20 cards per round.
- Hard Cards still collect missed cards automatically and can also be toggled manually.


V5 FIX
- Fixed Favorite button: it now toggles and persists correctly.
- Favorite selection visibly changes from ♡ Favorite to ♥ Favorite.
- Favorite button no longer resets/flips the current card.
- Favorites deck is functional.
- All Animals is verified as a full 112-card round.
- Other decks remain capped at 20 cards.
- Empty Favorites/Hard decks now show an empty-deck message instead of silently loading all animals.
