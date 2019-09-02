from flask import Flask, render_template, jsonify


app = Flask(__name__)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    print("Path: {}".format(path))
    return render_template("vue/index.html")


@app.route('/api/v1/foo')
def api_foo():
    return jsonify("API V1 FOO"), 200


@app.route('/teste')
def teste():
    dicionario = {'teste': 'testando'}
    return jsonify(dicionario)


if __name__ == '__main__':
    app.run()
