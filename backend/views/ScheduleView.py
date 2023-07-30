```python
from rest_framework import viewsets
from backend.models import Schedule
from backend.serializers import ScheduleSerializer

class ScheduleView(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
```