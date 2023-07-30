```python
from rest_framework import generics
from backend.models import ShipSailingSchedule
from backend.serializers import ShipSailingScheduleSerializer

class ShipSailingScheduleList(generics.ListCreateAPIView):
    queryset = ShipSailingSchedule.objects.all()
    serializer_class = ShipSailingScheduleSerializer

class ShipSailingScheduleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ShipSailingSchedule.objects.all()
    serializer_class = ShipSailingScheduleSerializer
```