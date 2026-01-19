from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/gigs')
def gigs():
    return render_template('gigs.html')

@app.route('/lessons')
def lessons():
    return render_template('lessons.html')