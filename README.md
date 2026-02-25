# Life Calendar (or LifeBox)

## Short Description

_A visual life calendar that displays your life as boxes—one for each day until age 88. Reflects on mortality and the value of time._

---

## Long Description / README

### What is Life Calendar?

Life Calendar is an interactive web app that visualizes your life as a grid of boxes. Each box represents one day of your life, calculated from your birth date until the age of 88. As you look at your calendar, you'll see:

- **Blue boxes** = Days you've already lived
- **Gray boxes** = Days remaining

It's a simple yet powerful visual representation of the finite nature of life—inspired by the concept of a "life calendar" that encourages mindfulness about how we spend our time.

### Why Use It?

- **Perspective**: Visualize your lifespan and reflect on how much time you have
- **Motivation**: See the urgency of pursuing meaningful goals and activities
- **Contemplation**: A gentle reminder of mortality and the value of each day
- **Simplicity**: Enter your birth date and instantly generate your personal calendar

### Features

✨ **Interactive Date Picker** - Simply enter your birth date  
📊 **Live Statistics** - View total days, days lived, and days remaining  
🎨 **Visual Clarity** - Color-coded boxes for lived vs. remaining days  
⚡ **Fast Performance** - Built with React for smooth interactions  
📱 **Responsive Design** - Works on desktop and mobile devices  
🌐 **Lightweight** - No unnecessary dependencies or bloat

### Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Bun** - Fast runtime and package manager
- **CSS** - Custom styling with gradient background

### How to Use

1. **Enter your birth date** using the date picker
2. **View your life calendar** generated instantly
3. **See your statistics** - total days, days lived, days remaining
4. **Reflect and inspire** - Use it as a daily reminder to make your time count

### Installation & Running Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/life-calendar.git
cd life-calendar

# Install dependencies
bun install

# Run the development server
bun run dev

# Open in your browser
# Navigate to http://localhost:5173 (or the URL shown in terminal)
```

### Project Structure

```
src/
├── App.tsx           # Main app component
├── LifeBox.tsx       # Life calendar component
└── lifebox.css       # Styling
```

### Mathematics Behind It

The app calculates:

- **Total days until age 88**: Days from birth date to (birth year + 88)
- **Days lived**: Days from birth date to today
- **Days remaining**: Total days - days lived

All calculations account for leap years using JavaScript's native `Date` object.

### Inspiration

This project draws inspiration from the "Life Calendar" concept popularized by various time-awareness tools, reminding us that our time is finite and precious.

### Contributing

Feel free to fork, submit issues, or contribute improvements!

### License

MIT License - feel free to use this project however you like.

---

**Remember: Every day counts. Make yours count too.** ⏳
