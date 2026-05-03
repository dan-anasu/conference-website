# Google Cloud Tech Summit 2026 - Informational Site

This is a single-page informational website for a 1-day technical conference about Google Cloud Technologies.

## Features
- **Dynamic UI**: Rich aesthetics with glassmorphism, responsive design, and CSS micro-animations.
- **Search & Filter**: Real-time JavaScript search functionality to filter talks by title, speaker name, or category.
- **Schedule**: A 1-day event timetable featuring 10 talks/sessions and a 60-minute networking lunch break.

## Tech Stack
- **Backend**: Python, Flask
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (No external UI frameworks)

## Setup and Installation

### Prerequisites
- Python 3.8+

### Running Locally

1. **Clone or Navigate to the directory:**
   ```bash
   cd conference-website
   ```

2. **Create a Virtual Environment (Recommended):**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask Application:**
   ```bash
   python3 app.py
   ```

5. **View the Site:**
   Open a web browser and navigate to `http://localhost:5000` or `http://127.0.0.1:5000`.

## Making Changes
- **Content (Talks, Speakers, Schedule)**: Modify the lists and dictionaries in `data.py`.
- **Backend Routing**: Add or modify routes in `app.py`.
- **Frontend Layout**: Update the HTML structure in `templates/index.html`.
- **Styling**: Modify variables and classes in `static/css/style.css`.
- **Interactivity**: Update the search logic and other JavaScript in `static/js/main.js`.
