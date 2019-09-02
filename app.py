from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/teste')
def teste():
    meu_dicionario = {"title": "Nightwish", "genre": "MetalSynphonico"}
    return jsonify(meu_dicionario)


@app.route('/sobre')
def sobre():
    return render_template('about.html')


@app.route('/contato')
def contato():
    return render_template('contact.html')


if __name__ == '__main__':
    app.run(debug=True)
