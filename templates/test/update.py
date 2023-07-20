import requests

endpoint = "http://localhost:8000/api/tasks/2/update"


requested_data = requests.put(
    endpoint,
    params={"abc": 123},
    # data={"name": "John", "age": 23},
    json={"title": "Hoodie", "description": "XXL white shirt"}
)

print(requested_data.json())
print(requested_data.status_code)
