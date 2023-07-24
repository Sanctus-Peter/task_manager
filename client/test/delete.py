import requests

product_id = input("Enter product id to be deleted:\t")
try:
    product_id = int(product_id)
except:
    product_id = None
    print("Invalid product id")

if product_id:
    endpoint = f"http://localhost:8000/api/tasks/{product_id}/delete"

    requested_data = requests.delete(
        endpoint,
        params={"abc": 123},
        # data={"name": "John", "age": 23},
        json={"title": "Hoodie", "description": "XXL white shirt", "price": 152314.80}
    )

    print(requested_data.status_code)
    if requested_data.status_code == 204:
        print("Product deleted successfully")
    else:
        print("Product not found")
