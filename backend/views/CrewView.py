
from rest_framework import viewsets
from backend.models.Crew import Crew
from backend.serializers.CrewSerializer import CrewSerializer

class CrewView(viewsets.ModelViewSet):
    queryset = Crew.objects.all()
    serializer_class = CrewSerializer
