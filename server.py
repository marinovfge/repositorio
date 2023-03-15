from flask_app import app

from flask_app.controllers import index, dashboards


if __name__=="__main__":
    app.run(debug=False, port=5605, host="192.168.152.196")
    # app.run(debug=True, port=5050) # debug mode