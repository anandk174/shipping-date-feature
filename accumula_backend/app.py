from flask import Flask, jsonify, request, make_response
from datetime import datetime, timedelta
import json

import config

app = Flask(__name__)


def read_products_from_file():
    with open('./sample_data.json', 'r') as f:
        products = json.load(f)
    return products

def prepare_return_value(return_value):
    response = jsonify(return_value)
    response.headers.add('Access-Control-Allow-Origin','*')
    return response

# Health check
@app.route('/', methods=['GET'])
def hello():
    return jsonify({'message': f'Flask server is up and running on PORT {config.SERVER_PORT}'})

@app.route('/shipping/products',  methods=['GET','OPTIONS'])
def shoe_products():

    products = read_products_from_file()
    minifiedProducts = [{"name":x['productName'],"id":x['productId']} for x in products]        

    return prepare_return_value(minifiedProducts)

@app.route('/shipping/product/<int:id>',  methods=['GET'])
def shpping_date(id):

    products = read_products_from_file()

    product = next((product for product in products if product['productId'] == id), None)

    today = datetime.today()
    current_date = today
    
    index = 0

    while index < product['maxBusinessDaysToShip']:        

        if not product['shipOnWeekends'] and (current_date.weekday() == 5 or current_date.weekday() == 6):
            pass
        else:
            index += 1

        current_date += timedelta(days=1)
    
    product['shipping_date'] = current_date

    return prepare_return_value(product)

    
    

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=config.SERVER_PORT)
