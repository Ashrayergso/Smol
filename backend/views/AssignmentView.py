```python
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from backend.models import Assignment
from backend.serializers import AssignmentSerializer

class AssignmentView(viewsets.ModelViewSet):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)
```