import requests

endpoint = "http://localhost:8000/api/tasks/2"


requested_data = requests.get(
    endpoint,
    params={"abc": 123},
    # data={"name": "John", "age": 23},
    json={"title": "shoe", "description": "Italian shoe brown 39", "price": 4748}
)

print(requested_data.json())
print(requested_data.status_code)
