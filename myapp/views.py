from myapp import app
from flask import Flask, render_template, request, redirect, url_for


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/packages')
def packages():
    return render_template('packages.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/about/package-selection')
def package_selection():
    return render_template('package_selection.html')


@app.route('/basic')
def basic():
    return render_template('basic.html')


@app.route('/standard')
def standard():
    return render_template('standard.html')


@app.route('/premium')
def premium():
    return render_template('premium.html')


@app.route('/prices')
def prices():
    return render_template('prices.html')


@app.route('/process')
def process():
    return render_template('process.html')