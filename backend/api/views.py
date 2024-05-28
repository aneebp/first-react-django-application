from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer,NoteSerializers
from rest_framework.permissions import IsAuthenticated,AllowAny
from .models import Notes



# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class  = UserSerializer
    permission_classes = [AllowAny]


class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializers
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = request.self.user
        return Notes.objects.filter(auther=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(auther=self.request.user)
        else:
            print(serializer.errors)


class DeleteNoteList(generics.DestroyAPIView):
    serializer_class = NoteSerializers
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = request.self.user
        return Notes.objects.filter(auther=user)