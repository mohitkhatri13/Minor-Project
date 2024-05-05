from flask import Flask, jsonify

app = Flask(__name__)

books = [
    {'id': 1, 'title': 'Python Programming', 'author': 'John Doe'},
    {'id': 2, 'title': 'Flask Basics', 'author': 'Jane Smith'}
]

@app.route('/')
def home():
    return 'Welcome to the Flask App!'

@app.route('/api/books', methods=['GET'])
def get_books():
    return jsonify({'books': books})

@app.route('/api/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    book = next((item for item in books if item['id'] == book_id), None)
    if book:
        return jsonify({'book': book})
    else:
        return jsonify({'message': 'Book not found'}), 404

if __name__ == '_main_':
    app.run(debug=True ,PORT=8000)