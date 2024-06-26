from django.urls import path
from . import views
urlpatterns = [
    path('notes/', views.NoteListCreate.as_view(), name='note-list'),
    path('notes/delete/<int:pk>/', views.DeleteNoteList.as_view(), name='delete-list'),
]

