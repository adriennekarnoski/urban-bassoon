from myapp import app
from flask import Flask, render_template, request, redirect, url_for


@app.route('/')
def home():
    return render_template('home.html')
