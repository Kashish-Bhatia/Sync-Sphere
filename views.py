from flask import Blueprint, render_template, request, redirect, url_for

views = Blueprint(__name__, "views")


@views.route("/signup", methods=["POST", "GET"])
def signup():
    return render_template("signup.html")


@views.route("/stats")
def stats(name):
    session={}
    if session['user']:
        pass                                                            # careful here dont forget this
    return render_template("stats.html")


@views.route("/pre home")
def pre_home():
    return render_template("pre home and home.html")


@views.route("/Welcome, <user>")
def home():
    #user = session['user']                                               # this actually might be needed
    return render_template("home.html")


@views.route("/pdf to image")
def pdf_convi():
    return render_template("pdf to image.html")


@views.route("/go to home")
def go_to_home():
    return redirect(url_for("views.home"))




