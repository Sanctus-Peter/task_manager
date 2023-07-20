from django.urls import path
from . import views

urlpatterns = [
    path('', views.TaskListCreateAPIView.as_view(), ),
    path('<int:pk>', views.TaskDetailAPIView.as_view(), ),
    path('<int:pk>/update', views.TaskUpdateAPIView.as_view(), ),
    path('<int:pk>/delete', views.TaskDestroyAPIView.as_view(), ),
]
