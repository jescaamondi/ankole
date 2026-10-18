# Ankole Website Recreation (Practice)

In May 2026 I came across the website of [Ankole Grill](https://www.ankole.co.ke/), a restaurant in Nairobi, and liked its design. I wanted to see if I could rebuild it myself with plain HTML, CSS and JavaScript, so this is my attempt.

My first version didn't meet the standard I wanted, so I didn't push it. I later came back, rebuilt the layout so it works on any screen size, and added the features I had left out.

<img width="1852" height="1057" alt="image" src="https://github.com/user-attachments/assets/b2fb2b61-95b1-4544-8ee3-ad50788a14cb" />

> **Note:** This is a personal learning project. It is not affiliated with Ankole Grill. The logo, photos, menu items and business details belong to them and are loaded from their site for practice only.

## Pages

| Page | File | What it shows |
| --- | --- | --- |
| Home | `index.html` | Full-screen photos that fade from one to the next |
| Our Story | `story.html` | Where the restaurant's name comes from |
| Locations | `branches.html` | The two branches, each linking to the menu |
| Menu | `menu.html` | A sample menu with Breakfast, Food and Drinks tabs |
| Reviews | `review.html` | A review slider with arrows that also moves on its own |
| Careers | `careers.html` | A "Join Us" page with an email link |
| Events | `event.html` | Cards for each event space, with capacity and contact details |
| Gallery | `gallery.html` | A photo grid; click a photo to see it larger |
| Live | `live.html` | Upcoming live music nights |
| Contacts | `contact.html` | Addresses, hours, phone numbers and emails for both branches |
| Reservations | `reservation.html` | A booking form with labelled, required fields |

Every page shares the same header, bottom navigation bar and WhatsApp button:

- **☰** opens a full-screen menu with links to every page.
- **🕒** shows the opening hours of both branches.
- On small screens, the bar shrinks to just the menu, clock and Reservations buttons.

## How it is built

```
ankole/
├── style.css     shared styles: colours, fonts, header, navigation bar, menu, opening hours
├── script.js     menu, opening hours, review slider, menu tabs, gallery and form
├── *.html        one file per page
└── *.css         one stylesheet per page, for that page's own layout
```

## What I learned

- Building a multi-page site and keeping the shared parts consistent
- Moving repeated styles into one shared stylesheet and using CSS variables for colours and fonts
- Responsive layouts with Flexbox, CSS Grid and media queries, instead of fixed pixel positions
- A fading slideshow with CSS animations
- Using JavaScript for a menu toggle, a slider, tabs and a photo lightbox
- Building an accessible form with labels and input types such as `email`, `tel`, `date` and `time`

## Limitations

- The reservation form doesn't send anything. It only shows a message, because this is a practice site.
- The menu is a short sample, not the full menu, and prices may have changed.
- Images load from Ankole's own website, so the pages need an internet connection.

## Run it

No installation needed. Open `ankole/index.html` in your browser.

## Tools

HTML · CSS · JavaScript · Font Awesome · Google Fonts
