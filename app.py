from flask import Flask, render_template, jsonify
from data import schedule, event_details

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', event=event_details, schedule=schedule)

@app.route('/api/schedule')
def api_schedule():
    return jsonify(schedule)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
